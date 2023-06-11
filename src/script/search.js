import axios from "axios";
import { ref, onMounted, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";
import LoadingSpinnerVue from "@/views/LoadingSpinner.vue";
export default {
  components: {
    LoadingSpinnerVue,
  },

  setup() {
    const recipes = ref([]);
    const searchQuery = ref("");
    const selectedCuisine = ref("");
    const selectedRecipe = ref(null);
    const router = useRouter();
    const isLoading = ref(false);
    const errorMessage = ref(false);

    const fetchRecipes = async () => {
      try {
        isLoading.value = true;
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch",
          {
            params: {
              query: searchQuery.value,
              cuisine: selectedCuisine.value,
              apiKey: "9a0c932623664760a9bece6b4ef303db",
              includeImages: true,
              number: 30,
            },
          }
        );
        recipes.value = response.data.results;
      } catch (error) {
        console.error(error);
        errorMessage.value = true;
  
      } finally {
        isLoading.value = false;
      }
    };

    const fetchRecipeIngredients = async (recipeId) => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/food/ingredients/${recipeId}/information`,
          {
            params: {
              apiKey: "9a0c932623664760a9bece6b4ef303db",
            },
          }
        );
        return response.data.ingredients.map((ingredient) => ({
          name: ingredient.name,
        }));
      } catch (error) {
        console.error("error getting Ingredients");
        return [];
      }
    };

    const showIngredients = async (recipe) => {
      selectedRecipe.value = recipe;
      selectedRecipe.value.ingredients = await fetchRecipeIngredients(
        recipe.id
      );

      router.push({ name: "error" });
    };

    onMounted(fetchRecipes);

    return {
      recipes,
      searchQuery,
      selectedCuisine,
      fetchRecipes,
      showIngredients,
      selectedRecipe,
      isLoading,
      errorMessage,
    };
  },
};
