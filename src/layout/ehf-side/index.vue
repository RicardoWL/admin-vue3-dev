<template>
  <a-layout-sider
    collapsible
    class="ehf-sider"
    width="200"
    v-model:collapsed="collapse"
    :class="classObj"
    :trigger="null"
  >
    <ehf-logo />

    <div class="scrollbar">
      <div class="scrollbar-content">
        <a-menu
          class="ehf-menu"
          theme="dark"
          mode="inline"
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
        >
          <ehf-menu v-for="route in routes" :key="route.path" :item="route" />
        </a-menu>
      </div>
    </div>
  </a-layout-sider>
</template>

<script>
  import EhfMenu from './ehf-menu'
  import EhfLogo from '../ehf-logo'
  import { mapGetters } from 'vuex'
  export default {
    name: 'index',
    components: {
      EhfLogo,
      EhfMenu,
    },
    data() {
      return {
        selectedKeys: [],
        openKeys: [],
      }
    },
    watch: {
      $route: {
        handler({ path, matched }) {
          matched[0].children.length > 1
            ? (this.selectedKeys = [path])
            : (this.selectedKeys = [matched[0].path])
          this.openKeys = [matched[0].path]
        },
        immediate: true,
      },
    },
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
        routes: 'routes/addRouters',
      }),
      classObj() {
        return {
          'ehf-collapse': this.collapse,
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .scrollbar {
    overflow: hidden;
    height: calc(100% - 75px);
  }

  .scrollbar-content {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-right: -10px; /* 隐藏右侧滚动条 */
    margin-bottom: -10px; /* 隐藏底部滚动条 */
  }
  .ehf-sider {
    position: fixed;
    left: 0;
    height: 100vh;
    overflow: auto;
  }
</style>
