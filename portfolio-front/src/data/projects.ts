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
  longDescription: {
    fr: string
    en: string
  }
  image: string
  images: string[]
  video?: string
  technologies: string[]
  liveUrl?: string
  githubUrl: string
  featured: boolean
  features: {
    fr: string[]
    en: string[]
  }
  role: {
    fr: string
    en: string
  }
  learnings: {
    fr: string
    en: string
  },
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: {
      fr: "TEST - JDD- Plateforme E-commerce",
      en: "TEST - JDD-E-commerce Platform",
    },
    description: {
      fr: "Une plateforme e-commerce moderne avec paiement intégré et gestion d'inventaire.",
      en: "A modern e-commerce platform with integrated payment and inventory management.",
    },
    longDescription: {
      fr: "Cette plateforme e-commerce complète offre une expérience utilisateur exceptionnelle avec un design moderne et des fonctionnalités avancées. Elle intègre un système de paiement sécurisé, une gestion d'inventaire en temps réel, et un tableau de bord administrateur complet.",
      en: "This comprehensive e-commerce platform offers an exceptional user experience with modern design and advanced features. It integrates secure payment processing, real-time inventory management, and a complete admin dashboard.",
    },
    image: "/projects/ecommerce-main.png",
    images: [
      "/projects/ecommerce-main.png",
      "/projects/ecommerce-product.png",
      "/projects/ecommerce-cart.png",
      "/projects/ecommerce-admin.png",
    ],
    video: "/projects/ecommerce-demo.mp4",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/yaniskadri/ecommerce-platform",
    featured: true,
    features: {
      fr: [
        "Paiement sécurisé avec Stripe",
        "Gestion d'inventaire en temps réel",
        "Interface administrateur complète",
        "Recherche et filtres avancés",
      ],
      en: [
        "Secure payment with Stripe",
        "Real-time inventory management",
        "Complete admin interface",
        "Advanced search and filters",
      ],
    },
    role: {
      fr: "Développement full-stack de A à Z, de la conception de l'architecture à la mise en production.",
      en: "Full-stack development from A to Z, from architecture design to production deployment.",
    },
    learnings: {
      fr: "J'ai approfondi mes connaissances en intégration de paiements, optimisation des performances et architecture scalable.",
      en: "I deepened my knowledge in payment integration, performance optimization and scalable architecture.",
    },
  },
]

export const technologies = [
  "Angular",
  "React",
]
