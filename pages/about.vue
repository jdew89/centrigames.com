<template>
  <section class=" bg-primary-dark mb-8">
    <div class="flex md:flex-row flex-col items-center justify-center">
      <div class=" ">
        <picture>
          <source srcset="../assets/christopher-paul-high-fwRMK19zavc-unsplash-wide.jpg" media="(min-width: 1024px)">
          <source srcset="../assets/christopher-paul-high-fwRMK19zavc-unsplash-16x9.jpg" media="(min-width: 640px)">
          <img src="../assets/christopher-paul-high-fwRMK19zavc-unsplash.jpg" alt="Hero image of Meeples on a playing board. -Christopher Paul" class="aspect-auto w-max h-auto mx-auto">
        </picture>
      </div>
    </div>
  </section>
  <section class=" container mx-auto font-sans">
    <h2 class=" text-center font-excalibur text-5xl tracking-wider mb-8">
      About Us
    </h2>
    <div class=" px-3 mb-4">
      <div class="sm:flex">
        <img src="../assets/JeffandKaylee.jpg" alt="Hero image of Meeples on a playing board. -Christopher Paul" class=" flex-1 aspect-auto w-96 h-auto mx-auto mb-8 sm:mr-8">
        <ContentDoc path="/about" class="content-styles" />
      </div>
    </div>
  </section>
</template>

<style>

p {
  @apply mb-3
}

</style>
