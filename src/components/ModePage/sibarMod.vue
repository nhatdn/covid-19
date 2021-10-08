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