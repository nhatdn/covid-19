<template>
  <div class="Order">
    <form class="order">
        <h2 class="text-uppercase order__title">
            Đơn hàng của bạn
        </h2>
        <div class="mb-3 order__item">
            <table class="table table-striped">
                <thead class="text-uppercase order__head">
                    <tr>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Tạm tính</th>
                    </tr>
                </thead>
                <tbody class="order__body">
                    <tr v-for="(item,index) in cart" :key="index">
                        <th scope="row">{{item.name}}</th>
                        <td class="orange">{{ format(item.cost * item.count)}}</td>
                    </tr>
            </tbody>
            <tfoot class="order__footer">
                <tr>
                    <th scope="col">Tổng cộng:</th>
                    <th class="orange" scope="col">{{ format(totalPrice) }} </th>
                </tr>
            </tfoot>
        </table>                                                    
        </div>
        <div class="mb-3 form-check order__item">
            <h2 class="order__sub">
                PHƯƠNG THỨC THANH TOÁN
            </h2>
            <div class="form-check order__item--content">
                <input class="form-check-input order__item--input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label order__item--label" for="flexRadioDefault1">
                    Thanh toán khi nhận hàng
                </label>
            </div>
            <div class="form-check order__item--content">
                <input class="form-check-input order__item--input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label order__item--label" for="flexRadioDefault2">
                    Paypal
                </label>
            </div>
        </div>
        <button type="submit" class="btn order__btn">Thanh Toán</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Order',
    data() {
        return {
            cart: []
        }
    },
    methods: {
    format(number) {
      return new Intl.NumberFormat("de-DE", {style: "currency", currency: "VND",}).format(number); 
    },
  },
  created() {
     this.cart = JSON.parse(sessionStorage.getItem('cart'));
  },
   computed: {
    totalPrice() {
      var money = 0;
      this.cart.forEach(item =>{
          money += (item.cost * item.count);
      })
      return money;
    },
  },
}
</script>


<style scoped lang="scss">
@import "Order.scss";
</style>