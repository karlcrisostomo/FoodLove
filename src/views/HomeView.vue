<script src="../script/search"></script>
<style lang="scss">
@import url(../styles/Hero.scss);
</style>
<template>
  <div class="recipe-section">
    <div class="slanted-text">
      <p>Find a recipe for your favorite dish!</p>
      <img class="heart-icon" src="../assets/heart-icon.svg" alt="" />
    </div>
    <div class="search-container">
      <div class="search-bar">
        <div class="search-cta">
          <img
            class="search-icon"
            src="../assets/search-icon.svg"
            alt=""
            @click="fetchRecipes"
          />
          <input
            class="search-input"
            type="search"
            v-model="searchQuery"
            placeholder="Search for recipes"
            @keyup.enter="fetchRecipes"
          />
        </div>

        <select class="select-cta" v-model="selectedCuisine">
          <option value="">All Cuisines</option>
          <option value="African">African</option>
          <option value="Asian">Asian</option>
          <option value="American">American</option>
          <option value="British">British</option>
          <option value="Cajun">Cajun</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Chinese">Chinese</option>
          <option value="Eastern European">Eastern European</option>
          <option value="European">European</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Greek">Greek</option>
          <option value="Indian">Indian</option>
          <option value="Irish">Irish</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Jewish">Jewish</option>
          <option value="Korean">Korean</option>
          <option value="Latin American">Latin American</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Nordic">Nordic</option>
          <option value="Southern">Southern</option>
          <option value="Spanish">Spanish</option>
          <option value="Thai">Thai</option>
          <option value="Vietnamese">Vietnamese</option>
        </select>
      </div>
    </div>

    <div class="hero">
      <LoadingSpinnerVue v-if="isLoading" />

      <article
        class="card-container"
        v-for="recipe in recipes"
        :key="recipe.id"
      >
        <figure class="card-content" v-motion-slide-top :delay="1000">
          <img
            class="recipe-img"
            :src="recipe.image"
            :alt="recipe.title"
            @click="showIngredients"
          />
          <div class="recipe-title-container">
            <p class="recipe-title">{{ recipe.title }}</p>
          </div>
        </figure>
      </article>
    </div>
    <div
      style="text-align: center; height: 50vh; margin-top: 10%"
      id="error-message"
      v-if="errorMessage"
    >
      <span>"An error occurred. Please try again later."</span>
    </div>
  </div>
</template>
