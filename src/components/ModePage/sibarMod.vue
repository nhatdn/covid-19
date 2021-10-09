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
          <li @click="handleClick('/provider-page/info-page', 'Cập nhật thông tin')"
            class="sidebar__menu--list"
          >
            <b-icon class="sidebar__menu--icon" icon="house-door-fill"></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              Cập nhật thông tin
            </p>
          </li>
          <li @click="handleClick('/provider-page/mod-user', 'Xác minh tài khoản')"
            class="sidebar__menu--list"
          >
            <b-icon class="sidebar__menu--icon" icon="house-door-fill"></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              Xác minh tài khoản
            </p>
          </li>
          <li @click="handleClick('/provider-page/mod-admin', 'Quản lý thành viên')"
            class="sidebar__menu--list"
          >
            <b-icon class="sidebar__menu--icon" icon="house-door-fill"></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              Quản lý thành viên
            </p>
          </li>
           <li @click="handleClick('/provider-page/product-mod', 'Quản lý sản phẩm')"
            class="sidebar__menu--list"
          >
            <b-icon class="sidebar__menu--icon" icon="house-door-fill"></b-icon>
            <p class="sidebar__menu--link text-decoration-none" href="">
              Quản lý sản phẩm
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {bus} from "../../main.js";
export default {
  
  name: "SidebarAdmin",
  data: function () {
    return {
      clicked: 0,
      admin_menu: [
        { icon: "house-door-fill", title: "Cập nhật thông tin" },
        { icon: "people-fill", title: "Xác minh tài khoản" },
        { icon: "person-circle", title: "Quản lý thành viên" },
        { icon: "basket2-fill", title: "Quản lý sản phẩm" },
        { icon: "file-earmark-text-fill", title: "Quản lý đơn hàng" },
        { icon: "newspaper", title: "Lịch sử giao hàng " },
        { icon: "chat-right-text", title: "Số lượng đơn hôm nay" },
      ],
    };
  },
  methods: {
    handleClick(e,title){
      bus.$emit("sendTitle", title);
      this.$router.push(e);
    }

  }
};

</script>

<style scoped lang="scss">
// @import "SidebarAdmin.scss";
@import url("https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap");

$font-family: "Open Sans", sans-serif;
$font-logo: "Bonheur Royale", cursive;
$primary-color: #ee4d2d;
$primary-color-dark: #b30d00;
$primary-color-light: #ff8059;
$optional-color: #fff;

$header-height: 60px;

.SidebarAdmin {
  padding: 0px;

  background-color: $primary-color;

  font-family: $font-family;
  min-height: 100vh;
  height: 100%;
}

.sidebar {
  padding-left: 24px;

  &__header {
    height: $header-height;
    line-height: $header-height;

    cursor: pointer;

    &--link-container {
      display: grid;
      grid-template-columns: 4fr 8fr;
    }
    &--icon {
      color: $primary-color-dark;

      font-size: 40px;
      line-height: $header-height;
    }

    &--logo {
      color: $optional-color;

      font-size: 48px;
      font-weight: bold;
      font-family: $font-logo;
    }
  }
  &__menu {
    &--list {
      display: grid;
      grid-template-columns: 2fr 8fr;

      padding: 16px;
      align-items: center;
    }
    &--link {
      color: $optional-color;

      font-size: 22px;
    }
    &--icon {
      height: 100%;

      color: $optional-color;

      font-size: 28px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .sidebar {
    &__menu {
      &--list {
        &:hover {
          border-top-left-radius: 50px;
          border-bottom-left-radius: 50px;

          background-color: $optional-color;

          cursor: pointer;
        }
      }
      &--list:hover &--link,
      &--list:hover &--icon {
        color: $primary-color-dark;

        font-weight: bolder;
      }
    }
  }
}
@media screen and (max-width: 991px) {
  .SidebarAdmin {
    display: none;
  }
}
</style>