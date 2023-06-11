import { ref, watch } from "vue";

export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const isFormValid = ref(false);

    watch([firstName, lastName, email], () => {
      validateForm();
    });

    function validateForm() {
      isFormValid.value =
        firstName.value.trim() !== "" &&
        lastName.value.trim() !== "" &&
        email.value.trim() !== "";
    }

    function submitForm() {
      if (isFormValid.value) {
        console.log("Form submitted!");
      } else {
        console.log("Please fill all required fields.");
      }
    }

    return {
      firstName,
      lastName,
      email,
      isFormValid,
      submitForm,
    };
  },
};
