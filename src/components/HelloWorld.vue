<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';
import { useCounterStore } from '../stores/counter'
const { t, locale } = useI18n();
const store = useCounterStore();
</script>
<template>
    <el-button type="primary" round @click="store.increment">arttır</el-button>
    <div>{{ store.count }}</div>
    <div>{{ t("language") }}</div>
    <div>{{ t("details.anasayfa") }}</div>
    <div>{{ t("details.insan-kaynaklari") }}</div>
    <select class="text-2xl" name="" id="">
        <option value="123">asdf</option>
    </select>
</template>
<style scoped>
</style>
