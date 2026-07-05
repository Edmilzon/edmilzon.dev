import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con Edmilzon Tudela",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
    </div>
  );
}
