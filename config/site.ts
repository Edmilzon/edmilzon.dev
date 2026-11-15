import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Ariel Edmilzon Luna Tudela",
  title: "Ariel Edmilzon Luna Tudela — Desarrollador de software",
  description:
    "Portafolio de Ariel Edmilzon Luna Tudela, desarrollador de software en Cochabamba, Bolivia y disponible para nuevas oportunidades. Experiencia con Java, Spring Boot, React, TypeScript, NestJS, Flutter y PostgreSQL.",
  url: "https://edmilzon-dev.vercel.app",
  author: {
    name: "Ariel Edmilzon Luna Tudela",
    email: "edmilzon.luna@gmail.com",
    location: "Cochabamba, Bolivia",
    university: "Universidad Mayor de San Simón (UMSS)",
    role: "Desarrollador de software",
    semester: "8.º semestre",
    expectedGraduation: "2027",
  },
  links: {
    github: "https://github.com/Edmilzon",
    linkedin: "https://www.linkedin.com/in/edmilzon-tudela-5ab03b40b",
    email: "mailto:edmilzon.luna@gmail.com",
  },
  experience: [
    {
      company: "Soft-Craft-Bol",
      role: "Desarrollador de software",
      period: "Julio–noviembre de 2026",
      summary:
        "Desarrollé software para farmacia, autopartes, cafetería y una plataforma multitienda, colaborando en interfaces, APIs, puntos de venta, compras e inventario.",
      areas: [
        {
          name: "Farmacia",
          description:
            "Implementé un endpoint REST paginado para el catálogo del punto de venta, con búsqueda y filtros; integré consultas y sincronización de productos AGEMED, y contribuí a mejoras de navegación, imágenes y vistas de Kardex en React y TypeScript.",
        },
        {
          name: "Autopartes",
          description:
            "Contribuí a APIs y módulos para compras masivas y a crédito, proveedores, sucursales y punto de venta.",
        },
        {
          name: "Cafetería",
          description:
            "Colaboré en consultas agrupadas para punto de venta, compras, recepción, ventas e inventario, y en mejoras de interfaz para producción, recetas e historial.",
        },
        {
          name: "Sistema multitienda",
          description:
            "Colaboré en el frontend con React y TypeScript y en la API con Java 21, Spring Boot y PostgreSQL. Trabajé en el punto de venta, compras e inventario: descuentos y redondeo de caja, costos y precios derivados de compras y promociones por sucursal. También optimicé consultas e índices para la búsqueda de productos.",
        },
      ],
      stack: ["Java 21", "Spring Boot", "React", "TypeScript", "PostgreSQL", "APIs REST"],
    },
    {
      company: "Universidad Mayor de San Simón (UMSS)",
      role: "Desarrollador de software",
      period: "Mayo–noviembre de 2024",
      employmentType: "Trabajo remunerado",
      summary:
        "Participé en el desarrollo del Sistema de Becas PBI dentro de la UMSS, como parte de un equipo de cuatro personas.",
      areas: [
        {
          name: "Sistema de Becas PBI",
          description:
            "Implementé el registro de estudiantes desde CSV y su asignación por área y nivel. La plataforma apoya convocatorias de becas y evaluación docente.",
        },
      ],
      stack: ["Next.js", "NestJS", "PostgreSQL"],
      links: [
        {
          label: "Frontend PBI",
          url: "https://github.com/Edmilzon/frontend_PBI",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Admin Recursos PC",
      category: "Android · Windows",
      description:
        "Panel Android conectado por USB a un agente de Windows para consultar CPU, RAM y sensores disponibles, incluida GPU NVIDIA cuando el equipo la expone. MVP probado en un TECNO CE9.",
      stack: ["React Native", "TypeScript", "C# · .NET", "WebSocket"],
      status: "MVP probado",
      links: [
        {
          label: "Repositorio",
          url: "https://github.com/Edmilzon/admin_recursos_pc",
        },
      ],
    },
    {
      title: "CDCI",
      category: "Web · DevOps",
      description:
        "Plataforma para gestionar proyectos, miembros, permisos y auditoría, con flujos de CI/CD y releases. Las ejecuciones reales requieren configurar el runner Docker y la GitHub App.",
      stack: ["Next.js", "TypeScript", "Spring Boot", "Java 21", "PostgreSQL"],
      status: "En desarrollo",
      links: [
        {
          label: "Frontend",
          url: "https://github.com/Edmilzon/ci-cd_front",
        },
        {
          label: "Backend",
          url: "https://github.com/Edmilzon/ci-cd_back",
        },
      ],
    },
    {
      title: "Buscador semántico de mascotas",
      category: "Python · datos semánticos",
      description:
        "Aplicación que busca mascotas en lenguaje natural sobre una ontología RDF/OWL con SPARQL y razonamiento OWL. Incluye interfaz en español e inglés y datos de razas enriquecidos desde DBpedia.",
      stack: ["Python", "Streamlit", "spaCy", "RDF/OWL", "SPARQL"],
      links: [
        {
          label: "Repositorio",
          url: "https://github.com/Edmilzon/search_web",
        },
      ],
    },
    {
      title: "Eco Bocado",
      category: "App móvil · API",
      description:
        "Desarrollé la aplicación móvil y su API para publicar excedentes de comida con descuento y vigencia, confirmar pedidos, coordinar el recojo y enviar avisos de preparación.",
      stack: ["Flutter", "Dart", "NestJS", "PostgreSQL", "TypeORM"],
      links: [
        {
          label: "App Flutter",
          url: "https://github.com/Edmilzon/reduccion_desperdicio_alimentos",
        },
        {
          label: "API NestJS",
          url: "https://github.com/Edmilzon/reduccion_desperdicio_backend",
        },
      ],
    },
    {
      title: "Plataforma de cursos",
      category: "Web · educación",
      description:
        "Plataforma educativa con perfiles de estudiante, profesor y administrador, cursos y seguimiento del progreso.",
      stack: ["Next.js", "NestJS", "PostgreSQL"],
      links: [
        {
          label: "Frontend",
          url: "https://github.com/Edmilzon/plataforma_cursos_frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/Edmilzon/plataforma_cursos_backend",
        },
      ],
    },
    {
      title: "Administración financiera",
      category: "Android · en desarrollo",
      description:
        "Aplicación Android nativa con Kotlin, Jetpack Compose y autenticación con Neon. La persistencia de movimientos y las consultas financieras siguen en desarrollo; aún no está preparada para datos financieros reales.",
      stack: ["Kotlin", "Jetpack Compose", "Neon Auth"],
      status: "Proyecto en desarrollo",
      links: [
        {
          label: "Repositorio",
          url: "https://github.com/Edmilzon/administracion_financiera",
        },
      ],
    },
  ],
  skills: [
    {
      category: "Backend y APIs",
      items: ["Java", "Spring Boot", "NestJS", "Node.js", "APIs REST", "JWT", "WebSocket"],
    },
    {
      category: "Web y móvil",
      items: ["TypeScript", "JavaScript", "React", "Next.js", "Flutter", "Dart", "Kotlin"],
    },
    {
      category: "SQL y bases de datos",
      items: ["SQL", "PostgreSQL", "JPA", "TypeORM"],
    },
    {
      category: "Linux y entrega",
      items: ["Linux", "GitHub Actions", "Jenkins", "Cypress"],
    },
  ],
  education: {
    degree: "Ingeniería en Sistemas",
    university: "Universidad Mayor de San Simón (UMSS)",
    stage: "8.º semestre",
    expectedGraduation: "2027",
    complementary: [
      "Facilitador en varias actividades académicas de Linux · UMSS · 120 horas · abril de 2026",
    ],
  },
};
