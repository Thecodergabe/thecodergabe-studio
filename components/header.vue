<template>
  <v-app-bar 
    flat 
    class="studio-header px-4 px-md-12"
    height="80"
  >
    <v-container class="pa-0 d-flex align-center fill-height" fluid>
      <nuxt-link to="/" class="logo-link d-flex align-center">
        <div class="logo-text">
          THECODERGABE <span class="logo-accent d-none d-sm-inline">STUDIO</span>
        </div>
      </nuxt-link>

      <v-spacer />

      <div class="d-none d-md-flex align-center">
        <nav class="d-flex align-center ga-8">
          <nuxt-link v-for="item in menuItems" :key="item.title" :to="item.path" class="nav-link">
            {{ item.title }}
          </nuxt-link>
        </nav>
        <div class="nav-divider mx-6" />
        <v-btn icon variant="tonal" size="small" class="theme-toggle-btn" @click="handleThemeToggle">
          <v-icon size="18">{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
        </v-btn>
      </div>

      <v-btn icon="mdi-menu" variant="text" size="large" class="d-md-none mobile-btn" @click="openSheet" />
    </v-container>

    <v-bottom-sheet v-model="sheet" fullscreen transition="dialog-bottom-transition">
      <v-card class="mobile-sheet-card border-none">
        <v-btn icon="mdi-close" variant="tonal" class="close-btn" @click="closeSheet" />
        
        <v-container class="fill-height d-flex flex-column justify-center align-center">
          <nav class="d-flex flex-column ga-8 text-center" :class="{ 'is-animated': animateLinks }">
            <nuxt-link 
              v-for="(item, index) in menuItems" 
              :key="item.title" 
              :to="item.path" 
              class="mobile-nav-link"
              :style="{ transitionDelay: `${index * 60}ms` }"
              @click="closeSheet"
            >
              {{ item.title }}
            </nuxt-link>
            
            <v-btn
              variant="outlined"
              color="primary"
              class="mt-6 rounded-pill mobile-theme-btn"
              :style="{ transitionDelay: `${menuItems.length * 60}ms` }"
              @click="handleThemeToggle"
            >
              {{ isDark ? 'LIGHT' : 'DARK' }} MODE
            </v-btn>
          </nav>
        </v-container>
      </v-card>
    </v-bottom-sheet>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { navItems } from '@/data/navigation'

/**
 * Vuetify theme controller.
 * Used to read the current theme and toggle between studioLight/studioDark.
 */
const theme = useTheme()

/**
 * Mobile navigation state:
 * - sheet: controls the bottom sheet visibility
 * - animateLinks: triggers staggered link animation after sheet opens
 */
const sheet = ref(false)
const animateLinks = ref(false)

/**
 * Navigation items imported from a central config.
 * Keeps the header declarative and easy to maintain.
 */
const menuItems = navItems

/**
 * Reactive theme mode.
 * Vuetify exposes `.dark` on the current theme object.
 */
const isDark = computed(() => theme.global.current.value.dark)

/**
 * Toggles between the two custom themes.
 * This updates Vuetify's global theme name.
 */
const handleThemeToggle = () => {
  theme.change(isDark.value ? 'studioLight' : 'studioDark')
}

/**
 * Opens the mobile navigation sheet.
 * Uses requestAnimationFrame + small delay to ensure
 * the CSS transitions fire cleanly on the next paint cycle.
 */
const openSheet = () => {
  sheet.value = true

  requestAnimationFrame(() => {
    setTimeout(() => {
      animateLinks.value = true
    }, 50)
  })
}

/**
 * Closes the mobile sheet.
 * Delay matches the exit animation duration for smooth UX.
 */
const closeSheet = () => {
  animateLinks.value = false

  setTimeout(() => {
    sheet.value = false
  }, 350)
}
</script>

<style scoped>
.studio-header {
  background: rgba(var(--v-theme-background), 0.8) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  z-index: 1000;
}
.logo-link { text-decoration: none; }
.logo-text { font-weight: 800; text-transform: uppercase; font-size: 0.9rem; color: rgb(var(--v-theme-primary)); letter-spacing: 1px; }
.logo-accent { font-weight: 300; color: rgb(var(--v-theme-on-background)); opacity: 0.6; }

.nav-link {
  text-decoration: none;
  color: rgb(var(--v-theme-on-background));
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.15em;
  transition: color 0.3s ease;
}
.nav-link:hover, .nav-link.router-link-active { color: rgb(var(--v-theme-primary)); }
.nav-divider { width: 1px; height: 16px; background: rgba(var(--v-theme-primary), 0.15); }
.theme-toggle-btn, .mobile-btn { color: rgb(var(--v-theme-primary)) !important; }

.mobile-sheet-card { background: rgb(var(--v-theme-background)) !important; }

.mobile-nav-link, 
.mobile-theme-btn {
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(30px);
  will-change: transform, opacity;
  transition: opacity 0.5s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.is-animated .mobile-nav-link,
.is-animated .mobile-theme-btn {
  opacity: 1;
  transform: translateY(0);
}

.mobile-nav-link {
  font-size: 2.8rem;
  font-weight: 900;
  color: rgb(var(--v-theme-on-background));
  letter-spacing: -1px;
}

.mobile-nav-link.router-link-active {
  color: rgb(var(--v-theme-primary));
}

.mobile-theme-btn {
  min-width: 200px; 
  height: 54px !important; 
  border-width: 2px !important;
  font-size: 0.9rem !important;
  font-weight: 800;
  letter-spacing: 2px !important;
  color: rgb(var(--v-theme-on-background));
}

.close-btn { position: absolute; top: 24px; right: 24px; z-index: 10; }
</style>