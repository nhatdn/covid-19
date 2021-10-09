<template>
    <div class="RelateProducts">
        <div class="container">
            <div class="row row-title">
                <h3>Sản phẩm liên quan</h3>
            </div>
            <div class="row row-relate-products">
                <splide :options="loop">
                    <splide-slide>
                        <a href="">
                            <RelatedProduct></RelatedProduct>
                        </a>
                    </splide-slide>
                    <splide-slide>
                        <a href="">
                            <RelatedProduct></RelatedProduct>
                        </a>
                    </splide-slide>
                    <splide-slide>
                        <a href="">
                            <RelatedProduct></RelatedProduct>
                        </a>
                    </splide-slide>
                    <splide-slide>
                        <a href="">
                            <RelatedProduct></RelatedProduct>
                        </a>
                    </splide-slide>
                </splide>
            </div>
        </div>
    </div>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import RelatedProduct from '../RelatedProducts/RelatedProduct.vue';
export default {
    components: { RelatedProduct },
    name: 'RelateProducts',
    component: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            loop: {
                type   : 'loop',
                perPage: 4,
                perMove: 1,
                breakpoints : {
                    '1200': {
                        perPage:3,
                    },
                    '993': {
                        perPage:2,
                    }
                }
            }
        }
    }
}
</script>
<style>
.RelateProducts {
    background: #FFFFFF;
    padding: 30px 0 15px;
    margin-top: 15px;
    font-family: 'Open Sans';
}
.row-title h3 {
    padding-bottom: 15px;
    font-weight: 600;
}
.row-relate-products a {
    text-decoration: none;
    color: unset;
}
div#splide04 {
    padding: 0 0 50px;
}
button.splide__arrow.splide__arrow--prev {
    transform: translateX(-70%);
}
button.splide__arrow.splide__arrow--next {
    transform: translateX(70%);
}
</style>