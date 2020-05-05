<template>
  <div>
    <!-- <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link> -->

    <Menu :active-name="activeName">
      <!--
        1. 导航菜单根据to进行跳转: to="/home" 后面对应路由
        2. 加 name 属性是为了高亮当前菜单(样式上选中当前菜单)
        3. 根据当前路由选中菜单(页面刷新定位到该菜单)
           选中那个菜单对应的是 active-name的值 即 MenuItem 上 name 的值
           监视路由 将路由中 name 值赋值给 data 中一变量, 动态绑定 active-name
      -->
      <MenuItem to="/home" name="home">home</MenuItem>
      <MenuItem to="/about" name="about">about</MenuItem>

      <MenuItem to="/login" name="login">Login</MenuItem>
      <MenuItem to="/admin" name="admin">Admin</MenuItem>
    </Menu>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '',
    }
  },

  watch: {
    '$route'() {
      const name = this.$route.name;
      this.activeName = this.$route.name;
      // console.log(this.$route);
    }
  }
}
</script>

<style>

</style>
