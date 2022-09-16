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
    <!-- End old section -->

    <!-- New Header Section -->
    <section class=" bg-primary-dark mb-4">
      <div class="flex md:flex-row flex-col items-center justify-center">
        <div class=" basis-1/2">
          <img src="../assets/Instagram_5x5_art_name.jpg" alt="Ruthless Merchants - The rowdy marketplace full of ruthless encounters" class="aspect-auto w-max h-auto mx-auto">
        </div>
        <div class=" basis-1/2 p-4 pb-6 text-brand-white ">
          <div class=" text-2xl lg:text-4xl">
            <h1 class="sr-only">Ruthless Merchants</h1>
            <h1 class="title">The rowdy marketplace full of ruthless encounters</h1>
            <h1 class="subtitle hidden">A ferociously fun spin on the pick up and delivery genre.</h1> <!-- hidden -->
            <h1 class="subtitle mb-4">3-6 Players <span class="font-sans">|</span> 60 Minutes</h1>
            <a href="/" class=" border-2 border-brand-white hover:bg-primary bg-primary-dark text-brand-white rounded-md p-2 tracking-wider ">Follow us on Kickstarter</a>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <div class="container p-2 my-2 text-lg mx-auto">
        <p class=" font-sans mb-2 text-lg">
          Ruthless Merchants is a marketplace full of cunning and unruly characters. The goal of the game is simple: collect coins. But, why is it a “ruthless” marketplace, you ask? Many actions have devious intentions.
        </p>
        <p class=" font-sans">
          In this tabletop game, you will choose one of the six ruthless characters to compete against your fellow merchants. Collect your coins peacefully or come out with punches blazing! But, watch out for other merchants--they can knock the coins right out of your pockets.
        </p>
      </div>
    </section>
    <section class="bg-primary-dark mb-4 px-4 pt-10 pb-14 md:pb-10 font-sans text-brand-white">
      <div class="container mx-auto ">
        <form name="index-email-sub" netlify>
          <div class=" text-center md:flex md:justify-center md:items-center md:pr-8 lg:pr-10 xl:pr-20">
            <label for="emailsubscribe" class="text-2xl font-bold md:w-1/3">Subscribe to our newsletter</label>
            <div class="relative pt-2 md:w-2/3">
                <input id="emailsubscribe" name="emailsubscribe" type="email" placeholder="email@example.com" class="text-black w-full h-10 pl-2 pr-20 rounded-lg focus:shadow focus:outline-none">
                <div class="absolute top-3 right-1">
                    <button @submit.prevent="" class="h-8 w-20 text-white font-bold rounded-lg bg-primary hover:bg-primary-dark" type="submit">Subscribe</button>
                </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <section class=" p-2">
      <div class="container mx-auto">
        <blockquote class="text-lg tracking-widest big-quote relative p-4 pt-9">
          A ferociously fun spin on the pick up and deliver genre. Easy to learn and quick to play, 
          you will enjoy bluffing your friends and family while attempting to deliver your hard earned goods. 
          Good luck trying to dodge their punches and thrown rocks! 
          If you don't mind a little bit of conflict at your table, you should check this game out!
          <cite class=" before:content-['-'] block text-gray-600 text-base">
            Ben Strouse (ArtemisX on BGG)
          </cite>
        </blockquote>
        <p class=" "></p>

      </div>
    </section>
        
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

.big-quote {
  @apply before:content-['\201C'] before:block before:text-8xl before:absolute before:-left-3 before:-top-1 before:text-primary-dark;
}


</style>
