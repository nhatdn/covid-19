<template>
  <div class="ContentAccount col-lg-9">
    <div
      class="
        content
        border border-secondary border-2
      "
    >
      <form class="content__form">
        <h4 class="content__form--text">Thiết lập tài khoản</h4>
        <div class="content__form--component mb-3">
          <label for="OldPassword" class="content__form--component---label"
            >Mật khẩu cũ:</label
          >
          <input
            type="password"
            class="content__form--component---input form-control"
            id="OldPassword"
            placeholder="**********"
            required
          />
        </div>

        <div class="content__form--component mb-3">
          <label for="NewPassword1" class="content__form--component---label"
            >Mật khẩu mới:</label
          >
          <input
            type="password"
            class="content__form--component---input form-control"
            id="NewPassword1"
            placeholder="**********"
            required
          />
        </div>

        <div class="content__form--component mb-3">
          <label for="NewPassword2" class="content__form--component---label"
            >Xác nhận mật khẩu mới:</label
          >
          <input
            type="password"
            class="content__form--component---input form-control"
            id="NewPassword2"
            placeholder="**********"
            required
          />
        </div>
        <div class="content__form--btn-container account-content-btns">
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
