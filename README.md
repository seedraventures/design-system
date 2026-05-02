# SEEDRA Ventures Design System

A lightweight frontend-first design system starter for **SEEDRA Ventures**, based on the attached brand identity system and translated into reusable design tokens, documentation, and UI primitives. The system is built around a modern digital-first visual language with strong contrast, disciplined spacing, and clear semantic tokens for color, type, radius, and elevation. [1]

## What’s inside

- `tailwind.config.js` with SEEDRA semantic design tokens for color, spacing, radius, typography, and shadows.
- `src/tokens.css` with CSS custom properties for brand colors and core UI foundations.
- `src/components/` examples for buttons, cards, top navigation, sidebar, and section headers.
- `src/app/brand-identity-page.tsx` as a reference page that mirrors the attached identity manual structure.
- `figma/` placeholder directory for the future `.fig` export and brand assets.
- `assets/` placeholder directory for logos, fonts, icons, and imagery.

## Brand foundations

The design system reflects these core visual decisions extracted from the attached design page:

- Primary color system centered around purple, blue, green, and deep neutrals, with semantic roles like `primary`, `primary-container`, `secondary-container`, `surface`, and `on-surface`. [1]
- Typography pairing of **Space Grotesk** for display and headline styles and **Inter** for body and label styles. [1]
- Rounded but disciplined UI with a radius scale from `0.25rem` to `0.75rem`, plus fully rounded pills. [1]
- Spacing scale using compact UI increments such as `4px`, `8px`, `12px`, `24px`, `32px`, `48px`, and `80px`. [1]
- Interface patterns demonstrated through a top app bar, navigation drawer, bento cards, icon-led sections, and responsive content containers. [1]

## Suggested repository structure

```bash
seedra-design-system/
├── README.md
├── package.json
├── tailwind.config.js
├── src/
│   ├── tokens.css
│   ├── app/
│   │   └── brand-identity-page.tsx
│   ├── components/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── top-app-bar.tsx
│   │   ├── side-nav.tsx
│   │   └── section-heading.tsx
│   └── lib/
│       └── cn.ts
├── assets/
│   ├── logos/
│   ├── icons/
│   └── imagery/
└── figma/
    └── README.md
```

## Example `package.json`

```json
{
  "name": "seedra-design-system",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "clsx": "^2.1.1",
    "tailwindcss": "^3.4.0"
  }
}
```

## Example `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f9f9f9',
        'surface-container-low': '#f3f3f3',
        'surface-container': '#eeeeee',
        'surface-container-high': '#e8e8e8',
        'surface-container-highest': '#e2e2e2',
        background: '#f9f9f9',
        primary: '#630ed4',
        'primary-container': '#7c3aed',
        'primary-fixed': '#eaddff',
        'primary-fixed-dim': '#d2bbff',
        secondary: '#00639c',
        'secondary-container': '#0ca5ff',
        tertiary: '#005c26',
        'tertiary-container': '#007733',
        error: '#ba1a1a',
        outline: '#7b7487',
        'outline-variant': '#ccc3d8',
        'on-primary': '#ffffff',
        'on-primary-container': '#ede0ff',
        'on-surface': '#1b1b1b',
        'on-surface-variant': '#4a4455'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        xs: '4px',
        base: '8px',
        sm: '12px',
        md: '24px',
        margin: '32px',
        lg: '48px',
        xl: '80px',
        gutter: '24px'
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      fontSize: {
        'label-md': ['12px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
        'label-lg': ['14px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'headline-sm': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }]
      },
      boxShadow: {
        soft: '0px 10px 20px 0px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
}
```

## Example `src/tokens.css`

```css
:root {
  --seedra-surface: #f9f9f9;
  --seedra-surface-low: #f3f3f3;
  --seedra-surface-high: #e8e8e8;
  --seedra-surface-highest: #e2e2e2;
  --seedra-background: #f9f9f9;
  --seedra-primary: #630ed4;
  --seedra-primary-container: #7c3aed;
  --seedra-secondary-container: #0ca5ff;
  --seedra-tertiary-container: #007733;
  --seedra-accent-orange: #f97316;
  --seedra-black: #1b1b1b;
  --seedra-text: #1b1b1b;
  --seedra-text-muted: #4a4455;
  --seedra-outline: #7b7487;
  --seedra-outline-variant: #ccc3d8;
  --seedra-radius-sm: 0.25rem;
  --seedra-radius-md: 0.5rem;
  --seedra-radius-lg: 0.75rem;
  --seedra-space-xs: 4px;
  --seedra-space-base: 8px;
  --seedra-space-sm: 12px;
  --seedra-space-md: 24px;
  --seedra-space-lg: 48px;
  --seedra-space-xl: 80px;
  --seedra-shadow-soft: 0px 10px 20px 0px rgba(0, 0, 0, 0.06);
}
```

## Suggested repo blurb

**GitHub repo description:** Frontend-first design system for SEEDRA Ventures with semantic Tailwind tokens, brand foundations, and reusable interface components for marketing, internal platforms, and digital products. [1]

## Notes for the new repo

- Start by committing the README and token files first, then add the initial component library.
- If you use Next.js, place the identity manual in `src/app/brand/page.tsx` or `src/app/design-system/page.tsx`.
- If you use plain React or Vite, the same token architecture still works with minimal changes.
- Add the real logo files, favicon, and any exported `.fig` assets once available.

## Suggested first commit message

```bash
git commit -m "Initialize SEEDRA design system foundations"
```
