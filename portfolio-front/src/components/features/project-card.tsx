"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Project } from "@/data/projects"
import { getTechColor } from "@/utils/colorsBubble"

interface ProjectCardProps {
  project: Project
  messages: any
  locale: "fr" | "en"
}

export function ProjectCard({ project, messages, locale }: ProjectCardProps) {
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        {/* Project Image - Now clickable */}
        <Link href={`/${locale}/projects/${project.id}`}>
          <div className="relative overflow-hidden aspect-video cursor-pointer">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title[locale]}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center gap-2 text-white">
                <Eye className="h-4 w-4" />
                <span className="text-sm font-medium">{messages.projects.learnMore}</span>
              </div>
            </div>
            {project.featured && (
              <div className="absolute top-3 left-3">
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              </div>
            )}
          </div>
        </Link>

        <CardContent className="p-6 flex flex-col h-full">
          {/* Project Title - Now clickable */}
          <Link href={`/${locale}/projects/${project.id}`}>
            <h3 className="font-heading text-xl font-semibold mb-3 text-foreground hover:text-primary transition-colors cursor-pointer">
              {project.title[locale]}
            </h3>
          </Link>

          {/* Project Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{project.description[locale]}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 9).map((tech) => (
              <Badge key={tech} variant="secondary" className={`text-xs ${getTechColor(tech)}`}>
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 9 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 9}
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button size="sm" className="flex-1 group/btn" asChild>
              <Link href={`/${locale}/projects/${project.id}`}>
                <Eye className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                {messages.projects.learnMore}
              </Link>
            </Button>

            {project.liveUrl && (
              <Button variant="outline" size="sm" className="group/btn bg-transparent" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            )}

            {project.githubUrl && (
              <Button variant="outline" size="sm" className="group/btn bg-transparent" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
