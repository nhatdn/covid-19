<template>
  <div class="TopHeader_Cart_Page">
    <div class="container">
      <div class="row">
        <div class="col-12 main-topbar d-flex justify-content-between px-4">
          <ul class="top-bar__contact d-flex align-items-center">
            <li class="top-bar__contact--list">
              <a class="top-bar__contact--link" href="tel:0345707835">
                <b-icon class="top-bar__contact--icon" icon="telephone-fill"></b-icon>
              </a>
            </li>
            <li class="top-bar__contact--list">
              <a class="top-bar__contact--link" href="mailto:xuantu14112001@gmail.com">
                <b-icon class="top-bar__contact--icon" icon="envelope-fill"></b-icon>
              </a>
            </li>        
          </ul>

          <ul class="top-bar d-flex">
            <li class="top-bar__list">
              <a @click.prevent = "hideNotify = true; hideMess= false; hideAccount = false" data-notify = "2" class="top-bar__link top-bar__active text-decoration-none" href="">
                <b-icon class="top-bar__icon" icon="bell"></b-icon>
                <span class="top-bar__span">Thông báo</span>
              </a>
            </li>
            <li class="top-bar__list">
              <a @click.prevent = "hideNotify = false; hideMess= true; hideAccount = false" data-notify = "2" class="top-bar__link top-bar__active text-decoration-none" href="">
                <b-icon class="top-bar__icon" icon="chat-dots"></b-icon>
                <span class="top-bar__span">Message</span>
              </a>
            </li>
            <li class="top-bar__list">
              <a @click.prevent = "hideNotify = false; hideMess= false; hideAccount = true" class="top-bar__link text-decoration-none" href="">
                <b-icon class="top-bar__icon" icon="person-circle"></b-icon>
                <span class="top-bar__span">tuxuan</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Notify v-show="hideNotify === true"></Notify>  

      <Account v-show="hideAccount === true"></Account>    
           
      <Message v-show="hideMess === true"></Message>
      <Messenger></Messenger>
      <Contact></Contact>
    </div>


  </div>
</template>

<script>
import Notify from "./Notify/Notify.vue";
import Account from "./Account/Account.vue";
import Messenger from "./Messenger/Messenger.vue";
import Message from "./Notify/Notify.vue";
import Contact from "./Contact/Contact.vue";

export default {
  name: "TopHeader_Cart_Page",
  components: {
    Notify,
    Account,
    Messenger,
    Message,
    Contact,
  },
  data: function () {
    return {
      hideMess: false,
      hideAccount: false,
      hideNotify: false,
    };
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
@import "TopHeader_Cart_Page.scss";
</style>
