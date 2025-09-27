"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Gitlab, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/data/projects"
import { getMessages, type Locale } from "@/lib/i18n"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { getTechColor } from "@/utils/colorsBubble"

interface ProjectDetailPageProps {
  params: { id: string; locale: Locale }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [messages, setMessages] = React.useState<any>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false)
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [lightboxImageSrc, setLightboxImageSrc] = React.useState("")
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

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen && e.key === "Escape") {
        setLightboxOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

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

  const openLightbox = (imageSrc: string) => {
    setLightboxImageSrc(imageSrc)
    setLightboxOpen(true)
  }

  const currentMedia = mediaItems[currentMediaIndex]

  return (
    <div className="min-h-screen bg-background">
      <Header messages={messages} locale={locale} />

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
                onClick={() => setLightboxOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={lightboxImageSrc || "/placeholder.svg?height=1200&width=1800&query=High quality image"}
                alt="Full size view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                    {project.gitlabUrl && (
                      <Button variant="outline" size="lg" className="group bg-transparent" asChild>
                        <a href={project.gitlabUrl} target="_blank" rel="noopener noreferrer">
                          <Gitlab className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                          {messages.projects?.viewCode || "GitLab"}
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
                              "/placeholder.svg?height=160&width=256&query=Preview image" ||
                              "/placeholder.svg" ||
                              "/placeholder.svg" ||
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
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted/20 border-4 border-white/10 group">
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
                        <div
                          className="relative aspect-video cursor-pointer"
                          onClick={() => openLightbox(currentMedia?.src || "/high-quality-image.jpg")}
                        >
                          <img
                            src={currentMedia?.src || "/placeholder.svg?height=800&width=1200&query=High quality image"}
                            alt={`${project.title[locale]} - Image ${currentMediaIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
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
                              "/placeholder.svg?height=160&width=256&query=Preview image" ||
                              "/placeholder.svg" ||
                              "/placeholder.svg" ||
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
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                  {messages.projects.technologiesTitle}
                </h2>
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
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">{messages.projects.featuresTitle}</h2>
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
                {messages.projects.roleAndLearningsTitle}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="text-left">
                  <CardContent className="p-8">
                    <h3 className="font-heading text-xl font-semibold mb-4">{messages.projects.roleTitle}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.role[locale]}</p>
                  </CardContent>
                </Card>

                <Card className="text-left">
                  <CardContent className="p-8">
                    <h3 className="font-heading text-xl font-semibold mb-4">{messages.projects.learningsTitle}</h3>
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
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">{messages.projects.interestedTitle}</h2>

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
                {project.gitlabUrl && (
                  <Button variant="outline" size="lg" className="group bg-transparent" asChild>
                    <a href={project.gitlabUrl} target="_blank" rel="noopener noreferrer">
                      <Gitlab className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                      {messages.projects?.viewCode || "GitLab"}
                    </a>
                  </Button>
                )}
                <Button variant="ghost" size="lg" asChild>
                  <Link href={`/${locale}#projects`}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {messages.projects?.backToPortfolio || "Retour au portfolio"}
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
