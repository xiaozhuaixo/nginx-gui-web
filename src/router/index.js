import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Layout = () => import('../views/layout/Layout')


const RouterMap = [
  {
    path: '/',
    redirect: '/index/index',
    hidden: true,
    meta: {icon: '' , title: ''}
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/errorPage/404'),
    meta: {icon: "" , title: '404'},
    hidden: true,
  },
  {
    path: '/index',
    component: Layout,
    name: 'Layout',
    isNeedShow: true,
    children: [
        {
            path: 'index',
            name: 'Index',
            component: () => import('@/views/index/Index'),
            meta: {icon: "tachometer" , title: '首页'},
        },
        {
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/Index'),
            meta: {icon: 'tachometer' , title: '控制面板'},
            children: [
                {
                    path: 'cpu',
                    name: 'cpu',
                    component: () => import('@/views/dashboard/cpu/Index'),
                    meta: {icon: '' , title: 'Cpu使用状况'}
                },
                {
                    path: 'memory',
                    name: 'Memory',
                    component: () => import('@/views/dashboard/memory/Index'),
                    meta: {icon: '' , title: '内存使用状况'}
                }
            ]
        },
        {
            path: 'global',
            name: 'Global',
            component: () => import('@/views/global/Index'),
            meta: {icon: 'cogs' , title: '全局配置'},
            children: [
                {
                    path: 'port',
                    name: 'Port',
                    component: () => import('@/views/global/port/Index'),
                    meta: {icon: 'cog' , title: '端口监听'}
                },
                {
                    path: 'log',
                    name: 'Log',
                    component: () => import('@/views/global/log/Index'),
                    meta: {icon: 'file-text' , title: '日志查看'}
                }
            ]
        },
        {
            path: 'server',
            name: 'Server',
            component: () => import('@/views/server/Index'),
            meta: {icon: 'server' , title: '服务配置'},
            children: [
                {
                    path: 'loadBalancing',
                    name: 'LoadBalancing',
                    component: () => import('@/views/server/loadBalancing/Index'),
                    meta: {icon: 'cloud' , title: '负载均衡'}
                }
            ]
        }
    ]
  },
  { path: '/error', redirect: '/404',hidden:true}
];


export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: RouterMap
})

