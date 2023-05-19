import Vue from 'vue';
import vueRouter from 'vue-router';//导入路由对象
Vue.use(vueRouter);//通过全局方法使用vue-router插件
//创建路由规则数组
const routes = [
    {
        path:'/',
        redirect:'/loginhome'
    },
    {
        path:'/login',
        component:() => import('@/views/login'),//每个路由都需要映射到一个组件
    },
    {
        path:'/home',
        component:() => import('@/views/home'),//每个路由都需要映射到一个组件
    },
    {
        path:'/loginhome/:id*',
        meta:{
            keepAlive:true
        },
        component:() => import('@/views/loginhome'),//每个路由都需要映射到一个组件
        children:[
            {
                path:'homee',
                component:() => import('@/views/homee'),//每个路由都需要映射到一个组件
            },
            {
                path:'',
                component:() => import('@/views/moren'),//每个路由都需要映射到一个组件
            },
        ]
    },
    {
        path:'*',
        component:() => import('@/views/notfound')
    }
]
//创建路由实例并传递routes配置
const router = new vueRouter({
    mode:"history",
    routes
})
//向外导入路由对象
export default router
