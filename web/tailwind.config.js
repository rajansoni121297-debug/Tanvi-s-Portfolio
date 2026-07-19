/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: 'var(--color-bg)',
        ink: 'var(--color-text)',
        // opacity-modifier-capable variant of `ink` (e.g. text-ink-a/25) for
        // ghost -> solid text transitions that can't be pre-baked like `muted`
        'ink-a': 'rgb(var(--color-text-rgb) / <alpha-value>)',
        muted: 'var(--color-muted)',
        hairline: 'var(--color-border)',
        accent: 'var(--color-accent)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.25' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
