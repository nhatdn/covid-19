<template>
  <div class="Account">
    <div class="account">
      <ul class="account__main">
        <li class="account__list">
          <a class="account__link text-decoration-none" href="">
            Tài Khoản Của Tôi
          </a>
        </li>
        <li class="account__list">
          <a class="account__link text-decoration-none" href="">
            Đơn Mua
          </a>
        </li>
        <li class="account__list">
          <a class="account__link text-decoration-none" href="">
            Đăng xuất
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
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
@import "Account.scss";
</style>
