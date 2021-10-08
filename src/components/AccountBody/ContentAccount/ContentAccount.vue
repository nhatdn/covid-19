<template>
  <div class="ContentAccount col-lg-9">
    <div class="content border border-secondary border-2">
      <form class="content__form">
        <h4 class="content__form--text">Thông tin cá nhân</h4>
        <div class="content__form--component mb-3">
          <label for="account-name" class="content__form--component---label"
            >Tên tài khoản:</label
          >
          <input
            type="text"
            class="content__form--component---input form-control"
            id="account-name"
            placeholder="Vd: PCG1003"
            required
          />
        </div>
        <div class="content__form--component mb-3">
          <label for="householder-name" class="content__form--component---label"
            >Tên chủ hộ:</label
          >
          <input
            type="text"
            class="content__form--component---input form-control"
            id="householder-name"
            placeholder="Vd: Dương Thị Sa Pa"
            required
          />
        </div>
        <div class="content__form--component mb-3">
          <label for="member-number" class="content__form--component---label"
            >Số lượng thành viên:</label
          >
          <input
            type="number"
            class="content__form--component---input form-control"
            id="member-number"
            min="1"
            max="10"
            pattern="[0-9]+"
            required
          />
        </div>
        <div class="content__form--component mb-3">
          <label for="phone" class="content__form--component---label"
            >Số điện thoại:</label
          >
          <input
            type="tel"
            class="content__form--component---input form-control"
            id="phone"
            placeholder="052-3671-909"
            pattern="[0-9]{11}"
            required
          />
        </div>
        <div class="content__form--component mb-3">
          <label for="account-address" class="content__form--component---label"
            >Địa chỉ:</label
          >
          <input
            type="text"
            class="content__form--component---input form-control"
            id="account-address"
            placeholder="Vd: Số 103 đường Điện Biên Phủ, phường Chính Gián, Thanh Khê, Đà Nẵng"
            required
          />
        </div>
        <div class="content__form--btn-container">
          <button
            type="submit"
            class="content__form--btn-success btn btn-success"
          >
            Lưu thay đổi
          </button>

          <button
            type="submit"
            class="content__form--btn-cancel btn btn-light btn-cancel"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContentAccount",
  data: function () {
    return {
      clicked: 0,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./scss/ContentAccount1.scss"
</style>
