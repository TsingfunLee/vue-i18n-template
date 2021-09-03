<template>
  <div class="devider-title-wrapper">
    <div class="title-text">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.devider-title-wrapper{
  margin: 20px 0 10px;
  .title-text{
    font-size: 18px;
    font-weight: bold;
    color: #303133;
  }
  &::after{
    content: '';
    width:100%;
    height: 2px;
    display: block;
    background-color:mix(black, white, 30%);
    margin-top: 4px;
  }
}
</style>