/**
 * MenuNav配置
 * @title: 菜单标题
 * @icon：菜单图标
 * @path: 页面路径
 * @component：页面组件路径
 */

export default [
  {
    title: 'menu.general',
    icon: 'el-icon-setting',
    children: [
      {
        title: 'menu.about',
        path: '/general/about',
        component: () => import('@/views/general/about/Index.vue')
      }
    ]
  }
]
