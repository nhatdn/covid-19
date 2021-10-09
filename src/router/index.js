import Vue from 'vue';
import VueRouter from 'vue-router';

import Page404 from '../views/all/Page404/Page404.vue';
import HomePage from "../views/user/HomePage/HomePage.vue"
import AccountBody from "../views/user/AccountBody/AccountBody.vue";
import CartPage from "../views/user/CartPage/CartPage.vue";

import AllPolicy from "../views/all/AllPolicy/AllPolicy.vue";

import Home from "../components/Home/Home.vue";
import AllProduct from "../components/AllProduct/AllProduct.vue";
import ContactUs from "../views/all/ContactUs/ContactUs.vue";


import ContentAccount from "../components/AccountBody/ContentAccount/ContentAccount.vue"; // Thông tin cá nhân
import ContentAccount2 from "../components/AccountBody/ContentAccount/ContentAccount2.vue"; // Lịch sử mua hàng
import ContentAccount3 from "../components/AccountBody/ContentAccount/ContentAccount3.vue"; // thiết lập tài khoản
import ContentAccount4 from "../components/AccountBody/ContentAccount/ContentAccount4.vue"; // báo cáo
import ContentAccount5 from "../components/AccountBody/ContentAccount/ContentAccount5.vue"; // thông báo

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/home', 
      component: HomePage,
      children: [
        {
          path: '',
          name : 'home',
          component: Home,
          meta: {
            title: "Trang chủ",
            requiresAuth: false,
          },
        },
        {
          path: 'product',
          name : 'product',
          component: AllProduct,
          meta: {
            title: "Danh sách sản phẩm",
            requiresAuth: false,
          },
        },
        { 
          path: 'policy', 
          name : 'policy',
          component: AllPolicy,
          meta: {
            title: "Chính sách và điều khoản",
            requiresAuth: false,
          },
        },
        { 
          path: 'contact',
          name : 'contact',
          component: ContactUs,
          meta: {
            title: "Liên hệ",
            requiresAuth: false,
          },
        },
        {
          path: 'cart', 
          name : 'Giỏ Hàng',
          component: CartPage,
          meta: {
            title: "Giỏ hàng",
            requiresAuth: false,
          },
        },
      ]
    },
    {
      path: '/account-body',
      component: AccountBody,
      children: [
        {
          path: '', 
          name : 'content-account',
          component: ContentAccount,
          meta: {
            title: "Thông tin cá nhân",
            requiresAuth: false,
          },
        },
        {
          path: 'purchase-history', 
          name : 'history',
          component: ContentAccount2,
          meta: {
            title: "Lịch sử mua hàng",
            requiresAuth: false,
          },
        },
        {
          path: 'config-account', 
          name : 'config-account',
          component: ContentAccount3,
          meta: {
            title: "Thiết lập tài khoản",
            requiresAuth: false,
          },
        },
        {
          path: 'report', 
          name : 'report',
          component: ContentAccount4,
          meta: {
            title: "Báo cáo",
            requiresAuth: false,
          },
        },
        {
          path: 'notification', 
          name: 'notification',
          component: ContentAccount5,
          meta: {
            title: "Thông báo",
            requiresAuth: false,
          },
        }
      ]
    },
    { 
      path: '*', 
      name: 'error',
      component: Page404,
      meta: {
        title: "Lỗi 404",
        requiresAuth: false,
      },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
},
);
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Chiến binh Covid`;
  next();
});

// getAccountCookie
/*
router.beforeEach((to,from,next) => {
  
})
*/
export default router;