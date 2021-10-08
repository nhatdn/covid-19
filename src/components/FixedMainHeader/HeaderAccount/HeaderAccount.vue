<template>
  <div class="HeaderAccount fixed-top">
    <nav class="navbar navbar-expand-lg bg-gradient">
      <div class="navbar__containerfluid container-fluid ">
        <!-- <button v-on:click="menuClick=!menuClick">Click me pls</button> -->
        <div class="navbar__container container">

          <ul class="navbar__options"
              v-show="menuClick" v-bind:class=" menuClick ? 'hideResponsive': 'showResponsive' ">
            <li
                class="navbar__options--option"
                v-for="(item, index) in menu"
                :key="index"
            >
              <router-link v-if="index !=2 "
                  :to="item.link"
                  class="
                  navbar__options--link
                  nav-link
                  animate__animated animate__fadeInDown
                  text-uppercase text-decoration-none text-white
                "
              >{{ item.name }}</router-link>
              <a v-else
                  href="https://www.facebook.com/tucute200"
                  class="
                  navbar__options--link
                  nav-link
                  animate__animated animate__fadeInDown
                  text-uppercase text-decoration-none text-white
                "
              >{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import { bus } from "../../../main";

export default {
  name: "HeaderAccount",
  data() {
    return {
      menu: [
        {
          name: "Trang chủ",
          link: '/home'
        }, 
        {
          name: "Danh mục sản phẩm",
          link: '/home/product'
        }, 
        {
          name: "Hợp tác",
          link: ''
        }, 
        {
          name: "Chính sách",
          link: '/home/policy'
        }, 
        {
          name: "Liên hệ",
          link: '/home/contact'
        }, 
      ],
      menuClick: true
    };

  },
  methods: {
    sendEventShowMenu(){
      bus.$on('eventShowMenu', (clickMenu) => {
        this.menuClick = clickMenu;
      })
    }
  },
  mounted() {
    this.sendEventShowMenu();
  }

};
</script>

<style scoped lang="scss">
@import "./HeaderAccount.scss";
@media only screen and (max-width: 991px) {
  .hideResponsive{
    display: none !important;
  }
  .showResponsive {
    display: block !important;
  }
}
</style>