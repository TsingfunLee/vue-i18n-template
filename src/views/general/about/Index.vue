<template>
  <div class="page-about">
    <title-bar>{{ $t('menu.about') }}</title-bar>
    <div class="page-main"></div>
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
