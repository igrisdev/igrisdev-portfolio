// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [react()],
  },
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
})
