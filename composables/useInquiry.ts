// composables/useInquiry.ts
import emailjs from '@emailjs/browser';

export const useInquiry = () => {
  const isSubmitting = ref(false);
  const isSuccess = ref(false);
  const error = ref<string | null>(null);

  const sendInquiry = async (formData: Record<string, string>) => {
    // 1. SECONDARY PARSING: Final guard rail
    // Ensure required fields aren't just empty strings or single characters
    if (!formData.name || formData.name.length < 2 || !formData.message || formData.message.length < 10) {
      console.error("Transmission aborted: Invalid Data Structure.");
      return;
    }

    isSubmitting.value = true;
    error.value = null;

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          submitted_at: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      );

      if (response.status === 200) {
        isSuccess.value = true;
      }
    } catch (err: any) {
      error.value = 'Transmission failed. Direct contact available via GitHub.';
    } finally {
      isSubmitting.value = false;
    }
  };

  return { sendInquiry, isSubmitting, isSuccess, error };
};