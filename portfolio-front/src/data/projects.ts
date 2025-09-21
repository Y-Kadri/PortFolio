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
    id: "breezy-social-network",
    title: {
      fr: "Breezy – Réseau social léger et réactif",
      en: "Breezy – Lightweight Responsive Social Network"
    },
    description: {
      fr: "Réseau social léger inspiré de Twitter/X, permettant de publier des postes publics, d’interagir avec les publications des autres utilisateurs, de suivre des utilisateurs, d’envoyer des messages privés et de gérer plusieurs types d’utilisateurs pour des fonctionnalités distinctes.",
      en: "Lightweight social network inspired by Twitter/X, allowing users to post public posts, interact with other users’ posts, follow users, send private messages, and manage multiple user types for different functionalities."
    },
    longDescription: {
      fr: "Breezy est une application réseau social permettant de publier des postes accessibles à tous, d’y répondre, de les liker, de suivre d’autres utilisateurs et de consulter un fil d’actualités trié par publications des abonnés. L’application permet également d’envoyer des messages privés entre utilisateurs pour communiquer de manière confidentielle. Quatre types d’utilisateurs existent : visiteur, utilisateur, modérateur et administrateur, chacun disposant de fonctionnalités spécifiques. Accessible via navigateur, Breezy est utilisable sur mobile grâce à son interface responsive. L’architecture est monolithique, avec un back-end Node.js/Express et un front-end React/Next.js. L’application inclut une authentification sécurisée via JWT et la gestion des sessions.",
      en: "Breezy is a social network application allowing users to post public posts, reply to, like posts, follow other users, and view a news feed sorted by posts from followed accounts. It also enables private messaging between users for confidential communication. There are four types of users: visitor, user, moderator, and administrator, each with specific functionalities. Accessible via web browser, Breezy is usable on mobile devices thanks to its responsive interface. The architecture is monolithic, with a Node.js/Express backend and React/Next.js frontend. The app includes secure authentication with JWT and session management."
    },
    image: "/projects/easysave/overview.png",
    images: [
      "/projects/easysave/overview.png",
      "/projects/easysave/backup.png",
      "/projects/easysave/gui.png"
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Docker",
      "Docker Compose",
      "Load Balancer",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "Nginx",
      "JWT",
      "API Gateway",
      "Responsive Design",
      "Mobile-first Approach",
      "Monolithic Architecture",
      "API Rest",
      "Public/Private API",
      "React Hooks",
      "React Context",
    ],
    githubUrl: "",
    featured: true,
    features: {
      fr: [
        "Création de maquettes pour les futures pages (accueil, profil, connexion, déconnexion, messages privés, page administrateur)",
        "Mise en place d'une application monolithique",
        "Création de comptes utilisateurs en mode déconnecté pour les visiteurs",
        "Connexion et déconnexion des utilisateurs",
        "Authentification sécurisée via JWT (cryptage des échanges front/back)",
        "Page accueil : Publication de postes courts (≤280 caractères), répondre à un poste (commentaire), liker un poste et/ou commentaire, répondre à un commentaire",
        "Suivre ou être suivi par d'autres utilisateurs",
        "Profil utilisateur perso : édition, modification de ses postes et commentaires, statistiques (likes, postes, abonnés, abonnements)",
        "Profil d’un autre utilisateur : voir ses stats, ses postes, commentaires et bouton suivre / ne plus suivre",
        "Page message : Messages privés entre utilisateurs abonnés avec choix de l'utilisateur suivi",
        "Ajout d’images aux postes, commentaires et messages privés",
        "Page administrateur et modérateur : Suspension ou bannissement d’utilisateurs (rôles administrateur et modérateur)",
        "Page administrateur et modérateur : Création d'un utilisateur (rôle administrateur)",
        "Mise en place de Docker et Docker Compose pour le service et préparation au déploiement",
        "Mise en place du load balancer, API Gateway, APIs publiques et privées",
        "Interface responsive pour une utilisation mobile",
        "Livrable final : rapport détaillant objectifs, architecture, hiérarchisation des tâches, méthodologie, maquettes, fonctionnalités et axes d'amélioration",
        "Soutenance : démonstration avec scénario d'utilisation"
      ],
      en: [
        "Creation of wireframes for future pages (home, profile, login, logout, private messages, administrator page)",
        "Implementation of a monolithic application",
        "User account creation in offline mode for visitors",
        "User login and logout",
        "Secure authentication via JWT (encrypted exchanges between front/back)",
        "Home page: Posting short posts (≤280 characters), reply to a post (comment), like a post and/or comment, reply to a comment",
        "Follow or be followed by other users",
        "Personal user profile: edit and modify own posts and comments, statistics (likes, posts, followers, following)",
        "Other user's profile: view stats, posts, comments, and follow/unfollow button",
        "Message page: private messaging between followed users with selection of followed user",
        "Adding images to posts, comments, and private messages",
        "Administrator and moderator page: user suspension or banning (administrator and moderator roles)",
        "Administrator and moderator page: user creation (administrator role)",
        "Setup of Docker and Docker Compose for service and deployment preparation",
        "Setup of load balancer, API Gateway, public and private APIs",
        "Responsive interface for mobile usage",
        "Final deliverable: report detailing objectives, architecture, task hierarchy, methodology, wireframes, implemented features, and improvement opportunities",
        "Presentation: demonstration with scenario of use"
      ]
    },
    role: {
      fr: "Participation à la conception de la maquette et à la structure de l'application. Participation au développement back-end et front-end, mise en place de l'authentification sécurisée, gestion des postes, commentaires et interactions. Mise en place de Docker et Docker Compose pour les services et préparation au déploiement, ainsi que configuration du load balancer et de l’API Gateway. Priorisation et implémentation des fonctionnalités, réunions régulières pour suivre l'avancement.",
      en: "Participated in the design of the wireframes and application structure. Contributed to backend and frontend development, implemented secure authentication, managed postes, comments, and interactions. Set up Docker and Docker Compose for services and deployment preparation, as well as configuration of load balancer and API Gateway. Prioritized and implemented features, held regular meetings to track progress."
    },
    learnings: {
      fr: "Maîtrise du développement fullstack avec Node.js, Express et React/Next.js. Pratique de l’authentification sécurisée avec JWT, gestion des sessions, API RESTful et manipulation de bases MongoDB via Mongoose. Approfondissement des compétences en développement d'applications monolithiques, responsive design et mobile-first, mise en place de Docker et Docker Compose, load balancing et API Gateway avec Nginx. Meilleure analyse des besoins et échanges constructifs avec les membres de l’équipe.",
      en: "Mastery of fullstack development with Node.js, Express, and React/Next.js. Practice in secure authentication with JWT, session management, RESTful APIs, and MongoDB manipulation with Mongoose. Strengthened skills in monolithic application development, responsive and mobile-first design, implementation of Docker and Docker Compose, load balancing and API Gateway with Nginx. Improved requirements analysis and constructive collaboration with team members."
    },
  },
  {
    id: "easysave-backup-system",
    title: {
      fr: "EasySave – Logiciel de sauvegarde évolutif par versions",
      en: "EasySave – Backup Software Evolving Through Versions"
    },
    description: {
      fr: "Développement incrémental d’un logiciel de sauvegarde de fichiers et répertoires avec gestion de versions successives (1.0 → 3.0). Chaque version apporte de nouvelles fonctionnalités : logs détaillés, gestion multi-travaux, cryptage, interface graphique, exécution parallèle, contrôle en temps réel, et console distante.",
      en: "Incremental development of a backup software for files and directories, managed through successive versions (1.0 → 3.0). Each version brings new features: detailed logs, multi-job management, encryption, graphical interface, parallel execution, real-time control, and remote console."
    },
    longDescription: {
      fr: "Application de sauvegarde permettant de créer et gérer des travaux, chaque travail étant défini par un dossier source, une destination et un type de sauvegarde (complète ou différentielle). L’utilisateur peut ensuite lancer un ou plusieurs travaux pour exécuter les sauvegardes. D’abord utilisable en ligne de commande, l’application a ensuite évolué vers une interface graphique et s’est enrichie au fil des versions : logs détaillés (JSON/XML), suivi temps réel, cryptage, gestion concurrente, communication par sockets, etc. Le développement en C# avec .NET a intégré un versionnage Git pour suivre l’ajout progressif de fonctionnalités, ainsi que l’usage de patrons de conception (Singleton, Command, Factory, Adapter, Stratégie).",
      en: "Backup application that allows users to create and manage jobs, each defined by a source folder, a destination, and a backup type (full or differential). Users can then launch one or several jobs to perform backups. Initially available through the command line, the application later evolved to a graphical interface and was progressively enhanced with features such as detailed logs (JSON/XML), real-time monitoring, encryption, concurrency management, socket communication, and more. Developed in C# with .NET, it leveraged Git versioning to track the incremental addition of features and applied design patterns (Singleton, Command, Factory, Adapter, Strategy)."
    },
    image: "/projects/easysave/home.png",
    images: [
      "/projects/easysave/home.png",
      "/projects/easysave/jobs.png",
      "/projects/easysave/logs.png",
      "/projects/easysave/settings.png",
      "/projects/easysave/connectToServer.png",
      "/projects/easysave/userConnected.jpg",
      "/projects/easysave/otherUserConnected.jpg",
      "/projects/easysave/jobOfOtherUser.jpg",
      "/projects/easysave/classDiagram.png",
      "/projects/easysave/activityDiagram.jpg",
      "/projects/easysave/sequenceDiagram.png",
      "/projects/easysave/userCaseDiagram.png",
    ],
    technologies: [
      "C#",
      ".NET Core",
      "WPF / Avalonia",
      "Sockets (client-serveur)",
      "Logs JSON & XML",
      "Dynamic Link Library (DLL)",
      "Processus & Threads",
      "Locks",
      "Sémaphores",
      "Backup complet et différentiel",
      "Logs",
      "Design Patterns (Singleton, Command, Factory, Adapter, Strategy)",
      "Git & Gestion de versions",
      "CI/CD",
      "UML",
      "Diagrammes de classes",
      "Diagrammes d’activités",
      "Diagrammes de séquence",
      "Diagrammes de cas d’utilisation"
    ],
    githubUrl: "",
    featured: true,
    features: {
      fr: [
        "Conception diagrammes UML : activité, séquence, classe et cas d’utilisation",
        "Patrons de conception : Singleton, Command, Factory, Adapter et Strategy",
        "Versionnage Git : gestion incrémentale du projet avec tags pour chaque version",
        "Version 1.0 : Application console (.NET Core) – gestion jusqu’à 5 travaux de sauvegarde (complète ou différentielle), exécution séquentielle ou ciblée (ligne de commande), sauvegarde de tous les fichiers/sous-répertoires (disques locaux, externes, réseaux)",
        "Version 1.0 : Multi-langues – Français / Anglais",
        "Version 1.0 : Fichier log journalier (JSON) – enregistrement temps réel (horodatage, nom, chemins source/destination, taille, temps de transfert, erreurs). Développé dans une DLL pour compatibilité future",
        "Version 1.0 : Fichier état en temps réel (JSON) – suivi de la progression (nombre fichiers, taille totale/restante, progression, fichier en cours)",
        "Version 1.1 : Choix du format des logs – ajout du support XML en plus du JSON",
        "Version 2.0 : Interface graphique (WPF/Avalonia) – gestion de travaux de sauvegarde illimités",
        "Version 2.0 : Ajout du cryptage (via logiciel externe) – fichiers sélectionnés selon extensions définies par l’utilisateur",
        "Version 2.0 : Log enrichi – ajout du temps de cryptage (0 = pas de cryptage, >0 = temps, <0 = code erreur)",
        "Version 2.0 : Détection d’un logiciel métier – interdiction de lancer des sauvegardes si un logiciel sensible est actif (log de l’arrêt inclus)",
        "Version 3.0 : Sauvegardes parallèles – gestion concurrente (processus, locks, sémaphores)",
        "Version 3.0 : Gestion de fichiers prioritaires – aucun fichier non prioritaire transféré tant qu’un prioritaire est en attente",
        "Version 3.0 : Limite sur transferts simultanés de gros fichiers – paramétrage d’une taille max pour éviter saturation bande passante",
        "Version 3.0 : Contrôle en temps réel – Play, Pause, Stop pour chaque tâche ou ensemble de tâches",
        "Version 3.0 : Pause automatique si logiciel métier détecté – reprise dès sa fermeture",
        "Version 3.0 : Console distante – suivi et contrôle en temps réel via sockets (IHM graphique sur poste distant)",
        "Version 3.0 : Gestion d’un logiciel de cryptage mono-instance – synchronisation et traitement des conflits"
      ],
      en: [
        "UML diagrams: activity, sequence, class, and use case",
        "Design patterns: Singleton, Command, Factory, Adapter, and Strategy",
        "Git versioning: incremental project management with tags for each version",
        "Version 1.0: Console application (.NET Core) – up to 5 backup jobs (full or differential), sequential or targeted execution (via command line), backup of all files/subfolders (local, external, network drives)",
        "Version 1.0: Multi-language – English / French",
        "Version 1.0: Daily log file (JSON) – real-time recording (timestamp, name, source/destination paths, size, transfer time, errors). Developed in a DLL for future compatibility",
        "Version 1.0: Real-time state file (JSON) – monitoring of progress (file count, total/remaining size, progress percentage, current file)",
        "Version 1.1: Choice of log format – support for XML in addition to JSON",
        "Version 2.0: Graphical interface (WPF/Avalonia) – unlimited number of backup jobs",
        "Version 2.0: Added encryption (via external software) – files selected according to extensions set by user",
        "Version 2.0: Enriched log – added encryption time (0 = no encryption, >0 = time, <0 = error code)",
        "Version 2.0: Business software detection – prevent backup jobs if a sensitive software is active (logged in the file)",
        "Version 3.0: Parallel backups – concurrency management (processes, locks, semaphores)",
        "Version 3.0: Priority file management – no non-priority file transferred while a priority file is pending",
        "Version 3.0: Limit on simultaneous large file transfers – configurable max size to avoid bandwidth saturation",
        "Version 3.0: Real-time control – Play, Pause, Stop for each job or all jobs",
        "Version 3.0: Automatic pause if business software detected – resume once it is closed",
        "Version 3.0: Remote console – monitor and control jobs in real time via sockets (graphical interface on remote machine)",
        "Version 3.0: Mono-instance encryption software – synchronization and conflict management"
      ]
    },
    role: {
      fr: "Participation à la compréhension des besoins clients et à la gestion du versionning Git. Contribution à l’architecture (patrons de conception : Singleton, Command, Factory, Adapter, Stratégie), à la modélisation UML (diagrammes d’activité, de classes, de séquence et de cas d’utilisation), et au développement C#. Implémentation des sauvegardes (complètes et différentielles), gestion des logs et états, intégration des fonctionnalités avancées (cryptage, sockets, parallélisation, gestion de processus et sémaphores). Collaboration active dans le travail en équipe et présentations des livrables.",
      en: "Contributed to understanding client requirements and Git versioning management. Participated in architecture (design patterns: Singleton, Command, Factory, Adapter, Strategy), UML modeling (activity, class, sequence, and use case diagrams), and C# development. Implemented backups (full and differential), logs and state management, integration of advanced features (encryption, sockets, parallelization, process and semaphore management). Actively collaborated in teamwork and presented deliverables."
    },
    learnings: {
      fr: "Maîtrise du développement incrémental avec Git et gestion de versions. Pratique de la modélisation UML (diagrammes d’activité, de classes, de séquence et de cas d’utilisation) et de patrons de conception (Singleton, Command, Factory, Adapter, Stratégie). Expérience approfondie en C#/.NET : gestion de processus et threads, synchronisation (locks, sémaphores), programmation réseau (sockets), gestion de sauvegardes (complète et différentielle), logs JSON/XML. Approfondissement de la robustesse logicielle, de la compatibilité ascendante via DLL, et amélioration de l’analyse du besoin ainsi que des échanges de points de vue avec les membres de l’équipe.",
      en: "Mastery of incremental development with Git and version management. Practice in UML modeling (activity, class, sequence, and use case diagrams) and design patterns (Singleton, Command, Factory, Adapter, Strategy). In-depth experience in C#/.NET: process and thread management, synchronization (locks, semaphores), network programming (sockets), backup management (full and differential), JSON/XML logging. Strengthened skills in software robustness, upward compatibility through DLLs, and improved requirement analysis as well as exchange of viewpoints with team members."
    }
  },
  {
    id: "multimodal-mobility-optimization",
    title: {
      fr: "Recherche de cycle optimal sur graphe dynamique",
      en: "Optimal Cycle Search on Dynamic Graphs"
    },
    description: {
      fr: "Projet d’étude et d’implémentation d’algorithmes pour trouver un cycle optimal (temps total minimal) dans un graphe représentant des tournées de livraison avec contraintes dynamiques.",
      en: "Study and implementation of algorithms to find an optimal cycle (minimal total time) in a graph representing delivery tours with dynamic constraints."
    },
    longDescription: {
      fr: "Projet centré sur la recherche d’un cycle optimal dans un graphe pondéré représentant des villes (sommets) et des routes (arêtes), où les poids représentent le temps de parcours et peuvent changer dynamiquement à chaque déplacement du camion. L’objectif était de minimiser le temps total de parcours tout en prenant en compte des contraintes réalistes : routes interdites, arêtes coûteuses et perturbations dynamiques. Le travail a combiné une modélisation mathématique et une analyse de complexité avec une phase expérimentale approfondie : génération de graphes aléatoires, implémentation et comparaison de différents algorithmes (brute force, glouton, heuristiques, métaheuristiques, algorithmes dynamiques), et réalisation de graphiques et statistiques détaillés pour chaque scénario. Le rendu final inclut nos analyses, expérimentations et conclusions, présentés dans un rapport et une soutenance orale.",
      en: "Project focused on searching for an optimal cycle in a weighted graph representing cities (nodes) and roads (edges), where weights represent travel time and can change dynamically at each truck movement. The goal was to minimize total travel time while considering realistic constraints: forbidden roads, costly edges, and dynamic perturbations. The work combined mathematical modeling and complexity analysis with a detailed experimental phase: random graph generation, implementation and comparison of various algorithms (brute force, greedy, heuristics, metaheuristics, dynamic algorithms), and detailed charts and statistics for each scenario. The final output included our analyses, experiments, and conclusions, presented in a report and oral defense."
    },
    image: "/projects/multiModalMobilityOptimization/opt2.gif",
    images: [
      "/projects/multiModalMobilityOptimization/bruteForce.gif",
      "/projects/multiModalMobilityOptimization/dStar.gif",
      "/projects/multiModalMobilityOptimization/opt2.gif",
      "/projects/multiModalMobilityOptimization/nearestNeighbor.gif",
      "/projects/multiModalMobilityOptimization/antColony.gif",
      "/projects/multiModalMobilityOptimization/AlgoCompare.png",
      "/projects/multiModalMobilityOptimization/execTime.png",
      "/projects/multiModalMobilityOptimization/medianTime.png",
      "/projects/multiModalMobilityOptimization/ecartTypeTime.png",
      "/projects/multiModalMobilityOptimization/ecartAboluMedianTime.png",
    ],
    technologies: [
      "Python",
      "Jupyter / Notebook",
      "Théorie des graphes (Graph theory)",
      "Modélisation mathématique",
      "NetworkX",
      "Matplotlib",
      "Pandas",
      "Brute Force",
      "Greedy (Glouton)",
      "Nearest Neighbor",
      "2-opt",
      "Recuit simulé",
      "Algorithmes génétiques",
      "Ant Colony Optimization (ACO)",
      "D*",
      "Programmation linéaire",
      "Heuristiques",
      "Métaheuristiques",
      "Complexité polynomiale et réductions polynomiales",
    ],
    githubUrl: "",
    featured: true,
    features: {
      fr: [
        "Analyse théorique : distinction problème de décision vs problème d’optimisation, étude de complexité (NP-complet, réductions polynomiales), modélisation mathématique avec ensembles, variables binaires et fonction objectif",
        "Générateur d’instances aléatoires : création de graphes pondérés où les sommets représentent les villes, les arêtes les routes et les poids le temps de parcours",
        "Ajout de contraintes réalistes : routes interdites, arêtes coûteuses et perturbations dynamiques des temps de trajet",
        "Implémentation et comparaison de plusieurs algorithmes : brute force, algorithmes gloutons (greedy), heuristiques (Nearest Neighbor, 2-opt), métaheuristiques (recuit simulé, génétique, colonies de fourmis) et algorithmes dynamiques (D*)",
        "Étude expérimentale (benchmark) : génération de graphiques et statistiques détaillés pour chaque graphe : nombre de cycles, temps d’exécution moyen, médiane des temps, écart-type, écart absolu médian (MAD), comparaison des temps de cycles optimaux, le tout en fonction du nombre de villes et du nombre d’arêtes",
        "Présentation orale de nos analyses théoriques, expérimentations et conclusions"
      ],
      en: [
        "Theoretical analysis: distinction between decision vs optimization problems, complexity study (NP-complete, polynomial reductions), mathematical modeling with sets, binary variables, and objective function",
        "Random instance generator: construction of weighted graphs where nodes represent cities, edges represent roads, and weights represent travel times",
        "Integration of realistic constraints: forbidden roads, costly edges, and dynamic perturbations of travel times",
        "Implementation and comparison of various algorithms: brute force, greedy algorithms, heuristics (Nearest Neighbor, 2-opt), metaheuristics (simulated annealing, genetic algorithms, ant colony optimization), and dynamic algorithms (D*)",
        "Experimental study (benchmark): generation of detailed charts and statistics for each graph: number of cycles, mean execution time, median execution time, standard deviation, median absolute deviation (MAD), comparison of optimal cycle times, all depending on number of cities and edges",
        "Oral presentation of our theoretical analyses, experiments, and conclusions"
      ]
    },
    role: {
      fr: "Compréhension du problème de base pour identifier les contraintes et objectifs, participation à la modélisation mathématique, à l’analyse de complexité et à l’implémentation Python des algorithmes (brute force, glouton, heuristiques, métaheuristiques, D*). Génération d’instances, réalisation des expérimentations et production des graphiques et statistiques. Contribution active au travail d’équipe : échanges d’idées, répartition des tâches, points d’avancement et soutenance orale.",
      en: "Understanding the base problem to identify constraints and objectives, contributed to mathematical modeling, complexity analysis, and Python implementation of algorithms (brute force, greedy, heuristics, metaheuristics, D*). Generated instances, ran experiments, and produced charts and statistics. Actively participated in teamwork: idea sharing, task distribution, progress meetings, and oral defense."
    },
    learnings: {
      fr: "Approfondissement en modélisation sur graphe, optimisation combinatoire et analyse de complexité. Analyse et modélisation de problèmes NP-complets et difficiles, implémentation et comparaison d’algorithmes, pratique des algorithmes gloutons, heuristiques, métaheuristiques (2-opt, recuit simulé, génétiques, ACO) et dynamiques (D*). Développement Python avec NetworkX et Matplotlib, réalisation d’analyses statistiques et visualisations avancées, amélioration de la collaboration, de la communication et de la présentation des résultats.",
      en: "Deepened knowledge in graph modeling, combinatorial optimization, and complexity analysis. Analysis and modeling of NP-complete and hard problems, implementation and comparison of algorithms, practice with greedy algorithms, heuristics, metaheuristics (2-opt, simulated annealing, genetic, ACO), and dynamic algorithms (D*). Python development with NetworkX and Matplotlib, advanced statistical analysis and visualizations, improved collaboration, communication, and presentation skills."
    }
  },
  {
    id: "assurancesplus-security",
    title: {
      fr: "Conception d’un réseau complexe et sécurisé pour ASSURANCESPLUS",
      en: "Design of a Complex and Secure Network for ASSURANCESPLUS"
    },
    description: {
      fr: "Conception et déploiement d’une infrastructure réseau et système sécurisée pour ASSURANCESPLUS (Active Directory, VPN pour le télétravail, DMZ, pare-feu, plan de sauvegarde RPO/RTO, supervision, etc.).",
      en: "Design and deployment of a secure network and system infrastructure for ASSURANCESPLUS (Active Directory, VPN for remote work, DMZ, firewall, RPO/RTO backup plan, monitoring, etc.)."
    },
    longDescription: {
      fr: "Projet mené suite à une attaque par rançongiciel ayant paralysé une agence. Objectif : sécuriser et uniformiser l’infrastructure des agences actuelles et futures. Mise en place d’un Active Directory structuré (forêt, domaines, OU, GPO, comptes, certificats SSL), d’une architecture réseau avec DMZ, VPN pour le télétravail, filtrage par pare-feu, et mise en place d’une supervision/monitoring. Conception d’une cartographie SI (administration, logique, physique) et d’un plan de sauvegarde aligné sur les objectifs RTO/RPO pour garantir la continuité d’activité. Développement de scripts d’automatisation pour faciliter le déploiement dans les futures agences, élaboration d’un questionnaire de sécurité. Démo complète et maquette vidéo réalisées pour illustrer les solutions déployées.",
      en: "Project carried out after a ransomware attack that paralyzed one agency. Goal: secure and standardize the infrastructure of current and future agencies. Deployed a structured Active Directory (forest, domains, OUs, GPOs, accounts, SSL certificates), a network architecture with DMZ, VPN for remote work, firewall filtering, and implemented monitoring. Designed an IT system map (administrative, logical, physical) and a backup plan aligned with RTO/RPO objectives to ensure business continuity. Developed automation scripts to ease future deployments, created a security questionnaire. Complete demo and video prototype were produced to showcase the deployed solutions."
    },
    video: "/projects/assurancesplus/mockup.mp4",
    image: "/projects/assurancesplus/logiqueSiege.png",
    images: [
      "/projects/assurancesplus/logiqueSiege.png",
      "/projects/assurancesplus/logiqueAgenceStandard.png",
      "/projects/assurancesplus/logiqueAgenceToBackup.png",
      "/projects/assurancesplus/physique-siege.png",
      "/projects/assurancesplus/AD.png",
      "/projects/assurancesplus/organisationDroitUtilisateurs.png",
      "/projects/assurancesplus/OU.png",
      "/projects/assurancesplus/GPO.png",
      "/projects/assurancesplus/firewall.png",
      "/projects/assurancesplus/passwordPolicy.png",
      "/projects/assurancesplus/supervision.png",
      "/projects/assurancesplus/policyFilter.png",
      "/projects/assurancesplus/firewall-siege-schemas.png",
      "/projects/assurancesplus/Architecture-Structure-stockage.png",
      "/projects/assurancesplus/sumary.png",
      "/projects/assurancesplus/sumary2.png"
    ],
    technologies: [
      "Active Directory",
      "LDAP",
      "Organizational Units",
      "Domain Controllers",
      "VPN",
      "Firewall",
      "pfSense",
      "Supervision / Monitoring",
      "Zabbix",
      "Réseau",
      "DMZ",
      "RAID",
      "Backup & Restore",
      "RPO/RTO",
      "Group Policy Objects",
      "User & Group Management",
      "Security Policies (ANSSI)",
      "SSL Certificates",
      "PowerShell / Bash Scripts",
      "PostgreSQL"
    ],
    features: {
      fr: [
        "Déploiement d’un Active Directory structuré (forêt, domaines, unités d’organisation, GPO, gestion des comptes et des droits)",
        "Mise en place d’un VPN sécurisé pour l’accès à distance (itinérants et télétravail)",
        "Architecture réseau sécurisée incluant DMZ, pare-feu et politique de filtrage",
        "Cartographie complète du SI (administration, infrastructure logique et physique)",
        "Plan de sauvegarde aligné sur les objectifs RPO/RTO, adapté à la criticité des données",
        "Application des politiques de sécurité (ANSSI) : mots de passe, authentification, traçabilité",
        "Mise en place de certificats SSL et gestion des clés privées",
        "Scripts d’automatisation pour déploiement AD, création d’OU, utilisateurs et certificats",
        "Questionnaire de sécurité pour identifier les vulnérabilités et proposer des axes de remédiation",
        "Mise en place d’une supervision / monitoring des systèmes et services",
        "Documentation technique détaillée et justification des choix d’architecture",
        "Démo complète des solutions déployées et scénarios de sécurité",
        "Maquette fonctionnelle réalisée sous forme de vidéo de présentation (voir ci-dessus)"
      ],
      en: [
        "Deployment of a structured Active Directory (forest, domains, OUs, GPOs, user and rights management)",
        "Implementation of a secure VPN for remote access (mobile staff and telework)",
        "Secure network architecture including DMZ, firewall, and filtering policies",
        "Comprehensive IT system mapping (administration, logical and physical infrastructure)",
        "Backup plan aligned with RPO/RTO objectives, adapted to data criticality",
        "Application of security policies (ANSSI): passwords, authentication, traceability",
        "SSL certificates setup and private key management",
        "Automation scripts for AD deployment, OU/user creation, and certificate management",
        "Security questionnaire to identify vulnerabilities and propose remediation",
        "Implementation of system and service monitoring",
        "Detailed technical documentation and justification of architectural choices",
        "Complete demo of deployed solutions and security scenarios",
        "Functional prototype presented as a video demo (see above)"
      ]
    },
    role: {
      fr: "Participation active à la conception de l’architecture réseau et sécurité, avec échanges réguliers au sein du groupe : propositions de solutions, retours sur les choix techniques, participation aux réunions de suivi et résolution de problèmes. Mise en place de l’Active Directory, des règles de pare-feu, des schémas réseau, des scripts d’automatisation (utilisateurs, certificats, OU), ainsi que contribution à la rédaction du questionnaire de sécurité, du plan de sauvegarde, de la documentation technique et à la démo/maquette présentée.",
      en: "Actively contributed to the design of the network and security architecture, collaborating closely with the team by proposing solutions, providing feedback on technical choices, and participating in progress meetings and problem-solving. Implemented Active Directory, firewall rules, network diagrams, and automation scripts (users, certificates, OUs), as well as contributing to the security questionnaire, backup plan, technical documentation, and the demo/prototype presentation."
    },
    learnings: {
      fr: "Approfondissement global des compétences en administration système et sécurité : installation et gestion d’Active Directory et LDAP, création d’unités d’organisation (OU) et de stratégies de groupe (GPO), configuration de règles de pare-feu, conception de schémas réseau, élaboration de plans de sauvegarde alignés avec les objectifs RPO/RTO, mise en place de certificats et politiques de sécurité, automatisation via scripts. Expérience complète en gestion de projet en équipe (réunions, suivi, coordination), avec réalisation et présentation d’une démo professionnelle.",
      en: "Comprehensive reinforcement of system and security administration skills: installation and management of Active Directory and LDAP, creation of organizational units (OUs) and group policies (GPOs), configuration of firewall rules, design of network diagrams, development of backup plans aligned with RPO/RTO objectives, implementation of certificates and security policies, automation through scripting. Gained full project experience in teamwork (meetings, follow-up, coordination), along with delivering a professional demo presentation."
    },
    githubUrl: "",
    featured: true
  },
  {
    id: "django-quiz",
    title: {
      fr: "Évolution d’une plateforme et création d’un quiz sous Django",
      en: "Platform Enhancement and Django Quiz Development"
    },
    description: {
      fr: "Évolution d’une plateforme Django (BakeryDemo) et développement d’une application de quiz sous Django.",
      en: "Enhancement of a Django platform (BakeryDemo) and development of a Django quiz application."
    },
    longDescription: {
      fr: "Projet en deux étapes. La première a porté sur l’évolution de la démo Bakery de Django, avec mise en place de tests sur les données, API REST et hooks/signaux. La seconde phase a consisté à concevoir et développer notre propre site de quiz sous Django, avec des questions organisées par catégories et niveaux de difficulté, et un suivi des scores des utilisateurs.",
      en: "Two-stage project. The first stage focused on enhancing Django's Bakery demo, including data tests, REST API, and hooks/signals. The second stage involved designing and developing our own quiz site in Django, with questions organized by categories and difficulty levels, and tracking users' scores."
    },
    image: "/projects/django-quiz/home2.png",
    images: [
      "/projects/django-quiz/home1.png",
      "/projects/django-quiz/signup.png",
      "/projects/django-quiz/signin.png",
      "/projects/django-quiz/home2.png",
      "/projects/django-quiz/quiz.png",
      "/projects/django-quiz/score.png",
    ],
    technologies: [
      "Python",
      "Django",
      "SQLite",
      "GitLab",
      "Unit Testing",
      "REST API",
      "Management Commands",
      "Signals & Hooks",
      "Matplotlib"
    ],
    githubUrl: "https://github.com/yaniskadri/wagtail-quiz",
    featured: true,
    features: {
      fr: [
        "Alimentation massive de la base de données depuis une API externe via commande python manage.py fetch_quizz_data",
        "Création de compte, connexion, consultation du profil et déconnexion",
        "Commande pour calculer la moyenne globale des scores : python manage.py moyenne_score",
        "Paramétrage du quiz : choix de la catégorie et du niveau de difficulté (easy, medium, hard, all)",
        "Visualisation des scores par graphique",
        "Tests unitaires sur les modèles, vues et endpoints",
        "Hooks et signaux sur les modèles (Question, CustomUser, Score) et sur l’API",
        "Documentation d’installation et guide d’utilisation (README/Markdown)"
      ],
      en: [
        "Massive database population from an external API using command python manage.py fetch_quizz_data",
        "Account creation, login, profile viewing, and logout",
        "Command to compute global average score: python manage.py moyenne_score",
        "Quiz settings: select category and difficulty (easy, medium, hard, all)",
        "Score visualization via chart",
        "Unit tests on models, views, and endpoints",
        "Hooks and signals on models (Question, CustomUser, Score) and API",
        "Installation and user guide documentation (README/Markdown)"
      ]
    },
    role: {
      fr: "Participation active au développement back-end Django (API REST, commandes Python personnalisées, hooks/signaux), création et gestion de la base de données MySQL, écriture de tests, et travail en équipe avec partage des tâches et points réguliers sur l’avancement.",
      en: "Active participation in Django back-end development (REST API, custom Python management commands, hooks/signals), MySQL database creation and management, writing tests, and teamwork with task sharing and regular progress check-ins."
    },
    learnings: {
      fr: "Amélioration des compétences sur Django, création et utilisation de commandes Python personnalisées pour gérer et remplir la base de données, conception d’APIs REST, suivi des scores, et renforcement du travail en équipe et de la coordination.",
      en: "Improved skills in Django, building and using custom Python management commands to manage and populate the database, designing REST APIs, score tracking, and strengthened teamwork and coordination."
    },
  },
  {
    id: "library-app",
    title: {
      fr: "Application de gestion de bibliothèque",
      en: "Library Management Application"
    },
    description: {
      fr: "Application web full-stack pour découvrir des séries, suivre leur progression et gérer plusieurs utilisateurs.",
      en: "Full-stack web application to discover TV series, track progress, and manage multiple users."
    },
    longDescription: {
      fr: "Développement d'une Progressive Web App full-stack avec Symfony et React, permettant de découvrir des séries et suivre leur progression. L'application inclut la gestion multi-utilisateurs avec connexion sécurisée, un mode administrateur pour gérer les utilisateurs et leurs abonnements, un système de recommandation, ainsi que la recherche et la pagination des séries. Les tâches ont été organisées via un Board et la méthodologie agile SCRUM a été appliquée avec planification des sprints, daily meetings, review et rétrospectives.",
      en: "Development of a full-stack Progressive Web App with Symfony and React to discover TV series and track progress. The application includes multi-user management with secure login, an admin mode for managing users and subscriptions, a recommendation system, and series search with pagination. Task organization was done via a Board, and agile SCRUM methodology was applied with sprint planning, daily meetings, reviews, and retrospectives."
    },
    image: "/projects/pwa-main.png",
    images: [
      "/projects/pwa-main.png",
      "/projects/pwa-board.png",
      "/projects/pwa-database.png"
    ],
    technologies: ["Symfony", "React", "MySql", "Visual Studio Code", "CSS", "Agile Scrum", "Progressive Web App"],
    githubUrl: "https://github.com/yaniskadri/pwa-series-app",
    featured: true,
    features: {
      fr: [
        "Création, connexion et déconnexion d’un utilisateur",
        "Mode déconnecté : rechercher livre par nom d’auteur, autocomplétion, voir informations livres et dernières acquisitions",
        "Mode connecté : abonnement/désabonnement à un utilisateur, liste des abonnements et livres empruntés, système de recommandation",
        "Back-end avec Symfony et front-end avec React",
        "Gestion de la base de données avec Doctrine et création de fixtures pour les données utilisateurs et séries",
        "Création et documentation des APIs avec Swagger",
        "Organisation des tâches via un Board et méthodologie SCRUM",
        "Préparation et réalisation de la démo de l’application"
      ],
      en: [
        "User creation, login, and logout",
        "Disconnected mode: search book by author, autocomplete, view book information and latest acquisitions",
        "Connected mode: subscribe/unsubscribe to a user, subscription list and borrowed books, recommendation system",
        "Back-end with Symfony and front-end with React",
        "Database management with Doctrine and data fixtures for users and series",
        "API creation and documentation with Swagger",
        "Task organization via a Board and SCRUM methodology",
        "Preparing and conducting the application demo"
      ]
    },
    role: {
      fr: "Développement full-stack de l'application, intégration de la base de données, création d’APIs, et participation active à la méthodologie agile avec travail en équipe, partage des tâches et communication.",
      en: "Full-stack development of the application, database integration, API creation, and active participation in agile methodology with teamwork, task sharing, and communication."
    },
    learnings: {
      fr: "Amélioration des compétences en Symfony, Doctrine et React, maîtrise de la création et de l’utilisation d’APIs avec Swagger, interconnexion front-end/back-end, préparation de démonstrations, et renforcement du travail en équipe et de la communication en méthodologie agile.",
      en: "Improved skills in Symfony, Doctrine, and React, mastery of API creation and usage with Swagger, front-end/back-end integration, preparing demos, and strengthened teamwork and communication in agile methodology."
    },
  },
  {
    id: "rope-ds",
    title: {
      fr: "Implémentation d'une structure de données Rope",
      en: "Rope Data Structure Implementation"
    },
    description: {
      fr: "Application C implémentant la structure Rope pour optimiser les opérations sur des chaînes de caractères.",
      en: "C application implementing the Rope structure to optimize string operations."
    },
    longDescription: {
      fr: "Le projet consistait à implémenter la structure Rope en C pour optimiser la gestion des chaînes de caractères, comparer ses performances avec un tableau classique et produire des rapports de benchmark avec gestion de la mémoire.",
      en: "The project involved implementing the Rope structure in C to optimize string handling, compare its performance with a traditional array, and produce benchmark reports with careful memory management."
    },
    image: "/projects/rope-main.png",
    images: [
      "/projects/rope-main.png",
      "/projects/rope-benchmark.png"
    ],
    technologies: ["C", "Visual Studio Code", "GitLab", "Data Structures", "Memory Management", "Performance Benchmarking", "UML"],
    githubUrl: "https://github.com/yaniskadri/rope-ds",
    featured: true,
    features: {
      fr: [
        "Implémentation de la structure Rope pour la gestion de chaînes de caractères",
        "Insertion et suppression de chaînes",
        "Mesure des temps d'exécution pour la construction, l'insertion et la suppression des structures, et comparaison avec un tableau classique",
        "Création de bancs d'essai pour benchmark",
        "Analyse des performances et rédaction de rapports avec représentation graphique en Python",
        "Gestion de la mémoire pour éviter les fuites"
      ],
      en: [
        "Implementation of Rope data structure for string management",
        "Insertion and deletion of strings",
        "Execution time measurement for construction, insertion, and deletion of structures, and comparison with a traditional array",
        "Creation of test benches for benchmarking",
        "Performance analysis and report writing with graphical representation using Python",
        "Memory management to prevent leaks"
      ]
    },
    role: {
      fr: "Développement complet de la structure Rope, création de bancs d'essai, analyse des performances et production de rapports clairs.",
      en: "Full development of the Rope structure, creation of test benches, performance analysis, and clear report production."
    },
    learnings: {
      fr: "Renforcement des compétences en C, optimisation de la mémoire, analyse de performances et rédaction technique claire et concise.",
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
      fr: "Application Python pour jouer au jeu de plateau Concordia avec interface graphique, IA et gestion de plusieurs joueurs.",
      en: "Python application to play the board game Concordia with graphical interface, AI, and multi-player support."
    },
    longDescription: {
      fr: "Le jeu de plateau Concordia a été implémenté en Python avec une interface graphique Tkinter. L'application gère plusieurs joueurs, inclut une IA pour jouer contre l'ordinateur, et initialise le jeu via une base de données. Seules certaines cartes et règles ont été implémentées. Des diagrammes UML ont été produits pour les classes, cas d'utilisation, communication et séquence. L'intégration continue et les tests unitaires ont été mis en place pour valider l'initialisation du jeu et le fonctionnement des cartes implémentées.",
      en: "The board game Concordia was implemented in Python with a Tkinter graphical interface. The application supports multiple players, includes an AI to play against the computer, and initializes the game via a database. Only a subset of cards and rules were implemented. UML diagrams were created for classes, use cases, communication, and sequence. Continuous integration and unit tests were set up to validate game initialization and the implemented card functionality."
    },
    image: "/projects/concordia-main.png",
    images: [
      "/projects/concordia-main.png",
      "/projects/concordia-board.png",
      "/projects/concordia-ai.png"
    ],
    technologies: ["Python", "Tkinter", "Visual Studio Code", "GitLab", "CI/CD", "Neo4j", "Database Integration", "Unit Testing", "AI Implementation", "UML"],
    githubUrl: "https://github.com/yaniskadri/concordia-game",
    featured: true,
    features: {
      fr: [
        "Interface graphique pour jouer au jeu Concordia",
        "Gestion multi-joueurs et menu pour choisir map, nombre de joueurs et utilisation de l'IA",
        "Intégration d'une IA pour jouer contre l'ordinateur",
        "Initialisation du jeu via une base de données NoSQL avec tables imbriquées",
        "Production de diagrammes UML : classes, cas d'utilisation, communication et séquence",
        "Tests unitaires pour vérifier l'initialisation du jeu et l'effet des cartes",
        "Intégration continue via GitLab"
      ],
      en: [
        "Graphical interface to play Concordia",
        "Multi-player support and menu for selecting map, number of players, and AI usage",
        "AI integration to play against the computer",
        "Game initialization using a NoSQL database with nested tables",
        "UML diagrams produced: classes, use cases, communication, and sequence",
        "Unit tests to validate game initialization and card effects",
        "Continuous integration via GitLab"
      ]
    },
    role: {
      fr: "Développement du jeu, implémentation de l'IA, intégration de la base de données et création de l'interface graphique, participation active au travail en équipe et aux réunions pour coordonner l'avancée.",
      en: "Game development, AI implementation, database integration, and graphical interface creation, actively participating in teamwork and meetings to coordinate progress."
    },
    learnings: {
      fr: "Renforcement des compétences en Python, Tkinter, gestion de base de données NoSQL avec tables imbriquées, implémentation d'une IA et tests unitaires.",
      en: "Improved skills in Python, Tkinter, handling NoSQL databases with nested tables, AI implementation, and unit testing."
    }
  },
  {
    id: "pwa-series-app",
    title: {
      fr: "Progressive Web App sur les séries TV",
      en: "Progressive Web App for TV Series"
    },
    description: {
      fr: "Application web full-stack pour découvrir des séries, suivre leur progression et gérer plusieurs utilisateurs.",
      en: "Full-stack web application to discover TV series, track progress, and manage multiple users."
    },
    longDescription: {
      fr: "Développement d'une Progressive Web App full-stack avec Symfony. L'application permet de découvrir des séries, suivre leur progression, gérer plusieurs utilisateurs avec différents rôles (admin et utilisateur normal), et appliquer la méthodologie agile SCRUM avec organisation des tâches via un Board, planification des sprints, daily meetings, review et rétrospectives.",
      en: "Development of a full-stack Progressive Web App with Symfony. The application allows discovering series, tracking progress, managing multiple users with different roles (admin and normal user), and applying agile SCRUM methodology with task organization via a Board, sprint planning, daily meetings, reviews, and retrospectives."
    },
    image: "/projects/pwa-main.png",
    images: [
      "/projects/pwa-main.png",
      "/projects/pwa-board.png",
      "/projects/pwa-database.png"
    ],
    technologies: ["Symfony", "MySQL", "Visual Studio Code", "CSS", "Agile Scrum", "Progressive Web App"],
    githubUrl: "https://github.com/yaniskadri/pwa-series-app",
    featured: true,
    features: {
      fr: [
        "Développement d'une application full-stack",
        "Gestion d'une base de données avec Doctrine",
        "Utilisateur connecté : suivre une série, la noter, commenter, consulter les informations, mettre à jour son profil et envoyer des messages à d'autres utilisateurs",
        "Visiteur non connecté : consultation des informations sur une série",
        "Recherche de séries avec filtres et pagination",
        "Gestion multi-utilisateurs avec rôles différents (administrateur et utilisateur connecté)",
        "Administrateur : bannir un utilisateur, changer son rôle, voir son profil",
        "Organisation des tâches via un Board et méthodologie agile SCRUM",
        "Réalisation d'un guide de déploiement"
      ],
      en: [
        "Full-stack application development",
        "Database management with Doctrine",
        "Connected user: follow a series, rate it, comment, view information, update profile, and send messages to other users",
        "Non-connected visitor: view series information only",
        "Series search with filters and pagination",
        "Multi-user management with different roles (administrator and connected user)",
        "Administrator: ban users, change roles, view profiles",
        "Task organization via a Board and SCRUM methodology",
        "Creation of a deployment guide"
      ]
    },
    role: {
      fr: "Participation active au développement full-stack de l'application, intégration de la base de données, gestion des rôles utilisateurs et collaboration en équipe avec partage des tâches et communication en méthodologie agile.",
      en: "Active participation in full-stack development, database integration, managing user roles, and teamwork with task sharing and communication following agile methodology."
    },
    learnings: {
      fr: "Maîtrise de Symfony et Doctrine, compréhension de la méthodologie agile SCRUM, gestion des rôles utilisateurs, suivi et annotation de séries, préparation de démonstrations et renforcement du travail en équipe et de la communication.",
      en: "Mastery of Symfony and Doctrine, understanding of agile SCRUM methodology, user role management, tracking and rating series, preparing demos, and strengthened teamwork and communication."
    }
  },
  {
    id: "bloom-filter",
    title: {
      fr: "Filtre de Bloom : Implémenter et analyser",
      en: "Bloom Filter: Implementation and Analysis"
    },
    description: {
      fr: "Application implémentant un filtre de Bloom avec plusieurs structures de données et analyse des performances.",
      en: "Application implementing a Bloom filter using multiple data structures and performance analysis."
    },
    longDescription: {
      fr: "Développement d'un filtre de Bloom en Java utilisant trois structures de données : tableau, ArrayList et LinkedList. Réalisation de benchmarks pour comparer performances et taux d'erreur, et rédaction d'un rapport détaillant les résultats. Le projet a nécessité de rechercher le fonctionnement des filtres de Bloom et de concevoir des fonctions de hachage efficaces.",
      en: "Development of a Bloom filter in Java using three data structures: array, ArrayList, and LinkedList. Benchmarks were conducted to compare performance and error rates, and a detailed report was written. The project required research on Bloom filter functionality and the implementation of effective hash functions."
    },
    image: "/projects/bloom-main.png",
    images: [
      "/projects/bloom-main.png",
      "/projects/bloom-benchmark.png",
      "/projects/bloom-structures.png"
    ],
    technologies: ["Java", "NetBeans", "GitLab", "Word", "Data Structures", "Benchmarking"],
    githubUrl: "https://github.com/yaniskadri/bloom-filter",
    featured: false,
    features: {
      fr: [
        "Implémentation du filtre de Bloom avec trois structures de données : tableau, ArrayList, LinkedList",
        "Réalisation de benchmarks pour comparer temps d'exécution et taux d'erreur",
        "Conception de fonctions de hachage optimisées",
        "Rédaction d'un rapport détaillant les résultats"
      ],
      en: [
        "Bloom filter implementation using three data structures: array, ArrayList, LinkedList",
        "Benchmarks to compare execution time and error rates",
        "Design of optimized hash functions",
        "Writing a detailed report of results"
      ]
    },
    role: {
      fr: "Développement complet du filtre de Bloom, mise en place des différentes structures de données, réalisation des benchmarks et analyse des résultats pour le rapport. Travail autonome pour la recherche des bonnes fonctions de hachage et compréhension du fonctionnement du filtre.",
      en: "Full development of the Bloom filter, implementation of different data structures, conducting benchmarks and analyzing results for the report. Autonomous research on effective hash functions and understanding Bloom filter functionality."
    },
    learnings: {
      fr: "Approfondissement de la compréhension des filtres de Bloom, capacité à analyser les performances et les taux d'erreur, amélioration des compétences en Java et en rédaction de rapports techniques.",
      en: "Deepened understanding of Bloom filters, ability to analyze performance and error rates, improved Java skills and technical report writing."
    }
  },
  {
    id: "rsa-encryption",
    title: {
      fr: "Implémentation du chiffrement RSA",
      en: "RSA Encryption Implementation"
    },
    description: {
      fr: "Application implémentant le chiffrement et le déchiffrement RSA",
      en: "Application implementing message encryption and decryption RSA"
    },
    longDescription: {
      fr: "Le projet consistait à développer une application Python implémentant le chiffrement et déchiffrement de messages avec RSA, la signature et vérification de messages, ainsi que la gestion de certificats utilisateurs via une interface textuelle.",
      en: "The project involved developing a Python application implementing RSA message encryption and decryption, message signing and verification, and user certificate management through a text-based interface."
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
        "Génération de clés publique et privée pour un utilisateur",
        "Chiffrement et déchiffrement de messages",
        "Signature, calcul et vérification d'empreintes de messages",
        "Gestion et vérification de certificats utilisateurs",
        "Calculs mathématiques : PGCD, méthode d'Euler, inverse modulaire, modulo",
        "Interface textuelle pour interaction",
        "Réalisation de tests pour validation"
      ],
      en: [
        "Generation of public and private keys for a user",
        "Message encryption and decryption",
        "Message signing, hash calculation and verification",
        "User certificate management and verification",
        "Mathematical computations: GCD, Euler's method, modular inverse, modulo",
        "Text-based interface for user interaction",
        "Tests for functionality validation"
      ]
    },
    role: {
      fr: "Développement complet des fonctionnalités RSA en Python en utilisant les concepts mathématiques (PGCD, méthode d'Euler, inverse modulaire, modulo) et l'application de ces calculs dans le code, rédaction préalable des étapes sur papier pour l'implémentation et réalisation de tests pour assurer le bon fonctionnement.",
      en: "Full development of RSA functionalities in Python using mathematical concepts (GCD, Euler's method, modular inverse, modulo) and applying these computations in the code, preliminary drafting of implementation steps on paper, and performing tests to ensure correct operation."
    },
    learnings: {
      fr: "Renforcement de la compréhension de la cryptographie asymétrique RSA, amélioration de la maîtrise de Python et application pratique des concepts de chiffrement, signature et certificats numériques.",
      en: "Enhanced understanding of asymmetric RSA cryptography, improved Python skills, and practical application of encryption, signature, and digital certificate concepts."
    }
  },
  {
    id: "mini-shell",
    title: {
      fr: "Programmation système : Réalisation d'un Shell miniature",
      en: "System Programming: Miniature Shell Implementation"
    },
    description: {
      fr: "Application implémentant un shell miniature capable d'exécuter des commandes internes et externes, avec gestion des redirections et des processus.",
      en: "Application implementing a miniature shell capable of executing internal and external commands, with redirection and process handling."
    },
    longDescription: {
      fr: "Développement d'un shell miniature en C permettant l'exécution de commandes internes (cd, pwd, mkdir, ...) et externes, y compris en arrière-plan. Gestion des redirections, des signaux et des processus via les bibliothèques système, et structuration du code pour la clarté et la lisibilité.",
      en: "Development of a miniature shell in C capable of executing internal (cd, pwd, mkdir, ...) and external commands, including background execution. Handling redirections, signals, and processes using system libraries, with well-structured and readable code."
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
        "Exécution de commandes internes (cd, pwd, mkdir, ...)",
        "Exécution de commandes externes (ls, cp, rm, ...) et en arrière-plan",
        "Gestion des redirections",
        "Utilisation des signaux et des processus",
        "Analyse et exécution des lignes de commande",
        "Utilisation obligatoire de la fonction exec"
      ],
      en: [
        "Execution of internal commands (cd, pwd, mkdir, ...)",
        "Execution of external commands (ls, cp, rm, ...) including background execution",
        "Redirection handling",
        "Use of signals and processes",
        "Command line parsing and execution",
        "Mandatory use of exec function"
      ]
    },
    role: {
      fr: "Développement complet du shell miniature en C, implémentation des commandes internes et externes, gestion des redirections et processus, et travail en équipe pour la répartition des tâches et partage des points vus sur les algorithmes.",
      en: "Full development of the miniature shell in C, implementation of internal and external commands, handling redirections and processes, and teamwork for task distribution and discussion of algorithm points."
    },
    learnings: {
      fr: "Compréhension du fonctionnement d'un shell, capacité à analyser et exécuter des lignes de commande, amélioration de la lisibilité et propreté du code, approfondissement des connaissances en C et utilisation des bibliothèques système (signal, wait, exec, open, read, write, etc.).",
      en: "Understanding how a shell works, ability to parse and execute command lines, improved code readability and cleanliness, deeper knowledge of C and use of system libraries (signal, wait, exec, open, read, write, etc.)."
    }
  },
  {
    id: "dns-server-setup",
    title: {
      fr: "Réseau et DNS : Mise en place d'un serveur DNS",
      en: "Network & DNS: Setting up a DNS Server"
    },
    description: {
      fr: "Projet de mise en place d'un réseau DNS virtuel avec configuration des serveurs, clients, zones et tests de fonctionnement.",
      en: "Project involving the setup of a virtual DNS network with server, client, zone configuration, and functionality testing."
    },
    longDescription: {
      fr: "Le projet consistait à installer et configurer un réseau DNS virtuel en utilisant des machines virtuelles. Il incluait la configuration des clients DNS, des serveurs primaires et secondaires, des domaines principaux et zones inverses, ainsi que des sous-domaines et alias. La configuration a été testée avec des commandes ping et host et un tutoriel a été rédigé en Markdown.",
      en: "The project involved installing and configuring a virtual DNS network using virtual machines. This included configuring DNS clients, primary and secondary servers, main and reverse zones, as well as subdomains and aliases. Configuration was tested with ping and host commands, and a setup tutorial was written in Markdown."
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
        "Configuration des clients DNS : Serveur primaire, Serveur secondaire, Domaine principal, Zones inverses, Sous-domaines : Alias",
        "Création des zones principales et inverses",
        "Gestion des sous-domaines et alias",
        "Configuration IP des machines et nommage local",
        "Tests de configuration avec ping et host",
        "Respect du principe client-serveur"
      ],
      en: [
        "Virtual DNS network setup",
        "Configuration of primary and secondary servers",
        "Configuration of DNS clients: Primary server, Secondary server, Main domain, Reverse zones, Subdomains and aliases",
        "Creation of main and reverse zones",
        "Management of subdomains and aliases",
        "IP configuration and local naming of machines",
        "Testing configuration with ping and host",
        "Respecting the client-server principle"
      ]
    },
    role: {
      fr: "Installation et configuration complète du réseau DNS, configuration des clients et serveurs, gestion des zones et sous-domaines, rédaction du tutoriel en Markdown.",
      en: "Full setup and configuration of the DNS network, configuring clients and servers, managing zones and subdomains, writing the setup tutorial in Markdown."
    },
    learnings: {
      fr: "Compréhension des concepts DNS, utilisation des commandes Bash pour la configuration, mise en place complète d'un réseau DNS, rédaction d'un tutoriel technique en Markdown.",
      en: "Understanding DNS concepts, using Bash commands for configuration, full setup of a DNS network, writing a technical tutorial in Markdown."
    }
  },
  {
    id: "maze-app",
    title: {
      fr: "Réalisation d'une application de labyrinthe",
      en: "Maze Application Development"
    },
    description: {
      fr: "Application de labyrinthe permettant l'affichage du labyrinthe, le déplacement manuel du personnage, le déplacement automatique des monstres, avec tests unitaires et validation des fichiers pour assurer le bon fonctionnement.",
      en: "Maze application featuring maze display, manual character movement, automatic monster movement, with unit tests and file validation to ensure proper functioning."
    },
    longDescription: {
      fr: "Le projet consistait à compléter et améliorer une application de labyrinthe existante en ajoutant des fonctionnalités précises. Cela incluait l'affichage du labyrinthe, le déplacement manuel du personnage, le déplacement automatique des monstres, ainsi que la mise en place de tests unitaires et la validation des fichiers nécessaires.",
      en: "The project involved completing and enhancing an existing maze application by adding specific features. This included maze display, manual character movement, automatic monster movement, as well as implementing unit tests and validating necessary files."
    },
    image: "/projects/maze-main.png",
    images: [
      "/projects/maze-main.png",
      "/projects/maze-movement.png",
      "/projects/maze-uml.png"
    ],
    technologies: ["Java", "NetBeans 13", "UML", "Markdown"],
    githubUrl: "https://github.com/yaniskadri/maze-app",
    featured: false,
    features: {
      fr: [
        "Affichage du labyrinthe",
        "Déplacement manuel du personnage",
        "Déplacement automatique des monstres",
        "Tests unitaires et validation des fichiers",
        "Diagrammes de classes UML",
        "Journal de bord en format markdown",
        "Utilisation du polymorphisme"
      ],
      en: [
        "Maze display",
        "Manual character movement",
        "Automatic monster movement",
        "Unit testing and file validation",
        "UML class diagrams",
        "Markdown project log",
        "Use of polymorphism"
      ]
    },
    role: {
      fr: "Amélioration des fonctionnalités existantes et ajout de nouvelles fonctionnalités dans l'application de labyrinthe, utilisation du polymorphisme et suivi du journal de bord.",
      en: "Enhancing existing features and adding new functionality to the maze application, using polymorphism and maintaining the project log."
    },
    learnings: {
      fr: "Savoir réaliser des fonctionnalités précises, appliquer le polymorphisme, structurer le code avec UML et rédiger un journal de bord en markdown.",
      en: "Gained experience implementing specific features, applying polymorphism, structuring code with UML, and writing a project log in markdown."
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
        "Utilisation d'un inventaire et ramassage d'items",
        "Mouvement du personnage et gestion des animations",
        "Détection du sol pour sauter et gestion des collisions avec objets 3D",
        "Gestion de la vie du personnage",
        "Terraforming (modification du terrain)",
        "Compréhension du fonctionnement d'Unity : Components, scènes, objets 3D, scripts et fonctions intégrées (Vector, Raycast, etc.)",
        "Organisation des matériaux, objets et prefabs",
        "Acquisition de compétences en C# et autonomie"
      ],
      en: [
        "Inventory usage and item pickup",
        "Character movement and animation handling",
        "Ground detection for jumping and collision management with 3D objects",
        "Character health management",
        "Terraforming (modifying terrain)",
        "Understanding Unity functionality: Components, scenes, 3D objects, scripting and built-in functions (Vector, Raycast, etc.)",
        "Organization of materials, objects, and prefabs",
        "C# skills acquisition and gaining autonomy"
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
      fr: "Logiciel permettant de visualiser des graphiques climatiques sur une interface unique à partir de données collectées selon la demande du client, avec création de la base de données et des graphiques.",
      en: "Software enabling visualization of climate graphs on a single interface based on client-requested data, with automatic database and graph generation."
    },
    longDescription: {
      fr: "Le projet consistait à développer un outil de visualisation graphique pour des données climatiques, en suivant le cahier des charges et en respectant le planning. L'application permettait de créer automatiquement une base de données et des graphiques clairs pour sensibiliser les salariés du client aux enjeux climatiques.",
      en: "The project involved developing a visualization tool for climate data, following the requirements and project schedule. The application created a database and clear graphs to inform client employees about climate issues."
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
        "Visualisation sur une carte interactive avec affichage graphique des données climatiques par pays (energies, TODO...)",
        "Création d'une base de données et intégration des données",
        "Analyse du cahier des charges et spécifications",
        "Planification et suivi du projet : document de spécifications, plan de projet, bilan de réalisation, comités de pilotage",
        "Utilisation de Pandas, GeoPandas, NumPy et Matplotlib pour les graphiques"
      ],
      en: [
        "Interactive map visualization with graphical display of climate data by country (energies, TODO...)",
        "Database creation and data integration",
        "Requirement analysis and specifications",
        "Project planning and monitoring: specifications document, project plan, project report, steering committees",
        "Use of Pandas, GeoPandas, NumPy, and Matplotlib for graphing"
      ]
    },
    role: {
      fr: "Travail en équipe et communication : répartition des tâches pour optimiser le temps, développement du logiciel et des graphiques, présentations orales régulières pour faire des retours et ajuster le projet.",
      en: "Teamwork and communication: task distribution to optimize time, software and graph development, regular oral presentations to provide feedback and adjust the project."
    },
    learnings: {
      fr: "Savoir organiser un projet rapidement (document de spécifications, plan de projet), analyser efficacement les besoins du client, créer un logiciel et une base de données à partir de données collectées, et préparer des présentations orales.",
      en: "Ability to organize a project quickly (specifications document, project plan), efficiently analyze client requirements, create software and database from collected data, and prepare oral presentations."
    }
  },
  {
    id: "auction-management-app",
    title: {
      fr: "Conception et développement d'application de gestion d'enchères",
      en: "Auction Management Application Development"
    },
    description: {
      fr: "Application de gestion d'enchères avec interface en ligne de commande et fonctionnalités pour plusieurs types d'utilisateurs.",
      en: "Auction management application with a command-line interface and features for multiple types of users."
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
      fr: "Analyse des besoins, conception UML, développement des fonctionnalités et interface utilisateur en terminal selon le rôle de l’utilisateur dans l’application, utilisation des concepts Java (prédicat, itérateur, comparateur) de manière appropriée.",
      en: "Requirement analysis, UML design, development of features and terminal-based user interface according to the user's role in the application, effective use of Java concepts (predicate, iterator, comparator)."
    },
    learnings: {
      fr: "Renforcement des compétences en analyse, structuration du code avec héritage et polymorphisme, tests unitaires, conception UML, et utilisation efficace des concepts Java (prédicat, itérateur, comparateur).",
      en: "Enhanced skills in analysis, code structuring with inheritance and polymorphism, unit testing, UML design, and effective use of Java concepts (predicate, iterator, comparator)."
    },
  },
  {
    id: "graph-pathfinding",
    title: {
      fr: "Graphes : Algorithmes de recherche de chemin",
      en: "Graphs: Pathfinding Algorithms"
    },
    description: {
      fr: "Création d'un graphe interactif non orienté et non pondéré, avec implémentation d'algorithmes de recherche de chemin et gestion d'obstacles.",
      en: "Creation of an interactive, undirected and unweighted graph with pathfinding algorithms implementation and obstacle management."
    },
    longDescription: {
      fr: "Le projet consistait à créer un graphe interactif et à réaliser des algorithmes de parcours de graphe, tout en définissant des sommets de départ, d'arrivée et des obstacles, avec une interface graphique pour visualiser le fonctionnement.",
      en: "The project involved creating an interactive graph and implementing graph traversal algorithms, defining start and end vertices as well as obstacles, with a graphical interface to visualize the process."
    },
    image: "/projects/graph-main.png",
    images: [
      "/projects/graph-main.png",
      "/projects/graph-a-star.png",
      "/projects/graph-bfs.png"
    ],
    technologies: ["Java", "Théorie des graphes (Graph theory)", "JBotSim", "Maven", "NetBeans 13"],
    githubUrl: "https://github.com/yaniskadri/graph-pathfinding",
    featured: false,
    features: {
      fr: [
        "Création manuelle d’un graphe non orienté et non pondéré en ajoutant les sommets et liens au clic",
        "Implémentation d'algorithmes de recherche de chemin : A* et parcours en largeur",
        "Définition des sommets de départ et d’arrivée, et placement d’obstacles",
        "Interface graphique interactive pour visualiser le graphe et les parcours",
        "Utilisation de la bibliothèque JBotSim et gestion du projet avec Maven"
      ],
      en: [
        "Manual creation of an undirected, unweighted graph by adding vertices and edges on click",
        "Implementation of pathfinding algorithms: A* and BFS",
        "Definition of start and end vertices, and placement of obstacles",
        "Interactive graphical interface to visualize the graph and traversals",
        "Use of JBotSim library and project management with Maven"
      ]
    },
    role: {
      fr: "Développement de l'application, implémentation des algorithmes de parcours de graphe en utilisant les méthodes File et Queue, et conception de l'interface graphique.",
      en: "Development of the application, implementation of graph traversal algorithms using File and Queue methods, and design of the graphical interface."
    },
    learnings: {
      fr: "Amélioration de la maîtrise de Maven et de l'implémentation des algorithmes de parcours de graphe.",
      en: "Improved Maven skills and enhanced implementation of graph traversal algorithms."
    },
  },
  {
    id: "team-activities-open-day",
    title: {
      fr: "Activités pour la journée portes ouvertes",
      en: "Open Day Activities"
    },
    description: {
      fr: "Création d'une application et d'exercices pour la journée portes ouvertes de l'IUT de Gradignan, incluant une série d'exercices sur un document à fournir aux lycéens.",
      en: "Creation of an application and exercises for the Open Day at IUT Gradignan, including a series of exercises on a document for high school students."
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
    technologies: ["Processing", "Java", "Word"],
    githubUrl: "https://github.com/yaniskadri/team-activities-open-day",
    featured: false,
    features: {
      fr: [
        "Création de l'application principale",
        "Développement de la version d’exercices à compléter",
        "Séries d'exercices pédagogiques pour les lycéens sur un document"
      ],
      en: [
        "Creation of the main application",
        "Development of the exercise version to be completed",
        "Educational exercise series for high school students on a document"
      ]
    },
    role: {
      fr: "Travailler en équipe pour concevoir des exercices pédagogiques, réfléchir à des exercices simples tout en augmentant progressivement la difficulté, brainstormer et organiser collectivement les activités.",
      en: "Work in a team to design educational exercises, plan simple exercises while progressively increasing difficulty, brainstorm, and collaboratively organize activities."
    },
    learnings: {
      fr: "Renforcement des compétences en développement collaboratif, gestion des tâches en équipe, confiance en l’équipe, amélioration de la propreté et lisibilité du code, et rédaction d’exercices accessibles aux personnes ne connaissant pas le langage ou l’informatique en général.",
      en: "Strengthened skills in collaborative development, team task management, team confidence, improved code readability and cleanliness, and writing exercises accessible to people with no prior knowledge of the language or computing."
    }
  },
  {
    id: "database-creation",
    title: {
      fr: "Création de base de données",
      en: "Database Creation"
    },
    description: {
      fr: "Conception et création d'une base de données optimisée pour répondre aux besoins précis d'une entreprise spécialisée dans le vin, en prenant en compte les fonctionnalités demandées (gestion des vins, listes, commandes, etc.).",
      en: "Design and creation of an optimized database to meet the specific requirements of a wine-focused company, taking into account requested features (wine management, lists, orders, etc.)."
    },
    longDescription: {
      fr: "Ce projet consistait à analyser un cahier des charges fourni par une entreprise spécialisée dans le vin, modéliser un MCD adapté, générer les scripts SQL et réaliser des requêtes pour vérifier et manipuler les données. L'objectif était de créer une base fonctionnelle et optimisée répondant aux besoins réels de l'entreprise.",
      en: "This project involved analyzing a specification provided by a wine-focused company, modeling an appropriate ERD, generating SQL scripts, and running queries to verify and manipulate data. The goal was to create a functional and optimized database meeting the company's actual needs."
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
        "Création des tables et insertion de données",
        "Réalisation de requêtes SQL pour interrogation et manipulation",
        "Gestion des vins classés et non classés : ajout de vins, consultation des listes selon classement et type, gestion des commandes et du personnel, etc.",
        "Maquettes pour la future interface"
      ],
      en: [
        "Requirement analysis and ERD creation",
        "Table creation and data insertion",
        "SQL queries for data retrieval and manipulation",
        "Management of categorized and uncategorized wines: adding wines, viewing lists by classification and type, managing orders and staff, etc.",
        "Mockups for the future interface"
      ]
    },
    role: {
      fr: "Analyse du cahier des charges de l'entreprise, conception et réalisation de la base de données, génération des scripts SQL et tests des requêtes. Travail en binôme et échanges pour valider les choix techniques.",
      en: "Analyzed the company's requirements, designed and implemented the database, generated SQL scripts, and tested queries. Worked in pair programming with exchanges to validate technical choices."
    },
    learnings: {
      fr: "J'ai renforcé mes compétences en analyse des besoins, modélisation MCD, SQL et bonnes pratiques pour créer une base de données optimisée répondant aux besoins d'une entreprise.",
      en: "I strengthened my skills in requirements analysis, ERD modeling, SQL, and best practices to create an optimized database meeting a company's needs."
    }
  },
  {
    id: "client-website",
    title: {
      fr: "Création d'un site pour les besoins clients",
      en: "Client Website Creation"
    },
    description: {
      fr: "Développement d'un site web répondant aux besoins d'une entreprise fictive, structuré et responsive.",
      en: "Development of a website meeting the requirements of a fictional company, structured and responsive."
    },
    longDescription: {
      fr: "Projet visant à créer un site web simple et complet pour une entreprise fictive, construit uniquement avec HTML et CSS, en suivant les informations collectées lors de la phase de conception. Le site inclut toutes les pages principales, est responsive, et respecte une bonne structuration du code.",
      en: "Project aiming to create a simple yet complete website for a fictional company, built solely with HTML and CSS, following information gathered in the design phase. The site includes all main pages, is responsive, and follows proper code structuring."
    },
    image: "/projects/client-website-main.png",
    images: [
      "/projects/client-website-main.png",
      "/projects/client-website-home.png",
      "/projects/client-website-contact.png"
    ],
    technologies: ["Visual Studio Code", "HTML", "CSS"],
    githubUrl: "https://github.com/yaniskadri/client-website",
    featured: false,
    features: {
      fr: [
        "Création de maquettes et d’un persona pour guider le design",
        "Création de toutes les pages principales : accueil, présentation, PESTEL, contact et mentions légales",
        "Site responsive adapté aux tailles desktop et smartphone",
        "Structuration claire du code HTML et CSS"
      ],
      en: [
        "Created mockups and a persona to guide the design",
        "Created all main pages: home, company presentation, PESTEL analysis, contact, and legal notices",
        "Responsive site adapted for desktop and mobile",
        "Clear and organized HTML and CSS code"
      ]
    },
    role: {
      fr: "Conception du design sur papier pour imaginer la structure des pages, travail en binôme avec gestion via Git pour répartir les tâches, intégration des pages et mise en place du responsive design.",
      en: "Designed the pages on paper to plan layout, worked in pair programming with Git for task distribution, implemented pages and ensured responsive design."
    },
    learnings: {
      fr: "Création d'un site web à partir d'un besoin client, conception de personas pour guider le design, meilleure utilisation de HTML et CSS (conteneurs, sections, menus, formulaires, animations), structuration du code et responsive design.",
      en: "Built a website from client requirements, created personas to guide the design, improved HTML and CSS usage (containers, sections, menus, forms, animations), organized code structure, and implemented responsive design."
    }
  },
  {
    id: "lowatem-phase2",
    title: {
      fr: "Lowatem Phase 2 : Mon IA vs d'autres IA",
      en: "Lowatem Phase 2: My AI vs Other AIs"
    },
    description: {
      fr: "Développement d'une IA capable de jouer et de battre d'autres IA selon les règles du jeu, avec choix stratégique des mouvements et optimisation des dégâts infligés.",
      en: "Development of an AI capable of playing and defeating other AIs according to game rules, with strategic move selection and damage optimization."
    },
    longDescription: {
      fr: "Ce projet consistait à créer une intelligence artificielle pour le jeu de plateau Lowatem, capable de prendre des décisions stratégiques pour gagner contre d'autres IA via des simulations et analyses des parties.",
      en: "This project involved creating an artificial intelligence for the Lowatem board game, capable of making strategic decisions to win against other AIs through simulations and match analysis."
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
        "IA capable de battre d'autres IA par simulation",
        "Génération par l'IA d'une liste d'actions possibles (attaques et déplacements) et choix du meilleur mouvement",
        "Optimisation des dégâts infligés à l'équipe adverse"
      ],
      en: [
        "AI capable of defeating other AIs through simulations",
        "AI generates a list of possible actions (attacks and movements) and selects the best move",
        "Optimization of damage dealt to the opposing team"
      ]
    },
    role: {
      fr: "Développement complet de l'IA pour le jeu de plateau. Utilisation du papier pour définir des stratégies, compréhension des règles du jeu et analyse des replays pour améliorer l'IA.",
      en: "Full development of the AI for the board game. Used paper to plan strategies, understood game rules, and analyzed replays to improve the AI."
    },
    learnings: {
      fr: "Amélioration des compétences en IA pour des règles données, planification stratégique, analyse des replays et apprentissage à partir des erreurs.",
      en: "Improved skills in AI for given rules, strategic planning, analyzing replays, and learning from mistakes."
    }
  },
  {
    id: "lowatem-phase1",
    title: {
      fr: "Lowatem Phase 1 : Un jeu de plateau numérique",
      en: "Lowatem Phase 1: A Digital Board Game"
    },
    description: {
      fr: "Jeu de plateau numérique implémenté en Java avec gestion des règles et validation par tests unitaires fournis.",
      en: "Digital board game implemented in Java with rule management and validation through provided unit tests."
    },
    longDescription: {
      fr: "Ce projet consistait à implémenter un jeu de plateau numérique en Java, en respectant les règles du cahier des charges. Chaque fonctionnalité demandée était validée par des tests unitaires existants, garantissant la robustesse du code.",
      en: "This project involved implementing a digital board game in Java, following the requirements of the specification. Each requested feature was validated by existing unit tests, ensuring the reliability of the code."
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
        "Gestion des types de cases : eau et terre",
        "Gestion des points de vie des unités et de l'équipe",
        "Calcul des coûts de déplacement et des dégâts émis par chaque unité",
        "Lecture et interprétation des chaînes de caractères pour déplacements et attaques",
        "Définition et reconnaissance des types d'unités avec leurs caractéristiques",
        "Création de méthodes modulaires pour éviter la duplication de code",
        "Structuration du code avec classes et énumérations pour plus de lisibilité"
      ],
      en: [
        "Management of cell types: water and land",
        "Management of unit and team health points",
        "Calculation of movement costs and damage dealt by each unit",
        "Reading and interpreting strings for moves and attacks",
        "Definition and recognition of unit types with their characteristics",
        "Creation of modular methods to avoid code duplication",
        "Structured code using classes and enums for clarity"
      ]
    },
    role: {
      fr: "Lecture et compréhension des règles fonctionnelles demandées, puis implémentation des fonctionnalités en Java. Pour concevoir les algorithmes, j'ai utilisé une méthode de travail basée sur le papier : dessin du plateau, planification des déplacements et attaques, puis implémentation dans le code.",
      en: "Read and understood the required functional rules, then implemented the features in Java. To design the algorithms, I used a paper-based method: drawing the board, planning moves and attacks, then implementing them in code."
    },
    learnings: {
      fr: "Optimisation du code en évitant les duplications avec classes et énumérations, anticipation des résultats grâce aux tests unitaires, utilisation de tableaux 2D, compréhension de règles données, écriture d’un code clair et lisible.",
      en: "Code optimization by avoiding duplication with classes and enums, anticipating results with unit tests, using 2D arrays, understanding given rules, and writing clear and readable code."
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
        "Création d’un tutoriel pour l’installation et la configuration"
      ],
      en: [
        "Install a Linux distribution on a virtual machine",
        "Create two users with specific permissions",
        "Configure the Bash terminal and change the prompt according to the Git repository",
        "Install Git and Visual Studio Code with Rust Nightly extension",
        "Create a tutorial for installation and setup"
      ]
    },
    role: {
      fr: "Mise en place complète de la machine virtuelle et configuration des outils de développement.",
      en: "Complete setup of the virtual machine and configuration of development tools."
    },
    learnings: {
      fr: "J'ai appris à créer des machines virtuelles, gérer les utilisateurs et droits sous Linux, configurer Git et le terminal pour un usage efficace en entreprise. J’ai aussi amélioré mon utilisation du terminal grâce à des commandes Bash avancées.",
      en: "I learned to create virtual machines, manage Linux users and permissions, and configure Git and the terminal for efficient enterprise usage. I also improved my terminal usage with advanced Bash commands."
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
  "Supervision / Monitoring",
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

