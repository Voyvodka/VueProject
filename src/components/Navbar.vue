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
    <nav :class="isAside ? 'left-0' : 'top-0'">
        <ul :class="isAside ? '' : 'flex justify-center'">
            <li v-for="menu in menuItems" :key="menu.label" :class="isAside ? '' : 'p-4'" class="text-xl font-bold">
                <a :href="menu.link">{{ menu.label }}</a>
            </li>
        </ul>
    </nav>
    <button @click="isAside = !isAside">Menu Değiş</button>
    <div>{{ isAside }}</div>
</template>
<style scoped>
</style>