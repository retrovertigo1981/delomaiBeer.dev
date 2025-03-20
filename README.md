# Délomai Web - Proyecto Astro


> 🚀 **Un sitio web estático moderno construido con Astro**  
> Este proyecto es una aplicación web desarrollada con [Astro](https://astro.build/), optimizada para rendimiento, SEO y experiencia de usuario, con un diseño responsivo y modular.

---

## 🌟 Descripción Técnica

Este repositorio contiene el código fuente del sitio web de Délomai, construido con Astro, un generador de sitios estáticos que combina componentes dinámicos y contenido estático. El proyecto utiliza una arquitectura modular con componentes reutilizables, integración de contenido dinámico y optimización para motores de búsqueda mediante metadatos avanzados.

- **Framework**: Astro v4.12.2
- **Lenguaje**: JavaScript/TypeScript
- **Estructura**: Basada en componentes y colecciones de contenido
- **Despliegue**: Generación estática en `./dist/`

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión recomendada: >= 18.x)
- npm (incluido con Node.js)

### Instalación

```bash
npm install
```

### Comandos Principales

Ejecuta estos comandos desde la raíz del proyecto:

| Comando               | Acción                                      |
| :-------------------- | :------------------------------------------ |
| `npm run dev`         | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`       | Genera el sitio estático en `./dist/`       |
| `npm run preview`     | Previsualiza el build localmente            |
| `npm run astro ...`   | Ejecuta comandos CLI de Astro (ej. `astro add`) |
| `npm run astro -- --help` | Muestra ayuda del CLI de Astro          |

---

## 📂 Estructura del Proyecto

El proyecto sigue una organización clara y modular:

```
/
├── public/              # Archivos estáticos
│   ├── fonts/           # Fuentes personalizadas (ej. Root Beer)
│   ├── icons/           # Íconos y favicons
│   └── imgs/            # Imágenes del sitio
├── src/                 # Código fuente
│   ├── components/      # Componentes Astro reutilizables (ej. NavBar.astro)
│   ├── content/         # Colecciones de contenido (ej. variedades de cerveza)
│   ├── layouts/         # Plantillas de diseño (ej. Layout.astro)
│   ├── pages/           # Rutas del sitio (ej. index.astro)
│   └── env.d.ts         # Tipos de entorno para TypeScript
├── astro.config.mjs     # Configuración de Astro (integraciones como sitemap)
├── package.json         # Dependencias y scripts
└── tsconfig.json        # Configuración de TypeScript
```

- **Rutas**: Los archivos en `src/pages/` generan rutas automáticas (ej. `index.astro` → `/`).
- **Componentes**: `src/components/` alberga bloques reutilizables con estilos locales.
- **Contenido**: `src/content/` usa el sistema de colecciones de Astro para datos dinámicos.
- **Activos estáticos**: Imágenes y fuentes en `public/` se sirven directamente.

---

## 🛠️ Tecnologías y Características

- **Astro**: Generación de sitios estáticos con soporte para componentes dinámicos.
- **Integraciones**:
  - `@astrojs/sitemap`: Genera un sitemap automático.
  - `@astrojs/rss` (opcional): Soporte para feeds RSS.
- **SEO**: Metadatos optimizados (Open Graph, Twitter Cards) en `Layout.astro`.
- **Estilos**: Scoped CSS en componentes con soporte para media queries.
- **Responsividad**: Diseño adaptable con breakpoints para móviles y escritorio.
- **Fuentes**: Uso de `RootBeer` personalizado y fuentes de Google (`Roboto`, `Beth Ellen`).
- **TypeScript**: Configurado con `tsconfig.json` para tipado seguro.

---

## 🌐 Despliegue

El sitio está configurado para desplegarse en [Delomai Vercel](https://delomai-beer-dev-astro.vercel.app/). Para probarlo localmente:

1. Ejecuta `npm run build` para generar el sitio estático.
2. Usa `npm run preview` para verlo en tu máquina.
3. Despliega `./dist/` en tu servidor o plataforma preferida (Netlify, Vercel, etc.).

---

## 👨‍💻 Desarrollado Por

[Sebastian Peña](https://www.linkedin.com/in/sebastianpenaj/)  
