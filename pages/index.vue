<script setup>
  import {reactive, ref} from 'vue';

  const showModal= reactive({
      show: false
  })

  function toggleModal() {
    showModal.show = !showModal.show;
  }

  const subscribeForm = reactive({
    emailsubscribe: ""
  })

  function encode (data) {
    return Object.keys(data)
      .map(
        key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join("&");
  }

  function submitForm(){
      // Must post to a path not handled by the SSR.
      // Path must exist
      fetch('/subscribeform', {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode({
          "form-name": "subscribe",
          ...subscribeForm
        }),
      })
      .then(() => {
        toggleModal();
       })
      .catch((err) => alert("Error: %s", err))
      .finally(() => {
        //console.log("formData: %s", JSON.stringify(subscribeForm))
      })
  }
</script>

<template>
  <main>
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
        <form name="subscribe" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="submitForm()">
          <input type="hidden" name="form-name" value="subscribe" />
          <div class=" text-center md:flex md:justify-center md:items-center md:pr-8 lg:pr-10 xl:pr-20">
            <label for="emailsubscribe" class="text-2xl font-bold md:w-1/3">Subscribe to our newsletter</label>
            <div class="relative pt-2 md:w-2/3">
                <input id="emailsubscribe" v-model="subscribeForm.emailsubscribe" name="emailsubscribe" type="email" placeholder="email@example.com" class="text-black w-full h-10 pl-2 pr-20 rounded-lg focus:shadow focus:outline-none" required>
                <div class="absolute top-3 right-1">
                    <button class="h-8 w-20 text-white font-bold rounded-lg bg-primary hover:bg-primary-dark" type="submit">Subscribe</button>
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

    <!-- MODAL -->
    <div  class=" relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true" v-show="showModal.show">
      <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
      <div @click="toggleModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-20"></div>
      <div class="fixed inset-0 z-20 overflow-y-auto pointer-events-none">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg pointer-events-auto">
            <div class="bg-white px-4 pt-4 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="leading-10 text-3xl text-gray-900" id="modal-title">Subscribed</h3>
                  <div class="mt-2">
                    <p class=" text-gray-500">You have successfully subscribed!</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button @click="toggleModal" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        
  </main>
</template>

<style scoped>
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
