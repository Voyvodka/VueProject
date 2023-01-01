<script setup lang="ts">
const isAside = ref(true)
const menuItems = ref([
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Product', link: '/product' },
    { label: 'Contact', link: '/contact' },
])
</script>
<template>
    <nav :class="isAside ? 'left-0 ' : 'top-0'">
        <ul :class="isAside ? 'inline-block p-30px h-100vh' : 'flex justify-center'" class="bg-blue-200">
            <li v-for="menu in menuItems" :key="menu.label" :class="isAside ? 'p-1' : 'p-4'" class="text-xl font-bold">
                <a :href="menu.link">{{ menu.label }}</a>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
</style>