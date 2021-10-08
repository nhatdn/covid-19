<template>
  <div class="ContentAccount col-lg-9">
    <div class="content border border-secondary border-2">
      <form class="content__form">
        <h4 class="content__form--text">Thông báo</h4>
        <div class="content__form--header">
          <div class="content__form--notif-part">
            <input
              type="checkbox"
              class="content__form--checkbox"
              name=""
              id=""
            />
          </div>
          <div class="content__form--header-part">
            <b-icon class="content__form--header-icon" icon="check-all"></b-icon
            ><span class="content__form--header-text">Chọn tất cả</span>
          </div>
          <div class="content__form--header-part">
            <b-icon
              class="content__form--header-icon"
              icon="check2-square"
            ></b-icon
            ><span class="content__form--header-text">Đánh dấu đã đọc</span>
          </div>
          <div class="content__form--header-part">
            <b-icon class="content__form--header-icon" icon="x-square"></b-icon
            ><span class="content__form--header-text">Xóa</span>
          </div>
        </div>

        <div
          v-on:click="item.clickState = false"
          v-for="(item, index) in content"
          :key="index"
          v-bind:class="item.clickState ? '' : 'active'"
          class="content__form--notif-card"
        >
          <div class="content__form--notif-part">
            <input
              class="content__form--checkbox"
              type="checkbox"
              name=""
              id=""
            />
          </div>
          <div class="content__form--notif-part">
            <img
              class="content__form--img"
              src="../../../assets/AccountPage/notify.jpg"
              alt=""
            />
          </div>

          <div class="card-body">
            <h6 class="card-title">{{ item.card_title }}</h6>
            <p class="card-text">
              <strong>{{ item.product }}</strong
              >{{ item.action }}
            </p>
          </div>
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

      content: [
        {
          id: 1,
          card_title: "Sản phẩm đã được thêm vào giỏ!",
          product: "Bánh Trung Thu",
          action: " đã được thêm vào giỏ của bạn.",
          clickState: true,
        },
        {
          id: 2,
          card_title: "Sản phẩm đã được thêm vào giỏ!",
          product: "Gạo Thơm Lài",
          action: " đã được thêm vào giỏ của bạn.",
          clickState: true,
        },
        {
          id: 3,
          card_title: "Sản phẩm đã được thêm vào giỏ!",
          product: "Bánh Trung Thu",
          action: " đã được thêm vào giỏ của bạn.",
          clickState: false,
        },
        {
          id: 4,
          card_title: "Sản phẩm đã được thêm vào giỏ!",
          product: "Bánh Trung Thu",
          action: " đã được thêm vào giỏ của bạn.",
          clickState: true,
        },
        {
          id: 5,
          card_title: "Sản phẩm đã được thêm vào giỏ!",
          product: "Bánh Trung Thu",
          action: " đã được thêm vào giỏ của bạn.",
          clickState: true,
        },
        {
          id: 6,
          card_title: "Sản phẩm đã được thêm vào giỏ!",
          product: "Bánh Trung Thu",
          action: " đã được thêm vào giỏ của bạn.",
          clickState: false,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./scss/ContentAccount2.scss";
</style>
