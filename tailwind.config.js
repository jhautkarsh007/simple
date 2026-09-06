/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          600: '#1e3a8a',
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        },
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
        },
        accent: {
          amber: '#f59e0b',
          blue: '#2563eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
