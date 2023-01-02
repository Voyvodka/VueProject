<script setup lang="ts">
import { useSettingsStore } from './stores/userSettings'
const store = useSettingsStore();
</script>
<template>
  <div class="app-class" :class="store.isAside ? 'flex ' : ''">
    <Navbar />
    <MainPageContent />
  </div>
</template>
<style>
.app-class {
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  display: flex;
  justify-content: center;
  place-items: center;
  min-width: 100%;
  min-height: 100vh;
  background-color: darkslategrey;
}
</style>
