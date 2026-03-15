import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
   theme: {
        defaultTheme: 'studioDark',
        themes: {
            studioDark: {
            dark: true,
            colors: {
                background: '#0F0F0F',
                surface: '#1A1A1A',
                'surface-variant': '#242424',

                'text-primary': '#FFFFFF',
                'text-secondary': '#D1D5DB',
                'text-muted': '#9CA3AF',

                primary: '#3B82F6',
                secondary: '#3A3F45',
                accent: '#F7F7F7',

                charcoal: '#1A1A1A',
                offwhite: '#F7F7F7',
                slate: '#3A3F45',

                success: '#22C55E',
                warning: '#F59E0B',
                error: '#EF4444',
                info: '#3B82F6',
            }
            },

            studioLight: {
            dark: false,
            colors: {
                background: '#F7F7F7',
                surface: '#FFFFFF',
                'surface-variant': '#E5E7EB',

                'text-primary': '#1A1A1A',
                'text-secondary': '#374151',
                'text-muted': '#6B7280',

                primary: '#3B82F6',
                secondary: '#3A3F45',
                accent: '#1A1A1A',

                charcoal: '#1A1A1A',
                offwhite: '#F7F7F7',
                slate: '#3A3F45',

                success: '#22C55E',
                warning: '#F59E0B',
                error: '#EF4444',
                info: '#3B82F6',
            }
            }
        }
    }                                                
  })

  nuxtApp.vueApp.use(vuetify)
})