module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue', 'prettier'], // 这里增加prettier插件。
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-useless-escape': 0, // 禁用不必要的转义字符
    // 'no-multiple-empty-lines': 1
    'vue/name-property-casing': ['error', 'PascalCase'], // 强制name属性大小写的样式。
    'vue/html-self-closing': [
      'error',
      {
        // 自关闭符号强制为配置的样式。
        html: {
          void: 'always', // always 要求对不包含内容的元素进行自关闭
          normal: 'never' // normal 不允许自闭。
        },
        svg: 'always',
        math: 'always'
      }
    ],
    eqeqeq: [2, 'allow-null'], // 要求使用 === 和 !==
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "prettier/prettier": "warn",
  }
}
