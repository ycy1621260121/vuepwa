import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/Home.vue';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            keepAlive: true // 需要缓存
        },
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            keepAlive: true // 需要缓存
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue')
    },
    {
        path: '/mine',
        name: 'Mine',
        meta: {
            needLogin: true,
            keepAlive: true // 需要缓存
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/mine/Mine.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            keepAlive: false // 不需要缓存
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/login/Login.vue')
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
//用vue-router@3.0.7，否则会出错，npm i vue-router@3.0.7
router.beforeEach((to, from, next) => {
    //获取store里面的参数console.log(store.state.productData)
    if (to.meta.needLogin) {
        //if (to.path === '/login') next();
        const tokenStr = localStorage.getItem('token');
        if (!tokenStr)
            next({ path: '/login', query: { redirect: to.fullPath } });
        else
            next();
    }
    else {
        //表示不需要登录
        next(); //继续往后走
    }
});
export default router;
//# sourceMappingURL=index.js.map