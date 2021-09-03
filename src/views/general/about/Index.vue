<template>
  <div class="page-about">
    <title-bar>{{ $t('menu.about') }}</title-bar>
    <div class="page-main">
      <devider-title>{{ $t('systemConfig') }}</devider-title>

      <el-form>
        <el-form-item :label="$t('version')"> 1.0.0 </el-form-item>
        <el-form-item :label="$t('time')"> 2021/9/1 08:00 </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {}
    }
  },
  created() {
    this.getPage()
  },
  methods: {
    getPage() {}
  }
}
</script>

<style lang="scss" scoped></style>
