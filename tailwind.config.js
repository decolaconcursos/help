const { colors } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/layouts/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          100: '#D0FAFC',
          200: '#A1F3F7',
          300: '#75E3F0',
          400: '#62D7EA',
          500: '#2CC2DD',
          600: '#21A4C4',
          700: '#2083A7',
          800: '#1C607D',
          900: '#1A4C65'
        }
      }
    }
  },
  plugins: []

}
