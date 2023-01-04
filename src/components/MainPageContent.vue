<script setup lang="ts">
import { useSettingsStore } from '../stores/userSettings'
const store = useSettingsStore();
</script>
<template>
    <div class="p-2 w-full grid-cols-2">
        <div class="grid grid-cols-2" style="border: 1px solid blue;">
            <div class="p-3" style="border: 1px solid red">
                <div>image</div>
                <div>cardtitle area</div>
                <div>card body area</div>
            </div>
            <div style="border: 1px solid yellow"> fasdfas</div>
        </div>
    </div>
</template>
<style scoped>
</style>