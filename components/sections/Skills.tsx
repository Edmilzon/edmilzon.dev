import { Database, PanelsTopLeft, Server, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/config/site";

const groupDetails: {
  icon: LucideIcon;
  label: string;
  description: string;
  highlight?: string;
  className?: string;
}[] = [
  {
    icon: Server,
    label: "Servicios · APIs",
    description: "Lógica de negocio, autenticación y comunicación entre servicios.",
  },
  {
    icon: PanelsTopLeft,
    label: "Interfaces · aplicaciones",
    description: "Experiencias web y aplicaciones móviles para distintos dispositivos.",
  },
  {
    icon: Database,
    label: "Datos · relacional",
    description:
      "SQL y bases de datos son una de mis fortalezas. Trabajo con PostgreSQL y acceso a datos con JPA y TypeORM.",
    highlight: "Fortaleza en SQL",
    className: "skill-group--data",
  },
  {
    icon: Terminal,
    label: "Sistemas · automatización",
    description:
      "Fui instructor en varias actividades académicas de Linux en la UMSS, con 120 horas impartidas. También trabajo con CI/CD.",
    highlight: "Instructor · UMSS · 120 h",
    className: "skill-group--linux",
  },
];

export function Skills() {
  return (
    <section className="section skills-section" id="tecnologias">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Tecnologías</p>
          <h2>
            Tecnología aplicada a <span className="display-accent">problemas reales.</span>
          </h2>
          <p>
            Destaco mi experiencia en SQL y bases de datos, junto con mi trabajo
            como instructor de Linux en la UMSS.
          </p>
        </header>

        <div className="skill-grid">
          {siteConfig.skills.map((group, index) => {
            const details = groupDetails[index];
            const Icon = details.icon;

            return (
              <article
                className={`skill-group ${details.className ?? ""}`}
                key={group.category}
              >
                <div className="skill-group-top">
                  <span className="skill-group-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span className="skill-group-count">
                    {String(group.items.length).padStart(2, "0")} tecnologías
                  </span>
                </div>
                <p className="skill-group-label">{details.label}</p>
                <h3>{group.category}</h3>
                <p className="skill-group-description">{details.description}</p>
                <ul aria-label={`Tecnologías de ${group.category}`}>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                {details.highlight && (
                  <p className="skill-group-highlight">
                    <span aria-hidden="true" />
                    {details.highlight}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
