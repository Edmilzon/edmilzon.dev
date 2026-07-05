"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium text-primary-light">
            Sobre mí
          </h2>
          <p className="mb-10 text-3xl font-semibold tracking-tight">
            Full Stack Developer de{" "}
            <span className="text-primary">Cochabamba, Bolivia</span>
          </p>

          <div className="mb-10 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="shrink-0"
            >
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-primary/30 sm:h-48 sm:w-48">
                <Image
                  src="/images/foto.jpeg"
                  alt={siteConfig.author.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Estudiante de <strong>Ingeniería en Sistemas</strong> en la{" "}
              {siteConfig.author.university}. Transformo ideas en soluciones
              escalables con NestJS, Next.js, Spring Boot, TypeScript, Python y
              Java. En el móvil desarrollo con Flutter y React Native.
            </p>
            <p>
              Purista de la{" "}
              <strong className="text-text-primary">
                arquitectura de software
              </strong>
              : hexagonal, por capas, DDD, clean architecture. Experto en Linux
              (Arch Linux, administración de servidores) y DevOps con
              despliegues en AWS, Vercel, Railway y Render.
            </p>
          </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface-light p-4">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Ubicación</p>
                <p className="text-xs text-text-secondary">
                  {siteConfig.author.location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface-light p-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Universidad</p>
                <p className="text-xs text-text-secondary">UMSS</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface-light p-4">
              <Code2 className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Especialidad</p>
                <p className="text-xs text-text-secondary">Full Stack</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
