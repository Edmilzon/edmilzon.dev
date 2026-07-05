import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors hover:text-primary"
          >
            X / Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
