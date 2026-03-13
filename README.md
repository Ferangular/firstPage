# Tienda Muebles – Angular

Aplicación web desarrollada con **Angular 21** y **Bootstrap 5** basada en el proyecto del curso, adaptada a una arquitectura moderna de Angular.

La aplicación incluye soporte **multilenguaje (ES / EN)** mediante **Transloco**.

---

# Tecnologías

- Angular 21
- Angular CLI
- Bootstrap 5
- Transloco (i18n)
- Angular Standalone Components
- Angular Control Flow (`@for`, `@if`)
- Responsive design

---

# Estructura del proyecto
src
├ app
│ ├ features
│ │ ├ inicio-component
│ │ ├ tienda-component
│ │ ├ nosotros-component
│ │ ├ blog-component
│ │ ├ entrada-component
│ │ ├ galeria-component
│ │ └ contacto-component
│ │
│ ├ shared
│ │ ├ navbar
│ │ ├ header
│ │ └ footer
│ │
│ └ app.routes.ts
│
└ assets
├ images
└ i18n
├ es.json
└ en.json


---

# Funcionalidades

## Multilenguaje

La aplicación soporta **Español e Inglés** usando Transloco.

Los archivos de traducción se encuentran en:

src/assets/i18n

El idioma se puede cambiar desde el **selector del navbar**.

---

## Navegación

La navegación se gestiona mediante **Angular Router**.

Rutas disponibles:

/ → Inicio
/nosotros → Sobre nosotros
/tienda → Tienda
/blog → Blog
/galeria → Galería
/contacto → Contacto


---

## Componentes principales

| Componente | Descripción |
|-------------|-------------|
| Header | Encabezado de la página |
| Navbar | Navegación principal + selector de idioma |
| Inicio | Página principal con productos destacados |
| Tienda | Catálogo de productos |
| Nosotros | Información de la empresa |
| Blog | Listado de artículos |
| Galería | Galería de imágenes |
| Contacto | Formulario de contacto |
| Footer | Enlaces informativos |

---

# Instalación

Clonar el repositorio:

```bash
git clone <repo>
cd firstPage
```

```bash
npm install
```

Accesibilidad y buenas prácticas

El proyecto incluye:

etiquetas alt en imágenes

navegación accesible

uso de aria-label

lazy loading en imágenes

estructura semántica HTML

Recursos

Angular CLI
https://angular.dev/tools/cli

Bootstrap
https://getbootstrap.com

Transloco
https://jsverse.gitbook.io/transloco
