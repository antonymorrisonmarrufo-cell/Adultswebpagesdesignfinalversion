# Waltham Forest Adult Social Care Website

This is a replica of the Waltham Forest Adult Social Care and specialist support websites, focusing on dementia and safeguarding journeys with strict adherence to brand guidelines.

## Brand Guidelines

- **Font**: Arial
- **Brand Green**: #00635C
- **Brand Pink**: #D61F69 (for card titles and action icons)
- **Visual Hierarchy**: 
  - First-level pages use `bg-gray-200` background for card containers
  - Deeper-level pages use white backgrounds
  - All H1 titles are standardized to `text-5xl`

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: Hash-based routing (for compatibility)
- **UI Components**: Radix UI + Custom components

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure settings
6. Click "Deploy"

### Build Configuration (Auto-detected by Vercel)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Project Structure

```
/
├── src/
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx               # Entry point
│   ├── components/            # Reusable components
│   ├── pages/                 # Page components
│   └── styles/
│       └── globals.css        # Global styles & Tailwind config
├── imports/                   # Figma imported assets
├── index.html                 # HTML entry point
├── package.json              # Dependencies
├── vite.config.ts            # Vite configuration
└── tsconfig.json             # TypeScript configuration
```

## Key Features

- ✅ Dementia support pathways
- ✅ Safeguarding journeys
- ✅ Learning disability support
- ✅ Carers support
- ✅ Live independently at home
- ✅ Mental health & wellbeing
- ✅ Travel and transport
- ✅ Care homes and supported living
- ✅ Paying for care
- ✅ Professional information

## Navigation

The site uses hash-based routing for compatibility. Routes are structured as:
- `/adult-social-care` - Main hub
- `/adult-social-care/specialist-services` - Specialist services
- `/adult-social-care/live-independently-at-home` - Independent living
- etc.

## Development Notes

- All imports use `@/` alias which resolves to the root directory
- Hash-based routing ensures compatibility across environments
- ScrollToTop functionality ensures proper page navigation
- Brand colors are consistently applied throughout

## Support

For questions or issues, please refer to the project documentation or contact the development team.
