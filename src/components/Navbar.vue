<script setup lang="ts">
const menuItems = ref([
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
])
</script>
<template>
    <nav class="top-0">
        <ul class="flex justify-center ">
            <li v-for="menu in menuItems" :key="menu.label" class="text-xl font-bold p-4">
                <a :href="menu.link">{{ menu.label }}</a>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
</style>