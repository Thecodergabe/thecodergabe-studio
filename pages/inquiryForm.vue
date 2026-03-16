<template>
  <v-card variant="flat" class="bg-transparent">
    <v-fade-transition hide-on-leave>
      <div v-if="isSuccess" class="text-center py-12">
        <v-icon
          icon="mdi-check-circle-outline"
          color="primary"
          size="80"
          class="mb-6"
        />
        <h2 class="text-h4 font-weight-bold mb-2 text-uppercase tracking-tighter">Transmission Successful</h2>
        <p class="text-grey-darken-1 mb-8 max-width-center">
          Your project brief has been received. I'll review the technical
          requirements and reach out shortly.
        </p>
        <v-btn
          variant="outlined"
          color="primary"
          rounded="xl"
          class="px-8"
          @click="resetForm"
        >
          Send Another Message
        </v-btn>
      </div>

      <v-form v-else ref="formRef" @submit.prevent="handleSubmit">
        <div class="text-overline mb-4 text-grey-darken-1">
          Select Project Path
        </div>
        
        <v-chip-group
          v-model="form.projectType"
          mandatory
          selected-class="bg-primary text-white"
          class="mb-8"
        >
          <v-chip
            v-for="type in projectTypes"
            :key="type.id"
            :value="type.id"
            variant="outlined"
            filter
            size="large"
            class="px-6 font-weight-medium"
          >
            {{ type.name }}
          </v-chip>
        </v-chip-group>

        <v-row density="comfortable">
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.name"
              :rules="[v => !!v || 'Identity required']"
              label="Name"
              variant="filled"
              rounded="lg"
              :bg-color="inputBg"
              color="primary"
              persistent-placeholder
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="Email"
              variant="filled"
              rounded="lg"
              :bg-color="inputBg"
              color="primary"
              persistent-placeholder
            />
          </v-col>
        </v-row>

        <v-textarea
          v-model="form.message"
          :rules="[
            v => !!v || 'Brief required',
            v => v.length >= 20 || 'Minimum 20 characters'
          ]"
          label="Project Brief"
          variant="filled"
          rounded="lg"
          :bg-color="inputBg"
          color="primary"
          rows="6"
          class="mt-2"
          counter
          persistent-placeholder
        />

        <v-alert
          v-if="error"
          type="error"
          variant="tonal"
          closable
          class="mt-4 mb-4 rounded-lg"
        >
          {{ error }}
        </v-alert>

        <v-btn
          type="submit"
          color="primary"
          size="x-large"
          block
          rounded="xl"
          class="mt-6 font-weight-black shadow-button"
          :loading="isSubmitting"
          variant="flat"
        >
          Initialize Inquiry
        </v-btn>
      </v-form>
    </v-fade-transition>
  </v-card>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useInquiry } from '@/composables/useInquiry'
import { projectTypes } from '@/data/projectTypes'

// Form Component Interfaces
interface VFormInstance {
  validate: () => Promise<{ valid: boolean }>;
  reset: () => void;
}

// State & Theme
const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
const inputBg = computed(() => isDark.value ? 'grey-darken-4' : 'grey-lighten-4')

const { sendInquiry, isSubmitting, isSuccess, error } = useInquiry()
const formRef = ref<VFormInstance | null>(null)

const form = reactive({
  name: '',
  email: '',
  projectType: 'vue-specialty',
  message: ''
})

// Validation Logic
const emailRules = [
  (v: string) => !!v || 'Communication path required',
  (v: string) => /.+@.+\..+/.test(v) || 'Invalid format'
]

const handleSubmit = async () => {
  if (!formRef.value) return
  
  const { valid } = await formRef.value.validate()
  
  if (valid) {
    const readableType = projectTypes.find(t => t.id === form.projectType)?.name || form.projectType
    
    await sendInquiry({
      name: form.name,
      email: form.email,
      projectType: readableType,
      message: form.message
    })
  }
}

const resetForm = () => {
  isSuccess.value = false
  form.name = ''
  form.email = ''
  form.message = ''
  form.projectType = 'vue-specialty'
  formRef.value?.reset()
}
</script>

<style scoped>
.tracking-tighter { letter-spacing: -1px; }

.max-width-center {
  max-width: 400px;
  margin: 0 auto;
}

.shadow-button {
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 15px rgba(var(--v-theme-primary), 0.3) !important;
}

.shadow-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(var(--v-theme-primary), 0.5) !important;
}

:deep(.v-field) {
  transition: transform 0.2s ease, background-color 0.2s ease;
}

:deep(.v-field--focused) {
  /* Dynamic focus background using CSS variable binding */
  background-color: v-bind('isDark ? "#2A2A2A" : "#E0E0E0"') !important;
}
</style>