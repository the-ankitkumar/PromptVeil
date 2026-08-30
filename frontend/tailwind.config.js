/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        surface: {
          light: '#ffffff',
          dark: '#1e293b',
          canvas: {
            light: '#f8fafc',
            dark: '#0f172a'
          }
        },
        flatBorder: {
          light: '#e2e8f0',
          dark: '#334155'
        },
        threat: {
          safe: '#10b981',
          warning: '#f59e0b',
          critical: '#ef4444'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Mona Sans"', 'Inter', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Mona Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', '"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
