<template>
  <div class="Header_Cart_Page">
    <div class="container">
      <div class="row">
        <div class="col header d-flex align-items-center justify-content-between">
          <div class="header__logo d-flex align-items-center">
            <router-link class="header__logo--link text-decoration-none d-flex align-items-center" to="/home">
              <img class="header__logo--img" src="../../assets/header_cart_page/icon.png" alt="logo"/>
              Helpee
            </router-link>
            <h3 class="header__logo--title">
              Giỏ Hàng
            </h3>
          </div>

          <div class="header__search">
              <input class="header__search--input" type="text" name="search" id="search" placeholder="Tìm kiếm ngay...">
              <div class="header__search--block">
                <a class="header__search--link" href="">
                  <b-icon class="header__search--icon" icon="search"></b-icon>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header_Cart_Page",
  components: {

  },
  data: function() {
    return {};
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
@import "Header_Cart_Page.scss";
</style>
