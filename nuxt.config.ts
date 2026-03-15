import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  pages: true,
  ssr: false,
  devtools: { enabled: false },

  app: {
    head: {
      title: 'THECODERGABE STUDIO | Bespoke Digital Craftsmanship',
      link: [
        // Premium Font Pairing: Syne (Headings) + Inter (Body)
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Syne:wght@700;800&family=Fira+Code&display=swap' }
      ]
    }
  },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  components: {
    dirs: [
      { path: '~/components/editor', pathPrefix: false },
      '~/components'
    ]
  },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})