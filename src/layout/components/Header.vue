<template>
  <div class="header-wrapper">
    <div class="header-left">Logo</div>

    <div class="header-right">
      <div class="header-right-lang">
        <el-select v-model="lang" @change="onLangChange">
          <el-option v-for="(item, i) in langList" :key="i" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="header-right-logout" @click="logout">
        <i class="el-icon-switch-button"></i>
        <span class="right-logout-text">{{ $t('logout') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import langList from '@/locale/langSelector.js'
import { logout } from '@/api/login'
export default {
  data() {
    return {
      langList,
      lang: 'zh'
    }
  },
  methods: {
    onLangChange(val) {
      this.$i18n.locale = val
    },
    logout() {
      logout().then(res => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  background-color: mix(#409eff, black, 50%);
  height: 100%;
  .header-left {
    color: white;
    font-size: 32px;
    line-height: 60px;
    margin-left: 20px;
    float: left;
  }
  .header-right {
    margin-right: 20px;
    float: right;
    display: flex;
    height: 60px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .header-right-logout {
      color: white;
      margin-left: 20px;
      cursor: pointer;
      i {
        margin-right: 6px;
      }
    }
  }
}
</style>
