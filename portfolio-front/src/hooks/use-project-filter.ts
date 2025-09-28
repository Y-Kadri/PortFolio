"use client"
import { useState, useMemo } from "react"
import type { Project } from "@/data/projects"

export function useProjectFilter(projects: Project[], locale: "fr" | "en") {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title[locale].toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description[locale].toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesTechnologies =
        selectedTechnologies.length === 0 || selectedTechnologies.every((tech) => project.technologies.includes(tech))

      return matchesSearch && matchesTechnologies
    })
  }, [projects, searchTerm, selectedTechnologies, locale])

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedTechnologies([])
  }

  return {
    searchTerm,
    setSearchTerm,
    selectedTechnologies,
    toggleTechnology,
    filteredProjects,
    clearFilters,
  }
}
