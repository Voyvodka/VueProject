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
    <nav :class="store.isAside ? 'left-0 ' : 'top-0'">
        <ul :class="store.isAside ? 'inline-block p-30px h-100vh' : 'flex justify-center'" class="bg-blue-200">
            <li v-for="menu in menuItems" :key="menu.label" :class="store.isAside ? 'p-1' : 'p-4'"
                class="text-xl font-bold rounded m-2 items-center">
                <Icon icon="ic:baseline-greater-than" color="black" width="20" class="m-auto" />
                <a :href="menu.link">{{ menu.label }}</a>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
</style>