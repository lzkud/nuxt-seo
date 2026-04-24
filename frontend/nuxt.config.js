export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  future: {
    compatibilityVersion: 3
  },
  
  modules: [
    '@pinia/nuxt'
  ],

  css: [
    '@/assets/css/reset.css',
    '@/assets/css/common.css'
  ],

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:8080/api'
    }
  },

  app: {
    head: {
      title: 'Nuxt SEO',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt 3 SEO 脚手架' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})