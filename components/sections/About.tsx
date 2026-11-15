import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section className="section about-section" id="sobre-mi">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Sobre mí</p>
          <h2>{siteConfig.author.name}</h2>
          <p>
            {siteConfig.author.role} y estudiante de {siteConfig.education.degree} en la {siteConfig.author.university}.
            He contribuido a aplicaciones web y móviles para procesos de ventas,
            compras, inventario, pedidos y formación.
          </p>
        </header>
      </div>
    </section>
  );
}
