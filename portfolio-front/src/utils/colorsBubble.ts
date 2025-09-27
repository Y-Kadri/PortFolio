// Fonctions pour retourner les couleurs
export const getLanguageColor = () =>
  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"

export const getTechnologyColor = () =>
  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"

export const getConceptColor = () =>
  "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"

// Fonction principale pour obtenir la couleur d'une techno / concept / langage
export const getTechColor = (tech: string) => {
  // Langages les plus connus
  const knownLanguages = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "C",
    "SQL",
    "MySQL",
    "SQLite",
  ]

  // Technologies / outils / frameworks les plus connus
  const knownTechnologies = [
    "React",
    "Symfony",
    "Express.js",
    ".NET Core",
    "Docker",
    "Docker Compose",
    "Unity",
    "Active Directory",
    "LDAP",
    "Bash",
    "PowerShell",
    "VPN",
    "Firewall",
    "Maven",
  ]

  // Concepts importants
  const knownConcepts = [
    "UML",
    "CI/CD",
    "Full-Stack",
    "Back-end",
    "Front-end",
    "Unit Testing",
    "TDD",
    "REST API",
    "JWT Authentication",
    "Graph Theory",
    "Design Patterns",
  ]

  if (knownLanguages.includes(tech)) return getLanguageColor()
  if (knownTechnologies.includes(tech)) return getTechnologyColor()
  if (knownConcepts.includes(tech)) return getConceptColor()

  // Couleur par défaut pour tout le reste
  return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
}
