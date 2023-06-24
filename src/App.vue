<script src="./script/home.js"></script>

<style lang="scss">
@import url("./styles/Main.scss");
</style>

<template>
  <nav class="navbar">
    <span @click="$router.push('/')"  class="title">Cuisine Explorer</span>

    <div :class="['navCon', { 'navCon-open': isMenuOpen }]">
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul :class="['navList', { show: isMenuOpen }]">
        <li class="router-li">
          <router-link to="/" class="router-link">Home</router-link>
        </li>
        <li class="router-li">
          <router-link to="/about" class="router-link">About</router-link>
        </li>
        <li class="router-li">
          <router-link to="/contact" class="router-link"
            >Contact Us</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
  <router-view />

  <section class="footer-section">
    <footer>
      <div class="footer-container" v-if="!hideDiv">
        <span class="footer-title">Powered By</span>

        <div class="ft-img-con">
          <img class="stack-img-1" src="./assets/vuejs-icon.svg" alt="" />
          <img
            class="stack-img-2"
            src="./assets/Axios_logo_(2020).svg"
            alt=""
          />
        </div>
      </div>
    </footer>
  </section>
</template>
