<script setup>
import FooterSection from '@/components/FooterSection.vue';
import NavBar from '@/components/NavBar.vue';


</script>

<template>
  <NavBar></NavBar>

  <div class="view pt-11">
    <div class="container mx-auto">
      <div class="error-view sm:flex sm:flex-row ">
        <div class="flex  items-center justify-center">
          <img src="../assets/HyattKlepo.png" alt="Ruthless Merchants - The rowdy marketplace full of ruthless encounters" class=" w-96 h-96">
        </div>
        <div class="flex items-center justify-center flex-col mt-10">
          <h1 class=" text-6xl sm:text-8xl mb-6"> 404</h1>
          <h1 class=" text-3xl sm:text-4xl tracking-wide text-center mb-20"> Sorry, I couldn't find what you are looking for.</h1>
        </div>
      </div>
    </div>
  </div>
  <footer-section class=""></footer-section>
</template>

<style scoped>
 .error-view {
  min-height: calc(100vh - 250px);
 }



</style>
