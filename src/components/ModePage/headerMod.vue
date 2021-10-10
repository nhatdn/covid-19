<template>
  <div class="HeaderAdmin">
    <div class="header">
      <div class="header__text d-flex align-items-center">
        <b-icon class="header__text--icon" icon="list-ul"></b-icon>
        <span class="header__text--text">{{ title }}</span>
      </div>
      <div
        class="header__search d-flex justify-content-center align-items-center"
      >
        <input
          class="header__search--input form-control me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <label for="header__search--label search-bar"></label>
        <button
          @click="clickEvent = !clickEvent"
          class="header__search--icon-container"
        >
          <b-icon icon="search" id="search-bar"></b-icon>
        </button>
      </div>
      <div
        class="header__icons d-flex align-items-center justify-content-evenly"
      >
        <span class="header__icons--container"
          ><b-icon class="header__icons--icon" icon="chat-text"></b-icon
        ></span>
        <span class="header__icons--container"
          ><b-icon class="header__icons--icon" icon="bell"></b-icon
        ></span>
        <span class="header__icons--container"
        @click="logout()"
          ><b-icon class="header__icons--icon" icon="person-circle"></b-icon
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
import {bus} from "../../main.js";
import { deleteAllCookies } from "../../handle";
export default {
  name: "HeaderAdmin",
  data: function () {
    return {
      clicked: 0,
      title: '',
    };
  },
  mounted() {
    bus.$on("sendTitle", (data) => {
      this.title = data;
    })
  },
  methods: {
    logout() {
      deleteAllCookies();
      localStorage.clear();
      this.$router.push('/');
      console.log("logout mod provider");
    }
  } 
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap");
$font-family: "Open Sans", sans-serif;
$font-logo: "Bonheur Royale", cursive;
$primary-color: #ee4d2d;
$primary-color-dark: #b30d00;
$primary-color-light: #ff8059;
$optional-color: #fff;
$header-height: 60px;
.HeaderAdmin {
  height: $header-height;
  background: $optional-color;
  font-family: $font-family;
}
.header {
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  height: $header-height;
  &__text {
    padding: 20px;
    &--icon {
      font-size: 24px;
    }
    &--text {
      padding-left: 10px;
      font-size: 24px;
      font-weight: 550;
    }
  }
  &__search {
    position: relative;
    &--input {
      width: 100%;
      border-radius: 20px;
      &:focus {
        border-color: $primary-color;
        box-shadow: $primary-color;
        box-shadow: none;
        -webkit-box-shadow: $primary-color;
        -webkit-box-shadow: none;
      }
    }
    &--icon-container {
      position: absolute;
      top: 17px;
      right: 20px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      outline: none;
      background: $optional-color;
    }
  }
  &__icons {
    padding: 5px 10px;
    &--icon {
      font-size: 25px;
      transition: 0.2s;
    }
  }
}
@media (min-width: 1024px) {
  .header {
    &__search--icon:hover,
    &__icons--icon:hover {
      color: $primary-color;
      transform: scale(1.1);
      cursor: pointer;
    }
    &__search {
      &--input {
        display: block;
      }
      &--icon-container:hover {
        color: $optional-color;
        background-color: $primary-color-light;
        animation: pulse;
        animation-duration: 1s;
        overflow: hidden;
      }
    }
  }
}
@media (max-width: 991px) {
  .header {
    &__icons {
      &--container {
        padding: 8px 10px;
        cursor: pointer;
      }
      &--icon {
        animation: fadeInDown;
        animation-duration: 1s;
      }
    }
  }
}
</style>