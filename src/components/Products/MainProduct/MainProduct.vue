<template>
  <div id="mainProduct">      
    <Product></Product>
    <RelatedProducts></RelatedProducts>
    <InforProduct></InforProduct>
    <ProductReviews></ProductReviews>
  </div>
</template>

<script>
import Product from "../MainProduct/Product.vue"
import RelatedProducts from "./RelatedProducts/RelatedProducts.vue"
import InforProduct from '../MainProduct/InforProduct/InfoProduct.vue'
import ProductReviews from '../MainProduct/ProductReviews/ProductReviews.vue'
export default {
  name: 'MainProduct',
  components: {
    Product,
    RelatedProducts,
    InforProduct,
    ProductReviews
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
#app {
  min-height: 100%;
}
body {
  min-height: 100%;
}
#mainProduct {
  background: #F5F5F5;
}
.productPage {
  margin-top: 45px;
  margin-bottom: 20px;
}
</style>