<template>
  <div class="ContentAccount col-lg-9">
    <div class="content border border-secondary border-2">
      <form class="content__form">
        <h4 class="content__form--text">Báo cáo</h4>
        <div class="content__form--component mb-3">
          <label for="account-name" class="form-label fst-italic"
            >Hãy cho chúng tôi biết chúng tôi có thể làm gì để cải thiện trải
            nghiệm người dùng của bạn</label
          >
        </div>
        <div class="content__form--component mb-3">
          <label for="user-email" class="content__form--component---label"
            >Tài khoản email (Tùy chọn)</label
          >
          <input
            type="email"
            class="content__form--component---input form-control"
            id="user-email"
          />
        </div>
        <div class="content__form--component mb-3">
          <label for="feedback" class="content__form--component---label"
            >Phản hồi</label
          >
          <textarea
            type="text"
            class="content__form--component---input feedback form-control"
            id="feedback"
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
