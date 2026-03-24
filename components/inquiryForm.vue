<template>
  <v-card variant="flat" class="bg-transparent overflow-hidden">
    <v-fade-transition hide-on-leave>
      <div v-if="isSuccess" class="text-center py-8" aria-live="polite">
        <v-icon icon="mdi-check-circle-outline" color="primary" size="64" class="mb-4" />
        <h2 class="text-h5 font-weight-bold mb-2 text-uppercase tracking-tighter">Transmission Successful</h2>
        <p class="text-caption text-grey-darken-1 mb-6 px-4">Project brief received. Reviewing now.</p>
        <v-btn variant="outlined" color="primary" rounded="xl" @click="resetForm">Send Another</v-btn>
      </div>

      <v-form v-else ref="formRef" class="pa-0" @submit.prevent="handleSubmit" autocomplete="off" novalidate>
        <div class="v-hidden-field">
          <input 
            v-model="form.honey" 
            type="text" 
            name="verification_code" 
            tabindex="-1" 
            autocomplete="off"
            aria-hidden="true" 
          >
        </div>

        <div class="text-overline mb-2 text-grey-darken-1 px-1">Select Project Path</div>
        
        <div class="chip-container mb-6">
          <v-chip-group v-model="form.projectType" mandatory selected-class="bg-primary text-white" column>
            <v-chip v-for="type in projectTypes" :key="type.id" :value="type.id" variant="outlined" size="small" class="font-weight-bold">
              {{ type.name }}
            </v-chip>
          </v-chip-group>
        </div>

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
              hide-details="auto"
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
              hide-details="auto"
              persistent-placeholder
            />
          </v-col>

          <v-col cols="12">
            <v-textarea
              v-model="form.message"
              :rules="[v => !!v || 'Brief required', v => v.length >= 20 || 'Too short']"
              label="Project Brief"
              variant="filled"
              rounded="lg"
              :bg-color="inputBg"
              color="primary"
              rows="5"
              auto-grow
              class="mt-2"
              persistent-placeholder
            />
          </v-col>
        </v-row>

        <v-btn
          type="submit"
          color="primary"
          size="x-large"
          block
          rounded="lg"
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
/**
 * @file components/inquiryForm.vue
 * @description High‑integrity inquiry form with bot‑detection,
 * Vuetify validation, and async submission via useInquiry().
 */

import { useTheme } from 'vuetify'
import { useInquiry } from '@/composables/useInquiry'
import { projectTypes } from '@/data/projectTypes'

/**
 * Type for Vuetify's v-form instance.
 * Ensures validate() and reset() are properly typed.
 */
interface VFormInstance {
  validate: () => Promise<{ valid: boolean }>
  reset: () => void
}

/**
 * Theme‑aware input background color.
 * Keeps fields readable in both light and dark mode.
 */
const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
const inputBg = computed(() =>
  isDark.value ? 'grey-darken-4' : 'grey-lighten-4'
)

/**
 * Inquiry composable:
 * - sendInquiry(): async submission handler
 * - isSubmitting: loading state
 * - isSuccess: toggles success UI
 */
const { sendInquiry, isSubmitting, isSuccess } = useInquiry()

/**
 * Reference to the Vuetify form instance.
 */
const formRef = ref<VFormInstance | null>(null)

/**
 * Reactive form model.
 * Includes a honeypot field ("honey") for bot detection.
 */
const form = reactive({
  name: '',
  email: '',
  projectType: 'vue-specialty',
  message: '',
  honey: '' // hidden field — bots fill this, humans don't
})

/**
 * Timestamp when the form was mounted.
 * Used to detect "too fast" submissions from bots.
 */
const mountTime = Date.now()

/**
 * Email validation rules.
 */
const emailRules = [
  (v: string) => !!v || 'Communication path required',
  (v: string) => /.+@.+\..+/.test(v) || 'Invalid format'
]

/**
 * Main submit handler.
 * Includes:
 * 1. Honeypot check
 * 2. Submission speed check
 * 3. Vuetify validation
 * 4. Inquiry submission
 */
const handleSubmit = async () => {
  if (!formRef.value) return

  // Honeypot: bots fill hidden fields, humans don't
  if (form.honey) {
    console.warn('Bot detected via Honeypot.')
    return
  }

  // Submission speed: humans don't submit forms in < 3 seconds
  if (Date.now() - mountTime < 3000) {
    console.warn('Submission too fast (Potential Bot).')
    return
  }

  // Validate visible fields
  const { valid } = await formRef.value.validate()
  if (!valid) return

  // Convert projectType ID → readable label
  const readableType =
    projectTypes.find(t => t.id === form.projectType)?.name ||
    form.projectType

  // Submit inquiry
  await sendInquiry({
    name: form.name,
    email: form.email,
    projectType: readableType,
    message: form.message
  })
}

/**
 * Resets the form after a successful submission.
 * Clears all fields and resets validation state.
 */
const resetForm = () => {
  isSuccess.value = false
  form.name = ''
  form.email = ''
  form.message = ''
  form.honey = ''
  form.projectType = 'vue-specialty'
  formRef.value?.reset()
}
</script>

<style scoped>
/* Ensures the honeypot is completely invisible to users 
  and doesn't affect the layout flow.
*/
.v-hidden-field {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
  pointer-events: none;
}

.chip-container {
  max-width: 100%;
}
:deep(.v-chip-group .v-slide-group__content) {
  padding: 0 !important;
}
.shadow-button {
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>