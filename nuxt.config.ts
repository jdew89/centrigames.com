import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content'
    ]
})
