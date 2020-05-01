// 根据不同平台动态路由不同组件 start

/*
 * 判断当前设备平台是PC还是移动端来跳转到不同的页面, 在路由级别动态渲染不同组件
 * 一个路径 http://localhost:8080/#/home 两套页面 不同端显示不同页面
 * 
 */

const ua = window.navigator.userAgent;
let isMobile = false;
if (ua.indexOf('Android') > 0) isMobile = true;
if (ua.indexOf('iPhone') > 0) isMobile = true;
if (ua.indexOf('iPad') > 0) isMobile = true;

const path = isMobile ? '/mobile' : ''

const Home = () =>
  import (/* webpackChunkName: "home" */ '@/views' + path + '/Home')

// 若是在移动端的话 渲染的路径就会是 @/views/mobile/Home.vue
// 若是在PC端的话  渲染的路径就会是 @/views/Home.vue

// 启发: 根据不同的权限渲染不同的路由页面 或者 在此处获得localStorage渲染不同的路由页面 不同的人看到不同的页面或者组件 都可以在这里实现

// 根据不同平台动态路由不同组件 end




// const Home = () =>
//   import (/* webpackChunkName: "home" */ '@/views/Home')

const About = () =>
import (/* webpackChunkName: "about" */ '@/views/About')

const Login = () =>
  import (/* webpackChunkName: "login" */ '@/views/Login')

const Admin = () =>
  import (/* webpackChunkName: "admin" */ '@/views/Admin')


const RouterConfig = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  // vue-router 提供了一个叫 meta 的元数据信息, 可以在里面自定义一些我们所需要的数据
  // 此处 requiresLogin 用于路由级别的鉴权(登录后才可进入某些路由页面)
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      requiresLogin: true,
    },
    component: Admin
  },
]
export default RouterConfig
