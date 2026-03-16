import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },

  app: {
    head: {
      title: 'THECODERGABE STUDIO | Lead UI Architect',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=1' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=1' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Syne:wght@700;800&display=swap' 
        }
      ]
    }
  },

  modules: [
    '@nuxt/image',
    'vite-plugin-vuetify'
  ],

  image: {
    format: ['webp', 'avif'],
    quality: 90 
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
    // Adding the plugin here to ensure auto-import works correctly
    plugins: [
      vuetify({ autoImport: true }),
    ],
  },
})