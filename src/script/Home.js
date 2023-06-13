import { ref, computed, } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const isMenuOpen = ref(false);
    const route = useRoute();
    const menuContainer = ref(null);

    const handleClickOutside = (event) => {
      if (menuContainer.value && !menuContainer.value.contains(event.target)) {
        // Close the menu by resetting any relevant state or class
        // For example, you could use a reactive variable like `isOpen` to control the menu's visibility
        // isOpen.value = false;
        // Or remove a CSS class
        // menuContainer.value.classList.remove('navCon-open');
      }
    };

  

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
      menuContainer,
      handleClickOutside,
    };
  },
};
