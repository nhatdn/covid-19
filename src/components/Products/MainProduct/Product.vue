<template>
    <div class="Product">
        <div class="container">
            <div class="row">
                <ul class="breadcrumb">
                    <li>
                        <a href="" title="Trang chủ">
                            Trang chủ
                        </a>
                        <img src="../../../assets/products/arrow-to-right.png" alt="">
                    </li>
                    <li>
                        <a href="">
                            Gạo tẻ
                        </a>
                        <img src="../../../assets/products/arrow-to-right.png" alt="">
                    </li>
                    <li>
                        <a href="">
                            Gạo ST21 A An
                        </a>
                    </li>
                </ul>
            </div>
            <div class="row row-product">
                <div class="col-md-5 images-product">
                    <div class="main-image">
                        <splide :options="primarySlider">
                            <splide-slide>
                                <img :src="require(`../../../assets/${productDetail.imgUrl}`)" alt="">
                            </splide-slide>
                        </splide>
                    </div>
                    <div class="secondary-images">
                        <splide :options="secondarySlider">
                            <splide-slide>
                                <img :src="require(`../../../assets/${productDetail.imgUrl}`)" alt="">
                            </splide-slide>
                            <splide-slide>
                                <img :src="require(`../../../assets/${productDetail.imgUrl}`)" alt="">
                            </splide-slide>
                            <splide-slide>
                                <img :src="require(`../../../assets/${productDetail.imgUrl}`)" alt="">
                            </splide-slide>
                            <splide-slide>
                                <img :src="require(`../../../assets/${productDetail.imgUrl}`)" alt="">
                            </splide-slide>
                        </splide>
                    </div>
                </div>
                <div class="col-md-7 info-product">
                    <h3 class="product-name">
                        {{productDetail.name}}
                    </h3>
                    <div class="product-rate d-flex  justify-content-between">
                        <div class="col-md-4 col-sm-4 col-4 col-rate-point d-flex">
                            <span class="rate-point">5.0</span>
                            <div class="container-star">
                                <ul class="d-flex text-decoration-none">
                                    <li v-for="item in 5" :key="item"><img src="../../../assets/products/star.png" alt="" class="star"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-4 col-reviews">
                            <a href="" class="reviews d-flex text-decoration-none">
                                <span>3</span>
                                <p>Đánh giá</p>
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-4 col-4 col-sold-out d-flex">
                                <span>5</span>
                                <p>Đã bán</p>
                        </div>
                    </div>
                    <div class="row hsd">
                        <h6 class="section-title">Hạn sử dụng 6 tháng</h6>
                    </div>
                    <div class="row section-price">
                        <span>{{productDetail.cost}}đ</span>
                    </div>
                    <div class="product-amount d-flex align-items-center justify-content-between">
                        <h6 class="col-2 section-title">Số Lượng</h6>
                        <div class="col-3 section-content d-flex">
                            <div class="picker-handles d-flex">
                                <div class="number-down-wrap">
                                    <span style="cursor: pointer; padding-bottom: 3px; display:inline-block;"
                                    @click="handleCountProduct()"
                                    >
                                        <img class="icon-reduce" src="../../../assets/products/icon-reduce.png" alt="">
                                    </span>
                                </div>
                                <div class="number-picker-input-wrap">
                                    <span class="number-picker-input">
                                        <input type="text" v-model="countProduct" step="1" autocomplete="off" height="100%">
                                    </span>
                                </div>
                                <div class="number-up-wrap">
                                        <span style="cursor: pointer; padding-bottom: 3px; display:inline-block;"
                                        @click="countProduct++"
                                        >
                                            <img class="icon-add" src="../../../assets/products/icon-add.png" alt="">
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 in-stock align-items-center">
                                <span>20</span>
                                <p>Sản phẩm có sẵn</p>
                        </div>
                    </div>
                    <div class="cart-concern d-flex justify-content-around">
                        <div class="btn-add-to-cart-wrap" @click="addToCart()">
                            <a  class="d-flex">
                                <img src="../../../assets/products/cart.png" alt="">
                                <p>Thêm vào giỏ</p>
                           </a>
                        </div>
                        <div class="btn-buy-now-wrap">
                            <a href="">
                                Mua ngay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    name: 'Product',
    components: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            countProduct: 1,
            primarySlider: {
                rewind     : true,                
                type       : 'fade',
                fixedHeight: 400,
                heightRatio: 0.5,
                pagination : false,
                arrows     : true,
                cover      : true,   
                breakpoints : {
                    '993': {
                        fixedHeight : 300,
                    },
                    '767': {
                        fixedHeight: 400,
                    } 
                }    
            },
            secondarySlider: {
                rewind      : true,
                fixedWidth  : 100,
                fixedHeight : 64,
                isNavigation: true,
                gap         : 10,
                focus       : 'center',
                pagination  : false,
                cover       : true,
                arrows      : true,
            },
            productDetail: {}
        }
    },
    created() {
        const product = JSON.parse(sessionStorage.getItem('product-detail')) || {
          name: "Gạo 8 Thơm",
          type: "luong-thuc",
          cost: 14000,
          imgUrl: "productsImage/luongThuc/gaoTe/gaoThom.jpg"
        }
        this.productDetail = product;
        console.log(this.productDetail);
    },
    methods: {
        handleCountProduct() {
            this.countProduct = this.countProduct > 2 ? --this.countProduct : 1;
            console.log(this.countProduct);
        },
        addToCart() {
           var cart = JSON.parse(sessionStorage.getItem('cart'));
           var check = true;
           if(cart?.length !=0 && cart != null) {
               cart = cart.map( item => {
                   if(item.name == this.productDetail.name){
                       item.count += this.countProduct;
                       check = false;
                   }
                   return item;
               })
           } 
            if(check)
            {
                if(cart == null) {
                    cart = []
                }
                cart.push({
                    ...this.productDetail,
                    ...{count : this.countProduct},
                });
            }
            sessionStorage.setItem('cart',JSON.stringify(cart));
        }    
    }
}

</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import "Product.scss";
</style>