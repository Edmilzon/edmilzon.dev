"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium text-primary-light">
            Experiencia
          </h2>
          <p className="mb-12 text-3xl font-semibold tracking-tight">
            Experiencia Freelance
          </p>
        </motion.div>

        <div className="relative space-y-8 pl-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-[2px] before:bg-border">
          {siteConfig.experience.map((exp, i) => (
            <motion.div
              key={exp.project}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-8 top-1 h-4 w-4 rounded-full border-2 border-primary bg-surface" />
              <div>
                <h3 className="font-semibold">{exp.project}</h3>
                <p className="mb-1 text-sm text-primary-light">{exp.role}</p>
                {exp.duration && (
                  <p className="mb-2 text-xs text-text-secondary">
                    {exp.duration}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
