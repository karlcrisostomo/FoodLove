<script src="../script/Form"></script>

<style>
@import url("../styles/Contact.scss");
</style>

<template>
  <div class="contact-container">
    <form class="contact-section" @submit.prevent="submitForm">
      <div>
        <label for="fname">First name:</label><br />
        <input
          type="text"
          id="fname"
          name="fname"
          v-model="firstName"
          required
        /><br />
      </div>
      <div>
        <label for="lname">Last name:</label><br />
        <input
          type="text"
          id="lname"
          name="lname"
          v-model="lastName"
          required
        /><br />
      </div>
      <div>
        <label for="email">Email:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          required
        /><br />
      </div>

      <div class="text-container">
        <p>What can we help you with?</p>
        <textarea name="text-area" id="textArea"></textarea>
      </div>
      <div class="submit-container">
        <input class="submit-cta" type="submit" value="Send" />
      </div>
    </form>
  </div>
</template>
