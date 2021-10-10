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



import AdminPage from '../views/admin/AdminPage.vue'
import AdminDashboard from '../components/AdminPage/ContentAdmin/ContentAdmin.vue';
import AdminAccount from '../components/AdminPage/ContentAdmin/ContentAdminAccount.vue';
import AdminCustomer from '../components/AdminPage/ContentAdmin/ContentAdminCustomer.vue';
import AdminFeedback from '../components/AdminPage/ContentAdmin/ContentAdminFeedback.vue';
import AdminInputCategory from '../components/AdminPage/ContentAdmin/ContentAdminInputCategory.vue';
import AdminInputProduct from '../components/AdminPage/ContentAdmin/ContentAdminInputProduct.vue';




import AllModePage from '../views/provider/AllModPage.vue'
import modInfo from '../components/ModePage/modInfo.vue';
import modAdmin from '../components/ModePage/modAdmin.vue';
import userMod from '../components/ModePage/userMod.vue';
import productMod from '../components/ModePage/productMod.vue';


Vue.use(VueRouter);


//const ADMIN = 0;
//const USER = 1;
//const PROVIDER = 2;
//const LEVEL = null;



const router = new VueRouter({
  mode: 'hash',
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
    
    // user
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
    }  
  ]
},
// admin
{
  path: '/admin',
  component: AdminPage,
  // beforeEnter: (to, from, next) => {
  //   if(LEVEL != ADMIN) {
  //     next({ path: '/*'})
  //   }
  // },
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

// provider
{ 
  path: '/provider-page', component: AllModePage,
    children: [
      { path: '', component: modInfo},
      // cập nhật thông tin
      {path: 'mod-admin', component: modAdmin},
      // quản lý thành viên
      {path: 'mod-user', component: userMod,
      // xác minh tài khoản
      meta: {
          title: 'User Management',
          requiresAuth: false,
        },
      },
      {path: 'product-mod', component: productMod},
    ]
}, 

    // error
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
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
export default router;