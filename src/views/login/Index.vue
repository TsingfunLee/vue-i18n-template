<template>
  <div class="login-wrapper">
    <el-form class="login-form" :model="formData" :rules="rule" ref="form">
      <el-form-item prop="username">
        <el-input v-model="formData.username" placeholder="User Name" @keyup.enter.native="login" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="formData.password" placeholder="Password" @keyup.enter.native="login" type="password" maxlength="20" />
      </el-form-item>
      <el-form-item class="right">
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login as loginApi } from '@/api/login'
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      rule: {
        username: [
          {
            required: true,
            message: this.$t('userNameRequired'),
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: this.$t('passwordRequired'),
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          loginApi({
            ...this.formData
          }).then(res => {
            this.$router.push('/general/about')
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 40%;
    background-color: mix(#409eff, black, 50%);
  }
  .login-form {
    background-color: white;
    width: 38%;
    height: 44%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 6% 6%;
    border: solid 1px #dcdfe6;
    border-radius: 8px;
    .right {
      float: right;
    }
  }
}
</style>
