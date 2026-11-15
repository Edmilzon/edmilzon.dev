import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section className="section contact-section ground-inverse" id="contacto">
      <div className="wrap contact-inner">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>
            Hagamos que tu próximo proyecto <span className="display-accent">avance.</span>
          </h2>
          <p>
            Si tienes un proceso que mejorar, una idea que validar o un producto
            que construir, conversemos.
          </p>
        </div>
        <a className="btn btn--primary btn--xl" href={siteConfig.links.email}>
          {siteConfig.author.email} <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
