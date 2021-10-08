<template>
  <div class="MessageBox">
    <div class="detail-message">
      <div class="detail-message__title">
        <a class="detail-message__title--link text-decoration-none" href="">
          <img class="detail-message__title--img" src="../../../assets/cart_page/user_1.jpg" alt=""/>
          Em yêu
          <b-icon class="detail-message__title--icon" icon="chevron-compact-down"></b-icon>
        </a>
        <a @click.prevent= "showMessage = false; showMess = true" class="detail-message__title--exit text-decoration-none" href="">
          <b-icon class="detail-message__title--exit-icon" icon="x"></b-icon>
        </a>
      </div>
      <div class="detail-message__over">
        <div class="detail-message__item">
          <img
            class="detail-message__item--img"
            src="../../../assets/cart_page/user_1.jpg"
            alt=""
          />
          <h4 class="detail-message__item--title">
            Em yêu
            <span class="detail-message__item--sub"> Anh ngủ ngon! </span>
          </h4>
        </div>
      </div>

      <div class="detail-message__send">
        <input class="detail-message__send--input" type="text" name="send-massage" id="massage" placeholder="Aa"/>
        <a class="detail-message__send--link text-decoration-none" href="">
          <b-icon class="detail-message__send--icon" icon="cursor-fill"></b-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: {
    msg: String,
  },
  data: function () {
    return {
      
    };
  },
};
</script>


<style scoped lang="scss">
@import "MessageBox.scss";
</style>
