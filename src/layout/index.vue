<template>
  <a-layout class="ehf-layout-wrap">
    <ehf-side />
    <a-layout class="ehf-layout">
      <a-layout-header class="ehf-header">
        <div class="left-box">
          <div class="collapse-btn" @click="toggleCollapse">
            <menu-unfold-outlined v-if="collapse" class="trigger" />
            <menu-fold-outlined v-else class="trigger" />
          </div>
          <a-breadcrumb class="breadcrumb">
            <a-breadcrumb-item v-for="(item, index) in levelList" :key="index">
              {{ item.meta.title }}
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="right-info">
          <a-dropdown :trigger="['click']">
            <span style="cursor: pointer">之后填充姓名+头像</span>
            <template v-slot:overlay>
              <a-menu>
                <a-menu-item key="3">
                  退出登录
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      <ehf-content />
    </a-layout>
  </a-layout>
</template>

<script>
  import EhfSide from './ehf-side'
  import EhfContent from './ehf-content'
  import { mapActions, mapGetters } from 'vuex'
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
  export default {
    name: 'index',
    components: {
      EhfSide,
      EhfContent,
      MenuFoldOutlined,
      MenuUnfoldOutlined,
    },
    data() {
      return {
        levelList: [],
      }
    },
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
      }),
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      ...mapActions({
        toggleCollapse: 'settings/toggleCollapse',
      }),
      getBreadcrumb() {
        const matched = this.$route.matched.filter((item) => !!item.name)
        this.levelList = matched
        if (matched.length === 1 && matched[0].path === '/') this.levelList = []
      },
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      },
    },
  }
</script>

<style lang="scss" scoped>
  .ehf-layout-wrap {
    .ehf-layout {
      padding-left: 200px;
      transition: all 0.2s;
    }
    .ehf-collapse {
      .ehf-logo .anticon + span {
        display: inline-block;
        max-width: 0;
        opacity: 0;
        transition: all 0.2s;
      }
      & + .ehf-layout {
        padding-left: 81px;
        transition: all 0.2s;
      }
    }
    .ehf-header {
      padding: 0;
      background: #fff;
      display: flex;
      justify-content: space-between;
      height: 45px;
      .left-box {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        .breadcrumb {
          line-height: 40px;
        }
        .collapse-btn {
          line-height: 45px;
          cursor: pointer;
          .trigger {
            font-size: 18px;
            padding: 0 14px;
            transition: color 0.3s;
          }
          &:hover {
            .trigger {
              color: #1890ff;
            }
          }
        }
      }
      .right-info {
        padding: 0 14px;
        line-height: 45px;
      }
    }
  }
</style>
