<template>
  <ConfigProvider :locale="zhCN">
    <router-view />
  </ConfigProvider>
</template>

<script>
  import { ConfigProvider } from 'ant-design-vue'
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
  export default {
    name: 'App',
    components: { ConfigProvider },
    data() {
      return {
        zhCN,
      }
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
