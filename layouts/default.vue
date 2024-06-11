<template>
  <Navbar />
  <main class="px-96">
    <slot/>
  </main>
</template>

<script setup>
  import Navbar from '~/components/Navbar.vue';
</script>

<style scoped>
  main {
    height: 100%;
    background-image: url("../public/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }
</style>