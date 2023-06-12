import { ref, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const isMenuOpen = ref(false);
    const route = useRoute();
    const hideDiv = computed(() => {
      return route.name === "error";
    });

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
      hideDiv,
    };
  },
};
