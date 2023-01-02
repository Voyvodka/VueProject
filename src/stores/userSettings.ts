import { defineStore } from "pinia";
export const useSettingsStore = defineStore("settings", () => {
    const isAside = ref(true); 
  return {
    isAside
  }
});