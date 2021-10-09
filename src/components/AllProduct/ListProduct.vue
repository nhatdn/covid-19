<template>
  <div class="ListProduct">
    <div class="home-filter">
      <span class="home-filter__laber hide-on-mobil-tablet">Sắp Xếp Theo</span>
      <b-button class="btn btn-active" variant="light">Phổ Biến</b-button>
      <button class="btn">Mới Nhất</button>
      <button class="btn">Bán Chạy</button>
      <div class="select-input">
        <label class="select-input__label">Giá</label>
        <b-icon
          class="chevron-down"
          icon="chevron-down"
          id="chevron-down"
        ></b-icon>
        <ul class="select-input__list">
          <li class="select-input__item">
            <a @click.prevent="sortProductionDown()" class="select-input__link text-decoration-none"
              >giá thấp đến cao</a
            >
            <a @click.prevent="sortProductionUp()" class="select-input__link text-decoration-none"
              >giá cao đến thấp</a
            >
          </li>
        </ul>
      </div>
      <div class="home-filter__page-control">
        <a href="" class="home-filter__page-btn">
          <b-icon
            class="chevron-left"
            icon="chevron-left"
            id="chevron-left"
          ></b-icon>
        </a>
        <a href="" class="home-filter__page-btn">
          <b-icon
            class="chevron-right"
            icon="chevron-right"
            id="chevron-right"
          ></b-icon>
        </a>
      </div>
    </div>
    <!-- <router-view></router-view> -->
    <div
      class="home-product d-xl-flex flex-wrap d-sm-flex justify-content-center"
    >
      <div class="col-xxl-3 col-md-4 col-sm-3" v-for="(product, index) in productsLocal" :key="index">
        <div class="home-product__item">
          <div class="home-product__img">
            <a class="home-product__img--link" @click="routerProductDetail(product)">
              <img
                class="home-product__img--title"
                :src="require(`../../assets/${product.imgUrl[0]}`)" 
                alt=""
              />
            </a>
          </div>
          <div class="home-product__content">
            <span class="home-product__content--title">{{ product.name }}</span>
          </div>
          <div class="home-product__price">
            <span class="home-product__price--cg">{{product.cost}}đ</span>
          </div>
          <div class="home-product-item__top">
            <span class="home-product-item__top-precent">Top</span>
          </div>
        </div>
      </div>
    </div>
    <ul class="pagination">
      <li class="pagination-item">
        <a href="" class="home-filter__page-btn">
          <b-icon
            class="chevron-left"
            icon="chevron-left"
            id="chevron-left"
          ></b-icon>
        </a>
      </li>
      <li class="pagination-item">
        <a href="" class="pagination-item__link pagination-item__link--active"
          >1</a
        >
      </li>
      <li class="pagination-item">
        <a href="" class="pagination-item__link">2</a>
      </li>
      <li class="pagination-item">
        <a href="" class="pagination-item__link">3</a>
      </li>
      <li class="pagination-item">
        <a href="" class="pagination-item__link">4</a>
      </li>
      <li class="pagination-item">
        <a href="" class="pagination-item__link">5</a>
      </li>
      <li class="pagination-item">
        <a href="" class="home-filter__page-btn">
          <b-icon
            class="chevron-right"
            icon="chevron-right"
            id="chevron-right"
          ></b-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { bus } from "../../main.js";
export default {
  name: "AllProduct",
  data() {
    return {
      productsLocal: [],
      quatity : []
    }
  },
  computed: mapState(['products']),
  created() {
    this.productsLocal = this.products.products;
  },
  mounted(){
    bus.$on('sendBanhKeo', (product) => {
        this.productsLocal = product;
    })
    bus.$on('sendLuongThuc', (product) => {
        this.productsLocal = product;
    })
    bus.$on('sendGiaVi', (product) => {
        this.productsLocal = product;
    })
    bus.$on('nhuYeuPhamKhac', (product) => {
        console.log(product);
        this.productsLocal = product;
    })
    bus.$on('thucPhamDongGoi', (product) => {
        this.productsLocal = product;
    })
    bus.$on('thucPhamTuoiSong', (product) => {
        this.productsLocal = product;
    })
  },
  methods: {
    sortProductionDown() {
      this.productsLocal = this.productsLocal.sort( (a, b) => a.cost - b.cost);
      console.log(this.productsLocal);
    },
    sortProductionUp() {
      this.productsLocal = this.productsLocal.sort( (a, b) => b.cost - a.cost);
      console.log(this.productsLocal);
    },
    addToCard(){

    },
    increaseQuatity(){
        this.quatity +=1;
    },
    reduceQuatity(){
        if(this.quatity > 1) {
          this.quatity -= 1;
        }
    },
    routerProductDetail(product) {
      sessionStorage.setItem('product-detail', JSON.stringify(product));
      this.$router.push('/home/product/product-detail');
    }
  }
};
</script>

<style scoped lang="scss">
@import "ListProduct.scss";
</style>