<template>
  <a-sub-menu :key="item.fullPath">
    <template v-slot:title>
      <span class="anticon">
        <ehf-icon :icon="item.meta.icon"></ehf-icon>
      </span>
      <span>{{ item.meta.title }}</span>
    </template>
    <slot></slot>
  </a-sub-menu>
</template>

<script>
  import EhfIcon from '@/layout/ehf-icon'
  export default {
    name: 'Submenu',
    components: { EhfIcon },
    props: {
      item: {
        type: Object,
        default() {
          return null
        },
      },
      routeChildren: {
        type: Object,
        default() {
          return null
        },
      },
    },
    methods: {},
  }
</script>
