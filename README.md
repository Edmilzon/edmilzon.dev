# edmilzon.dev

Portafolio personal de **Edmilzon Tudela** — Full Stack Developer.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, Framer Motion, Lucide
- **Blog:** MDX con next-mdx-remote, remark-gfm, rehype-highlight
- **Email:** Resend API
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint 9

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run start    # Servir build
npm run lint     # ESLint
npm run test     # Tests (Vitest)
```

## Variables de entorno

```bash
RESEND_API_KEY=your_key_here
```

## Estructura

```
app/          # Rutas, layouts, API
components/   # UI, secciones, layout, blog
config/       # Configuración del sitio
content/blog  # Artículos MDX
lib/          # Utilidades y parser MDX
```
