<template>
  <v-app-bar 
    flat 
    class="studio-header px-4 px-md-12"
    height="80"
  >
    <v-toolbar-title class="logo-text text-primary">
      THECODERGABE <span class="font-weight-light">STUDIO</span>
    </v-toolbar-title>

    <v-spacer />

    <div class="d-none d-md-flex align-center ga-8">
      <nav class="studio-nav">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/work" class="nav-link">Work</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Inquiry</NuxtLink>
      </nav>

      <v-divider vertical inset class="mx-2" style="height: 24px;" />

      <v-btn
        icon
        variant="tonal"
        size="small"
        color="primary"
        @click="toggleTheme"
        class="theme-btn"
      >
        <v-icon size="18">
          {{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}
        </v-icon>
      </v-btn>
    </div>

    <v-btn icon class="d-md-none" @click="sheet = true">
      <v-icon>mdi-menu-variant</v-icon>
    </v-btn>
  </v-app-bar>

  </template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const tab = ref(null)
const sheet = ref(false)
const theme = useTheme()

const toggleTheme = () => {
  theme.global.current.value.dark
    ? theme.change('studioLight')
    : theme.change('studioDark')
}
</script>

<style scoped>
.studio-header {
  /* The "Boutique" Glass Effect */
  background: rgba(var(--v-theme-background), 0.6) !important;
  backdrop-filter: blur(15px) saturate(180%);
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  transition: all 0.3s ease;
}

.logo-text {
  font-family: 'Inter', sans-serif; /* Or a high-end Serif */
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  font-size: 1.1rem !important;
}

.studio-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: rgb(var(--v-theme-bodyTextSecondary));
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.nav-link:hover, .router-link-active {
  color: rgb(var(--v-theme-primary));
}

/* Subtle dot indicator for active link instead of a big bar */
.router-link-active::after {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  background: rgb(var(--v-theme-primary));
  border-radius: 50%;
  margin: 4px auto 0;
}

.theme-btn {
  background: rgba(var(--v-theme-primary), 0.1) !important;
}
</style>