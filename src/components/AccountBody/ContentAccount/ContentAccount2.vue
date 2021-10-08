<template>
  <div class="ContentAccount col-lg-9">
    <div class="content border border-secondary border-2">
      <form class="content__form">
        <h4 class="content__form--text">Lịch sử mua hàng</h4>
        <div class="history">
          <ul>
            <li v-for="(item, index) in history_menu" :key="index">
              <div
                v-on:click="item.display = !item.display"
                class="
                  history__overview
                  d-flex
                  justify-content-around
                  p-2
                  border-top border-bottom
                "
              >
                <span class="history__overview--bill"
                  >Đơn số: {{ item.bill_id }}</span
                ><span class="history__overview--state"
                  >Tình trạng: {{ item.state }}</span
                >
              </div>
              <div
                v-if="item.display"
                class="history__detail animate__animated animate__fadeIn"
              >
                <transition name="slide-fade">
                  <table class="table table-light table-striped">
                    <thead class="table-danger">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Tổng tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(product, index) in item.products"
                        :key="index"
                      >
                        <th scope="row">{{ index + 1 }}</th>

                        <td>{{ product.name }}</td>
                        <td>{{ product.quantity + " " + product.unit }}</td>
                        <td>{{ formatPrice(product.price) }}</td>
                        <td>{{ formatPrice(product.quantity * product.price) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </transition>
              </div>
            </li>
          </ul>
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
      history_menu: [
        {
          cus_id: "D0013",
          bill_id: "01",
          state: "Đã giao",
          display: true,
          products: [
            {
              name: "Gạo thơm lài",
              quantity: 2,
              unit: "kg",
              price: "20000",
            },
            {
              name: "Mì tôm Hảo Hảo",
              quantity: 2,
              unit: "thùng",
              price: "65000",
            },
            {
              name: "Muối",
              quantity: 5,
              unit: "gói",
              price: "5000",
            },
            {
              name: "Bánh Trung Thu",
              quantity: 3,
              unit: "bịch",
              price: "13000",
            },
          ],
        },
        {
          cus_id: "D0013",
          bill_id: "02",
          state: "Đã giao",
          display: false,
          products: [
            {
              name: "Gạo thơm lài",
              quantity: 2,
              unit: "kg",
              price: "20000",
            },
          ],
        },
        {
          cus_id: "D0013",
          bill_id: "03",
          state: "Đã giao",
          display: false,
          products: [
            {
              name: "Muối",
              quantity: 5,
              unit: "gói",
              price: "5000",
            },
            {
              name: "Bánh Trung Thu",
              quantity: 3,
              unit: "bịch",
              price: "13000",
            },
          ],
        },
        {
          cus_id: "D0013",
          bill_id: "04",
          state: "Đã giao",
          display: false,

          products: [
            {
              name: "Gạo thơm lài",
              quantity: 2,
              unit: "kg",
              price: "20000",
            },
            {
              name: "Bánh Trung Thu",
              quantity: 3,
              unit: "bịch",
              price: "13000",
            },
          ],
        },
      ],
    };
  },
  methods: {
    formatPrice(price){
      let number = price;
      return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number))
  }
  },
  computed: {},
};
</script>

<style scoped lang="scss">
@import "./scss/ContentAccount2.scss";
</style>
