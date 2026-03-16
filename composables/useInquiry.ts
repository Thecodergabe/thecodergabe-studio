// composables/useInquiry.ts
import emailjs from '@emailjs/browser';

export const useInquiry = () => {
  const isSubmitting = ref(false);
  const isSuccess = ref(false);
  const error = ref<string | null>(null);

  const sendInquiry = async (formData: Record<string, string>) => {
    isSubmitting.value = true;
    error.value = null;

    // Use the Vite environment variables defined in your .env
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
      } else {
        throw new Error('Transmission interrupted by API.');
      }
    } catch (err: any) {
      error.value = err?.text || 'Transmission failed. Direct contact available via GitHub.';
      console.error('EmailJS Error:', err);
    } finally {
      isSubmitting.value = false;
    }
  };

  return { 
    sendInquiry, 
    isSubmitting, 
    isSuccess, 
    error 
  };
};