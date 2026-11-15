import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer ground-inverse">
      <div className="wrap site-footer-inner">
        <a className="footer-name" href="/#inicio">
          {siteConfig.author.name}
        </a>
        <p>© {new Date().getFullYear()} · Cochabamba, Bolivia</p>
        <nav aria-label="Perfiles y contacto" className="footer-links">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={siteConfig.links.email}>Correo</a>
        </nav>
      </div>
    </footer>
  );
}
