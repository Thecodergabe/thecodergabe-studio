<template>
  <v-footer
    height="auto"
    color="surface"
    class="py-6"
  >
    <v-container class="d-flex flex-column align-center text-center">
      <div class="text-body-2 text-secondary">
        © {{ new Date().getFullYear() }} Gabriel Studio — All Rights Reserved
      </div>

      <div class="d-flex align-center mt-3" style="gap: 1.5rem;">
        <v-btn
          variant="text"
          color="text-secondary"
          class="text-caption"
          href="#"
        >
          Privacy
        </v-btn>

        <v-btn
          variant="text"
          color="text-secondary"
          class="text-caption"
          href="#"
        >
          Terms
        </v-btn>

        <v-btn
          variant="text"
          color="text-secondary"
          class="text-caption"
          href="#"
        >
          Contact
        </v-btn>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts"></script>