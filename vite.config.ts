import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import WindiCSS from 'vite-plugin-windicss'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: "./src/auto-imports.d.ts",
      imports: ['vue'],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    WindiCSS(),
    ElementPlus(),
  ],
})
