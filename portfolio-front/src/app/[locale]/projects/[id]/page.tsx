"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/data/projects"
import { getMessages, type Locale } from "@/lib/i18n"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"

interface ProjectDetailPageProps {
  params: { id: string; locale: Locale }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [messages, setMessages] = React.useState<any>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false)
  const locale = params?.locale || "fr"

  const project = projects.find((p) => p.id === params.id)

  const mediaItems = React.useMemo(() => {
    const items = []
    if (project?.video) {
      items.push({ type: "video", src: project.video })
    }
    if (project?.images) {
      project.images.forEach((image) => {
        items.push({ type: "image", src: image })
      })
    }
    return items
  }, [project])

  React.useEffect(() => {
    getMessages(locale).then(setMessages)
  }, [locale])

  if (!messages) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header messages={messages} locale={locale} />
        <main className="container mx-auto max-w-4xl px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{messages.projects?.notFound || "Projet non trouvé"}</h1>
            <Link href={`/${locale}#projects`}>
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                {messages.projects?.backToProjects || "Retour aux projets"}
              </Button>
            </Link>
          </div>
        </main>
        <Footer messages={messages} locale={locale} />
      </div>
    )
  }

  const nextMedia = () => {
    if (currentMediaIndex < mediaItems.length - 1) {
      setCurrentMediaIndex((prev) => prev + 1)
    }
  }

  const prevMedia = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex((prev) => prev - 1)
    }
  }

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      React: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Next.js": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
      "Vue.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      TailwindCSS: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      MongoDB: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      PostgreSQL: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Java: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Spring Boot": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Angular: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    }
    return colors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
  }

  const currentMedia = mediaItems[currentMediaIndex]

  return (
    <div className="min-h-screen bg-background">
      <Header messages={messages} locale={locale} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto max-w-6xl px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link
                href={`/${locale}#projects`}
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {messages.projects?.backToProjects || "Retour aux projets"}
              </Link>

              <div className="grid lg:grid-cols-1 gap-12 items-center">
                <div>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {project.title[locale]}
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                    {project.longDescription[locale]}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.liveUrl && (
                      <Button size="lg" className="group" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                          {messages.projects?.viewLive || "Live Demo"}
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="lg" className="group bg-transparent" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                          {messages.projects?.viewCode || "GitHub"}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Media Carousel */}
        {mediaItems.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative flex items-center justify-center gap-4 overflow-hidden">
                  {/* Previous preview */}
                  {mediaItems.length > 1 && currentMediaIndex > 0 && (
                    <div className="hidden md:block relative w-32 h-20 opacity-60 hover:opacity-80 transition-opacity cursor-pointer">
                      <div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                        {mediaItems[currentMediaIndex - 1]?.type === "video" ? (
                          <video
                            src={mediaItems[currentMediaIndex - 1]?.src}
                            className="w-full h-full object-cover"
                            muted
                          />
                        ) : (
                          <img
                            src={
                              mediaItems[currentMediaIndex - 1]?.src ||
                              "/placeholder.svg?height=80&width=128" ||
                              "/placeholder.svg"
                            }
                            alt="Previous"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <button
                        onClick={prevMedia}
                        className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors rounded-xl"
                      />
                    </div>
                  )}

                  {/* Main media with enhanced animation */}
                  <motion.div
                    key={currentMediaIndex}
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative w-full max-w-2xl"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted/20 border-4 border-white/10">
                      {currentMedia?.type === "video" ? (
                        <div className="relative aspect-video">
                          <video
                            src={currentMedia.src}
                            controls
                            className="w-full h-full object-cover"
                            onPlay={() => setIsVideoPlaying(true)}
                            onPause={() => setIsVideoPlaying(false)}
                          />
                        </div>
                      ) : (
                        <div className="relative aspect-video">
                          <img
                            src={currentMedia?.src || "/placeholder.svg?height=400&width=600"}
                            alt={`${project.title[locale]} - Image ${currentMediaIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {mediaItems.length > 1 && (
                        <>
                          <button
                            onClick={prevMedia}
                            disabled={currentMediaIndex === 0}
                            className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-sm transition-all duration-200 shadow-lg ${
                              currentMediaIndex === 0
                                ? "bg-background/40 text-muted-foreground/50 cursor-not-allowed"
                                : "bg-background/80 hover:bg-background hover:scale-110"
                            }`}
                          >
                            <ArrowLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={nextMedia}
                            disabled={currentMediaIndex === mediaItems.length - 1}
                            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-sm transition-all duration-200 shadow-lg ${
                              currentMediaIndex === mediaItems.length - 1
                                ? "bg-background/40 text-muted-foreground/50 cursor-not-allowed"
                                : "bg-background/80 hover:bg-background hover:scale-110"
                            }`}
                          >
                            <ArrowLeft className="h-5 w-5 rotate-180" />
                          </button>
                        </>
                      )}
                    </div>
                  </motion.div>

                  {/* Next preview */}
                  {mediaItems.length > 1 && currentMediaIndex < mediaItems.length - 1 && (
                    <div className="hidden md:block relative w-32 h-20 opacity-60 hover:opacity-80 transition-opacity cursor-pointer">
                      <div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                        {mediaItems[currentMediaIndex + 1]?.type === "video" ? (
                          <video
                            src={mediaItems[currentMediaIndex + 1]?.src}
                            className="w-full h-full object-cover"
                            muted
                          />
                        ) : (
                          <img
                            src={
                              mediaItems[currentMediaIndex + 1]?.src ||
                              "/placeholder.svg?height=80&width=128" ||
                              "/placeholder.svg"
                            }
                            alt="Next"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <button
                        onClick={nextMedia}
                        className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors rounded-xl"
                      />
                    </div>
                  )}
                </div>

                {/* Indicators */}
                {mediaItems.length > 1 && (
                  <div className="flex justify-center mt-6 gap-2">
                    {mediaItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMediaIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentMediaIndex
                            ? "bg-primary scale-110"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        )}

        {/* Key Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Technologies utilisées - Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Technologies utilisées et concepts</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className={`text-sm px-4 py-2 ${getTechColor(tech)}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Fonctionnalités clés - Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Fonctionnalités clés</h2>
                <div className="space-y-4">
                  {project.features[locale].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-3">
                            <div className="p-1 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                              <div className="w-3 h-3 rounded-full bg-primary"></div>
                            </div>
                            <p className="font-medium text-foreground text-sm">{feature}</p>
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

        {/* Role & Learnings */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Mon rôle & apprentissages</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="text-left">
                  <CardContent className="p-8">
                    <h3 className="font-heading text-xl font-semibold mb-4">Mon rôle</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.role[locale]}</p>
                  </CardContent>
                </Card>

                <Card className="text-left">
                  <CardContent className="p-8">
                    <h3 className="font-heading text-xl font-semibold mb-4">Ce que j'ai appris</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.learnings[locale]}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">Intéressé par ce projet ?</h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {project.liveUrl && (
                  <Button size="lg" className="group" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                      {messages.projects?.viewLive || "Live Demo"}
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="lg" className="group bg-transparent" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                      {messages.projects?.viewCode || "GitHub"}
                    </a>
                  </Button>
                )}
                <Button variant="ghost" size="lg" asChild>
                  <Link href={`/${locale}#projects`}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Retour au portfolio
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer messages={messages} locale={locale} />
    </div>
  )
}
