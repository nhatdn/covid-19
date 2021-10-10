<template>
  <div class="Product_Cart_Page">
    <div class="container">
      <div class="row">
        <div class="col product d-flex">
          <div class="product__items">
            <input class="product__input" type="checkbox" name="product-check" id="product-check" />
          </div>
          <div class="product__items">
            <h3 class="product__title">Sản phẩm</h3>
          </div>
          <div class="product__items">
            <h3 class="product__title">Đơn giá</h3>
          </div>
          <div class="product__items">
            <h3 class="product__title">Số lượng</h3>
          </div>
          <div class="product__items">
            <h3 class="product__title">Số tiền</h3>
          </div>
          <div class="product__items">
            <h3 class="product__title">Thao tác</h3>
          </div>
        </div>
      </div>

        <div class="row" v-for="(item,index) in listCart" :key="index">
            <div class="col product d-flex align-items-center">
            <div class="product__item">
                <input class="product__input" type="checkbox" name="product-check" id="product-check" />
            </div>
            <div class="product__item d-flex align-items-center">
                <img class="product__item--img" :src="require(`../../assets/${item.imgUrl[0]}`)" alt="sanpham_1">
                <p class="product__item--para">
                    {{item.name}}
                </p>
            </div>
            <div class="product__item">
                <p class="product__item--para">
                    {{item.cost}}đ
                </p>
            </div>
            <div class="product__item d-flex align-items-center justify-content-center">
                <a class="product__item--link" @click="listCart[index].count > 1 ? listCart[index].count-- : listCart[index].count" ><b-icon class="product__item--icon" icon="dash"></b-icon></a>
                <p class="product__item--number">{{item.count}}</p>
                <a class="product__item--link" @click="listCart[index].count++"><b-icon class="product__item--icon" icon="plus"></b-icon></a>
            </div>
            <div class="product__item">
                <p class="product__item--para"><span class="product__item--orange">{{item.count * item.cost}}đ</span></p>
            </div>
            <div class="product__item">
                <a class="product__item--link text-decoration-none" @click="deleteProduct(item)">Xóa</a>
            </div>
            </div>
        </div>
        <div class="row">
        <div class="col product-total d-flex align-items-center">
          <div class="product-total__item d-flex align-items-center">
            <input class="product-total__input" type="checkbox" name="product-total" id="product-total"/>
            <label class="product-total__label " for="product-total">Chọn tất cả</label>
          </div>
          <div class="product-total__item">
            <a class="product-total__link text-decoration-none" href="">Xóa</a>
            <a class="product-total__link product-total__item--orange text-decoration-none product__item--orange" href="">Lưu Đơn Hàng</a>
          </div>
          <div class="product-total__item">
            <p class="product-total__secondary ">
                Tổng Thanh Toán: 
                <span class="product-total__item--orange"> {{ totalPrice }}đ</span>
            </p>
          </div>
          <div class="product-total__item text-center" style="cursor: pointer;">
            <a class="product-total__buy text-decoration-none"  @click.prevent="routePaytoCart()" >Mua ngay</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product_Cart_Page",
  data: function() {
    return {
      listCart: []
    }
  },
  created() {
    this.listCart = JSON.parse(sessionStorage.getItem('cart'));
  },
  computed: {
    totalPrice() {
      var money = 0;
      this.listCart.forEach(item =>{
          money += (item.cost * item.count);
      })
      return money;
    },
  },
  watch: {
    listCart: {
      handler() {
        sessionStorage.setItem('cart',JSON.stringify(this.listCart));
      },
      deep: true
    }
  },
  methods: {
    deleteProduct(product) {
      const index = this.listCart.indexOf(product);
      if (index > -1) {
        this.listCart.splice(index, 1);
        sessionStorage.setItem('cart',JSON.stringify(this.listCart));
      }
    },
    routePaytoCart(){
        this.$router.push("/home/thu-tuc-thanh-toan");
    }
  }
};
</script>
<style scoped lang="scss">
@import "Product_Cart_Page.scss";
</style>

