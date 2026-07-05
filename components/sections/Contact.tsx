"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig } from "@/config/site";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium text-primary-light">
            Contacto
          </h2>
          <p className="mb-2 text-3xl font-semibold tracking-tight">
            Hablemos
          </p>
          <p className="mb-8 text-sm text-text-secondary">
            Si tienes un proyecto desafiante, una idea open-source o
            simplemente quieres conectar, escríbeme.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Input
            name="name"
            placeholder="Tu nombre"
            required
            disabled={status === "sending"}
          />
          <Input
            name="email"
            type="email"
            placeholder="Tu email"
            required
            disabled={status === "sending"}
          />
          <Textarea
            name="message"
            placeholder="Tu mensaje"
            required
            disabled={status === "sending"}
          />
          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full"
          >
            {status === "sending" ? (
              "Enviando..."
            ) : (
              <>
                <Send size={16} />
                Enviar mensaje
              </>
            )}
          </Button>
          {status === "sent" && (
            <p className="text-center text-sm text-green-400">
              ¡Mensaje enviado con éxito! Te responderé pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400">
              Error al enviar. Intenta de nuevo o escríbeme directamente a{" "}
              <a
                href={siteConfig.links.email}
                className="underline hover:text-primary"
              >
                {siteConfig.author.email}
              </a>
            </p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={siteConfig.links.email}
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
          >
            <Mail size={16} />
            {siteConfig.author.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
