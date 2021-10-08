<template>
  <div class="Notify">
    <div class="notify">
      <h3 class="notify__title text-uppercase">Thông báo</h3>
      <a class="notify-icon" href="">
        <b-icon icon="x"></b-icon>
      </a>
      <div
        class="d-flex justify-content-between px-3 notify__block">
        <p class="notify__content">Mới</p>
        <a class="notify__link text-decoration-none" href=""
          >Xem tất cả</a>
      </div>
      <div class="notify__over">
        <div class="notify__item d-flex">
          <a class="notify__item--link text-decoration-none" href="">
            <img class="notify__item--img" src="../../../assets/cart_page/notify.png" alt=""/>
            Đơn hàng số 3 của bạn đang chờ xác nhận
          </a>
        </div>
        <div class="notify__item d-flex">
          <a class="notify__item--link text-decoration-none" href="">
            <img class="notify__item--img" src="../../../assets/cart_page/notify.png" alt=""/>
            Đơn hàng số 3 của bạn đang chờ xác nhận
          </a>
        </div>
        <div class="notify__item d-flex">
          <a class="notify__item--link text-decoration-none" href="">
            <img class="notify__item--img" src="../../../assets/cart_page/notify.png" alt=""/>
            Đơn hàng số 3 của bạn đang chờ xác nhận
          </a>
        </div>
        <div class="notify__item d-flex">
          <a class="notify__item--link text-decoration-none" href="">
            <img class="notify__item--img" src="../../../assets/cart_page/notify.png" alt=""/>
            Đơn hàng số 3 của bạn đang chờ xác nhận
          </a>
        </div>
        <div class="notify__item d-flex">
          <a class="notify__item--link text-decoration-none" href="">
            <img class="notify__item--img" src="../../../assets/cart_page/notify.png" alt=""/>
            Đơn hàng số 3 của bạn đang chờ xác nhận
          </a>
        </div>
        <div class="notify__item d-flex">
          <a class="notify__item--link text-decoration-none" href="">
            <img class="notify__item--img" src="../../../assets/cart_page/notify.png" alt=""/>
            Đơn hàng số 3 của bạn đang chờ xác nhận
          </a>
        </div>
        <div class="notify__item">
          <a class="notify__item--btn text-decoration-none" href="">
            Xem tất cả
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notify",
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
@import 'Notify.scss';
</style>