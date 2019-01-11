import Vue from 'vue';
import VueRouter from 'vue-router';



Vue.use(VueRouter);

// const RouterConfig = {
//   mode: 'history',
//   routes: Routers
// };
// const router = new Router(RouterConfig);//数据显示不出来


const Routers = [
  {
    path: '/list',
    mate: '商品列表',
    component: (resolve => {
      return require(['../components/list.vue'], resolve);
    })
  },
  {
    path: '/product/:id',
    meta: {
      title: '商品详情'
    },
    component: (resolve => {
      require(['../components/productDetil.vue'], resolve);
    })
  },
  {
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: (resolve => {
      require(['../components/cart.vue'], resolve);
    }) 
  },
  {
    path: '*',
    redirect: '/list'
  },

];
const router = new VueRouter({
  mode: 'history',
  routes: Routers
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

router.afterEach((to, from, next) =>{
  window.scrollTo(0, 0);
});

export default router;
