<template>
  <router-link to="/" class="logo">
    <span v-show="!collapse" style="white-space: nowrap">品智科技后台</span>
    <img v-show="collapse" src="../../assets/logo.png" alt="品智科技后台" />
  </router-link>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ehfLogo',
    components: {},
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
      }),
    },
  }
</script>
<style lang="scss" scoped>
  .logo {
    display: block;
    height: 32px;
    /*background: rgba(255, 255, 255, 0.2);*/
    margin: 16px;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    cursor: pointer;

    img {
      width: 32px;
    }
  }
</style>
