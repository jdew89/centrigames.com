<script setup>
import FooterSection from '@/components/FooterSection.vue';
import NavBar from '@/components/NavBar.vue';


</script>

<template>
  <NavBar></NavBar>

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
