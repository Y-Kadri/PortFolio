"use client"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { technologies } from "@/data/projects"

interface ProjectFilterProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedTechnologies: string[]
  toggleTechnology: (tech: string) => void
  clearFilters: () => void
  messages: any
}

export function ProjectFilter({
  searchTerm,
  setSearchTerm,
  selectedTechnologies,
  toggleTechnology,
  clearFilters,
  messages,
}: ProjectFilterProps) {
  return (
    <div className="space-y-6 mb-8">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={messages.projects.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Technology Filters */}
      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Button
            variant={selectedTechnologies.length === 0 ? "default" : "outline"}
            size="sm"
            onClick={clearFilters}
            className="mb-2"
          >
            {messages.projects.filterAll}
          </Button>
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant={selectedTechnologies.includes(tech) ? "default" : "secondary"}
              className="cursor-pointer hover:scale-105 transition-transform mb-2"
              onClick={() => toggleTechnology(tech)}
            >
              {tech}
              {selectedTechnologies.includes(tech) && <X className="h-3 w-3 ml-1" />}
            </Badge>
          ))}
          <Badge variant={selectedTechnologies.includes("...") ? "default" : "secondary"} className="hover:scale-105 transition-transform mb-2">...</Badge>
        </div>

        {/* Clear Filters */}
        {(searchTerm || selectedTechnologies.length > 0) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-2" />
            Effacer les filtres
          </Button>
        )}
      </div>
    </div>
  )
}
