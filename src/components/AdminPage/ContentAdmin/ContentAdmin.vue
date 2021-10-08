<template>
  <div class="ContentAdmin">
    <div class="overview">
      <div
        class="overview__box"
        v-for="(item, index) in admin_menu"
        :key="index"
      >
        <div class="overview__box--left">
          <h3 class="overview__box--number">{{ item.amount }}</h3>
          <p class="overview__box--text">{{ item.title }}</p>
        </div>
        <div class="overview__box--icon">
          <b-icon :icon="item.icon"></b-icon>
        </div>
      </div>
    </div>

    <div class="second-row">
      <div class="box">
        <div class="box__title d-flex justify-content-between mb-2">
          <h4 class="box__heading d-flex align-items-center">Đơn hàng mới</h4>
          <button class="box__btn">Xem tất cả</button>
        </div>
        <div class="box__table">
          <table class="table">
            <thead class="box__table--heading border-top border-bottom">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Tên tài khoản</th>
                <th scope="col">Số sản phẩm</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in order_menu" :key="index">
                <th scope="row">{{ item.id }}</th>
                <td>{{ item.account }}</td>
                <td>{{ item.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="box">
        <div class="box__title d-flex justify-content-between mb-2">
          <h4 class="box__heading d-flex align-items-center">Bình luận mới</h4>
          <button class="box__btn">Xem tất cả</button>
        </div>

        <div
          class="box__comment-container"
          v-for="(item, index) in comment_menu"
          :key="index"
        >
          <span>{{ comment_menu.product_name }}</span>
          <div class="box__product d-flex align-items-center py-2">
            <img class="box__product--img" src="" alt="" srcset="" />
            <h5 class="box__product--name">Thịt lợn siêu nạc</h5>
          </div>
          <div class="box__comment">
            <div class="box__comment--up d-flex justify-content-between">
              <h6 class="box__comment--name pb-2">Lê Hữu An</h6>
              <div class="box__comment--stars">
                <span class="box__comment--star"
                  ><b-icon icon="star"></b-icon
                ></span>
                <span class="box__comment--star"
                  ><b-icon icon="star"></b-icon
                ></span>
                <span class="box__comment--star"
                  ><b-icon icon="star"></b-icon
                ></span>
                <span class="box__comment--star"
                  ><b-icon icon="star"></b-icon
                ></span>
                <span class="box__comment--star"
                  ><b-icon icon="star"></b-icon
                ></span>
              </div>
            </div>
            <p class="box__comment--comment">Thịt tươi và ngon quá!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderAdmin",
  data: function () {
    return {
      clicked: 0,
      admin_menu: [
        // { amount: 12546, icon: "house-door-fill", title: "Dashboard" },
        { amount: 46215, icon: "people-fill", title: "Khách hàng" },
        { amount: 615, icon: "person-circle", title: "Tài khoản" },
        { amount: 1458, icon: "basket2-fill", title: "Đơn hàng" },
        { amount: 12, icon: "file-earmark-text-fill", title: "Khiếu nại" },
        { amount: 486, icon: "newspaper", title: "Tin tức" },
        { amount: 5546, icon: "chat-right-text", title: "Bình luận" },
      ],
      order_menu: [
        { id: "HD1220", account: "user2910", amount: 10 },
        { id: "HD1220", account: "user2910", amount: 10 },
        { id: "HD1220", account: "user2910", amount: 10 },
        { id: "HD1220", account: "user2910", amount: 10 },
        { id: "HD1220", account: "user2910", amount: 10 },
      ],
      comment_menu: [
        {
          product_name: "Thịt heo siêu nạc",
          product_image: "",
          product_comments: [
            { name: "Lê Hữu An", rating: 5, content: "Thịt tươi và ngon quá!" },
            {
              name: "Nguyễn Thị Hai",
              rating: 5,
              content: "Thịt tươi và ngon quá!",
            },
          ],
        },
        {
          product_name: "Gạo ST21 A An",
          product_image: "",
          product_comments: [
            { name: "Trần Thanh Hùng", rating: 5, content: "Gạo dẻo, ngon" },
            // {name: 'Nguyễn Thị Hai', rating: 5, content:'Thịt tươi và ngon quá!'},
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./scss/ContentAdminDashboard"
</style>
