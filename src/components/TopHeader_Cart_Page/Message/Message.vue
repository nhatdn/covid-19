<template>
  <div class="Message">
    <div class="main-topbar__message" v-show="showMess == true">
      <div
        class="d-flex justify-content-between px-3 main-topbar__message--block">
        <p class="main-topbar__message--content text-uppercase">message</p>
        <a class="main-topbar__message--link text-decoration-none" href="">
          Tin nhắn mới</a>
      </div>
      <div class="main-topbar__message--search">
        <b-icon class="main-topbar__message--search-icon" icon="search"></b-icon>
        <input class="main-topbar__message--search-input" type="text" name="search" id="search" placeholder="Tìm kiếm message..."/>
      </div>
      <div class="main-topbar__message--over">
        <div class="main-topbar__message--item">
          <a @click.prevent= "showMessage = true; showMess = false" class="main-topbar__message--item-link text-decoration-none" href="">
            <img class="main-topbar__message--item-img" src="../../../assets/cart_page/user_1.jpg" alt=""/>
            <h5 class="main-topbar__message--item-title">
              Em yêu
              <span class="main-topbar__message--item-sub">
                Ngủ ngon nhé!
              </span>
            </h5>
            <p class="main-topbar__message--item-minutes">- 1 phút</p>
            <p class="main-topbar__message--item-success">
              <b-icon class="main-topbar__message--item-icon" icon="check-circle"></b-icon>
            </p>
          </a>
        </div>
      </div>
    </div>
    <MessageBox></MessageBox>
  </div>
</template>

<script>
import MessageBox from "./MessageBox.vue";

export default {
  name: "Message",
  components: {
    MessageBox,
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      showMess: true,
      showMessage: false,
    };
  },
};
</script>


<style scoped lang="scss">
@import "Message.scss";
</style>
