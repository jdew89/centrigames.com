<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

</script>

<template>
  <NavBar></NavBar>
  <header>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

.router-link-active {
    @apply text-white bg-secondary;
}

</style>
