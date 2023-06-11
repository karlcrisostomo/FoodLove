import { ref, onMounted } from 'vue';

export default {
  setup() {
    const isMenuOpen  = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu
    };
  }
};