<template>
<div class="RelatedProduct">
    <div class="container-xl">
        <div class="related-product">
            <div class="img-related-product">
                <img src="../../../../assets/products/relate-products/gao-thom-a-an-st21-tui-5kg-202103040806043940_300x300-1.jpg" alt="">
            </div>
            <h5 class="product-name">Gạo ST21 A An (5kg)</h5>
            <span class="product-price">₫100.000</span>
            <div class="product-picker-handles">
                <div class="picker-handles d-flex">
                    <div class="number-down-wrap">
                        <a href="">
                            <span>
                                <img class="icon-reduce" src="../../../../assets/products/icon-reduce.png" alt="">
                            </span>
                        </a>
                    </div>
                    <div class="number-picker-input-wrap">
                        <span class="number-picker-input">
                            <input type="text" min="1" max="5" value="1" step="1" autocomplete="off" height="100%">
                        </span>
                    </div>
                    <div class="number-up-wrap">
                        <a href="">
                            <span>
                                <img class="icon-add" src="../../../../assets/products/icon-add.png" alt="">
                            </span>
                        </a>
                    </div>
                </div>
                <div class="add-to-cart">
                    <a href="" class="d-flex">
                        <img src="../../../../assets/products/cart.png" alt="" class="cart">
                        <p>Thêm vào giỏ</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>    
</template>
<script>
export default {
    name: 'RelatedProduct'
}
</script>
<style scoped>
.related-product {
    text-align: center;
}
.related-product img {
    max-width: 100%;
}
.related-product h5 {
    font-size: 16px;
    line-height: 24px;
}
.related-product span {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ED4D27;
}
.product-picker-handles {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.picker-handles {
    background: #F5F5F5;
    position: relative;
    max-width: 70%;
    align-items: center;
    justify-content: space-evenly;
    padding:5px 0;
}
.icon-reduce {
    position: absolute;
    top: 10px;
    left: 10px;
}
.icon-add {
    position: absolute;
    top: 14px;
    right: 12px;
}
.number-picker-input-wrap {
    width: 30%;
}
.number-picker-input input {
    border: none;
    outline: none;
    max-width: 100%;
    text-align: center;
}
.add-to-cart a p {
    display: none;
    width: 100%;
}
/* Max Width : 993px */
@media (max-width: 993px) {
    .row-title {
        padding-bottom: 15px;
    }
    .RelateProducts {
        padding: 15px 0;
    }
}
/* Max Width : 576px */
@media (max-width: 576px) {
    .product-picker-handles {
        display: block;
    }
    .picker-handles {
        max-width: 100%;
    }
    .icon-reduce {
        left: 25px;
    }
    .icon-add {
        right: 25px;
    }   
    .add-to-cart a {
        border: 1px solid #EE4D2D;
        background: #FFEEE8;
        border-radius: 5px;
        margin-top: 10px;
        padding: 5px 0;
        align-items: center;
    }
    .add-to-cart a img {
        display: none;
    }
    .add-to-cart a p {
        display: unset;
        margin: 0;
        padding: 0 25px;
        font-weight: bold;
        font-size: 14px;
        color: #EE4D2D;

    }
}
/* Max Width : 446px */
@media (max-width: 446px) {
    .add-to-cart a p {
        padding: 0;
        }
}
/* Max Width : 428px */
@media (max-width: 428px) {
    .icon-reduce {
        left: 13px;
    }
    .icon-add {
        right: 15px;
    }
}
/* Max Width : 352px */
@media (max-width: 352px) {
    .icon-reduce {
        left: 8px;
    }
    .icon-add {
        right: 10px;
    }
    .add-to-cart a {
        padding: 2px 0;
    }
    .add-to-cart a p {
        font-size: 12px;
    }
}
/* Max Width : 300px */
@media (max-width: 300px) {
    .icon-reduce {
        left: 5px;
    }
    .icon-add {
        right: 6px;
    }
}
</style>