<template>
  <div id="CartPage">
      <Header_Cart_Page></Header_Cart_Page>
      <Product_Cart_Page></Product_Cart_Page>
  </div>
</template>

<script>
import Header_Cart_Page from "../../../components/Header_Cart_Page/Header_Cart_Page.vue";
import Product_Cart_Page from "../../../components/Product_Cart_Page/Product_Cart_Page.vue";
export default {
  name: 'CartPage',
  data(){
    return { 
       
    }
  },
  components: {   
    Header_Cart_Page,
    Product_Cart_Page,
  }
}
</script>
<style>

</style>