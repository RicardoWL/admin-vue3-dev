<template>
  <a-layout-content class="ehf-content">
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade-transform">
        <component :is="Component" />
      </transition>
    </router-view>
  </a-layout-content>
</template>

<script>
  export default {
    name: 'EhfContent',
  }
</script>

<style lang="scss">
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.2s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .ehf-content {
    min-height: calc(
      100vh - #{$ehf-header-height} - #{$ehf-margin} - #{$ehf-margin}
    ) !important;
    padding: 0;
    margin: $ehf-margin;
    background: #fff;
    .error-container {
      height: calc(
        100vh - #{$ehf-header-height} - #{$ehf-margin} - #{$ehf-margin}
      ) !important;
    }
  }
</style>
