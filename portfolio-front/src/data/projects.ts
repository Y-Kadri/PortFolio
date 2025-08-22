export interface Project {
  id: string
  title: {
    fr: string
    en: string
  }
  description: {
    fr: string
    en: string
  }
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "testid",
    title: {
      fr: "Application Test",
      en: "Test Application",
    },
    description: {
      fr: "Une application de test avec des fonctionnalités avancées.",
      en: "A test application with advanced features.",
    },
    image: "/projects/test-app.png",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
]

export const technologies = [
  "Angular",
  "React",
]
