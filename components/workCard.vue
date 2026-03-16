<template>
  <v-row 
    class="mb-16 align-center" 
    :class="{ 'flex-row-reverse': !isEven }"
  >
    <v-col cols="12" md="7" class="media-col">
      <div class="media-container d-flex flex-column">
        <browser-mockup 
          v-if="project.image"
          :image="project.image"
          :image-before="project.imageBefore"
          :url="project.url"
          :show-before="project.showBefore"
          class="h-100"
          @toggle="$emit('toggle', project.id)"
        />

        <image-placeholder 
          v-else 
          :icon="project.icon"
          :label="project.archLabel"
          :secondary-label="project.id"
          class="flex-grow-1"
        >
          <template #overlay>
            <div class="pa-4 position-absolute top-0 left-0 w-100">
              <v-chip color="primary" size="x-small" variant="flat" class="font-weight-black">
                {{ project.commitCount }} COMMITS
              </v-chip>
            </div>
          </template>
        </image-placeholder>
      </div>
    </v-col>

    <v-col cols="12" md="5" class="pa-md-12">
      <div class="text-overline text-primary font-weight-bold mb-2 tracking-widest text-uppercase">
        {{ project.category }}
      </div>
      <h3 class="text-h3 font-weight-black mb-4">{{ project.title }}</h3>
      <p class="text-body-1 text-grey-darken-1 mb-6 leading-relaxed">
        {{ project.description }}
      </p>

      <div class="d-flex flex-wrap ga-2 mb-8">
        <v-chip
          v-for="tag in project.tags.slice(0, 3)"
          :key="tag"
          variant="tonal"
          size="small"
          class="text-uppercase font-weight-bold"
        >
          {{ tag }}
        </v-chip>
      </div>

      <v-btn 
        :to="`/work/${project.id}`" 
        variant="outlined" 
        rounded="pill" 
        class="px-8 font-weight-black"
      >
        View Case Study
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
// Clean script, no redundant interfaces
defineProps<{
  project: any;
  isEven: boolean;
}>();

defineEmits(['toggle']);
</script>

<style scoped>
.media-container {
  /* This prevents the placeholder from collapsing and crops 
     excessively tall images to a cinematic 16:10 or 3:2 ratio */
  height: 500px; 
  min-height: 500px;
  max-height: 600px;
  width: 100%;
  overflow: hidden;
}

/* Ensure the placeholder fills the entire 500px height */
:deep(.technical-blueprint) {
  height: 100% !important;
}

@media (max-width: 960px) {
  .media-container {
    height: 350px;
    min-height: 350px;
  }
}
</style>