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

    ]
  },
  { path: '/error', redirect: '/404',hidden:true}
];


export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: RouterMap
})

