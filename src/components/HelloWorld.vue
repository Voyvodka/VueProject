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
    <el-button class="gap-5" type="primary" round @click="locale = 'en'">
        <Icon icon="ic:baseline-remove-red-eye" /> Dili Değiş
    </el-button>
    <el-button type="primary" round @click="locale = 'tr'">
        <Icon icon="ic:baseline-remove-red-eye" /> Dili Değiş
    </el-button>
    <select class="text-2xl" name="" id="">
        <option value="123">asdf</option>
    </select>
    <el-row class="mb-4">
        <el-button round>Default</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
    </el-row>
    <Icon icon="ic:baseline-remove-red-eye" />
</template>
<style scoped>
</style>
