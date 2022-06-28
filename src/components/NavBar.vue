<script setup>
import {reactive, ref} from 'vue';
import NavItem from "./NavItem.vue"
import BurgerMenu from "./BurgerMenu.vue"


const navItems = ref([{
    text: "Home",
    route: "/"
},{
    text: "About",
    route: "/about"
}]);

const menuActive = ref(false);
const openMenuCSSClasses = reactive({
    'w-0': !menuActive.value,
    'w-52': menuActive,
    'hidden': menuActive
})

function ToggleMenu() {
    menuActive.value = !menuActive.value;
}

</script>

<template>
    <nav class=" bg-primary text-brand-white flex flex-row text-xl h-11">
        <img src="../assets/Centri Games_Final Logo_White-01.png" alt="">
        <a class=" text-2xl my-auto mr-2" href="/">Centri Games</a>
        <nav-item v-for="item in navItems" :text="item.text" :route="item.route" class=" hidden lg:block"></nav-item>
        <div class=" ml-auto my-auto lg:hidden">
            <burger-menu class="" @toggled="ToggleMenu" ></burger-menu>
            <div class="side-panel" :class="openMenuCSSClasses">
                <nav-item v-for="item in navItems" :text="item.text" :route="item.route"></nav-item>
            </div>
        </div>
        
    </nav>
</template>

<style scoped>
.side-panel {
    @apply flex flex-col h-auto fixed z-10 top-11 right-0 bg-primary overflow-x-hidden duration-200 ease-in;
}


</style>