import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Projects() {
  return (
    <section className="section projects-section" id="proyectos">
      <div className="wrap">
        <header className="section-head section-head--split">
          <div>
            <p className="eyebrow">Trabajo seleccionado</p>
            <h2>
              Proyectos con <span className="display-accent">un propósito claro.</span>
            </h2>
            <p>
              Una selección de trabajos con repositorios públicos: sistemas web
              y móviles, automatización y búsqueda semántica.
            </p>
          </div>
          <a
            className="text-link"
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            Más en GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </header>

        <div className="project-grid">
          {siteConfig.projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <span className="project-number">0{index + 1}</span>
                {project.status && <span className="project-status">{project.status}</span>}
              </div>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
                {project.stack.map((technology) => (
                  <li className="tag" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    className="text-link"
                    href={link.url}
                    key={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
