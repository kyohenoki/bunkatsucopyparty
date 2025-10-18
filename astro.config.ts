import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://kyohenoki.github.io/bunkatsucopyparty',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: '_bunkatsu',
  },
  devToolbar: {
    enabled: false,
  },
})
