import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: "./src/auto-imports.d.ts",
      imports: ['vue'],
    }),
    WindiCSS(),
  ],
})
