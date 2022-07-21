<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'


</script>

<template>
  <nav-bar></nav-bar>

  <div class="view pt-11">
    <RouterView />
  </div>
  <footer-section class=""></footer-section>
</template>

<style>
 body, html {
  height: 100vh;
 }

 body {
  min-height: 100vh;
 }

/* pushes footer to bottom */
 .view {
  min-height: calc(100vh - 202px);
 }

</style>
