<script setup>

const props = defineProps({
    text: String,
    route: String
})

</script>

<template>
    <RouterLink :to="route" class=" hover:text-white hover:bg-secondary p-2">{{text}}</RouterLink>
</template>

<style>

</style>