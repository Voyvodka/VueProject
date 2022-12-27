import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
export const useCounterStore = defineStore("counter", () => {
  const count:any = useStorage('my-count',ref(0))
  function increment() {
    count.value++
  }
  return {
    count,
    increment
  }
});
