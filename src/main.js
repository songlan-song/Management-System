import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index.js'
import Cookie from 'js-cookie'
import './api/mock'
import './assets/bootstrap.css'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
router.beforeEach((to,from,next)=>{
  //判断token存不存在
  const token = Cookie.get('token')
  //token不存在，说明用户未登录，跳转至登录页
  if(!token && to.name !=='login'){
    next({name:'login'})
  }else if(token&& to.name ==='login'){ //token存在，说明用户登录，跳转至首页
    next({name:'home'})
  }else{
    next()
  }
})
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')

