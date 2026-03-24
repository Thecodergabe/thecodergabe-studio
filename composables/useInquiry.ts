import emailjs from '@emailjs/browser'

/**
 * Composable handling inquiry submission via EmailJS.
 * Includes:
 *  - client-side validation
 *  - async transmission
 *  - loading + success state
 *  - graceful error fallback
 */
export const useInquiry = () => {
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const error = ref<string | null>(null)

  /**
   * Sends an inquiry email using EmailJS.
   * Expects a minimal payload: name, email, projectType, message.
   */
  const sendInquiry = async (formData: Record<string, string>) => {
    // Basic structural validation before hitting the network
    if (
      !formData.name ||
      formData.name.length < 2 ||
      !formData.message ||
      formData.message.length < 10
    ) {
      console.error('Transmission aborted: Invalid Data Structure.')
      return
    }

    isSubmitting.value = true
    error.value = null

    // Environment‑based EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    try {
      /**
       * EmailJS request payload.
       * These fields map directly to your EmailJS template variables.
       */
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          submitted_at: new Date().toLocaleString()
        },
        PUBLIC_KEY
      )

      // EmailJS returns status 200 on success
      if (response.status === 200) {
        isSuccess.value = true
      }
    } catch (err: any) {
      /**
       * Generic fallback message.
       * Avoid exposing internal error details to the UI.
       */
      error.value = 'Transmission failed. Direct contact available via GitHub.'
    } finally {
      isSubmitting.value = false
    }
  }

  return { sendInquiry, isSubmitting, isSuccess, error }
}