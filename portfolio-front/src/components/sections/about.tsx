"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Shield, Database, Settings, TestTube, Clipboard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CVDownloadDropdown } from "@/components/features/cv-download-dropdown"

interface AboutProps {
  messages: any
  locale: string
}

export function AboutSection({ messages, locale }: AboutProps) {
  const skills = [
    {
      icon: Settings,
      title: messages.about.skills.development.title,
      description: messages.about.skills.development.description,
      technologies: messages.about.skills.development.technologies,
    },
    {
      icon: TestTube,
      title: messages.about.skills.quality.title,
      description: messages.about.skills.quality.description,
      technologies: messages.about.skills.quality.technologies,
    },
    {
      icon: Database,
      title: messages.about.skills.database.title,
      description: messages.about.skills.database.description,
      technologies: messages.about.skills.database.technologies,
    },
    {
      icon: Settings,
      title: messages.about.skills.devops.title,
      description: messages.about.skills.devops.description,
      technologies: messages.about.skills.devops.technologies,
    },
    {
      icon: Shield,
      title: messages.about.skills.security.title,
      description: messages.about.skills.security.description,
      technologies: messages.about.skills.security.technologies,
    },
    {
      icon: Clipboard,
      title: messages.about.skills.projectManagement.title,
      description: messages.about.skills.projectManagement.description,
      technologies: messages.about.skills.projectManagement.technologies,
    },
  ]

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:yanis.kadri@example.com",
      icon: Mail,
      color: "hover:text-red-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/yaniskadri",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yaniskadri",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{messages.about.title}</h2>
          <p className="text-lg text-muted-foreground">{messages.about.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/yanis-kadri-picture.jpg"
                  alt={messages.hero.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full opacity-60" />
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`p-3 rounded-full bg-background border border-border transition-all duration-300 ${link.color} hover:scale-110 hover:shadow-lg`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* CV Download Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <CVDownloadDropdown messages={messages} />
            </motion.div>

          <div className="prose prose-lg max-w-none text-justify">
            {messages.about.bio.split("\n").map((line, index) => (
              <p key={index}>
                {line}
                <br />
              </p>
            ))}
          </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-1">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <skill.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1 text-sm">{skill.title}</h3>
                          <p className="text-xs text-muted-foreground mb-2">{skill.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {skill.technologies.map((tech: string, techIndex: number) => (
                              <span
                                key={techIndex}
                                className="px-1.5 py-0.5 text-xs bg-primary/10 text-primary rounded-md font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
