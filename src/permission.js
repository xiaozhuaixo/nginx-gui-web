import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

import store from './store'


router.beforeEach((to, from, next) => {
  NProgress.start();
  let menu = {
    pathName: to.name,
    path: to.path,
    meta: to.meta
  };
  store.commit('addMenu' , menu);

  next();
  NProgress.done();
});

router.afterEach(() => {
  NProgress.done() // 结束Progress
});
