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

                    bodyText: '#FFFFFF',
                    bodyTextSecondary: '#D1D5DB',
                    bodyTextMuted: '#9CA3AF',

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

                    ideTabsBg: '#1E1E1E',
                    ideTabsBgActive: '#2A2A2A',
                    ideTabsBorderLight: 'rgba(255, 255, 255, 0.08)',
                    ideTabsBorderDark: 'rgba(0, 0, 0, 0.4)',
                    ideTabsText: 'rgba(255, 255, 255, 0.55)',
                    ideTabsTextHover: 'rgba(255, 255, 255, 0.75)',
                    ideTabsAccent: '#8FCEA5',

                    codeBg: '#1E1E1E',
                    codeKeyword: '#569CD6',
                    codeString: '#CE9178',
                    codeComment: '#6A9955',
                    codePlain: '#D4D4D4',
                    codeFunction: '#C586C0',
                    codeComponent: '#4EC9B0',
                    codeCaret: '#FFFFFF',
                }
            },

            studioLight: {
                dark: false,
                colors: {
                    background: '#FFFFFF',
                    surface: '#F9FAFB',
                    'surface-variant': '#F3F4F6',
                    bodyText: '#0F172A',
                    bodyTextSecondary: '#475569',
                    bodyTextMuted: '#94A3B8',
                    primary: '#2563EB',
                    secondary: '#334155',
                    accent: '#0F172A',
                    charcoal: '#1A1A1A',
                    offwhite: '#F7F7F7',
                    slate: '#3A3F45',
                    success: '#22C55E',
                    warning: '#F59E0B',
                    error: '#EF4444',
                    info: '#3B82F6',
                    ideTabsBg: '#E2E8F0',
                    ideTabsBgActive: '#FFFFFF',
                    ideTabsBorderLight: 'rgba(0, 0, 0, 0.1)',
                    ideTabsBorderDark: 'rgba(0, 0, 0, 0.2)',
                    ideTabsText: 'rgba(0, 0, 0, 0.65)',
                    ideTabsTextHover: 'rgba(0, 0, 0, 0.85)',
                    ideTabsAccent: '#3A8F63',
                    codeBg: '#F1F5F9',
                    codePlain: '#1E293B',
                    codeKeyword: '#0000FF',
                    codeString: '#A31515',
                    codeComment: '#008000',
                    codeFunction: '#795E26',
                    codeComponent: '#267F99',
                    codeCaret: '#000000',
                }
            }
        }
    }                                                
  })

  nuxtApp.vueApp.use(vuetify)
})