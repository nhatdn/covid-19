import Vue from 'vue';
import VueRouter from 'vue-router';
import AllModePage from '../views/provider/AllModPage.vue'
import modInfo from '../components/ModePage/modInfo.vue';
import modAdmin from '../components/ModePage/modAdmin.vue';
import userMod from '../components/ModePage/userMod.vue';
import productMod from '../components/ModePage/productMod.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
      },
    })
    router.beforeEach((to, from, next) => {
      document.title = `${to.meta.title} | Chiến binh Covid`;
      next();
    });
export default router;