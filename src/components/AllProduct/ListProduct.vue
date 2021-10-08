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
            <a href="" class="select-input__link text-decoration-none"
              >giá thấp đến cao</a
            >
            <a href="" class="select-input__link text-decoration-none"
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
      <div class="col-xxl-3 col-md-4 col-sm-3" v-for="(product, index) in products" :key="index">
        <div class="home-product__item">
          <div class="home-product__img">
            <a class="home-product__img--link" href="">
              <img
                class="home-product__img--title"
                :src="require(`../../assets/${product.imgUrl}`)" 
                alt=""
              />
            </a>
          </div>
          <div class="home-product__content">
            <span class="home-product__content--title">{{ product.name }}</span>
          </div>
          <div class="home-product__price">
            <span class="home-product__price--cg">{{product.cost}}</span>
          </div>
          <div class="home-product__category">
            <button class="home-product__category--btn">-</button>
            <span class="home-product__category--count">1</span>
            <button class="home-product__category--btn">+</button>
            <div class="home-product__icon">
              <b-icon icon="cart4" class="home-product__icon--icons"></b-icon>
            </div>
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
export default {
  name: "AllProduct",
  data() {
    return {
      products: []
    }
  },
  methods: {
    banhKeo() {
      this.products = [
        {
          name: "Bánh Cosy Marie",
          cost: "46.000đ",
          imgUrl: "productsImage/banhKeo/banh/banhQuy.jpg"
        },
        {
          name: "Choco-Pie Tình",
          cost: "49.000đ",
          imgUrl: "productsImage/banhKeo/banh/chocoPie.jpg"
        },
        {
          name: "Oreo",
          cost: "12.000đ",
          imgUrl: "productsImage/banhKeo/banh/socolate.jpg"
        },
        {
          name: "Choco-Pie Dark",
          cost: "49.000đ",
          imgUrl: "productsImage/banhKeo/banh/Orion.jpg"
        },
        {
          name: "Kẹo sữa Sumika",
          cost: "20.000đ",
          imgUrl: "productsImage/banhKeo/keo/keoBo.jpg"
        },
        {
          name: "Kẹo Chupa Chups",
          cost: "32.000đ",
          imgUrl: "productsImage/banhKeo/keo/keoDeo.jpg"
        },
        {
          name: "Kẹo Migita",
          cost: "8.000đ",
          imgUrl: "productsImage/banhKeo/keo/keoMe.jpg"
        },
        {
          name: "Kẹo Galatine",
          cost: "59.000đ",
          imgUrl: "productsImage/banhKeo/keo/Galatine.jpg"
        }
      ]
    },
    luongThuc(){
      this.products = [
        {
          name: "Gạo Hoa Lúa",
          cost: "46.000đ",
          imgUrl: "productsImage/luongThuc/gaoTe/gaoHoaLua.jpg"
        },
        {
          name: "Gạo 8 Thơm",
          cost: "49.000đ",
          imgUrl: "productsImage/luongThuc/gaoTe/gaoThom.jpg"
        },
        {
          name: "Gạo Dẻo",
          cost: "12.000đ",
          imgUrl: "productsImage/luongThuc/gaoTe/gaoThomDeo.jpg"
        },
        {
          name: "Gạo thơm A An",
          cost: "49.000đ",
          imgUrl: "productsImage/luongThuc/gaoTe/Ann.jpg"
        },
        {
          name: "Khoai Lang",
          cost: "20.000đ",
          imgUrl: "productsImage/luongThuc/khoai/khoaiLang.jpg"
        },
        {
          name: "Khoai Mỡ",
          cost: "32.000đ",
          imgUrl: "productsImage/luongThuc/khoai/khoaiMo.jpg"
        },
        {
          name: "Khoai Môn",
          cost: "8.000đ",
          imgUrl: "productsImage/luongThuc/khoai/khoaiMon.jpg"
        },
        {
          name: "Bắp Mỹ Loại 1",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/ngo/bapMy.jpg"
        },
        {
          name: "Bắp Mỹ Loại 2",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/ngo/bapMy1.jpg"
        },
        {
          name: "Bắp Nếp",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/ngo/bapTrang.jpg"
        },
        {
          name: "Ngũ Cốc Huyết Rồng",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/nguCocCacLoai/nguCoc.jpg"
        },
        {
          name: "Ngũ Cốc Oats",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/nguCocCacLoai/nguCocDinhDuong.jpg"
        },
        {
          name: "Ngũ Cốc Việt Đài",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/nguCocCacLoai/nguCocDinhDuong1.jpg"
        },
        {
          name: "Sắn Đà Nẵng",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/khoaiSan.png"
        },
        {
          name: "Sẵn Mì",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon.jpg"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon1.jpg"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/cacLoaiBot/botGao.png"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/cacLoaiBot/botMy.png"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/cacLoaiBot/botNang.png"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon1.jpg"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon1.jpg"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon1.jpg"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon1.jpg"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon1.jpg"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon1.jpg"
        },
        {
          name: "Sẵn Hà Nội",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon1.jpg"
        },
      ]
    },
    created() {
      console.log("aaa");
       
      
    }
  }
};
</script>


<style scoped lang="scss">
@import "ListProduct.scss";
</style>