<template>
  <v-container v-if="project"
               class="py-8 py-md-16 mt-4 mt-md-10">
    <v-row justify="center">
      <v-col cols="12"
             lg="10">

        <!-- Header Section -->
        <header class="mb-10">
          <v-btn to="/work"
                 variant="text"
                 color="primary"
                 class="px-0 mb-6"
                 prepend-icon="mdi-arrow-left">
            BACK TO WORKS
          </v-btn>
          <h1 class="text-h3 text-md-h2 font-weight-black mb-2 tracking-tighter">{{ project.title }}</h1>
          <div class="text-subtitle-1 text-primary font-weight-bold uppercase tracking-widest">// {{ project.category }}
          </div>
        </header>

        <v-row>
          <v-col cols="12"
                 md="8">
            <!-- Hero Image/Placeholder -->
            <v-card variant="outlined"
                    class="rounded-xl mb-12 overflow-hidden border-thin bg-surface"
                    flat>
              <v-img v-if="project.image"
                     :src="project.image"
                     height="500"
                     cover />
              <image-placeholder v-else
                                 height="400"
                                 :icon="project.icon || 'mdi-layers-outline'"
                                 :label="project.category"
                                 :secondary-label="project.id" />
            </v-card>

            <!-- Technical Overhaul Section -->
            <section class="mb-12">
              <h2 class="text-h4 font-weight-black mb-6">The Technical Overhaul</h2>
              <p class="text-body-1 text-bodyTextSecondary mb-8 leading-relaxed">
                {{ project.description }}
              </p>

              <v-row v-if="project.features">
                <v-col v-for="feature in project.features"
                       :key="feature.title"
                       cols="12"
                       sm="6">
                  <v-card variant="tonal"
                          class="pa-6 rounded-xl border-thin h-100"
                          color="primary">
                    <v-icon color="primary"
                            class="mb-4"
                            size="32">{{ feature.icon }}</v-icon>
                    <h3 class="text-h6 font-weight-black mb-2 text-primary">{{ feature.title }}</h3>
                    <p class="text-body-2 opacity-80 leading-relaxed">
                      {{ feature.text }}
                    </p>
                  </v-card>
                </v-col>
              </v-row>
            </section>

            <!-- Key Contributions -->
            <section class="mb-12">
              <h2 class="text-h5 font-weight-black mb-6">Key Contributions</h2>
              <div v-for="(item, i) in project.highlights"
                   :key="i"
                   class="d-flex align-start mb-6">
                <v-icon color="primary"
                        class="mr-4 mt-1">mdi-rhombus-medium</v-icon>
                <span class="text-body-1 text-bodyTextSecondary font-weight-medium leading-tight">{{ item }}</span>
              </div>
            </section>
          </v-col>

          <!-- Sidebar Metrics -->
          <v-col cols="12"
                 md="4">
            <v-card variant="outlined"
                    class="pa-8 rounded-xl border-primary-opacity-20 bg-surface sticky-top">
              <div class="text-overline text-primary mb-4 font-weight-black tracking-widest">ENGINEERING METRICS</div>
              <div class="mb-8">
                <div class="text-h4 font-weight-black text-bodyText">{{ project.commitCount }}</div>
                <div class="text-caption text-bodyTextSecondary uppercase font-weight-bold">Status / Output</div>
              </div>

              <v-divider class="mb-8"></v-divider>

              <div class="text-overline text-primary mb-4 font-weight-black tracking-widest">TECH STACK</div>
              <div class="d-flex flex-wrap ga-2 mb-10">
                <v-chip v-for="tag in project.tags"
                        :key="tag"
                        size="small"
                        variant="tonal"
                        color="primary"
                        class="font-weight-bold">
                  {{ tag }}
                </v-chip>
              </div>

              <v-btn block
                     color="primary"
                     rounded="pill"
                     size="large"
                     variant="flat"
                     :href="project.url.startsWith('http') ? project.url : `https://${project.url}`"
                     target="_blank"
                     class="text-none font-weight-bold">
                VIEW PROJECT
                <v-icon end
                        size="small"
                        class="ml-2">mdi-open-in-new</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '../../data/projects';

const route = useRoute();
const project = computed(() => projects.find(p => p.id === route.params.id));

// SEO Injection: This is what makes Google love these dynamic pages
useHead({
  title: project.value ? `${project.value.title} | TheCoderGabe Studio` : 'Project',
  meta: [
    {
      name: 'description',
      content: project.value?.description || 'Deep dive into technical engineering projects by TheCoderGabe Studio.'
    },
    { property: 'og:title', content: project.value?.title },
    { property: 'og:description', content: project.value?.description },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: `https://thecodergabe.com/work/${route.params.id}` }
  ]
});
</script>