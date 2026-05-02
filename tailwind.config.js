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
