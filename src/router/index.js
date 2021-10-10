import Vue from 'vue';
import VueRouter from 'vue-router';
import Page404 from '../views/all/Page404/Page404.vue';
import HomePage from "../views/user/HomePage/HomePage.vue"
import AccountBody from "../views/user/AccountBody/AccountBody.vue";
import CartPage from "../views/user/CartPage/CartPage.vue";
import CheckoutPage from "../views/user/CheckoutPage/CheckoutPage.vue"
import AllPolicy from "../views/all/AllPolicy/AllPolicy.vue";
import Home from "../components/Home/Home.vue";
import AllProduct from "../components/AllProduct/AllProduct.vue";
import ContactUs from "../views/all/ContactUs/ContactUs.vue";
import ContentAccount from "../components/AccountBody/ContentAccount/ContentAccount.vue"; // Thông tin cá nhân
import ContentAccount2 from "../components/AccountBody/ContentAccount/ContentAccount2.vue"; // Lịch sử mua hàng
import ContentAccount3 from "../components/AccountBody/ContentAccount/ContentAccount3.vue"; // thiết lập tài khoản
import ContentAccount4 from "../components/AccountBody/ContentAccount/ContentAccount4.vue"; // báo cáo
import ContentAccount5 from "../components/AccountBody/ContentAccount/ContentAccount5.vue"; // thông báo
import MainProduct from "../components/Products/MainProduct/MainProduct.vue";
import ListProduct from "../components/AllProduct/ListProduct.vue"
import Login from "../views/all/MainLogin/MainLogin.vue"
import Authentication from "../views/user/InforUpdate/InforUpdate.vue"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Login,
      meta: {
        title: "Đăng nhập",
        requiresAuth: false,
      }, 
    },
    {
      path: '/xac-thuc-thong-tin',
      component: Authentication,
      meta: {
        title: "Đăng nhập",
        requiresAuth: false,
      }, 
    },
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
          component: AllProduct,
          children: [
            {
              path: '',
              name : 'product-list',
              component: ListProduct,
            },
            {
              path: 'product-detail',
              name: 'product-detail',
              component: MainProduct
            },
          ],
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
        { 
          path: 'thu-tuc-thanh-toan', 
          name: 'thu-tuc-thanh-toan',
          component: CheckoutPage,
          meta: {
            title: "Thủ tục thanh toán",
            requiresAuth: false,
          },
        }  
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
    }
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
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
export default router;