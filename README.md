# Planet Explorer 🌍

Una aplicación web interactiva para explorar y aprender sobre los planetas del sistema solar. Desarrollada con Next.js 14, TypeScript y Tailwind CSS.

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
git clone https://github.com/tu-usuario/planet-explorer.git
cd planet-explorer
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Crear archivo de variables de entorno:
```bash
cp .env.example .env.local
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
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
│   │   ├── hooks/         # Hooks específicos de planetas
│   │   │   ├── usePlanetSearch.ts
│   │   │   ├── usePlanetSort.ts
│   │   │   └── index.ts
│   │   ├── types/         # Tipos específicos de la feature
│   │   │   └── planet.types.ts
│   │   └── utils/         # Utilidades específicas
│   │       └── planet-formatters.ts
│   └── favorites/
│       ├── components/
│       │   └── FavoriteButton.tsx
│       └── hooks/
│           └── useFavorites.ts
├── shared/                # Componentes, hooks y utilidades compartidas
│   ├── components/        # Componentes genéricos reutilizables
│   │   ├── ui/            # Componentes de UI básicos
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Input/
│   │   │   └── Select/
│   │   ├── layout/        # Componentes estructurales
│   │   │   ├── Container.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── feedback/      # Componentes de feedback
│   │       ├── ErrorMessage.tsx
│   │       └── Loading.tsx
│   ├── hooks/             # Hooks genéricos
│   │   ├── useQueryParams.ts
│   │   └── usePagination.ts
│   └── utils/             # Utilidades compartidas
│       ├── api-client.ts  # Cliente API abstracto
│       └── helpers.ts     # Funciones de ayuda
├── services/              # Servicios de la aplicación
│   └── planets/
│       ├── api.ts         # Funciones de acceso a API
│       └── transformers.ts # Transformadores de datos
├── store/                 # Estado global con Zustand
│   ├── slices/
│   │   ├── planets.slice.ts
│   │   └── favorites.slice.ts
│   └── index.ts           # Exportaciones y store combinado
└── styles/                # Estilos globales (si es necesario)
    └── globals.css          # Estilos globales
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