import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import 'virtual:windi.css'
import i18n from './modules/i18n'
createApp(App).use(createPinia()).use(ElementPlus).use(i18n).mount('#app')
