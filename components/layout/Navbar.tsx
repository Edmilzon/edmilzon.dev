"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-primary">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-text-secondary md:hidden"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
