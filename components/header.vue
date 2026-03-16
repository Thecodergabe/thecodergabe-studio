<template>
  <v-app-bar 
    flat 
    class="studio-header px-4 px-md-12"
    height="80"
    fixed
  >
    <div class="d-flex align-center" style="min-width: 280px;">
      <div class="logo-text">
        THECODERGABE <span class="logo-accent">STUDIO</span>
      </div>
    </div>

    <v-spacer />

    <div class="d-none d-md-flex align-center">
      <nav class="d-flex align-center ga-6">
        <nuxt-link 
          v-for="item in menuItems" 
          :key="item.title" 
          :to="item.path" 
          class="nav-link"
        >
          {{ item.title }}
        </nuxt-link>
      </nav>

      <div class="nav-divider mx-6"></div>

      <v-btn
        icon
        variant="tonal"
        size="small"
        class="theme-toggle-btn"
        @click="handleThemeToggle"
      >
        <v-icon size="18">
          {{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}
        </v-icon>
      </v-btn>
    </div>

    <v-btn 
      icon="mdi-menu-variant" 
      variant="text"
      class="d-md-none mobile-btn" 
      @click="sheet = true"
    />

    <v-bottom-sheet v-model="sheet" fullscreen transition="dialog-bottom-transition">
      <v-card class="mobile-sheet-card">
        <v-btn icon="mdi-close" variant="text" class="close-btn" @click="sheet = false" />
        <v-container class="fill-height d-flex flex-column justify-center align-center">
          <nav class="d-flex flex-column ga-10 text-center">
            <nuxt-link 
              v-for="item in menuItems" 
              :key="item.title" 
              :to="item.path" 
              class="mobile-nav-link"
              @click="sheet = false"
            >
              {{ item.title }}
            </nuxt-link>
          </nav>
        </v-container>
      </v-card>
    </v-bottom-sheet>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import { navItems } from '@/data/navigation'

const theme = useTheme()
const sheet = ref(false)
const menuItems = navItems

const isDark = computed(() => theme.global.current.value.dark)
const handleThemeToggle = () => {
  theme.global.name.value = isDark.value ? 'studioLight' : 'studioDark'
}
</script>

<style scoped>
.studio-header {
  background: rgba(var(--v-theme-background), 0.8) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  z-index: 1000;
}

.logo-text {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.95rem;
  color: rgb(var(--v-theme-primary));
  white-space: nowrap;
}

.logo-accent {
  font-weight: 300;
  color: rgb(var(--v-theme-bodyTextMuted));
}

.nav-link {
  text-decoration: none;
  color: rgb(var(--v-theme-bodyTextSecondary));
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.nav-link:hover, .router-link-active {
  color: rgb(var(--v-theme-primary));
}

.nav-divider {
  width: 1px;
  height: 20px;
  background: rgba(var(--v-theme-primary), 0.2);
}

.theme-toggle-btn, .mobile-btn {
  color: rgb(var(--v-theme-primary)) !important;
}

.mobile-sheet-card { background: rgb(var(--v-theme-background)) !important; }

.mobile-nav-link {
  font-size: 3rem;
  text-decoration: none;
  font-weight: 900;
  color: rgb(var(--v-theme-bodyText));
  text-transform: uppercase;
  font-family: 'Syne', sans-serif;
}

.close-btn { position: absolute; top: 24px; right: 24px; color: rgb(var(--v-theme-primary)) !important; }
</style>