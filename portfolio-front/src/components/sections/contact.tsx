"use client"
import { useState, useRef } from "react"
import type React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle, AlertCircle, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface ContactProps {
  messages: any
  locale: string
}

interface FormData {
  email: string
  message: string
}

interface FormErrors {
  email?: string
  message?: string
  captcha?: string
}

export function ContactSection({ messages, locale }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({ email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = messages.contact.form.email.required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = messages.contact.form.email.invalid
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = messages.contact.form.message.required
    } else if (formData.message.length > 800) {
      newErrors.message = messages.contact.form.message.maxLength
    }

    if (!recaptchaToken) {
      newErrors.captcha = messages.contact.form.captcha.required
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          locale,
          recaptchaToken,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ email: "", message: "" })
        setRecaptchaToken(null)
        recaptchaRef.current?.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
    if (token && errors.captcha) {
      setErrors((prev) => ({ ...prev, captcha: undefined }))
    }
  }

  const contactInfo = [
    {
      icon: Clock,
      label: messages.contact.info.response,
      value: messages.contact.info.response,
    },
    {
      icon: User,
      label: messages.contact.info.availability,
      value: messages.contact.info.availability,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{messages.contact.title}</h2>
          <p className="text-lg text-muted-foreground mb-4">{messages.contact.subtitle}</p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">{messages.contact.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {messages.contact.form.email.label}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder={messages.contact.form.email.placeholder}
                      className={errors.email ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {messages.contact.form.message.label}
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder={messages.contact.form.message.placeholder}
                      rows={6}
                      maxLength={800}
                      className={`flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none ${
                        errors.message ? "border-destructive" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.message}
                        </p>
                      ) : (
                        <div />
                      )}
                      <span className="text-xs text-muted-foreground">{formData.message.length}/800</span>
                    </div>
                  </div>

                  {/* ReCAPTCHA */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {messages.contact.form.captcha?.label || "Vérification"}
                    </label>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      onChange={handleRecaptchaChange}
                      theme="light"
                      size="normal"
                    />
                    {errors.captcha && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.captcha}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden"
                    size="lg"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground" />
                          {messages.contact.form.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          {messages.contact.form.submit}
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-md"
                    >
                      <CheckCircle className="h-5 w-5" />
                      {messages.contact.form.success}
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-md"
                    >
                      <AlertCircle className="h-5 w-5" />
                      {messages.contact.form.error}
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{info.label}</p>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="relative">
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 bg-primary/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-12 h-12 bg-accent/10 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
