<script setup lang="ts">
import { useSettingsStore } from '../stores/userSettings'
const store = useSettingsStore();
const { Popover, Toast, Collapse } = bootstrap
const collapse = Vue.component('bsCollapse', {
    template: `
        <div>
            <slot name="trigger"></slot>
            <slot name="target"></slot>
        </div>
    `,
    props: {
        toggle: {
            required: false,
            default: false
        },
        id: {
            required: true
        }
    },
    mounted() {
        var trigger = this.$slots['trigger'][0].elm
        var target = this.$slots['target'][0].elm
        target.classList.add('collapse')
        target.setAttribute('id', this.id);
        trigger.setAttribute('data-bs-target', '#' + this.id);
        trigger.setAttribute('data-bs-toggle', 'collapse');
        new Collapse(target, { toggle: this.toggle })
    },
})
const popover = Vue.component('bsPopover', {
    template: `
        <slot/>
    `,
    props: {
        content: {
            required: false,
            default: '',
        },
        title: {
            default: 'My Popover',
        },
        trigger: {
            default: 'click',
        },
        delay: {
            default: 0,
        },
        html: {
            default: false,
        },
    },
    mounted() {
        // pass bootstrap popover options from props
        var options = this.$props
        var ele = this.$slots.default[0].elm
        new Popover(ele, options)
    },
})
new Vue({
    el: "#app"
})
</script>
<template>
    <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
        style="max-width: 20rem;" class="mb-2">
        <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    <button class="btn btn-primary" data-bs-target="#collapseTarget" data-bs-toggle="collapse">
        Bootstrap collapse
    </button>
    <div class="collapse py-2" id="collapseTarget">
        This is the toggle-able content!
    </div>
</template>
<style scoped>
</style>