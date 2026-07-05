export const siteConfig = {
  name: "Edmilzon Tudela",
  title: "Edmilzon Tudela — Full Stack Developer",
  description:
    "Full Stack Developer de Cochabamba, Bolivia. Especialista en NestJS, Next.js, Spring Boot, TypeScript y arquitectura de software.",
  url: "https://edmilzon.dev",
  ogImage: "/og.png",
  author: {
    name: "Edmilzon Tudela",
    email: "edmilzon.luna@gmail.com",
    location: "Cochabamba, Bolivia",
    university: "Universidad Mayor de San Simon (UMSS)",
    role: "Full Stack Developer",
  },
  links: {
    github: "https://github.com/Edmilzon",
    linkedin: "https://linkedin.com/in/edmilzon-tudela-5ab03b40b",
    twitter: "https://twitter.com/EdmilzonLT",
    email: "mailto:edmilzon.luna@gmail.com",
  },
  skills: [
    {
      category: "Avanzado",
      items: [
        "TypeScript", "JavaScript", "Java (Spring Boot)", "Python",
        "NestJS / Node.js", "Linux (Arch Linux)", "Arquitectura de Software",
        "Docker / AWS / Vercel", "Git / GitHub",
      ],
    },
    {
      category: "Intermedio",
      items: [
        "React / Next.js", "React Native", "Flutter (Dart)",
        "Vue.js", "PostgreSQL / MongoDB", "PHP",
      ],
    },
    {
      category: "Básico",
      items: [
        "Kotlin", "C#", "Go", "Rust", "Kubernetes", "Machine Learning",
      ],
    },
  ],
  projects: [
    {
      title: "Eco Bocado (FoodSave)",
      description:
        "App contra el desperdicio de alimentos. Conecta restaurantes con comida sobrante a personas que la compran con descuento.",
      stack: ["Flutter", "NestJS", "PostgreSQL"],
      links: {
        frontend: "https://github.com/Edmilzon/reduccion_desperdicio_alimentos",
        backend: "https://github.com/Edmilzon/reduccion_desperdicio_backend",
      },
      status: "En desarrollo activo",
    },
    {
      title: "Sistema Becas UMSS",
      description:
        "Plataforma de inscripciones universitarias para la gestión de becas PBI en la UMSS. Automatiza postulación, revisión y asignación.",
      stack: ["NestJS", "Next.js", "PostgreSQL"],
      links: { github: "https://github.com/Edmilzon/frontend_PBI" },
      duration: "1 año como Full Stack Developer",
    },
    {
      title: "Plataforma Cursos",
      description:
        "Plataforma educativa con roles (estudiante, profesor, libre), gamificación, progreso y cursos de todo tipo.",
      stack: ["Next.js", "NestJS", "PostgreSQL"],
      links: {
        frontend: "https://github.com/Edmilzon/plataforma_cursos_frontend",
        backend: "https://github.com/Edmilzon/plataforma_cursos_backend",
      },
    },
    {
      title: "Plataforma Educativa Python",
      description:
        "Curso interactivo de Python con ejercicios prácticos, challenges y seguimiento de progreso.",
      stack: ["Next.js", "NestJS", "PostgreSQL"],
      links: { github: "https://github.com/Edmilzon/plataforma_educatica_python" },
    },
    {
      title: "admi-ventas (Mermeladas)",
      description:
        "App web de venta de mermeladas artesanales con autenticación, catálogo, carrito, pagos y panel de administración.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        frontend: "https://github.com/Edmilzon/admi-ventas-frontend",
        backend: "https://github.com/Edmilzon/admi-ventas-backend",
      },
    },
    {
      title: "searchCar (Alquiler Autos)",
      description:
        "Plataforma de alquiler de vehículos con búsqueda, reservas y gestión de flota.",
      stack: ["Next.js", "TypeScript"],
      links: {
        frontend: "https://github.com/Edmilzon/searchCar-frontend",
        backend: "https://github.com/Edmilzon/searchCar-backend",
      },
    },
    {
      title: "proyect_mercado (E-commerce)",
      description:
        "E-commerce multi-usuario para ventas entre distintos usuarios con gestión de productos y pedidos.",
      stack: ["NestJS", "TypeScript", "PostgreSQL"],
      links: {
        frontend: "https://github.com/Edmilzon/proyect_mercado_frontend",
        backend: "https://github.com/Edmilzon/proyect_mercado_backend",
      },
    },
    {
      title: "EmotionDetect",
      description:
        "Chatbot que detecta el estado emocional del usuario en texto usando K-means, TF-IDF y aprendizaje no supervisado.",
      stack: ["Python", "Machine Learning", "NLP"],
      links: { github: "https://github.com/Edmilzon/detecccion_emocion" },
    },
    {
      title: "oh_Sansi (Olimpiadas)",
      description:
        "Gestor de olimpiadas y competiciones: registro de medallas, niveles, categorías y participantes.",
      stack: ["PHP", "Laravel"],
      links: { github: "https://github.com/Edmilzon/oh_Sansi_backend" },
    },
    {
      title: "Calculadora Flujos Efectivo",
      description:
        "Sistema de gestión contable que calcula flujos de efectivo y analiza proyectos financieros.",
      stack: ["Astro", "TypeScript"],
      links: { github: "https://github.com/Edmilzon/Calculadora_flujos_efectivo_astro" },
    },
    {
      title: "User Blog API",
      description:
        "API REST con 4 entidades relacionadas (usuarios, roles, blogs, artículos) con Spring Boot + JPA.",
      stack: ["Spring Boot", "JPA", "PostgreSQL"],
      links: { github: "https://github.com/Edmilzon/user_blog_backend" },
    },
    {
      title: "Tres en Raya IA",
      description:
        "Juego con 2 modos de IA: algoritmo Minimax (invencible) y búsqueda en anchura (BFS). Incluye juego del laberinto.",
      stack: ["Python", "Algoritmos de IA"],
      links: { github: "https://github.com/Edmilzon/Tres_en_Raya_Proyct_IA" },
    },
    {
      title: "PetFinder",
      description:
        "Buscador semántico de mascotas perdidas via SPARQL sobre ontología RDF/OWL con soporte ES/EN.",
      stack: ["Python", "Flask", "SPARQL"],
      links: { github: "https://github.com/Edmilzon/search_web" },
    },
  ],
  experience: [
    {
      project: "Sistema Becas UMSS (PBI)",
      role: "Full Stack Developer",
      tech: ["NestJS", "Next.js", "PostgreSQL"],
      duration: "1 año",
    },
    {
      project: "Plataforma Cursos",
      role: "Full Stack Developer",
      tech: ["Next.js", "NestJS", "PostgreSQL"],
    },
    {
      project: "Curso Aprendizaje Python",
      role: "Developer / Instructor",
      tech: ["Next.js", "NestJS", "PostgreSQL"],
    },
    {
      project: "App Mermeladas (admi-ventas)",
      role: "Full Stack Developer",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      project: "searchCar (Alquiler Autos)",
      role: "Full Stack Developer",
      tech: ["Next.js", "TypeScript"],
    },
    {
      project: "proyect_mercado (E-commerce)",
      role: "Full Stack Developer",
      tech: ["NestJS", "TypeScript", "PostgreSQL"],
    },
    {
      project: "oh_Sansi (Olimpiadas)",
      role: "Backend Developer",
      tech: ["PHP", "Laravel"],
    },
    {
      project: "Eco Bocado (FoodSave)",
      role: "Mobile + Backend Developer",
      tech: ["Flutter", "NestJS", "PostgreSQL"],
    },
  ],
};
