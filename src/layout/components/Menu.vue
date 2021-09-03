<template>
  <div class="menu-wrapper">
    <el-menu @select="pushRoute" router :default-active="activeItem">
      <div v-for="(item, i) in menuList" :key="i">
        <el-submenu :index="`${i}`" v-if="item.children">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ $t(item.title) }}</span>
          </template>
          <el-menu-item :index="subitem.path" v-for="(subitem, j) in item.children" :key="j">
            {{ $t(subitem.title) }}
          </el-menu-item>
        </el-submenu>
        <template v-else>
          <el-menu-item :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ $t(item.title) }}</span>
            </template>
          </el-menu-item>
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script>
import menuList from '@/config/menu'
export default {
  data() {
    return {
      menuList,
      activeItem: ''
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler: function (newVal) {
        console.log(newVal)
        this.activeItem = newVal.path
      }
    }
  },
  methods: {
    pushRoute(index, indexPath) {
      console.log(index, indexPath)
    }
  }
}
</script>
