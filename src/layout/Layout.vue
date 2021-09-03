<template>
  <div class="app-wrapper">
    <el-container>
      <el-header>
        <my-header />
      </el-header>
      <el-container class="main">
        <el-aside>
          <my-menu />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyHeader from './components/Header'
import MyMenu from './components/Menu'
export default {
  components: {
    MyHeader,
    MyMenu
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  ::v-deep .el-header {
    padding: 0;
    min-width: 1024px;
  }

  .main {
    min-width: 1024px;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
