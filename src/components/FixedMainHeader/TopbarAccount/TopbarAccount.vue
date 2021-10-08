<template>
  <div class="TopbarAccount">
    <div class="topbar container-fluid">
      <div class="container">
        <div class="row">
          <div class="topbar__logo col-lg-4 col-sm-4 col-2">
            <router-link
              class="
                topbar__logo--link
                d-flex
                align-items-center
                text-decoration-none
              "
              to="/home"
            >
              <img
                class="topbar__logo--img"
                src="../../../assets/login/icon.png"
              />
              <span class="topbar__logo--text">Helpee</span>
            </router-link>
          </div>

          <div
            class="
              topbar__search
              col-lg-4 col-sm-8 col-10
              d-flex
              justify-content-end
            "
          >
            <div class="topbar__search--container d-flex align-items-center">
              <input
                class="topbar__search--input form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <label for="topbar__search--label search-bar"></label>
              <button class="topbar__search--icon-container">
                <b-icon icon="search" id="search-bar"></b-icon>
              </button>
            </div>
          </div>
          <div
            class="
              topbar__icons
              col-lg-4 col-12
              d-flex
              align-items-center
              justify-content-evenly
            "
          >
            <span class="topbar__icons--container"
              ><b-icon class="topbar__icons--icon" icon="chat-text"></b-icon
            ></span>
            <span class="topbar__icons--container"
              ><b-icon class="topbar__icons--icon" icon="bell"></b-icon
            ></span>
            <router-link to="/account-body" style="color: gray;">
              <span class="topbar__icons--container"
              ><b-icon class="topbar__icons--icon" icon="person-circle"></b-icon
              ></span>
            </router-link> 
            <router-link to="/cart" style="color: gray;">
            <span class="topbar__icons--container"
              ><b-icon class="topbar__icons--icon" icon="cart3"></b-icon
            ></span>
            </router-link>
            <div
              class="topbar__icons--menu-btn"
              v-on:click="showMenu(clickMenu)"
              v-bind:class="{ open: clickMenu }"
            >
              <div class="topbar__icons--menu-btn__burger"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

 import {bus} from "../../../main";


export default {
  name: "TopbarAccount",
  data: function () {
    return {
      clicked: 0,
      clickMenu: false,
    };
  },
  created() {
    window.addEventListener('resize', ()=>{
      if(window.innerWidth > 991) {
        this.clickMenu = true;
        this.showMenu(this.clickMenu);
      } else {
        this.clickMenu = false;

      }

    });
  },
  methods: {
    showMenu(clickMenu){
      bus.$emit("eventShowMenu", clickMenu);
      this.clickMenu = !this.clickMenu;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./TopbarAccount.scss";
</style>
