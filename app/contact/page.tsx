import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con Ariel Edmilzon Luna Tudela.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section contact-section ground-inverse">
      <div className="wrap contact-inner">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1>Conversemos sobre tu próximo proyecto.</h1>
          <p>
            Estoy abierto a conversar sobre desarrollo de software, colaboración
            y nuevos desafíos.
          </p>
        </div>
        <a className="btn btn--primary btn--xl" href={siteConfig.links.email}>
          Escribirme <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
