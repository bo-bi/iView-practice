<template>
  <div>
    这是登录页面
    <Button type="primary" @click="handleLogin">登录</Button>
    <br />
    <Button type="primary" @click="handleLoginout">退出</Button>
  </div>
</template>

<script>
import { getUserData } from '@/api/user'

export default {
  methods: {
    handleLogin() {
      window.localStorage.setItem('isLogin', 1);
    },

    handleLoginout() {
      window.localStorage.removeItem('isLogin');
    }
  }
};
</script>

<style>
  
</style>
