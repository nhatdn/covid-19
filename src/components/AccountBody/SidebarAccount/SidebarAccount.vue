<template>
  <div class="SidebarAccount col-lg-3">
    <div class="sidebar border border-secondary border-2">
      <div class="sidebar__img--container d-flex justify-content-center">
        <img
          class="sidebar__img--img"
          src="..\..\..\assets\AccountPage\Account.png"
          alt=""
        />
      </div>
      <div class="sidebar__text d-flex justify-content-center">
        <h5>Đậu Hoàng Phát Tài</h5> 
      </div>

      <div class="sidebar__menu">
        <ul class="sidebar__menu--option list-unstyled">
          <li v-for="(item, index) in sidebar_menu" :key="index">
            <router-link class="sidebar__menu--link text-decoration-none" :to="item.link">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarAccount",
  data: function () {
    return {
      clicked: 0,
      sidebar_menu: [
        {
          name: "Thông tin cá nhân",
          link: '/account-body'
        },
         {
          name: "Lịch sử mua hàng",
          link: '/account-body/purchase-history'
        },
         {
          name: "Thiết lập tài khoản",
          link: '/account-body/config-account'
        },
         {
          name: "Báo cáo",
          link: '/account-body/report'
        },
        {
          name: "Thông báo",
          link: '/account-body/notification'
        },        
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./SidebarAccount.scss"
</style>
