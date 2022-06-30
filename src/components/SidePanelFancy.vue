<script setup>
import NavItem from "./NavItem.vue"

const props = defineProps({
    navItems: Array
})
</script>

<template>
    <!-- Create a div for each nav-item and apply the animation to that in a delay to make them all fly in individually -->
    <div class="side-panel">
        <nav-item v-for="item in navItems" :text="item.text" :route="item.route"></nav-item>
    </div>
</template>

<style scoped>
.side-panel {
    @apply flex flex-col h-auto fixed z-10 top-11 right-0 bg-primary overflow-x-hidden duration-200 ease-in ;
}
</style>