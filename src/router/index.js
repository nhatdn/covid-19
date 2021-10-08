import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLogin from '../views/all/MainLogin/MainLogin.vue'; // login
import MainInforUpdate from '../views/user/MainInforUpdate/MainInforUpdate.vue';
import Page404 from '../views/all/Page404/Page404.vue';
import AdminPage from '../views/admin/AdminPage.vue';
import ContentAdmin from '../components/AdminPage/ContentAdmin/ContentAdmin.vue';
import ContentAdminAccount from '../components/AdminPage/ContentAdmin/ContentAdminAccount.vue';
import ContentAdminCustomer from '../components/AdminPage/ContentAdmin/ContentAdminCustomer.vue';
import ContentAdminInputCategory from '../components/AdminPage/ContentAdmin/ContentAdminInputCategory.vue';
import ContentAdminFeedback from '../components/AdminPage/ContentAdmin/ContentAdminFeedback.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/login', component: MainLogin },
    { path: '/', component: MainLogin },

    {
      path: '/admin-page',
      component: AdminPage,
      children: [
        { path: '', component: ContentAdmin },
        {
          path: 'account',
          component: ContentAdminAccount,
        },
        { path: 'management-customer', component: ContentAdminCustomer },
        { path: 'management-feedback', component: ContentAdminFeedback },
        { path: 'management-category', component: ContentAdminInputCategory },
      ],
    },
    { path: '/infor', name: 'infor', component: MainInforUpdate },
    { path: '*', component: Page404 },
  ],
});
export default router;

