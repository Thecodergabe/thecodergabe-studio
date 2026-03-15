<template>
  <v-app>
    <header />

    <v-main>
      <NuxtPage />
    </v-main>

    <footer />
  </v-app>
</template>

<script setup lang="ts">
import header from '~/components/header.vue'
import footer from '~/components/footer.vue'

</script>