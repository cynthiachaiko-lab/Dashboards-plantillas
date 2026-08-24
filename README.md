# 🚀 ContentOS — Sistema Operativo de Contenido para Instagram

<div align="center">

**Dashboard premium con métricas en tiempo real, IA integrada y calendario de contenido**

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4)

</div>

---

## ✨ ¿Qué es ContentOS?

ContentOS es un **sistema operativo de contenido** diseñado para creadores, marketers y emprendedores que quieren llevar su Instagram al siguiente nivel. Incluye:

- 📊 **Dashboard de métricas** — Seguidores, alcance, impresiones, engagement, leads, revenue
- 📈 **7 gráficos interactivos** — Alcance, engagement, followers, funnel, radar, heatmap, revenue
- 🤖 **IA integrada** — Genera guiones para Reels, Carruseles e Historias en segundos
- 📅 **Calendario de contenido** — Planificá y organizá tu contenido mensual
- 🔥 **Animaciones premium** — +10 tipos de animaciones fluidas
- 🎯 **Funnel analytics** — Engagement rate, guardados, conversión, revenue atribuido
- 🕐 **Mejores horarios** — Heatmap con los mejores momentos para publicar

---

## 🖥️ Capturas

El dashboard incluye 6 vistas:
1. **Dashboard** — Vista principal con todas las métricas
2. **Analytics** — Funnel de conversión y comparativa de formatos
3. **Calendario** — Vista mensual de tu contenido
4. **AI Studio** — Generador de guiones y sugerencias de temas
5. **Contenido** — Tabla detallada de publicaciones
6. **Configuración** — Ajustes de cuenta

---

## 🚀 Instalación Rápida (3 minutos)

### Requisitos previos
- [Node.js](https://nodejs.org/) versión 18 o superior
- Un navegador web moderno (Chrome, Firefox, Edge, etc.)

### Pasos

**1. Descomprimí el archivo ZIP** en cualquier carpeta de tu computadora.

**2. Abrí una terminal** (CMD, PowerShell, o Terminal) y navegá a la carpeta:
```bash
cd ruta/donde/descomprimiste/ContentOS-Instagram
```

**3. Instalá las dependencias:**
```bash
npm install --legacy-peer-deps
```

**4. Ejecutá el proyecto:**
```bash
npm run dev
```

**5. Abrí tu navegador** en: **http://localhost:3000**

¡Listo! 🎉 Ya tenés tu dashboard funcionando.

---

## 🔗 Conectar tu Cuenta de Instagram (Opcional)

El proyecto viene con **datos de demostración** para que funcione al instante. Si querés conectar tu cuenta real:

### Paso 1: Crear una App de Meta
1. Andá a [Meta for Developers](https://developers.facebook.com)
2. Creá una nueva app (tipo "Business")
3. Agregá el producto "Instagram Graph API"

### Paso 2: Configurar permisos
Necesitás estos permisos:
- `instagram_basic`
- `instagram_manage_insights`
- `instagram_content_publish` (para publicar desde el dashboard)
- `pages_show_list`
- `pages_read_engagement`

### Paso 3: Obtener tu token
1. Usá el Graph API Explorer para generar un token
2. Intercambialo por un token de larga duración (60 días)

### Paso 4: Configurar variables de entorno
1. Copiá el archivo `.env.example` a `.env.local`:
```bash
cp .env.example .env.local
```
2. Completá con tus credenciales:
```env
INSTAGRAM_ACCESS_TOKEN=tu_token_real
INSTAGRAM_USER_ID=tu_user_id
FACEBOOK_APP_ID=tu_app_id
FACEBOOK_APP_SECRET=tu_secret
```

### Paso 5: Conectar IA (Opcional)
Para usar la generación de contenido con IA real:
1. Creá una cuenta en [OpenAI](https://platform.openai.com)
2. Generá una API Key
3. Agregala a tu `.env.local`:
```env
OPENAI_API_KEY=sk-tu_api_key
```

---

## 🎨 Personalización

### Cambiar colores
Editá `tailwind.config.ts` para modificar la paleta:
```ts
colors: {
  accent: {
    purple: '#8b5cf6',  // Color principal
    blue: '#6366f1',     // Color secundario
    cyan: '#06b6d4',     // Acento
  }
}
```

### Cambiar datos del perfil
Editá `src/lib/mock-data.ts` y modificá `mockProfile`:
```ts
export const mockProfile = {
  username: '@tu_usuario',
  name: 'Tu Nombre',
  followers: 50000,
  // ...
}
```

### Cambiar métricas
En el mismo archivo `mock-data.ts`, modificá `mockKPIs` con tus números reales.

---

## 📁 Estructura del Proyecto

```
ContentOS-Instagram/
├── src/
│   ├── app/                  # Páginas de Next.js
│   │   ├── globals.css       # Estilos globales
│   │   ├── layout.tsx        # Layout raíz
│   │   └── page.tsx          # Página principal
│   ├── components/           # Componentes React
│   │   ├── ai/               # IA (guiones, sugerencias, modal)
│   │   ├── analytics/        # Analytics del funnel
│   │   ├── calendar/         # Calendario de contenido
│   │   ├── charts/           # 7 gráficos interactivos
│   │   ├── content/          # Tabla de contenido
│   │   └── layout/           # Sidebar, Header, MainLayout
│   ├── lib/                  # Utilidades
│   │   ├── animations.ts     # Configuración de animaciones
│   │   ├── mock-data.ts      # Datos de demostración
│   │   └── utils.ts          # Funciones helper
│   └── types/                # Tipos TypeScript
│       └── index.ts
├── .env.example              # Template de variables
├── package.json              # Dependencias
├── tailwind.config.ts        # Tema visual
└── README.md                 # Este archivo
```

---

## 🛠️ Tech Stack

| Tecnología | Uso |
|---|---|
| **Next.js 14** | Framework React fullstack |
| **TypeScript** | Tipado seguro |
| **Tailwind CSS** | Estilos utility-first |
| **Framer Motion** | Animaciones premium |
| **ApexCharts** | Gráficos interactivos |
| **Lucide React** | Iconografía |

---

## 📱 Comandos Disponibles

```bash
npm run dev     # Iniciar en modo desarrollo
npm run build   # Compilar para producción
npm run start   # Iniciar en producción
```

---

## 💡 Tips para el Video

Si vas a grabar un video mostrando el dashboard:
1. Usá pantalla completa del navegador (F11)
2. Empezá por el Dashboard para impactar
3. Hacé scroll lento para que se activen las animaciones
4. Mostrá el botón "Crear Contenido" y el modal de IA
5. Navegá por las diferentes vistas del sidebar
6. Mostrá el calendario y los gráficos interactivos

---

## 📄 Licencia

Este proyecto es de **uso libre**. Podés usarlo, modificarlo y compartirlo como quieras.

---

<div align="center">

**Hecho con 💜 para la comunidad**

⭐ Si te sirvió, compartilo con alguien que lo necesite

</div>
