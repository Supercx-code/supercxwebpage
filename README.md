# SuperCX Website

> AI-Powered Customer Experience & Revenue Growth Platform

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## ✨ Features

- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Lightweight Animations**: Canvas-based particle system (no Three.js)
- **Smooth Transitions**: Framer Motion animations
- **Performance Optimized**: Static generation, automatic code splitting
- **SEO Ready**: Meta tags, Open Graph, Twitter cards
- **Responsive**: Mobile-first design, works on all devices

## 📁 Project Structure

```
supercx.co/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Page sections
│   └── ui/              # Reusable UI components
├── lib/                 # Utilities
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
└── tailwind.config.ts   # Tailwind configuration
```

## ⚡ Performance

| Metric | Value |
|--------|-------|
| Homepage JS | 54.7 kB |
| First Load JS | 157 kB |
| SSG Enabled | ✅ |

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Design System

### Colors
- **Background**: `#0B0F19` (Deep Navy)
- **Primary**: `#7F5AF0` (Electric Purple)
- **Secondary**: `#2CB67D` (Cyan/Turquoise)
- **Tertiary**: `#FF8906` (Vibrant Coral)
- **Highlight**: `#E45858` (Hot Pink)

### Typography
- Font: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (via next/font)
- Weights: 400, 500, 600, 700, 800

## 📦 Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - UI framework
- `framer-motion` - Animations
- `lucide-react` - Icons
- `tailwind-merge` & `clsx` - Styling utilities

### Dev
- `typescript` - Type safety
- `tailwindcss` - Utility CSS


---

Built with ❤️ by the SuperCX Team
