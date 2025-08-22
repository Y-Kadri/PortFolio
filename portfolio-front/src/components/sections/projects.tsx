"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import { projects } from "@/data/projects"
import { useProjectFilter } from "@/hooks/use-project-filter"
import { ProjectCard } from "@/components/features/project-card"
import { ProjectFilter } from "@/components/features/project-filter"

interface ProjectsProps {
  messages: any
  locale: "fr" | "en"
}

export function ProjectsSection({ messages, locale }: ProjectsProps) {
  const { searchTerm, setSearchTerm, selectedTechnologies, toggleTechnology, filteredProjects, clearFilters } =
    useProjectFilter(projects, locale)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{messages.projects.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{messages.projects.subtitle}</p>
        </motion.div>

        {/* Filters */}
        <ProjectFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTechnologies={selectedTechnologies}
          toggleTechnology={toggleTechnology}
          clearFilters={clearFilters}
          messages={messages}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} messages={messages} locale={locale} />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">Aucun projet trouvé avec ces critères.</p>
            <Button onClick={clearFilters} variant="outline">
              Effacer les filtres
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
