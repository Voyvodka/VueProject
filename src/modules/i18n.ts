import { createI18n } from 'vue-i18n'
import en from '../../locales/en.json';
import tr from '../../locales/tr.json';
const i18n = createI18n({
    locale : "en",
    legacy: false,
    messages: {
        tr, en
    }
})
export default i18n