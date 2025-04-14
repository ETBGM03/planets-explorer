# Planet Explorer 🌍

Una aplicación web interactiva para explorar y aprender sobre los planetas del sistema solar. Desarrollada con Next.js 15, TypeScript y Tailwind CSS.

## 🚀 Características

- Visualización detallada de planetas del sistema solar
- Búsqueda y filtrado de planetas
- Animaciones suaves con Framer Motion
- Diseño responsive
- Intro animada con planetas
- Optimización de imágenes con Next.js Image

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework React para renderizado del lado del servidor y generación estática
- **TypeScript**: Para tipado estático y mejor desarrollo
- **Tailwind CSS**: Para estilos y diseño responsive
- **Framer Motion**: Para animaciones fluidas
- **React Query**: Para manejo de estado y caché
- **Zustand**: Para estado global de la aplicación

## 📋 Requisitos Previos

- Node.js 18.0 o superior
- npm o yarn

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/ETBGM03/planets-explorer.git
cd planet-explorer
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Crear archivo de variables de entorno:
```bash
cp .env
```

4. Agregar este valor al .env
```bash
NEXT_PUBLIC_API_URL=https://api.le-systeme-solaire.net/rest
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
src/
├── app/                   # Next.js App Router
│   ├── page.tsx           # Página principal (listado)
│   ├── planet/[id]/
│   │   └── page.tsx       # Página de detalle
│   └── layout.tsx         # Layout principal
├── features/              # Módulos organizados por características
│   ├── planets/
│   │   ├── components/    # Componentes específicos de planetas
│   │   │   ├── PlanetCard.tsx
│   │   │   ├── PlanetDetails.tsx
│   │   │   ├── PlanetsList.tsx
│   │   │   └── index.ts   # Barrel file para exportaciones
├── shared/                # Componentes, hooks y utilidades compartidas
│   ├── components/        # Componentes genéricos reutilizables
│   │   ├── ui/            # Componentes de UI básicos
│   │   │   ├── FavoriteButton
│   │   └── feedback/      # Componentes de feedback
│   │       ├── PlanetIntro.tsx
│   └── utils/             # Utilidades compartidas
│       ├── api-client.ts  # Cliente API abstracto
│       └── helpers.ts     # Funciones de ayuda
├── services/              # Servicios de la aplicación
│   └── planets/
│       ├── api.ts         # Funciones de acceso a API
│       └── transformers.ts # Transformadores de datos
├── store/                 # Estado global con Zustand
│   ├── usePlanetsStore    # Estado para guardar favoritos
│   └── index.ts           # Exportaciones barrel
└── types/                 # Tipos generales
    ├── planet.ts          # Tipos de respuesta de la API
    └── planetState.ts     # Tipos del state
```

## 🎨 Decisiones Técnicas

### Arquitectura
- **App Router**: Utilizamos el nuevo sistema de enrutamiento de Next.js para mejor rendimiento y SEO
- **Server Components**: Maximizamos el uso de Server Components para mejor rendimiento
- **Client Components**: Solo donde es necesario interactividad o estado del cliente

### Por qué NextJS

NextJS fue elegido por su capacidad para manejar Server Components, lo cual mejora el rendimiento inicial y la SEO. También facilita la implementación de rutas dinámicas para los detalles de cada planeta.

### Por qué Tailwind CSS

Tailwind CSS permite desarrollar interfaces responsivas de manera rápida sin necesidad de escribir CSS personalizado, lo que agiliza el desarrollo sin comprometer la personalización.

### Por qué Zustand

Zustand proporciona una gestión de estado simple pero potente. Se utilizó principalmente para la funcionalidad de favoritos, ya que requiere persistencia local y acceso global.

### Manejo de API

Se realizó una abstracción de las llamadas a la API en un servicio separado para mantener la lógica de negocio aislada de los componentes de UI.

### Jest y React Testing Library

Se usaron estas libs para crear test unitarios