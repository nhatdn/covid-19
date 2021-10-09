<template>
  <div class="HeaderAccount fixed-top">
    <nav class="navbar navbar-expand-lg bg-gradient">
      <div class="navbar__containerfluid container-fluid ">
          <!-- <button v-on:click="menuClick=!menuClick">Click me pls</button> -->
        <div class="navbar__container container">
          <transition name="slide">
            <ul class="navbar__options" v-bind:class=" menuClick ? 'hideResponsive' : 'showResponsive'">
            <li
              class="navbar__options--option"
              v-for="(item, index) in menu"
              :key="index"
            >
              <a
                class="
                  navbar__options--link
                  nav-link
                  animate__animated animate__fadeInDown
                  text-uppercase text-decoration-none text-white
                "
                href=""
                >{{ item }}</a
              >
            </li>
          </ul> 
          </transition>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

// import { bus } from "../../../main"; 

export default {
  name: "HeaderAccount",
  props: {
    menuClick : Boolean
  },
  data() {
    return {
      menu: ["Trang chủ", "Danh mục sản phẩm", "Hợp tác", "Tin tức", "Liên hệ"]
    };
    
  },
   created(){
     window.addEventListener('resize', ()=>{
       if(window.innerWidth > 991) {
         this.menuClick = true;
       }
     });
   }
  
};
</script>

<style scoped lang="scss">
@import "./HeaderAccount.scss";
@media only screen and (max-width: 991px) {
  .hideResponsive{
  display: none;
}
  .showResponsive {
    display: block;
  }
}
</style>
