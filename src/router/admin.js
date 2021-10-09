import Vue from 'vue';
import VueRouter from 'vue-router';

import Page404 from '../views/all/Page404/Page404.vue';
import AdminPage from '../views/admin/AdminPage.vue';
import Login from '../views/all/MainLogin/MainLogin';

import AdminDashboard from '../components/AdminPage/ContentAdmin/ContentAdmin.vue';
import AdminAccount from '../components/AdminPage/ContentAdmin/ContentAdminAccount.vue';
import AdminCustomer from '../components/AdminPage/ContentAdmin/ContentAdminCustomer.vue';
import AdminFeedback from '../components/AdminPage/ContentAdmin/ContentAdminFeedback.vue';
import AdminInputCategory from '../components/AdminPage/ContentAdmin/ContentAdminInputCategory.vue';
import AdminInputProduct from '../components/AdminPage/ContentAdmin/ContentAdminInputProduct.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'Login',
        requiresAuth: false,
      },
    },
    {
      path: '/admin',
      component: AdminPage,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: AdminDashboard,
          meta: {
            title: 'Dashboard',
            requiresAuth: true,
          },
        },
        {
          path: 'account',
          name: 'account',
          component: AdminAccount,
          meta: {
            title: 'Account',
            requiresAuth: true,
          },
        },
        {
          path: 'customer',
          name: 'customer',
          component: AdminCustomer,
          meta: {
            title: 'Customer',
            requiresAuth: true,
          },
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: AdminFeedback,
          meta: {
            title: 'Feedback',
            requiresAuth: true,
          },
        },
        {
          path: 'inputCategory',
          name: 'inputCategory',
          component: AdminInputCategory,
          meta: {
            title: 'Input Category',
            requiresAuth: true,
          },
        },
        {
          path: 'inputProduct',
          name: 'inputProduct',
          component: AdminInputProduct,
          meta: {
            title: 'Input Product',
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: '*',
      name: 'error',
      component: Page404,
      meta: {
        title: 'Lỗi 404',
        requiresAuth: false,
      },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Chiến binh Covid`;
  next();
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
