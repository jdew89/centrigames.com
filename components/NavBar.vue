<script setup>
import {reactive, ref} from 'vue';
import NavItem from "./NavItem.vue"
import SidePanel from "./SidePanel.vue"
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
    <nav class=" bg-primary-dark text-brand-white text-xl h-11 w-screen px-2 fixed z-10">
        <div class="lg:container flex flex-row lg:mx-auto">
            <a class=" text-2xl mr-4 h-11 flex flex-row justify-center items-center" href="/">
                <img src="~/assets/CentriGames_FinalLogo_White-01.png" alt="Centri Games Logo" class="h-11">
                <span class="pl-2">CENTRI GAMES</span>
            </a>

            <nav-item v-for="item in navItems" :key="item" :text="item.text" :route="item.route" class=" hidden md:block"></nav-item>
    
            <div class=" ml-auto my-auto md:hidden">
                <burger-menu class="" @toggled="ToggleMenu" ></burger-menu>
                <side-panel :class="openMenuCSSClasses" :nav-items="navItems" @toggled="ToggleMenu"></side-panel>
            </div>

        </div>
    </nav>
</template>

<style scoped>
.side-panel {
    @apply flex flex-col h-auto fixed z-10 top-11 right-0 bg-primary-dark overflow-x-hidden duration-200 ease-in;
}


</style>