import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from '@/router/RouterConfig'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: RouterConfig
})

// 路由级别鉴权start

router.beforeEach((to, from, next) => {
  // to: 即将要跳转到的路由
  // from: 当前路由
  // next是个函数 放行 或者 指定跳转到哪里
  
  
  const requiresLogin = to.meta.requiresLogin;
  // console.log('requiresLogin', requiresLogin);

  /**
   * 路由级别的鉴权: 若某些路由页面需要登录才可进入, 在没进入该路由前便进行鉴权, 若已经登录可进入, 若处*              于未登录状态则跳转到登录页
   * 
   * 涉及到:
   * <1>路由守卫
   * <2>路由配置中的 meta 元信息
   * 
   * 官方鉴权示例: https://router.vuejs.org/zh/guide/advanced/meta.html
   * 
   * 延伸: 此处做的是登录鉴权, 对于后台操作的不同身份, 还可做权限管理, 又或者某一个功能你可以看, 某一个*      功能你看不了等复杂的逻辑都可放在 meta 里, 结合 mate 完成
   */

  // 1.判断要进入的路由页面是否需要登录权限
  if(requiresLogin) {
    // 1.1 需要登录

    // 2. 判断登录状态
    if(window.localStorage.getItem('isLogin')) {
      // 2.1 已登录, 则放行
      next();
    } else {
      // 2.2 未登录, 则跳转到登录页
      next('/login');
    }

  } else {
    // 1.2 不需要登录, 直接放行
    next();
  }
})
// 路由级别鉴权end

export default router
