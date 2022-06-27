<script setup>

const props = defineProps({
    text: String,
    route: String
})

</script>

<template>
    <RouterLink :to="route" class=" hover:text-black hover:bg-gray-300 p-2">{{text}}</RouterLink>
</template>

<style>
.router-link-active {
    @apply text-black bg-gray-300;
}
</style>