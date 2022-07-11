<script setup>
</script>

<template>
  <main>
    <!-- Old leading section -->
    <section class="bg-primary hidden">
      <div class="relative">
        <picture>
          <source srcset="../assets/RuthlessMerchants_Header_1024x576_2_1.png" media="(min-width: 640px)">
          <img src="../assets/Instagram_5x5_art_name.jpg" alt="Ruthless Merchants - The rowdy marketplace full of ruthless encounters" class="aspect-auto w-max h-auto mx-auto">
        </picture>
        <div class=" text-lg text-primary-dark absolute z-10 bottom-[2%] left-1/2 -translate-x-1/2 text-center w-full sm:sr-only">
          <h1>The rowdy marketplace full of ruthless encounters</h1>
          <h1>3-6 Players <span class=" font-sans">|</span> 60 Minutes</h1>
        </div>
        <div class=" scaling-text text-primary-dark absolute z-10 bottom-[7%] left-[10%] hidden sm:block">
          <a href="/" class=" border-2 border-brand-white bg-primary hover:bg-primary-dark text-brand-white rounded-md p-3 tracking-wider ">Follow us on Kickstarter</a>
        </div>
      </div>
    </section>
    
    <section class="mx-auto p-2 font-sans bg-primary text-brand-white hidden">
      <div class="container">
        <a href="/" class=" border-2 border-brand-white bg-primary hover:bg-primary-dark text-brand-white rounded-md p-3 tracking-wider mx-auto m-2">Follow us on Kickstarter</a>
        <h2>Ruthless Merchants</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae accusamus sint fugit deserunt obcaecati ipsa nesciunt quas beatae quo, totam quasi officia minima, dignissimos doloremque nobis neque eius fuga.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad debitis soluta aut iste nobis? Quasi, voluptatibus tenetur nemo veniam numquam velit quae cumque minima maiores sint rem fugit tempora atque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis eius quis in nobis ipsa eveniet delectus nisi enim, adipisci quia doloribus veritatis maiores, fugiat sapiente deserunt totam? Eum, itaque!</p>
      </div>
    </section>

    <section class=" bg-primary-dark">
      <div class="flex md:flex-row flex-col items-center justify-center">
        <div class=" basis-1/2">
          <img src="../assets/Instagram_5x5_art_name.jpg" alt="Ruthless Merchants - The rowdy marketplace full of ruthless encounters" class="aspect-auto w-max h-auto mx-auto">
        </div>
        <div class=" basis-1/2 p-4 pb-6 text-brand-white ">
          <div class=" text-2xl lg:text-4xl">
            <h1 class="sr-only">Ruthless Merchants</h1>
            <h1 class="title">The rowdy marketplace full of ruthless encounters</h1>
            <h1 class="subtitle">A ferociously fun spin on the pick up and delivery genre.</h1>
            <h1 class="subtitle mb-4">3-6 Players <span class="font-sans">|</span> 60 Minutes</h1>
            <a href="/" class=" border-2 border-brand-white hover:bg-primary bg-primary-dark text-brand-white rounded-md p-2 tracking-wider ">Follow us on Kickstarter</a>
          </div>
        </div>
      </div>
    </section>
          <p>A ferociously fun spin on the pick up and deliver genre. Easy to learn and quick to play, you will enjoy bluffing your friends and family while attempting to deliver your hard earned goods. Good luck trying to dodge their punches and thrown rocks! If you don't mind a little bit of conflict at your table, you should check this game out!</p>
  </main>
</template>

<style scoped>
.scaling-text {
  font-size: 1.7vw;
}

.title {
  @apply text-2xl lg:text-4xl tracking-wider;
}

.subtitle{
  @apply font-sans text-lg lg:text-2xl;
}

.test{
  /*background-image: url(/src/assets/blob-scene-haikei.svg);*/
  background-image: url(/src/assets/polygon-scatter-haikei-1.svg);
  background-color: #0d9bbf;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}


</style>
