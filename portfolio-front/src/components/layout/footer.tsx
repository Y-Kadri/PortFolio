"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  messages: any
  locale: string
}

export function Footer({ messages, locale }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:yaniskadri.dev@gmail.com",
      icon: Mail,
      color: "hover:text-red-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/Y-Kadri",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yanis-kadri/",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
  ]

  const quickLinks = [
    { name: messages.nav.home, href: "#hero" },
    { name: messages.nav.about, href: "#about" },
    { name: messages.nav.projects, href: "#projects" },
    { name: messages.nav.contact, href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative border-t bg-muted/50 backdrop-blur-sm">
      {/* Scroll to top button */}
      <motion.div
        className="absolute -top-6 right-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="sr-only">{messages.footer.navigation}</span>
        </Button>
      </motion.div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="font-heading text-xl font-bold text-primary mb-4">{messages.hero.name}</h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              {messages.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{messages.footer.thanks}</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">{messages.footer.navigation}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">{messages.footer.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`p-2 rounded-lg bg-background border border-border transition-all duration-300 ${link.color} hover:scale-110 hover:shadow-md`}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Bordeaux, France</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>
                © {currentYear} {messages.hero.name}. {messages.footer.copyright}
              </p>
              <div className="flex items-center gap-4">
                <span>{messages.footer.madeWith}</span>
                <div className="flex items-center gap-1">
                  <span>Next.js</span>
                  <span>•</span>
                  <span>TypeScript</span>
                  <span>•</span>
                  <span>TailwindCSS</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{messages.footer.version} TODO </span>
              <span>•</span>
              <span>
                {messages.footer.lastUpdate} {new Date().toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
