<template>
  <div class="Information_Order">
    <form class="information-order" action="">
      <h2 class="text-uppercase information-order__title">
        {{ title }}
      </h2>
      <div class="mb-4 information-order__item">
        <label for="fullname" class="form-label information-order__label"
          >Họ và Tên:</label
        >
        <input
          type="text"
          class="form-control information-order__input"
          id="fullname"
          aria-describedby="fullname"
        />
      </div>
      <div class="mb-4 information-order__item">
        <label for="phonenumber" class="form-label information-order__label"
          >Số điện thoại:</label
        >
        <input
          type="tel"
          class="form-control information-order__input"
          id="phonenumber"
          aria-describedby="phonenumber"
        />
      </div>
      <div class="mb-4 information-order__item">
        <label for="address" class="form-label information-order__label"
          >Địa chỉ nhà:</label
        >
        <input
          type="text"
          class="form-control information-order__input"
          id="address"
          aria-describedby="address"
        />
      </div>
      <div class="mb-4 information-order__item">
        <label
          for="address_specific"
          class="form-label information-order__label"
          >Địa chỉ nhà cụ thể:</label
        >
        <input
          type="text"
          class="form-control information-order__input"
          id="address_specific"
          aria-describedby="address_specific"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Information_Order",
  data() {
    return {
      title: "Thông tin giao hàng",
    };
  },
};
</script>

<style scoped lang="scss">
@import "Information_Order.scss";
</style>
