<script setup>
import {ref} from 'vue';

const emit = defineEmits(['toggled'])

const props = defineProps(['open'])

function ToggleMenu() {
    emit('toggled');
}



</script>

<template>
    <div class=" my-auto mx-2" @click="ToggleMenu">
        <div class="bar" :class="{'bar1-active':open}"></div>
        <div class="bar" :class="{'bar2-active':open}"></div>
        <div class="bar" :class="{'bar3-active':open}"></div>
    </div>
</template>

<style scoped>
.bar {
    @apply w-9 h-1 bg-brand-white my-1.5 transition-all duration-150 ease-in rounded-lg;
}

.bar1-active {
    @apply rotate-45 translate-y-2.5;
}
.bar2-active {
    @apply opacity-0;
}
.bar3-active {
    @apply -rotate-45 -translate-y-2.5;
}
</style>

