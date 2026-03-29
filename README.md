# Waltham Forest Adult Social Care Website

Redesigned web pages for Waltham Forest Council's Adult Social Care service. Built from a Figma Make design.

## Tech Stack

- **React 19** + **TypeScript** with **Vite**
- **Tailwind CSS 4** for styling
- **shadcn/ui** (Radix UI) component library
- **React Router** for client-side navigation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push to GitHub
2. Connect repo to [vercel.com](https://vercel.com)
3. Deploy (SPA routing handled by `vercel.json`)

## Brand

- **Primary Green:** `#00635C` (headings)
- **Secondary Pink:** `#D61F69` (actions, H2)
- **Phone:** 020 8496 3130

## Structure

- `src/App.tsx` - Main router (150+ routes)
- `src/components/` - Shared components and shadcn/ui library
- `src/pages/` - 14 sections, 100+ pages

See [HANDOVER.md](./HANDOVER.md) for full documentation.
