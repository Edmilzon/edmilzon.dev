"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const categoryColors: Record<string, string> = {
  Avanzado: "border-primary/40 text-primary-light",
  Intermedio: "border-yellow-500/40 text-yellow-400",
  Básico: "border-text-secondary/30 text-text-secondary",
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium text-primary-light">
            Habilidades
          </h2>
          <p className="mb-12 text-3xl font-semibold tracking-tight">
            Tecnologías y Herramientas
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {siteConfig.skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
            >
              <h3
                className={`mb-4 inline-block rounded-lg border px-3 py-1 text-sm font-medium ${categoryColors[group.category]}`}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface-light px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-primary/40 hover:text-text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
