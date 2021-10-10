<template>
  <div class="AdminPage">
    <div class="container-fluid p-0">
      <div class="wrapper row p-0" style="">
        <div class="wrapper__left col-lg-3 col-0 p-0">
          <SidebarAdmin></SidebarAdmin>
        </div>
        <div class="wrapper__right col-lg-9 col-12 p-0">
          <HeaderAdmin></HeaderAdmin>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SidebarAdmin from "../../components/AdminPage/SidebarAdmin/SidebarAdmin.vue";
import HeaderAdmin from "../../components/AdminPage/HeaderAdmin/HeaderAdmin.vue";
//import { getCookie } from "../../handle/index.js"
//import md5 from "md5";

export default {
  name: "AdminPage",
  data() {
    return {};
  },
  components: {
    SidebarAdmin,
    HeaderAdmin,
  },
  // created() {
      
  //     if(!(getCookie(md5("username")) && getCookie(md5("password"))) && !(localStorage.getItem(md5("username")) && localStorage.getItem(md5("password")))) {
  //          this.$router.push('/login');
  //     }
  // }
};
</script>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  
  background: #ccc;
  &__left {
    width: 20%;
  }
  &__right {
    width: 80%;
  }
}
@media (max-width) {
  .wrapper {
    &__left {
      width: 0px;
    }
    &__right {
      width: 100%;
    }
  }
}
</style>