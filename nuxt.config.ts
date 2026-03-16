import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  app: {
    head: {
      title: 'THECODERGABE STUDIO',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=1' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=1' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  modules: [
    '@nuxt/image',
    'vite-plugin-vuetify' // ensure this is still here
  ],
  image: {
    // Standard formats for modern browsers
    format: ['webp', 'avif'],
    // Default quality for high-res studio look
    quality: 90 
  },
  // Let's stick to the manual font loading to avoid the type errors
  app: {
    head: {
      title: 'THECODERGABE STUDIO | Lead UI Architect',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Syne:wght@700;800&display=swap' }
      ]
    }
  },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    vue: {
      template: { transformAssetUrls },
    },
    plugins: [
      vuetify({ autoImport: true }),
    ],
  },
})