<script setup lang="ts">
const isAside = ref(true)
</script>
<template>
    <div class="m-2">
        <button class="bg-blue-500 p-3 rounded" @click="isAside = !isAside">Menu Değiş</button>
        <p>{{ isAside }}</p>
    </div>
</template>
<style scoped>
</style>