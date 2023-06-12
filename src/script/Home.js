import { ref, computed } from "vue";
import { useRoute ,useRouter} from "vue-router";

export default {
  setup() {
    
    const isMenuOpen = ref(false);
    const route = useRoute();
    const router = useRouter();
    const hideDiv = computed(() => {
      return route.name === "error";
    });

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const toggleHome = () =>{
      router.push("/")
    }
    return {
      isMenuOpen,
      toggleMenu,
      toggleHome,
      hideDiv,
    };
  },
};
