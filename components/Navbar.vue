<template>
  <aside class="fixed h-screen bg-gray-800/20 backdrop-blur-lg">
    <nav>
      <div class="w-96 pt-48 px-8">
        <ul class="flex flex-col gap-2 text-white">
          <NavLink icon="characters" href="/characters">Characters</NavLink>
          <NavLink icon="wish" href="/wish">Wish Counter</NavLink>
          <NavLink icon="planner" href="/planner">Planner</NavLink>
          <NavLink icon="timeline" href="/timeline">Timeline</NavLink>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import NavLink from '~/components/NavLink.vue';

</script>
