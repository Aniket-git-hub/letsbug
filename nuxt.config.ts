// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  compatibilityDate: '2025-01-18',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/contact'],
    },
    static: true
  },
  modules: ['nuxt-lucide-icons'],
  experimental: {
    payloadExtraction: false
  },
  build: {
    transpile: ['gsap']
  }
})