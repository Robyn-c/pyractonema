<template>
  <main class="grid grid-cols-2">
    <Navbar />
    <slot/>
  </main>
</template>

<script setup>
  import Navbar from '~/components/Navbar.vue';

</script>