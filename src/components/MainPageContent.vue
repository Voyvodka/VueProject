<script setup lang="ts">
import { useSettingsStore } from '../stores/userSettings'
const store = useSettingsStore();
</script>
<template>
    <div class="p-2 w-full grid-cols-2">
        <div class="grid grid-cols-2 p-3" style="border: 1px solid blue;">
            <div class="p-3 grid grid-cols-3" style="border: 1px solid red">
                <div class="p-2">
                    <div class="bg-red-400 rounded relative ">
                        <div>
                            <img class="relative top-0 left-0 right-0 w-full object-cover"
                                style="max-height: 30% !important;" src="https://via.placeholder.com/750x500" alt="">
                        </div>
                        <div>cardtitle area</div>
                        <div>card body area</div>
                    </div>
                </div>
                <div class="p-2">
                    <div class="bg-red-400 p-2 rounded relative">
                        <div>image</div>
                        <div>cardtitle area</div>
                        <div>card body area</div>
                    </div>
                </div>
                <div class="p-2">
                    <div class="bg-red-400 p-2 rounded relative">
                        <div>image</div>
                        <div>cardtitle area</div>
                        <div>card body area</div>
                    </div>
                </div>
            </div>
            <div style=" border: 1px solid yellow"> fasdfas</div>
        </div>
    </div>
</template>
<style scoped>
</style>