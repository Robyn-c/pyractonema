<template>
  <Navbar />
  <main class="pl-96">
    <slot/>
  </main>
</template>

<script setup>
  import Navbar from '~/components/Navbar.vue';
</script>

<style scoped>
  main {
    height: 100%;
    }
</style>