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
  mode: 'hash',
  routes: [
    {
      path: '', 
      component: HomePage,
      children: [
        {
          path: '',
          component: Home
        }
      ]
    },
    {
      path: '/cart', 
      component: CartPage,
    },
    { 
      path: '/home', 
      component: HomePage,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'product',
          component: AllProduct
        },
        { 
          path: 'policy', 
          component: AllPolicy 
        },
        { 
          path: 'contact', 
          component: ContactUs 
        },
      ]
    },
    {
      path: '/account-body',
      component: AccountBody,
      children: [
        {
          path: '', 
          component: ContentAccount,
        },
        {
          path: 'purchase-history', 
          component: ContentAccount2,
        },
        {
          path: 'config-account', 
          component: ContentAccount3,
        },
        {
          path: 'report', 
          component: ContentAccount4,
        },
        {
          path: 'notification', 
          component: ContentAccount5,
        }
      ]
    },
    { 
      path: '*', 
      component: Page404 
    },
  ],
});
export default router;