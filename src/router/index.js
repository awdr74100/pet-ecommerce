import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/Layout/index.vue';
import Home from '@/views/Layout/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/Layout/About.vue'),
      },
      {
        path: 'category/:category',
        name: 'Category',
        component: () => import('@/views/Layout/Category.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('@/views/Layout/Product.vue'),
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('@/views/Layout/News.vue'),
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('@/views/Layout/Coupon.vue'),
      },
      {
        path: 'adopt',
        name: 'Adopt',
        component: () => import('@/views/Layout/Adopt.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/Layout/Contact.vue'),
      },
    ],
  },
  {
    path: '/admin',
    redirect: '/admin/products/all',
    component: () => import('@/views/Dashboard/index.vue'),
    children: [
      {
        path: 'products/:tab',
        name: 'Products',
        meta: { requiresAuth: true, role: 'admin' },
        component: () => import('@/views/Dashboard/Products.vue'),
      },
      {
        path: 'coupons/:tab',
        name: 'Coupons',
        meta: { requiresAuth: true, role: 'admin' },
        component: () => import('@/views/Dashboard/Coupons.vue'),
      },
      {
        path: 'orders/:tab',
        name: 'Orders',
        meta: { requiresAuth: true, role: 'admin' },
        component: () => import('@/views/Dashboard/Orders.vue'),
      },
    ],
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('@/views/Signin/index.vue'),
  },
  {
    path: '/admin/*',
    redirect: '/admin/products/all',
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (!to.meta.requiresAuth) return next();
  await router.app.$options.store.dispatch(`${to.meta.role}/check`, { to, from });
  if (router.app.$options.store.state[to.meta.role].isSignin) return next();
  return next('/signin');
});

export default router;
