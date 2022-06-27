<script setup>
import NavItem from "./NavItem.vue"
import BurgerMenu from "./BurgerMenu.vue"
</script>

<template>
    <nav class=" bg-gray-800 text-white flex flex-row text-xl">
        <nav-item text="Home" route="/"></nav-item>
        <nav-item text="About" route="/about"></nav-item>
        
        <burger-menu class=" ml-auto"></burger-menu>
        
    </nav>
</template>

<style>

</style>