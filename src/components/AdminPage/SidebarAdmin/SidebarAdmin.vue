<template>
  <div class="SidebarAdmin">
    <div class="sidebar">
      <div class="sidebar__header">
        <div class="sidebar__header--link-container">
            <div class="sidebar__header--icon d-flex justify-content-center align-items-center">
              <b-icon class="" icon="cart4"></b-icon>
            </div>
            <span class="sidebar__header--logo">Helpee</span>
        </div>
      </div>
      <div class="sidebar__menu">
        <ul class="sidebar__menu--container list-unstyled">
          <li
            class="sidebar__menu--list"
            v-for="(item, index) in admin_menu"
            :key="index"
          >
            <b-icon class="sidebar__menu--icon" :icon="item.icon"></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              {{ item.title }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarAdmin",
  data: function () {
    return {
      clicked: 0,
      admin_menu: [
        { icon: "house-door-fill", title: "Dashboard" },
        { icon: "people-fill", title: "Khách hàng" },
        { icon: "person-circle", title: "Tài khoản" },
        { icon: "grid", title: "Nhập danh mục" },
        { icon: "basket2-fill", title: "Nhập sản phẩm" },
        { icon: "file-earmark-text-fill", title: "Khiếu nại" },
        // { icon: "newspaper", title: "Tin tức" },
        // { icon: "chat-right-text", title: "Bình luận" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "SidebarAdmin.scss";


</style>



