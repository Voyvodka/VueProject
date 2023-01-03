<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useSettingsStore } from '../stores/userSettings'
const store = useSettingsStore();
const menuItems = ref([
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Product', link: '/product' },
    { label: 'Contact', link: '/contact' },
])
</script>
<template>
    <nav class="">
        <ul :class="store.isAside ? 'inline-block p-30px h-100vh w-50' : 'flex justify-center'" class="bg-blue-200">
            <li v-for="menu in menuItems" :key="menu.label" :class="store.isAside ? 'p-1' : 'p-4'"
                class="text-xl font-bold rounded m-2">
                <Icon icon="ic:baseline-greater-than" :class="store.isAside ? '' : 'hidden'" color="black" width="20"
                    class="m-auto" />
                <a :href="menu.link">{{ menu.label }}</a>
            </li>
            <button class="bg-blue-500 p-3 rounded" @click="store.isAside = !store.isAside">Menu Değiş</button>
            <p>{{ store.isAside }}</p>
        </ul>
    </nav>
</template>
<style scoped>
</style>