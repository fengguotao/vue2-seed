<template>
  <div id="app">
    <nav class="page-side-menu">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/about">关于</router-link>
        </li>
      </ul>
    </nav>
    <div class="page-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        defaultActive: '/'
      }
    },
    mounted () {
      this.defaultActive = this.$route.path
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  body > #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 40px;
    box-sizing: border-box;

    .page-side-menu {
      flex: 0 0 200px;

      ul {
        display: flex;
        flex-direction: column;

        li {
          flex: 1;

          &:not(:last-child) {
            padding-bottom: 10px;
          }
        }
      }
    }

    .page-container {
      flex: 1;
      display: flex;
      padding-left: 20px;

      & > .page {
        flex: 1;
        display: flex;
      }

    }

  }
</style>
