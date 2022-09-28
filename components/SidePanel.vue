<script setup>
import NavItem from "./NavItem.vue"

const props = defineProps({
    navItems: Array
})

const emit = defineEmits(['toggled'])

function Toggled() {
    emit('toggled');
    
}
</script>

<template>
    <div class="side-panel">
        <nav-item v-for="item in navItems" v-bind:key="item" :text="item.text" :route="item.route" @click="Toggled"></nav-item>
    </div>
</template>

<style scoped>
.side-panel {
    @apply flex flex-col h-auto fixed z-10 top-11 right-0 bg-primary-dark overflow-x-hidden duration-200 ease-in ;
}
</style>