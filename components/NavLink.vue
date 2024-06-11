<template>
  <div>
    <NuxtLink :to="href" activeClass="text-violet-500 bg-black/40" class="block px-4 py-3 rounded-md text-white text-2xl font-semibold font-sans">
      <div class="flex items-center gap-2">
        <nuxt-icon :name="icon" />        
          <slot/>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  defineProps({
    href: String,
    icon: String,
  })
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
  
  a {
    font-family: "Quicksand", sans-serif;
  }

</style>