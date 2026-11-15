import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Experience() {
  return (
    <section className="section experience-section" id="experiencia">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Experiencia profesional</p>
          <h2>
            Software para <span className="display-accent">operaciones reales.</span>
          </h2>
          <p>
            Experiencia en sistemas de gestión para farmacia, autopartes y
            cafetería, además de un proyecto remunerado para la UMSS.
          </p>
        </header>

        <div className="experience-statement" data-moment="word-highlight">
          <p className="mo-wh__text">
            En farmacia trabajé en catálogo y sincronización de productos; en
            autopartes, en compras y punto de venta; y en cafetería, en ventas,
            inventario y producción.
          </p>
        </div>

        <div className="experience-list">
          {siteConfig.experience.map((experience) => (
            <article className="experience-entry" key={experience.company}>
              <div className="experience-heading">
                <div>
                  <div className="experience-meta">
                    <p className="eyebrow">{experience.period}</p>
                    {experience.employmentType && (
                      <span className="experience-type">
                        {experience.employmentType}
                      </span>
                    )}
                  </div>
                  <h3>{experience.company}</h3>
                  <p className="experience-role">{experience.role}</p>
                </div>
                <div className="tag-list" aria-label="Tecnologías utilizadas">
                  {experience.stack.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <p className="experience-summary">{experience.summary}</p>

              <div className="experience-areas">
                {experience.areas.map((area, index) => (
                  <div className="experience-area" key={area.name}>
                    <span className="experience-index" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <h4>{area.name}</h4>
                    <p>{area.description}</p>
                  </div>
                ))}
              </div>

              {experience.links?.length ? (
                <div className="experience-links">
                  {experience.links.map((link) => (
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
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
