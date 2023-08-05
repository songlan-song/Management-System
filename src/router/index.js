import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect:'/home',
    component: () => import('../views/Main.vue'),
    children:[
        {
          path:'/home',
          name:'home',
          component:()=>import('../views/Home.vue')
        },
        {
          path:"/user",
          name:"user",
          component:()=>import("../views/User.vue")
        },
        {
          path:"/mall",
          name:"mall",
          component:()=>import("../views/Mall.vue")
        },
        {
          path:"/reminders",
          name:"reminders",
          component:()=>import("../views/Reminders.vue")
        },
        {
          path:"/page2",
          name:"page2",
          component:()=>import("../views/Page2.vue")
        },
    ]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import("../views/Login.vue")
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;