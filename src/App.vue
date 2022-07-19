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
  <footer-section class=" flex-shrink-0 mt-auto"></footer-section>
</template>

<style>
 body, html {
  height: 100%;
 }

 body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
 }

 footer {
  margin-top: auto;
 }

 .view {
  flex: 1;
 }
</style>
