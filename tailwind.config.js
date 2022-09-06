const svgToDataUri = require('mini-svg-data-uri')
const { colors } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

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
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate global styles
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    })
  ]

}
