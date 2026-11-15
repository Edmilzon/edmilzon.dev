import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  const recentExperience = siteConfig.experience[0];

  return (
    <section className="hero hero--split" id="inicio" data-enter="hero">
      <div className="wrap">
        <div className="hero-text hero__grid hero-layout">
          <div className="hero__text hero-copy">
            <p className="hero__kicker">
              <span className="dot" aria-hidden="true" />
              {siteConfig.author.name}
            </p>
            <h1>
              Software para <span className="display-accent">procesos reales.</span>
            </h1>
            <p className="hero__lead">
              Desarrollo soluciones web y móviles para ventas, compras,
              inventario y educación. Conecto interfaces, APIs y datos para
              responder a necesidades concretas.
            </p>

            <div className="btn-row hero-actions">
              <a className="btn btn--primary btn--xl" href={siteConfig.links.email}>
                Escribirme <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="btn btn--secondary btn--xl" href="#proyectos">
                Ver proyectos
              </a>
            </div>

            <dl className="hero__facts">
              <div>
                <dt>Experiencia</dt>
                <dd>
                  {recentExperience.company} · {recentExperience.period}
                </dd>
              </div>
              <div>
                <dt>Formación</dt>
                <dd>UMSS · {siteConfig.education.stage}</dd>
              </div>
              <div>
                <dt>Ubicación</dt>
                <dd>{siteConfig.author.location}</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__media hero-portrait">
            <Image
              src="/images/foto.jpeg"
              alt="Retrato de Ariel Edmilzon Luna Tudela"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="hero-portrait-image"
            />
            <div className="ly-float" aria-label="Experiencia profesional">
              <span className="ly-float__row">Experiencia profesional</span>
              <span className="ly-float__title">{recentExperience.company}</span>
              <span className="ly-float__row">
                {recentExperience.role} · {recentExperience.period}
              </span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
