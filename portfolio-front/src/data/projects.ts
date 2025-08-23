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

  {
    id: "library-app",
    title: {
      fr: "Application de gestion de bibliothèque",
      en: "Library Management Application"
    },
    description: {
      fr: "Application web full-stack permettant de gérer des livres et des utilisateurs, avec mode connecté/déconnecté et système de recommandation, déployée sur un VPS avec CI/CD.",
      en: "Full-stack web application for managing books and users, with connected/disconnected modes and a recommendation system, deployed on a VPS with CI/CD."
    },
    longDescription: {
      fr: "Ce projet consistait à développer une application web full-stack avec Symfony pour le back-end et React pour le front-end. L'application permet aux utilisateurs de se créer un compte, se connecter, gérer leur bibliothèque, rechercher des livres, consulter les dernières acquisitions, s'abonner à d'autres utilisateurs et obtenir des recommandations personnalisées. La base de données a été créée avec MySQL et l'intégration continue a été mise en place avec GitLab, incluant CI/CD et runner. Le projet inclut également une documentation Swagger pour les APIs et un jeu de données de démonstration (fixtures). Une démo client a été réalisée pour présenter l'application et montrer la mise en œuvre des fonctionnalités.",
      en: "This project involved developing a full-stack web application with Symfony for the back-end and React for the front-end. Users can register, log in, manage their library, search for books, view latest acquisitions, follow other users, and receive personalized recommendations. The database was created with MySQL, and continuous integration and deployment were set up using GitLab, including CI/CD and runner. The project also includes Swagger API documentation and a demo dataset (fixtures). A client demo was conducted to showcase the application and demonstrate the implemented features."
    },
    image: "/projects/library-main.png",
    images: [
      "/projects/library-main.png",
      "/projects/library-search.png",
      "/projects/library-dashboard.png"
    ],
    technologies: ["Symfony", "React", "MySQL", "Visual Studio Code", "GitLab", "Swagger", "Full-Stack Development", "API Integration", "VPS Deployment", "CI/CD"],
    githubUrl: "https://github.com/yaniskadri/library-app",
    featured: true,
    features: {
      fr: [
        "Gestion multi-utilisateurs : création, connexion et déconnexion",
        "Mode déconnecté : recherche de livres par nom d'auteur avec autocomplétion, consultation des informations des livres et des dernières acquisitions",
        "Mode connecté : abonnement/désabonnement à d'autres utilisateurs, consultation de la liste d'abonnements et des livres empruntés des utilisateurs",
        "Système de recommandation pour utilisateurs et livres",
        "Consultation des livres depuis différents modules (liste d'abonnements, recherche, recommandations)",
        "Jeu de données (fixtures) pour créer un jeu de données de démonstration",
        "Documentation Swagger pour les APIs",
        "Intégration continue et déploiement continu (CI/CD) avec GitLab et runner",
        "Déploiement sur VPS"
      ],
      en: [
        "Multi-user management: registration, login, and logout",
        "Disconnected mode: book search by author with autocomplete, view book details and latest acquisitions",
        "Connected mode: follow/unfollow users, view subscription list and borrowed books of users",
        "Recommendation system for users and books",
        "View books from different modules (subscriptions list, search, recommendations)",
        "Demo dataset (fixtures) to set up sample data",
        "Swagger API documentation",
        "Continuous integration and deployment (CI/CD) with GitLab and runner",
        "Deployment on VPS"
      ]
    },
    role: {
      fr: "Développement full-stack, intégration des APIs, gestion de la base de données, mise en place des fonctionnalités connectées et déconnectées, et préparation/présentation de la démo client.",
      en: "Full-stack development, API integration, database management, implementation of connected and disconnected features, and preparation/presentation of the client demo."
    },

    learnings: {
      fr: "Renforcement des compétences en Symfony, React et MySQL, maîtrise de la création et utilisation d'APIs, déploiement sur serveur et mise en place de CI/CD avec GitLab, amélioration de la communication et du travail en équipe en mode agile, et capacité à préparer et présenter une démo client.",
      en: "Improved skills in Symfony, React, and MySQL, mastery of API creation and consumption, deployment on a server and CI/CD setup with GitLab, enhanced communication and agile teamwork, and ability to prepare and present a client demo."
    }
  },
  {
    id: "rope-ds",
    title: {
      fr: "Implémentation d'une structure de données Rope",
      en: "Rope Data Structure Implementation"
    },
    description: {
      fr: "Application C implémentant la structure de données Rope pour optimiser les opérations sur des chaînes de caractères et comparer ses performances avec un tableau classique.",
      en: "C application implementing the Rope data structure to optimize string operations and compare its performance with a traditional character array."
    },
    longDescription: {
      fr: "Le projet consistait à implémenter une structure de données Rope en C afin d'améliorer la gestion et la manipulation des chaînes de caractères. Les fonctionnalités incluent l'insertion et la suppression de chaînes, la mesure des temps d'exécution pour la construction et la modification des structures, et la comparaison de performance avec un tableau classique de caractères. Un banc d'essai a été réalisé pour calculer les performances et un rapport a été produit pour analyser et expliquer les résultats, en prenant soin de gérer les fuites de mémoire.",
      en: "The project involved implementing a Rope data structure in C to improve string handling and manipulation. Features include insertion and deletion of strings, measuring execution time for construction and modification, and performance comparison with a traditional character array. A test bench was created to measure performance, and a report was produced to analyze and explain results, with careful memory management to avoid leaks."
    },
    image: "/projects/rope-main.png",
    images: [
      "/projects/rope-main.png",
      "/projects/rope-benchmark.png"
    ],
    technologies: ["C", "Visual Studio Code", "GitLab", "Data Structures", "Memory Management", "Performance Benchmarking"],
    githubUrl: "https://github.com/yaniskadri/rope-ds",
    featured: true,
    features: {
      fr: [
        "Implémentation de la structure Rope pour la gestion de chaînes de caractères",
        "Insertion et suppression de chaînes",
        "Mesure des temps d'exécution et comparaison avec un tableau de caractères classique",
        "Création de bancs d'essai pour benchmark",
        "Analyse et rédaction d'un rapport explicatif",
        "Gestion de la mémoire pour éviter les fuites"
      ],
      en: [
        "Implementation of Rope data structure for string management",
        "Insertion and deletion of strings",
        "Execution time measurement and comparison with a traditional character array",
        "Creation of test benches for benchmarking",
        "Analysis and writing of explanatory report",
        "Memory management to prevent leaks"
      ]
    },
    role: {
      fr: "Développement complet de la structure Rope, création de bancs d'essai et analyse des performances.",
      en: "Full development of the Rope structure, creation of test benches, and performance analysis."
    },
    learnings: {
      fr: "Renforcement des compétences en langage C, optimisation de la mémoire, analyse de performances et rédaction de rapports techniques clairs.",
      en: "Enhanced skills in C programming, memory optimization, performance analysis, and clear technical report writing."
    }
  },
  {
    id: "concordia-game",
    title: {
      fr: "Implémentation du jeu Concordia",
      en: "Concordia Game Implementation"
    },
    description: {
      fr: "Application permettant de jouer au jeu de plateau Concordia avec interface graphique, IA et gestion multi-joueurs.",
      en: "Application to play the board game Concordia with graphical interface, AI, and multi-player management."
    },
    longDescription: {
      fr: "Ce projet consistait à développer une application pour le jeu de plateau Concordia en Python. L'application inclut une interface graphique avec Tkinter, la gestion de plusieurs joueurs, la possibilité d'utiliser une IA, et l'initialisation du jeu via une base de données. Des diagrammes UML ont été produits pour les classes, les cas d'utilisation, la communication et la séquence. L'intégration continue et les tests unitaires ont été mis en place pour valider l'initialisation du jeu et l'effet des cartes.",
      en: "This project involved developing an application for the board game Concordia in Python. The app includes a graphical interface using Tkinter, multi-player support, AI integration, and game initialization via a database. UML diagrams were created for classes, use cases, communication, and sequence. Continuous integration and unit tests were implemented to validate game initialization and card effects."
    },
    image: "/projects/concordia-main.png",
    images: [
      "/projects/concordia-main.png",
      "/projects/concordia-board.png",
      "/projects/concordia-ai.png"
    ],
    technologies: ["Python", "Tkinter", "Visual Studio Code", "GitLab", "Full-Stack Development", "Database Integration", "Unit Testing", "AI Implementation"],
    githubUrl: "https://github.com/yaniskadri/concordia-game",
    featured: true,
    features: {
      fr: [
        "Interface graphique pour jouer au jeu Concordia",
        "Gestion multi-joueurs et choix du nombre de joueurs",
        "Intégration d'une IA pour jouer contre l'ordinateur",
        "Initialisation du jeu via base de données",
        "Production de diagrammes UML : classes, cas d'utilisation, communication et séquence",
        "Tests unitaires pour vérifier l'initialisation du jeu et l'effet des cartes",
        "Intégration continue via GitLab"
      ],
      en: [
        "Graphical interface to play Concordia",
        "Multi-player support and player count selection",
        "AI integration to play against the computer",
        "Game initialization using a database",
        "UML diagrams produced: classes, use cases, communication, and sequence",
        "Unit tests to validate game initialization and card effects",
        "Continuous integration via GitLab"
      ]
    },
    role: {
      fr: "Développement du jeu, implémentation de l'IA, intégration de la base de données et création de l'interface graphique.",
      en: "Game development, AI implementation, database integration, and graphical interface creation."
    },
    learnings: {
      fr: "Renforcement des compétences en Python, Tkinter, gestion de base de données avec types complexes, implémentation d'une IA et tests unitaires.",
      en: "Improved skills in Python, Tkinter, database handling with complex types, AI implementation, and unit testing."
    }
  },

  {
    id: "pwa-series-app",
    title: {
      fr: "Progressive Web App sur des séries",
      en: "Progressive Web App on TV Series"
    },
    description: {
      fr: "Application web full-stack permettant de découvrir des séries TV, suivre leur progression et gérer plusieurs utilisateurs, développée avec méthode agile SCRUM.",
      en: "Full-stack web application to discover TV series, track progress, and manage multiple users, developed using agile SCRUM methodology."
    },
    longDescription: {
      fr: "Progressive web app full-stack développée avec Symfony pour découvrir des séries et suivre leur progression. L'application permet la gestion de plusieurs utilisateurs avec connexion sécurisée, un mode administrateur pour gérer les utilisateurs (bannissement, suivi des connexions), et la recherche de séries avec filtres. Elle inclut également l'organisation des tâches via un Board, l'utilisation de Doctrine pour la base de données, et l'application de la méthodologie agile SCRUM avec planification des sprints, daily meetings, review et rétrospectives.",
      en: "Full-stack progressive web app developed with Symfony to discover TV series and track their progress. The application allows multi-user management with secure login, an admin mode to manage users (ban, live status), and series search with filters. It also includes task organization via a Board, database management with Doctrine, and implementation of agile SCRUM methodology with sprint planning, daily meetings, reviews, and retrospectives."
    },
    image: "/projects/pwa-main.png",
    images: [
      "/projects/pwa-main.png",
      "/projects/pwa-board.png",
      "/projects/pwa-database.png"
    ],
    technologies: ["Symfony", "Doctrine", "MySql", "Visual Studio Code", "CSS", "Agile Scrum", "Progressive Web App"],
    githubUrl: "https://github.com/yaniskadri/pwa-series-app",
    featured: true,
    features: {
      fr: [
        "Multi-utilisateurs et suivi de progression des séries",
        "Méthodologie agile SCRUM avec planification, daily, review et rétrospective",
        "Utilisation de Doctrine pour la gestion et la communication avec la base de données MySQL",
        "Création d'un Board pour organiser le travail de l'équipe",
        "Recherche de séries, filtres, pagination"
      ],
      en: [
        "Multi-user management and tracking of series progress",
        "Agile SCRUM methodology with sprint planning, daily, review, and retrospective",
        "Use of Doctrine for managing and communicating with the MySQL database",
        "Creation of a team board to organize tasks",
        "Series search: filters, pagination"
      ]
    },
    role: {
      fr: "Développement full-stack de l'application, intégration de la base de données et participation à la méthodologie agile.",
      en: "Full-stack development of the application, database integration, and participation in agile methodology."
    },
    learnings: {
      fr: "Amélioration des compétences en Symfony, Doctrine et développement PWA, ainsi que de la communication et du travail en équipe en méthode agile.",
      en: "Improved skills in Symfony, Doctrine, and PWA development, as well as enhanced team communication and collaboration in agile methodology."
    }
  },
  {
    id: "bloom-filter",
    title: {
      fr: "Filtre de Bloom : Implémenter et analyser",
      en: "Bloom Filter: Implementation and Analysis"
    },
    description: {
      fr: "Implémentation d'un filtre de Bloom avec trois structures de données différentes et analyse via benchmarks.",
      en: "Implementation of a Bloom filter using three different data structures and analysis through benchmarks."
    },
    longDescription: {
      fr: "Ce projet consistait à implémenter un filtre de Bloom en Java en utilisant trois structures de données différentes : tableau, ArrayList et LinkedList. J'ai réalisé des benchmarks pour comparer les performances et le taux d'erreur des différentes structures, puis rédigé un rapport détaillant les résultats obtenus. Le projet a nécessité des recherches sur le fonctionnement des filtres de Bloom et l'utilisation de bonnes fonctions de hachage.",
      en: "This project involved implementing a Bloom filter in Java using three different data structures: array, ArrayList, and LinkedList. I conducted benchmarks to compare performance and error rates of the different structures, and wrote a detailed report of the results. The project required research on Bloom filter functionality and the implementation of effective hash functions."
    },
    image: "/projects/bloom-main.png",
    images: [
      "/projects/bloom-main.png",
      "/projects/bloom-benchmark.png",
      "/projects/bloom-structures.png"
    ],
    technologies: ["Java", "NetBeans", "GitLab", "Data Structures", "Benchmarking"],
    githubUrl: "https://github.com/yaniskadri/bloom-filter",
    featured: false,
    features: {
      fr: [
        "Implémentation de trois structures de données : tableau, ArrayList, LinkedList",
        "Réalisation de benchmarks pour comparer performances et taux d'erreur",
        "Fonctions de hachage optimisées",
        "Rédaction d'un rapport détaillé des résultats"
      ],
      en: [
        "Implementation using three data structures: array, ArrayList, LinkedList",
        "Benchmarks to compare performance and error rates",
        "Optimized hash functions",
        "Writing a detailed report of results"
      ]
    },
    role: {
      fr: "Développement complet du filtre de Bloom et analyse des résultats des benchmarks.",
      en: "Full development of the Bloom filter and analysis of benchmark results."
    },
    learnings: {
      fr: "Compréhension approfondie du fonctionnement des filtres de Bloom et amélioration des compétences en Java et en analyse de performances.",
      en: "In-depth understanding of Bloom filter functionality and improved Java skills and performance analysis."
    }
  },
  {
    id: "rsa-encryption",
    title: {
      fr: "Implémentation du chiffrement RSA",
      en: "RSA Encryption Implementation"
    },
    description: {
      fr: "Chiffrement et déchiffrement de messages utilisant la cryptographie asymétrique RSA.",
      en: "Encrypting and decrypting messages using asymmetric RSA cryptography."
    },
    longDescription: {
      fr: "Ce projet consistait à implémenter un mini-chiffrement RSA en Python. J'ai généré des clés publiques et privées, chiffré et déchiffré des messages, et mis en place la signature et la vérification de messages ainsi que la gestion de certificats pour les utilisateurs. Les calculs mathématiques nécessaires (PGCD, méthode d'Euler, inverse modulaire, modulo) ont été appliqués dans le code. L'interface est textuelle et des tests ont été réalisés pour valider le fonctionnement.",
      en: "This project involved implementing a mini RSA encryption system in Python. I generated public and private keys, encrypted and decrypted messages, implemented message signing and verification, and managed certificates for users. The necessary mathematical operations (GCD, Euler's method, modular inverse, modulo) were applied in the code. The interface is text-based, and tests were conducted to validate functionality."
    },
    image: "/projects/rsa-main.png",
    images: [
      "/projects/rsa-main.png",
      "/projects/rsa-keys.png",
      "/projects/rsa-encryption.png"
    ],
    technologies: ["Python", "Visual Studio Code", "Cryptography", "Mathematical Computations (GCD, Euler, Modular Inverse)"],
    githubUrl: "https://github.com/yaniskadri/rsa-encryption",
    featured: false,
    features: {
      fr: [
        "Génération de clés publique et privée",
        "Chiffrement et déchiffrement de messages",
        "Signature et vérification des messages",
        "Gestion de certificats utilisateurs",
        "Calculs mathématiques liés à RSA",
        "Interface textuelle et tests"
      ],
      en: [
        "Generation of public and private keys",
        "Message encryption and decryption",
        "Message signing and verification",
        "User certificate management",
        "Mathematical computations related to RSA",
        "Text-based interface and testing"
      ]
    },
    role: {
      fr: "Développement complet de l'implémentation RSA et réalisation des tests.",
      en: "Full development of the RSA implementation and performing tests."
    },
    learnings: {
      fr: "Meilleure compréhension de la cryptographie asymétrique et approfondissement des compétences en Python.",
      en: "Better understanding of asymmetric cryptography and improved Python skills."
    }
  },
  {
    id: "mini-shell",
    title: {
      fr: "Programmation système : Réalisation d'un Shell miniature",
      en: "System Programming: Miniature Shell Implementation"
    },
    description: {
      fr: "Réalisation d'un shell capable de lire, analyser et exécuter des lignes de commande.",
      en: "Creating a shell that can read, parse, and execute command lines."
    },
    longDescription: {
      fr: "Ce projet consistait à développer un shell miniature en C capable d'exécuter des commandes internes (cd, pwd, mkdir, ...) et externes, y compris en arrière-plan. J'ai implémenté la gestion des redirections, des signaux et des processus. L'analyse et l'exécution des lignes de commande ont été réalisées sans utiliser la fonction system, en utilisant exec et d'autres fonctionnalités système. Le code a été structuré et documenté pour plus de clarté.",
      en: "This project involved developing a miniature shell in C capable of executing internal commands (cd, pwd, mkdir, ...) and external commands, including background execution. I implemented redirection handling, signals, and process management. Command line parsing and execution were done without using the system function, relying on exec and other system features. The code was structured and documented for clarity."
    },
    image: "/projects/minishell-main.png",
    images: [
      "/projects/minishell-main.png",
      "/projects/minishell-commands.png",
      "/projects/minishell-process.png"
    ],
    technologies: ["C", "Visual Studio Code", "Unix System Libraries (signal, wait, exec, read, write)"],
    githubUrl: "https://github.com/yaniskadri/mini-shell",
    featured: false,
    features: {
      fr: [
        "Exécution de commandes internes et externes",
        "Gestion des commandes en arrière-plan",
        "Gestion des redirections",
        "Utilisation des signaux et des processus",
        "Analyse et exécution des lignes de commande",
        "Travail en équipe pour la répartition des tâches"
      ],
      en: [
        "Execution of internal and external commands",
        "Background command handling",
        "Redirection handling",
        "Use of signals and processes",
        "Command line parsing and execution",
        "Teamwork for task distribution"
      ]
    },
    role: {
      fr: "Développement complet du shell miniature et collaboration sur la répartition des fonctionnalités.",
      en: "Full development of the miniature shell and collaboration on task distribution."
    },
    learnings: {
      fr: "Approfondissement des connaissances en langage C, utilisation des bibliothèques système, gestion de la mémoire et des processus.",
      en: "Deepened knowledge of C language, use of system libraries, memory management, and process handling."
    }
  },
  {
    id: "dns-server-setup",
    title: {
      fr: "Réseau et DNS : Mise en place d'un serveur DNS",
      en: "Network & DNS: Setting up a DNS Server"
    },
    description: {
      fr: "Installation virtuelle d'un réseau DNS en configurant les machines virtuelles avec zones, alias et zones inverses.",
      en: "Virtual setup of a DNS network by configuring virtual machines with zones, aliases, and reverse zones."
    },
    longDescription: {
      fr: "Ce projet consistait à installer et configurer un réseau DNS virtuel en utilisant des machines virtuelles. J'ai configuré les serveurs DNS primaires et secondaires, les clients DNS, les zones principales et inverses, ainsi que les sous-domaines et alias. J'ai également testé la configuration avec des commandes ping et host et rédigé un tutoriel en Markdown.",
      en: "This project involved installing and configuring a virtual DNS network using virtual machines. I configured primary and secondary DNS servers, DNS clients, main and reverse zones, as well as subdomains and aliases. Configuration was tested with ping and host commands, and a setup tutorial was written in Markdown."
    },
    image: "/projects/dns-main.png",
    images: [
      "/projects/dns-main.png",
      "/projects/dns-config.png",
      "/projects/dns-tutorial.png"
    ],
    technologies: ["Bash", "Visual Studio Code", "Markdown", "Virtual Machines (NEmu)"],
    githubUrl: "https://github.com/yaniskadri/dns-server-setup",
    featured: false,
    features: {
      fr: [
        "Installation d'un réseau DNS virtuel",
        "Configuration des serveurs primaires et secondaires",
        "Création de zones principales et inverses",
        "Gestion des sous-domaines et alias",
        "Tests avec ping et host",
        "Rédaction d'un tutoriel Markdown"
      ],
      en: [
        "Virtual DNS network setup",
        "Primary and secondary server configuration",
        "Creation of main and reverse zones",
        "Management of subdomains and aliases",
        "Testing with ping and host commands",
        "Writing a Markdown tutorial"
      ]
    },
    role: {
      fr: "Installation et configuration complète du réseau DNS et rédaction de la documentation associée.",
      en: "Full setup and configuration of the DNS network and writing associated documentation."
    },
    learnings: {
      fr: "Compréhension des concepts DNS, configuration réseau, gestion des zones et rédaction de tutoriels techniques.",
      en: "Understanding DNS concepts, network configuration, zone management, and writing technical tutorials."
    }
  },
  {
    id: "maze-app",
    title: {
      fr: "Réalisation d'une application de labyrinthe",
      en: "Maze Application Development"
    },
    description: {
      fr: "Amélioration et ajout de fonctionnalités sur une application de labyrinthe non finalisée.",
      en: "Enhancing and adding features to an unfinished maze application."
    },
    longDescription: {
      fr: "Ce projet consistait à compléter et améliorer une application de labyrinthe existante. J'ai travaillé sur l'affichage du labyrinthe, le déplacement manuel du personnage ainsi que le déplacement automatique des monstres. J'ai également mis en place des tests unitaires et validé les fichiers nécessaires à l'application.",
      en: "This project involved completing and enhancing an existing maze application. I worked on maze display, manual character movement, and automatic monster movement. Unit tests were implemented and file validation ensured the application worked correctly."
    },
    image: "/projects/maze-main.png",
    images: [
      "/projects/maze-main.png",
      "/projects/maze-movement.png",
      "/projects/maze-uml.png"
    ],
    technologies: ["Java", "NetBeans 13", "UML"],
    githubUrl: "https://github.com/yaniskadri/maze-app",
    featured: false,
    features: {
      fr: [
        "Affichage du labyrinthe",
        "Déplacement manuel du personnage",
        "Déplacement automatique des monstres",
        "Tests unitaires et validation des fichiers",
        "Utilisation du polymorphisme et diagrammes UML"
      ],
      en: [
        "Maze display",
        "Manual character movement",
        "Automatic monster movement",
        "Unit testing and file validation",
        "Use of polymorphism and UML diagrams"
      ]
    },
    role: {
      fr: "Amélioration des fonctionnalités existantes et ajout de nouvelles fonctionnalités dans l'application de labyrinthe.",
      en: "Enhancing existing features and adding new functionality to the maze application."
    },
    learnings: {
      fr: "Savoir réaliser des fonctionnalités précises, appliquer le polymorphisme et structurer le code avec UML.",
      en: "Gained experience implementing specific features, applying polymorphism, and structuring code with UML."
    }
  },
  {
    id: "unity-game-basics",
    title: {
      fr: "Développement d'un jeu vidéo sur Unity : les bases",
      en: "Unity Game Development: The Basics"
    },
    description: {
      fr: "Apprentissage des bases du moteur Unity pour créer des jeux vidéo 3D.",
      en: "Learning the basics of Unity engine to create 3D video games."
    },
    longDescription: {
      fr: "Ce projet m'a permis de découvrir le fonctionnement d'Unity, y compris les composants, les scènes, les objets 3D et l'écriture de scripts pour manipuler ces objets. J'ai également exploré l'utilisation de fonctions intégrées comme Vector et Raycast pour gérer les interactions dans le jeu.",
      en: "This project allowed me to explore Unity, including components, scenes, 3D objects, and scripting to manipulate them. I also learned to use built-in functions such as Vector and Raycast to handle in-game interactions."
    },
    image: "/projects/unity-main.png",
    images: [
      "/projects/unity-main.png",
      "/projects/unity-inventory.png",
      "/projects/unity-terrain.png"
    ],
    technologies: ["Unity 2021", "C#", "Visual Studio 2022"],
    githubUrl: "https://github.com/yaniskadri/unity-game-basics",
    featured: false,
    features: {
      fr: [
        "Gestion des scènes, objets et composants 3D",
        "Mouvement du personnage et animations",
        "Gestion des collisions et détection du sol",
        "Création d'un inventaire et ramassage d'items",
        "Organisation des matériaux et prefabs"
      ],
      en: [
        "Managing scenes, 3D objects and components",
        "Character movement and animations",
        "Collision handling and ground detection",
        "Inventory creation and item pickup",
        "Organizing materials and prefabs"
      ]
    },
    role: {
      fr: "Apprentissage et expérimentation sur Unity, création de scripts et gestion des interactions 3D.",
      en: "Learning and experimenting with Unity, scripting, and managing 3D interactions."
    },
    learnings: {
      fr: "Acquisition de compétences en C#, autonomie dans le développement sur Unity et compréhension des bases du moteur 3D.",
      en: "Gained C# skills, independence in Unity development, and understanding of the fundamentals of a 3D engine."
    }
  },
  {
    id: "climate-visualization-tool",
    title: {
      fr: "Gestion de projet et développement de logiciel : outils de visualisation",
      en: "Project Management & Software Development: Visualization Tools"
    },
    description: {
      fr: "Logiciel permettant de visualiser des graphiques climatiques sur une interface unique à partir de données collectées selon la demande du client.",
      en: "Software enabling visualization of climate graphs on a single interface based on client-requested data."
    },
    longDescription: {
      fr: "Ce projet consistait à développer un outil de visualisation graphique pour des données climatiques. Il impliquait également la gestion du planning et l'analyse du cahier des charges afin de répondre aux besoins du client. L'application générait automatiquement une base de données et des graphiques compréhensibles par les salariés.",
      en: "This project involved developing a visualization tool for climate data. It also included project planning and analysis of requirements to meet client needs. The application automatically created a database and graphs to clearly communicate climate information to employees."
    },
    image: "/projects/climate-main.png",
    images: [
      "/projects/climate-main.png",
      "/projects/climate-graphs.png",
      "/projects/climate-database.png"
    ],
    technologies: ["Python", "Pandas", "GeoPandas", "NumPy", "Matplotlib", "SQLite", "Word"],
    githubUrl: "https://github.com/yaniskadri/climate-visualization-tool",
    featured: false,
    features: {
      fr: [
        "Visualisation de graphiques climatiques sur une interface unique",
        "Gestion de projet : planification et comités de pilotage",
        "Création automatique d'une base de données et intégration des données",
        "Analyse du cahier des charges et spécifications",
        "Utilisation de Pandas, GeoPandas, NumPy et Matplotlib pour les graphiques"
      ],
      en: [
        "Visualization of climate graphs on a single interface",
        "Project management: planning and steering committees",
        "Automatic creation of a database and data integration",
        "Requirement analysis and specifications",
        "Use of Pandas, GeoPandas, NumPy, and Matplotlib for graphing"
      ]
    },
    role: {
      fr: "Analyse des besoins, planification du projet, développement du logiciel et création de graphiques interactifs.",
      en: "Requirement analysis, project planning, software development, and creation of interactive graphs."
    },
    learnings: {
      fr: "Amélioration des compétences en gestion de projet, analyse des besoins clients, développement Python et visualisation de données.",
      en: "Enhanced skills in project management, client requirement analysis, Python development, and data visualization."
    }
  },
  {
    id: "auction-management-app",
    title: {
      fr: "Conception et développement d'application de gestion d'enchères",
      en: "Auction Management Application Development"
    },
    description: {
      fr: "Application de gestion d'enchères avec fonctionnalités pour plusieurs types d'utilisateurs.",
      en: "Auction management application with features for multiple types of users."
    },
    longDescription: {
      fr: "Le projet consistait à développer une application permettant la gestion d'enchères pour des locations touristiques. L'application supporte plusieurs types d'utilisateurs (administrateurs, propriétaires, locataires) avec des fonctionnalités spécifiques et une interface adaptée à chaque rôle.",
      en: "The project involved developing an application for managing auctions for tourist rentals. The app supports multiple user types (administrators, owners, tenants) with specific features and a role-adapted interface."
    },
    image: "/projects/auction-main.png",
    images: [
      "/projects/auction-main.png",
      "/projects/auction-users.png",
      "/projects/auction-diagram.png"
    ],
    technologies: ["Java", "UML", "NetBeans"],
    githubUrl: "https://github.com/yaniskadri/auction-management-app",
    featured: false,
    features: {
      fr: [
        "Gestion d'enchères pour plusieurs utilisateurs",
        "Interface adaptée à chaque rôle : administrateurs, propriétaires, locataires",
        "Tests unitaires avant implémentation des fonctionnalités",
        "Utilisation de concepts Java : prédicat, itérateur, comparateur",
        "Diagrammes UML : classes, contexte, cas d'utilisation"
      ],
      en: [
        "Auction management for multiple users",
        "Role-adapted interface: administrators, owners, tenants",
        "Unit tests before feature implementation",
        "Use of Java concepts: predicate, iterator, comparator",
        "UML diagrams: classes, context, use cases"
      ]
    },
    role: {
      fr: "Analyse des besoins, conception UML, développement des fonctionnalités et interface utilisateur.",
      en: "Requirement analysis, UML design, development of features and user interface."
    },
    learnings: {
      fr: "Renforcement des compétences en analyse, structuration du code avec héritage et polymorphisme, tests unitaires et conception UML.",
      en: "Enhanced skills in analysis, code structuring with inheritance and polymorphism, unit testing, and UML design."
    }
  },
  {
    id: "graph-pathfinding",
    title: {
      fr: "Graphes : Utilisation d'algorithmes de recherche de chemin",
      en: "Graphs: Pathfinding Algorithms"
    },
    description: {
      fr: "Création d'un graphe et recherche de chemin à l'aide d'algorithmes de parcours.",
      en: "Creating a graph and finding a path using search algorithms."
    },
    longDescription: {
      fr: "Le projet consistait à implémenter différents algorithmes de recherche de chemin dans un graphe. L'objectif était de permettre à un utilisateur de créer des sommets et obstacles, puis de visualiser le parcours entre un point de départ et un point d'arrivée.",
      en: "The project involved implementing various pathfinding algorithms in a graph. The goal was to allow a user to create vertices and obstacles, then visualize the path between a start and an end point."
    },
    image: "/projects/graph-main.png",
    images: [
      "/projects/graph-main.png",
      "/projects/graph-a-star.png",
      "/projects/graph-bfs.png"
    ],
    technologies: ["Java", "JBotSim", "Maven", "NetBeans 13"],
    githubUrl: "https://github.com/yaniskadri/graph-pathfinding",
    featured: false,
    features: {
      fr: [
        "Création dynamique d'un graphe",
        "Implémentation d'algorithmes de recherche de chemin : A*, parcours en largeur",
        "Gestion des obstacles et des différents sommets",
        "Interface graphique interactive",
        "Utilisation de la bibliothèque JBotSim et du projet Maven"
      ],
      en: [
        "Dynamic graph creation",
        "Implementation of pathfinding algorithms: A*, BFS",
        "Management of obstacles and different vertices",
        "Interactive graphical interface",
        "Use of JBotSim library and Maven project"
      ]
    },
    role: {
      fr: "Développement de l'application, implémentation des algorithmes de recherche et conception de l'interface graphique.",
      en: "Development of the application, implementation of pathfinding algorithms, and design of the graphical interface."
    },
    learnings: {
      fr: "Renforcement des compétences en algorithmique, utilisation de bibliothèques Java et gestion de projet Maven.",
      en: "Strengthened skills in algorithms, Java libraries, and Maven project management."
    }
  },
  {
    id: "team-activities-open-day",
    title: {
      fr: "Travail d'équipe : activités pour la journée portes ouvertes",
      en: "Team Activities: Open Day"
    },
    description: {
      fr: "Création d'une application et d'exercices en équipe pour la journée portes ouvertes de l'IUT de Gradignan.",
      en: "Creation of an application and exercises as a team for the Open Day at IUT Gradignan."
    },
    longDescription: {
      fr: "Le projet consistait à imaginer un concept de jeu pour les lycéens et à développer deux versions : une version finale et une version d'exercices à compléter. L'objectif était de créer des activités ludiques et pédagogiques pour la journée portes ouvertes.",
      en: "The project involved designing a game concept for high school students and developing two versions: a completed version and an exercise version to be filled in. The goal was to create fun and educational activities for the Open Day."
    },
    image: "/projects/open-day-main.png",
    images: [
      "/projects/open-day-main.png",
      "/projects/open-day-exercises.png",
      "/projects/open-day-coding.png"
    ],
    technologies: ["Processing", "Word 2016"],
    githubUrl: "https://github.com/yaniskadri/team-activities-open-day",
    featured: false,
    features: {
      fr: [
        "Création de l'application principale",
        "Développement de la version d’exercices à compléter",
        "Échanges de points de vue en équipe",
        "Séries d'exercices pédagogiques pour les lycéens",
        "Amélioration de la propreté et lisibilité du code",
        "Gestion des tâches attribuées"
      ],
      en: [
        "Creation of the main application",
        "Development of the exercise version to be completed",
        "Team discussions and feedback",
        "Educational exercises for high school students",
        "Improved code readability and cleanliness",
        "Task management within the team"
      ]
    },
    role: {
      fr: "Participation à la conception et au développement des applications et exercices, travail en équipe et suivi de l’avancement.",
      en: "Participated in designing and developing applications and exercises, teamwork and progress tracking."
    },
    learnings: {
      fr: "J'ai renforcé mes compétences en développement collaboratif, gestion des tâches en équipe et amélioration de la qualité du code.",
      en: "I strengthened my skills in collaborative development, team task management, and code quality improvement."
    }
  },
  {
    id: "database-creation",
    title: {
      fr: "Création de base de données",
      en: "Database Creation",
    },
    description: {
      fr: "Développement d'une base de données pour gérer l'activité d'une entreprise (commandes, listes, vins, etc.).",
      en: "Development of a database to manage a company's activities (orders, lists, wines, etc.).",
    },
    longDescription: {
      fr: "Ce projet consistait à concevoir et créer une base de données complète pour une entreprise, en partant de l'analyse des besoins, à la création du MCD, puis à la génération des scripts SQL et tests de requêtes.",
      en: "This project involved designing and creating a full database for a company, starting from requirement analysis, creating the ERD, generating SQL scripts, and testing queries.",
    },
    image: "/projects/database-main.png",
    images: [
      "/projects/database-main.png",
      "/projects/database-tables.png",
      "/projects/database-queries.png"
    ],
    technologies: ["Microsoft SQL Server", "WinDesign", "SQL", "Data Modeling"],
    githubUrl: "https://github.com/yaniskadri/database-creation",
    featured: false,
    features: {
      fr: [
        "Analyse des besoins et création du MCD",
        "Travail en binôme avec échanges et révisions",
        "Création des tables et insertion de données",
        "Réalisation de requêtes SQL pour interrogation et manipulation",
        "Maquettes pour l’interface future",
        "Gestion des vins classés ou non",
        "Amélioration des compétences en création de requêtes"
      ],
      en: [
        "Requirement analysis and ERD creation",
        "Pair work with reviews and feedback",
        "Table creation and data insertion",
        "SQL queries for data retrieval and manipulation",
        "Mockups for the future interface",
        "Management of categorized and uncategorized wines",
        "Enhanced skills in writing SQL queries"
      ]
    },
    role: {
      fr: "Conception et réalisation complète de la base de données, depuis l'analyse des besoins jusqu'à la génération de scripts et tests des requêtes.",
      en: "Full design and implementation of the database, from requirement analysis to script generation and query testing."
    },
    learnings: {
      fr: "J'ai renforcé mes compétences en conception de bases de données, modélisation MCD, SQL et bonnes pratiques de gestion des données.",
      en: "I strengthened my skills in database design, ERD modeling, SQL, and best practices in data management."
    }
  },
  {
    id: "client-website",
    title: {
      fr: "Création d'un site pour les besoins clients",
      en: "Client Website Creation",
    },
    description: {
      fr: "Développement d'un site web répondant aux besoins d'une entreprise fictive.",
      en: "Development of a website based on the requirements of a fictional company.",
    },
    longDescription: {
      fr: "Projet visant à créer un site web complet pour une entreprise fictive, en suivant les informations collectées lors de la phase de conception. Le site est structuré, responsive et contient toutes les sections principales attendues.",
      en: "Project aiming to create a full website for a fictional company, following the information gathered in the design phase. The site is structured, responsive, and includes all the expected main sections.",
    },
    image: "/projects/client-website-main.png",
    images: [
      "/projects/client-website-main.png",
      "/projects/client-website-home.png",
      "/projects/client-website-contact.png"
    ],
    technologies: ["HTML", "CSS", "Visual Studio Code", "Responsive Design"],
    githubUrl: "https://github.com/yaniskadri/client-website",
    featured: false,
    features: {
      fr: [
        "Création de maquettes et personas pour imaginer le design",
        "Page d'accueil et présentation de l'entreprise",
        "Analyse PESTEL intégrée",
        "Formulaire de contact fonctionnel",
        "Mentions légales",
        "Site responsive pour desktop et smartphone",
        "Travail en binôme avec gestion de versions via Git",
        "Structuration et organisation du code HTML/CSS"
      ],
      en: [
        "Created mockups and personas to design the site",
        "Home page and company presentation",
        "Integrated PESTEL analysis",
        "Functional contact form",
        "Legal notices page",
        "Responsive site for desktop and mobile",
        "Pair programming with version control using Git",
        "Properly structured and organized HTML/CSS code"
      ]
    },
    role: {
      fr: "Développement complet du site web à partir du besoin client, intégration des sections, maquettes et responsive design.",
      en: "Full development of the website from client requirements, integrating all sections, mockups, and responsive design."
    },
    learnings: {
      fr: "Amélioration de mes compétences en HTML et CSS, structuration de pages web, responsive design et travail collaboratif avec Git.",
      en: "Improved skills in HTML and CSS, web page structuring, responsive design, and collaborative work with Git."
    }
  },
  {
    id: "lowatem-phase2",
    title: {
      fr: "Lowatem Phase 2 : Mon IA vs d'autres IA",
      en: "Lowatem Phase 2: My AI vs Other AIs",
    },
    description: {
      fr: "Création d'une IA capable de jouer et battre d'autres IA selon les règles du jeu.",
      en: "Creation of an AI capable of playing and defeating other AIs according to the game rules.",
    },
    longDescription: {
      fr: "Ce projet consistait à développer une intelligence artificielle pour le jeu de plateau Lowatem, capable de prendre des décisions stratégiques pour gagner contre d'autres IA.",
      en: "This project involved developing an artificial intelligence for the Lowatem board game, capable of making strategic decisions to win against other AIs.",
    },
    image: "/projects/lowatem-ia-main.png",
    images: [
      "/projects/lowatem-ia-main.png",
      "/projects/lowatem-ia-simulation.png",
      "/projects/lowatem-ia-replay.png"
    ],
    technologies: ["Java", "NetBeans", "AI Simulation", "Strategy Algorithms"],
    githubUrl: "https://github.com/yaniskadri/lowatem-phase2",
    featured: false,
    features: {
      fr: [
        "Utilisation du papier pour planifier les mouvements de l'IA",
        "Création d'une IA capable de battre d'autres IA par simulation",
        "Compréhension des règles pour élaborer une stratégie gagnante",
        "Choix des mouvements (attaque et déplacement) parmi une liste d'actions possibles",
        "Optimisation de l'IA pour infliger un maximum de dégâts à l'équipe adverse",
        "Replay des parties pour analyser la stratégie de l'IA"
      ],
      en: [
        "Used paper to plan AI moves",
        "Created an AI capable of defeating other AIs through simulations",
        "Understood rules to develop a winning strategy",
        "Chose moves (attack and movement) from a list of possible actions",
        "Optimized AI to inflict maximum damage to the opposing team",
        "Replay of matches to analyze AI strategy"
      ]
    },
    role: {
      fr: "Développement complet de l'IA pour le jeu de plateau, implémentation de la stratégie et simulations contre d'autres IA.",
      en: "Full development of the AI for the board game, implementing strategy and running simulations against other AIs."
    },
    learnings: {
      fr: "J'ai amélioré ma compréhension des IA, la planification stratégique et la réflexion selon des règles précises.",
      en: "I improved my understanding of AI, strategic planning, and decision-making according to specific rules."
    }
  },
  {
    id: "lowatem-phase1",
    title: {
      fr: "Lowatem Phase 1 : Un jeu de plateau numérique",
      en: "Lowatem Phase 1: A Digital Board Game",
    },
    description: {
      fr: "Jeu de plateau numérique complété avec l'ajout de tests unitaires selon les règles données.",
      en: "Digital board game completed with unit tests according to the given rules.",
    },
    longDescription: {
      fr: "Ce projet consistait à implémenter un jeu de plateau numérique en Java, en respectant les règles du cahier des charges et en utilisant des tests unitaires pour garantir la robustesse du code.",
      en: "This project involved implementing a digital board game in Java, following the requirements and using unit tests to ensure code reliability.",
    },
    image: "/projects/lowatem-main.png",
    images: [
      "/projects/lowatem-main.png",
      "/projects/lowatem-board.png",
      "/projects/lowatem-units.png"
    ],
    technologies: ["Java", "NetBeans", "JUnit", "2D Arrays", "Enums", "OOP"],
    githubUrl: "https://github.com/yaniskadri/lowatem-phase1",
    featured: false,
    features: {
      fr: [
        "Utilisation du papier pour dessiner le plateau et planifier les actions",
        "Implémentation des règles du jeu pour deux équipes s'affrontant",
        "Gestion des types de cases : eau et terre",
        "Tests unitaires pour chaque méthode",
        "Code structuré et lisible avec classes et méthodes commentées",
        "Gestion des points de vie des unités et de l'équipe",
        "Calcul des coûts de déplacement et des dégâts émis par chaque unité"
      ],
      en: [
        "Used paper to design the board and plan actions",
        "Implemented game rules for two competing teams",
        "Managed cell types: water and land",
        "Unit tests for each method",
        "Structured and readable code with classes and commented methods",
        "Managed health points for units and team",
        "Calculated movement costs and damage dealt by each unit"
      ]
    },
    role: {
      fr: "Développement complet du jeu de plateau numérique en Java, structuration du code et mise en place des tests unitaires.",
      en: "Full development of the digital board game in Java, code structuring and setup of unit tests."
    },
    learnings: {
      fr: "J'ai amélioré ma capacité à structurer le code, utiliser des classes et des tableaux 2D, écrire des tests unitaires et implémenter des règles complexes.",
      en: "I improved my skills in structuring code, using classes and 2D arrays, writing unit tests, and implementing complex rules."
    }
  },
  {
    id: "installation-os",
    title: {
      fr: "Installation poste : système d’exploitation",
      en: "Workstation Setup: Operating System",
    },
    description: {
      fr: "Installation d'une machine virtuelle à la demande d'une entreprise.",
      en: "Installing a virtual machine as requested by a company.",
    },
    longDescription: {
      fr: "Ce projet consistait à configurer une machine virtuelle complète avec un système d'exploitation Linux, des utilisateurs avec droits spécifiques et des outils de développement pour répondre aux besoins d'une entreprise.",
      en: "This project involved setting up a complete virtual machine with a Linux operating system, users with specific permissions, and development tools to meet a company's requirements.",
    },
    image: "/projects/vm-main.png",
    images: [
      "/projects/vm-main.png",
      "/projects/vm-terminal.png",
      "/projects/vm-git.png"
    ],
    technologies: ["Linux", "Bash", "VMWare", "XFCE", "Visual Studio Code", "Rust Nightly"],
    githubUrl: "https://github.com/yaniskadri/vm-setup",
    featured: false,
    features: {
      fr: [
        "Installer une distribution Linux sur une machine virtuelle",
        "Créer deux utilisateurs avec des droits spécifiques",
        "Configurer le terminal Bash et changer le prompt selon le dépôt Git",
        "Installer Git et Visual Studio Code avec l'extension Nightly Rust",
        "Création d’un tutoriel pour l’installation et la configuration",
        "Amélioration de l’utilisation du terminal avec commandes Bash"
      ],
      en: [
        "Install a Linux distribution on a virtual machine",
        "Create two users with specific permissions",
        "Configure the Bash terminal and change the prompt according to the Git repository",
        "Install Git and Visual Studio Code with Rust Nightly extension",
        "Create a tutorial for installation and setup",
        "Enhance terminal usage with Bash commands"
      ]
    },
    role: {
      fr: "Mise en place complète de la machine virtuelle et configuration des outils de développement.",
      en: "Complete setup of the virtual machine and configuration of development tools."
    },
    learnings: {
      fr: "J'ai appris à créer des machines virtuelles, gérer les utilisateurs et droits sous Linux, configurer Git et le terminal pour un usage efficace en entreprise.",
      en: "I learned to create virtual machines, manage Linux users and permissions, and configure Git and the terminal for efficient enterprise usage."
    }
  },
  {
    id: "pong-game",
    title: {
      fr: "Pong : jeu à 2 joueurs",
      en: "Pong: 2-Player Game",
    },
    description: {
      fr: "Un jeu Pong à deux joueurs avec obstacles, gravité et affichage du score.",
      en: "A 2-player Pong game with obstacles, gravity, and score display.",
    },
    longDescription: {
      fr: "Ce projet Pong consiste à créer un jeu complet à deux joueurs avec des obstacles aléatoires, plusieurs modes de jeu et un menu interactif. Il utilise la programmation orientée objet pour gérer les balles et les raquettes.",
      en: "This Pong project is a complete 2-player game with random obstacles, multiple game modes, and an interactive menu. It uses object-oriented programming to manage balls and paddles.",
    },
    image: "/projects/pong-main.png",
    images: [
      "/projects/pong-main.png",
      "/projects/pong-gameplay1.png",
      "/projects/pong-gameplay2.png",
    ],
    video: "/projects/pong-demo.mp4",
    technologies: ["Processing", "Java"],
    githubUrl: "https://github.com/yaniskadri/pong-game",
    featured: false,
    features: {
      fr: [
        "Créer des classes et objets (balle, raquettes)",
        "Affichage du score",
        "Obstacles aléatoires dans le jeu",
        "Mode 4 balles et gravité",
        "Menu interactif : quitter / rejouer",
        "Déplacements des raquettes via touches",
        "Mise à jour automatique du score",
      ],
      en: [
        "Create classes and objects (ball, paddles)",
        "Display score",
        "Random obstacles in the game",
        "4-ball mode and gravity",
        "Interactive menu: quit / replay",
        "Paddle movements with key presses",
        "Automatic score update",
      ],
    },
    role: {
      fr: "Développement du jeu en utilisant des classes et objets, gestion des interactions, création du menu et implémentation des différents modes de jeu.",
      en: "Game development using classes and objects, managing interactions, creating the menu, and implementing different game modes.",
    },
    learnings: {
      fr: "Compréhension approfondie des coordonnées sur la fenêtre de jeu, utilisation de classes et objets, manipulation de tableaux pour gérer les éléments du jeu, et ajout de commentaires pour documenter le code.",
      en: "Deep understanding of coordinates in the game window, use of classes and objects, array manipulation to manage game elements, and adding comments to document code.",
    },
  },
]

export const technologies = [
  // Front-end
  "Angular",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",

  // Back-end
  "Java",
  "Spring Boot",
  "Node.js",
  "Symfony",
  "Python",
  "C#",
  "C",

  // Databases
  "MySQL",
  "PostgreSQL",
  "Oracle",
  "MongoDB",
  "Neo4j",
  "SQLite",
  "Firebase",
  "Redis",
  "Prisma",
  "Doctrine",

  // DevOps / Infrastructure
  "Docker",
  "Kubernetes",
  "Vercel",
  "AWS",
  "CI/CD",
  "GitHub Actions",
  "Monitoring",
  "Logs",
  "Network",
  "Active Directory",

  // Security & Standards
  "OWASP",
  "HTTPS",
  "CORS",
  "JWT",
  "OAuth",
  "Authentication",
  "Compliance",

  // Other concepts / methodologies
  "Agile Scrum",
  "Progressive Web App",
  "Unit Testing",
  "TDD",
  "UML",
  "Maven",
  "Algorithms",
  "Data Structures"
];

