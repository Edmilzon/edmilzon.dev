"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium text-primary-light">
            Educación
          </h2>
          <p className="mb-12 text-3xl font-semibold tracking-tight">
            Formación Académica
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-start gap-4 rounded-xl border border-border bg-surface-light p-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Ingeniería en Sistemas</h3>
            <p className="text-sm text-text-secondary">
              {siteConfig.author.university}
            </p>
            <p className="text-xs text-text-secondary">
              Cochabamba, Bolivia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
