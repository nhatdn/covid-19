<template>
  <div class="SidebarAdmin">
    <div class="sidebar">
      <div class="sidebar__header">
        <div class="sidebar__header--link-container">
          <div
            class="
              sidebar__header--icon
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <b-icon class="" icon="cart4"></b-icon>
          </div>
          <span class="sidebar__header--logo">Helpee</span>
        </div>
      </div>
      <div class="sidebar__menu">
        <ul class="sidebar__menu--container list-unstyled">
          <li class="sidebar__menu--list" @click="handleAdDashboard" :class="menuclick === 0 ? 'open': ''">
            <b-icon class="sidebar__menu--icon" icon="house-door-fill"></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              Dashboard
            </p>
          </li>
          <li class="sidebar__menu--list" @click="handleAdCustomer" :class="menuclick === 1 ? 'open': ''">
            <b-icon class="sidebar__menu--icon" icon="people-fill"></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              Khách hàng
            </p>
          </li>
          <li class="sidebar__menu--list" @click="handleAdAccount" :class="menuclick === 2 ? 'open': ''">
            <b-icon class="sidebar__menu--icon" icon="person-circle"></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              Tài khoản
            </p>
          </li>
          <li class="sidebar__menu--list" @click="handleAdInputCategory" :class="menuclick === 3 ? 'open': ''">
            <b-icon class="sidebar__menu--icon" icon="grid"></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              Nhập danh mục
            </p>
          </li>
          <li class="sidebar__menu--list" @click="handleInputProduct" :class="menuclick === 4 ? 'open': ''">
            <b-icon class="sidebar__menu--icon" icon="basket2-fill"></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              Nhập sản phẩm
            </p>
          </li>
          <li class="sidebar__menu--list" @click="handleFeedback" :class="menuclick === 5 ? 'open': ''">
            <b-icon
              class="sidebar__menu--icon"
              icon="file-earmark-text-fill"
            ></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              Khiếu nại
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarAdmin',
  data: function () {
    return {
      clicked: 0,
      menuclick: 0,
      admin_menu: [
        'db', 'kh', 'tk', 
        // { icon: 'house-door-fill', title: 'Dashboard' },
        // { icon: 'people-fill', title: 'Khách hàng' },
        // { icon: 'person-circle', title: 'Tài khoản' },
        // { icon: 'grid', title: 'Nhập danh mục' },
        // { icon: 'basket2-fill', title: 'Nhập sản phẩm' },
        // { icon: 'file-earmark-text-fill', title: 'Khiếu nại' },
        // // { icon: "newspaper", title: "Tin tức" },
        // // { icon: "chat-right-text", title: "Bình luận" }, okiiiiiiii
      ],
    };
  },
  methods: {
    handleAdDashboard() {
      this.$router.push('/admin');
      this.menuclick = 0;
    },
    handleAdCustomer() {
      this.$router.push('/admin/customer');
      this.menuclick = 1;
    },
    handleAdAccount() {
      this.$router.push('/admin/account');
      this.menuclick = 2;
    },
    handleAdInputCategory() {
      this.$router.push('/admin/inputcategory');
      this.menuclick = 3;
    },
    handleInputProduct() {
      this.$router.push('/admin/inputproduct');
      this.menuclick = 4;
    },
    handleFeedback() {
      this.$router.push('/admin/feedback');
      this.menuclick = 5;
    },
  },
};
</script>

<style scoped lang="scss">
@import 'SidebarAdmin.scss';
</style>



