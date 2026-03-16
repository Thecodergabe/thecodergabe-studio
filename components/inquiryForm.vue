<template>
  <v-card variant="flat" class="bg-transparent overflow-hidden">
    <v-fade-transition hide-on-leave>
      <div v-if="isSuccess" class="text-center py-8">
        <v-icon icon="mdi-check-circle-outline" color="primary" size="64" class="mb-4" />
        <h2 class="text-h5 font-weight-bold mb-2 text-uppercase tracking-tighter">Transmission Successful</h2>
        <p class="text-caption text-grey-darken-1 mb-6 px-4">Project brief received. Reviewing now.</p>
        <v-btn variant="outlined" color="primary" rounded="xl" @click="resetForm">Send Another</v-btn>
      </div>

      <v-form v-else ref="formRef" class="pa-0" @submit.prevent="handleSubmit">
        <div class="v-hidden-field">
          <input 
            v-model="form.honey" 
            type="text" 
            name="verification_code" 
            tabindex="-1" 
            autocomplete="off"
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

        <v-row dense>
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
import { useTheme } from 'vuetify'
import { useInquiry } from '@/composables/useInquiry'
import { projectTypes } from '@/data/projectTypes'

interface VFormInstance {
  validate: () => Promise<{ valid: boolean }>;
  reset: () => void;
}

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
const inputBg = computed(() => isDark.value ? 'grey-darken-4' : 'grey-lighten-4')

const { sendInquiry, isSubmitting, isSuccess } = useInquiry()
const formRef = ref<VFormInstance | null>(null)

// Added 'honey' to reactive state
const form = reactive({
  name: '',
  email: '',
  projectType: 'vue-specialty',
  message: '',
  honey: '' 
})

// Track when the form was loaded to catch "instant" bot submissions
const mountTime = Date.now()

const emailRules = [
  (v: string) => !!v || 'Communication path required',
  (v: string) => /.+@.+\..+/.test(v) || 'Invalid format'
]

const handleSubmit = async () => {
  if (!formRef.value) return

  // 1. Check Honeypot: If filled, it's a bot
  if (form.honey) {
    console.warn('Bot detected via Honeypot.')
    return 
  }

  // 2. Check Submission Speed: If < 3s, it's likely a script
  if (Date.now() - mountTime < 3000) {
    console.warn('Submission too fast (Potential Bot).')
    return
  }
  
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