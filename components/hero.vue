<template>
  <section class="hero-section d-flex flex-column align-center justify-center">
    
    <div class="hero-content text-center mb-12">
      <h2 class="text-overline text-primary mb-2 tracking-widest animate-fade-up">
        ESTABLISHED 2026
      </h2>
      
      <h1 class="hero-title animate-fade-up-delay-1">
        Bespoke Digital <br />
        <span class="text-outline">Craftsmanship.</span>
      </h1>
      
      <p class="hero-subtitle text-bodyTextMuted mt-6 mx-auto animate-fade-up-delay-2">
        We bridge the gap between complex engineering and <br class="d-none d-md-block" /> 
        elegant design for forward-thinking brands.
      </p>

      <div class="mt-10 animate-fade-up-delay-3">
        <v-btn
          color="primary"
          size="x-large"
          rounded="full"
          class="cta-btn px-10"
          elevation="0"
          to="/contact"
        >
          Start a Consultation
          <v-icon end size="18">mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="editor-wrapper animate-float">
      <editor-window />
    </div>

  </section>
</template>

<script setup>
</script>
<style scoped>
.hero-section {
  min-height: 90vh;
  padding: 80px 24px;
  position: relative;
  overflow: hidden;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5.5rem);
  line-height: 0.95;
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

.text-outline {
  -webkit-text-stroke: 1px rgb(var(--v-theme-primary));
  color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 650px;
  line-height: 1.6;
}

.tracking-widest {
  letter-spacing: 0.4em !important;
}

/* Boutique Button Styling */
.cta-btn {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  border: 1px solid rgba(var(--v-theme-primary), 0.5);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(var(--v-theme-primary), 0.2);
}

/* Entrance Animations */
.animate-fade-up {
  animation: fadeUp 0.8s ease-out forwards;
}
.animate-fade-up-delay-1 { animation: fadeUp 0.8s ease-out 0.2s forwards; opacity: 0; }
.animate-fade-up-delay-2 { animation: fadeUp 0.8s ease-out 0.4s forwards; opacity: 0; }
.animate-fade-up-delay-3 { animation: fadeUp 0.8s ease-out 0.6s forwards; opacity: 0; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Subtle float for the editor to make it feel "3D" */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
</style>