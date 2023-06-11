<template>
  <div class="error-container">
    <div class="error-content">
      <h1>SORRY</h1>
      <p>We Could not find the Ingredients</p>
      <button class="error-btn" @click="$router.push({name:'home'})">Go back to previous page</button>
    </div>
    

    <img class="chef-img" src="../assets/chef-404.png" alt="">
  </div>


</template>

<style lang="scss">
@import url(../styles/Error.scss);
</style>
