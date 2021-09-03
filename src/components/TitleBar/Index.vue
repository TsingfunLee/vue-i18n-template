<template>
  <div class="title-wrapper">
    <span class="title-text">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.title-wrapper{
  background-color: mix(#909399, white, 10%);
  height: 60px;
  width: 100%;
  text-align: center;
  .title-text{
    font-size: 24px;
    color: #409EFF;
    line-height: 60px;
  }
}
</style>