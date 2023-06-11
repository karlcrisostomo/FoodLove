import { ref } from 'vue';
import LoadingSpinnerVue from '@/views/LoadingSpinner.vue';

export default {
  components: {
    LoadingSpinnerVue
  },
  setup() {
    const isLoading = ref(false);

    

    return {
      isLoading
    };
  }
}