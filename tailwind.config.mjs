/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import tailwindcssAnimated from 'tailwindcss-animated'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', ...defaultTheme.fontFamily.sans],
        mono: ['GeistMono', ...defaultTheme.fontFamily.mono],
        gambarino: ['Gambarino', ...defaultTheme.fontFamily.sans],
      },
      container: {
        screens: {
          xl: '896px',
        },
      },
    },
  },
  plugins: [daisyui, tailwindcssAnimated],
  daisyui: {
    themes: ['light', 'dark'],
  },
}
