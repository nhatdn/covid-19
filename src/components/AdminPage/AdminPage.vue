<template>
  <div>
    <div class="container-fluid p-0">
      <div class="wrapper row p-0" style="">
        <div class="wrapper__left col-lg-3 col-0 p-0">
          <SidebarAdmin></SidebarAdmin>
        </div>
        <div class="wrapper__right col-lg-9 col-12 p-0">
          <HeaderAdmin></HeaderAdmin>
          <router-view></router-view>
          <!-- <ContentAdmin></ContentAdmin> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin.vue";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin.vue";
// import ContentAdmin from "./ContentAdmin/ContentAdmin.vue";
// import ContentAdminAccount from "./ContentAdmin/ContentAdminAccount.vue";
// import ContentAdminCustomer from "./ContentAdmin/ContentAdminCustomer.vue";
// import ContentAdminFeedback from "./ContentAdmin/ContentAdminFeedback.vue";
// import ContentAdminInputCategory from "./ContentAdmin/ContentAdminInputCategory.vue";
// import ContentAdminInputProduct from "./ContentAdmin/ContentAdminInputProduct.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    SidebarAdmin,
    HeaderAdmin,
    // ContentAdmin,
  },
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