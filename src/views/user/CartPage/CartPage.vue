<template>
  <div id="CartPage">
      <TopHeader_Cart_Page></TopHeader_Cart_Page>
      <Header_Cart_Page></Header_Cart_Page>
      <Product_Cart_Page></Product_Cart_Page>
      <Footer></Footer>
      <LastFooter></LastFooter> 
  </div>
</template>

<script>
import TopHeader_Cart_Page from "../../../components/TopHeader_Cart_Page/TopHeader_Cart_Page.vue";
import Header_Cart_Page from "../../../components/Header_Cart_Page/Header_Cart_Page.vue";
import Product_Cart_Page from "../../../components/Product_Cart_Page/Product_Cart_Page.vue";
import Footer from "../../../components/Footer/Footer.vue";
import LastFooter from "../../../components/Footer/LastFooter.vue";
export default {
  name: 'CartPage',
  data(){
    return {
       
    }
  },
  components: {
   TopHeader_Cart_Page,
    Header_Cart_Page,
    Product_Cart_Page,
    Footer,
    LastFooter,
  }
}
</script>
<style>

</style>