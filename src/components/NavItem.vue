<script setup>

const props = defineProps({
    text: String,
    route: String
})

</script>

<template>
    <RouterLink :to="route" class=" hover:bg-secondary p-2 tracking-wider">{{text}}</RouterLink>
</template>

<style>

</style>