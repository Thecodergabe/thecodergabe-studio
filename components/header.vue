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
          <nuxt-link 
            v-for="item in menuItems" 
            :key="item.title" 
            :to="item.path" 
            class="nav-link"
          >
            {{ item.title }}
          </nuxt-link>
        </nav>

        <div class="nav-divider mx-6" />

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
        icon="mdi-menu" 
        variant="text"
        size="large"
        class="d-md-none mobile-btn" 
        @click="sheet = true"
      />
    </v-container>

    <v-bottom-sheet v-model="sheet" fullscreen transition="dialog-bottom-transition">
      <v-card class="mobile-sheet-card border-none">
        <v-btn 
          icon="mdi-close" 
          variant="tonal" 
          class="close-btn" 
          @click="sheet = false" 
        />
        
        <v-container class="fill-height d-flex flex-column justify-center align-center">
          <nav class="d-flex flex-column ga-8 text-center">
            <nuxt-link 
              v-for="item in menuItems" 
              :key="item.title" 
              :to="item.path" 
              class="mobile-nav-link"
              @click="sheet = false"
            >
              {{ item.title }}
            </nuxt-link>
            
            <v-btn
              variant="outlined"
              color="primary"
              class="mt-4 rounded-pill font-weight-black"
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

.logo-link {
  text-decoration: none;
}

.logo-text {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.9rem;
  color: rgb(var(--v-theme-primary));
  letter-spacing: 1px;
}

.logo-accent {
  font-weight: 300;
  color: rgb(var(--v-theme-on-background));
  opacity: 0.6;
}

.nav-link {
  text-decoration: none;
  color: rgb(var(--v-theme-on-background));
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.15em;
  transition: color 0.3s ease;
}

.nav-link:hover, .router-link-active {
  color: rgb(var(--v-theme-primary));
}

.nav-divider {
  width: 1px;
  height: 16px;
  background: rgba(var(--v-theme-primary), 0.15);
}

.theme-toggle-btn {
  color: rgb(var(--v-theme-primary)) !important;
}

.mobile-btn {
  color: rgb(var(--v-theme-primary)) !important;
}

.mobile-sheet-card { 
  background: rgb(var(--v-theme-background)) !important; 
}

.mobile-nav-link {
  font-size: 2.5rem;
  text-decoration: none;
  font-weight: 900;
  color: rgb(var(--v-theme-on-background));
  text-transform: uppercase;
  letter-spacing: -1px;
}

.close-btn { 
  position: absolute; 
  top: 24px; 
  right: 24px; 
  z-index: 10;
}
</style>