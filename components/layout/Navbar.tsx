"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#formacion", label: "Formación" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <a className="site-brand" href="/#inicio" onClick={() => setOpen(false)}>
          <span className="site-brand-mark" aria-hidden="true">AL</span>
          <span>Ariel Luna</span>
        </a>

        <nav
          aria-label="Navegación principal"
          className={`site-nav${open ? " is-open" : ""}`}
          id="primary-navigation"
        >
          {navLinks.map((link) => (
            <a href={`/${link.href}`} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="mobile-contact-link" href="/#contacto" onClick={() => setOpen(false)}>
            Contacto
          </a>
        </nav>

        <a className="header-cta" href={siteConfig.links.email}>
          Hablemos <span aria-hidden="true">↗</span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="menu-toggle"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
