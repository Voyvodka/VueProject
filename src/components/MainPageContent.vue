<script setup lang="ts">
import { useSettingsStore } from '../stores/userSettings'
const store = useSettingsStore();
</script>
<template>
    <div class="p-2 w-full">
        <button class="bg-blue-500 p-3 rounded" @click="store.isAside = !store.isAside">Menu Değiş</button>
        <p>{{ store.isAside }}</p>
    </div>
</template>
<style scoped>
</style>