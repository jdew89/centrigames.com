<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'


</script>

<template>
  <nav-bar></nav-bar>

  <RouterView />
  <footer-section></footer-section>
</template>

<style>

</style>
