<template>
  <div id="CheckoutPage">
      <TopHeader_Cart_Page></TopHeader_Cart_Page>
      <Header_Checkout_Page></Header_Checkout_Page>
      <Body_Checkout></Body_Checkout>
      <Footer></Footer>
      <LastFooter></LastFooter> 
  </div>
</template>

<script>
import TopHeader_Cart_Page from "../../../components/TopHeader_Cart_Page/TopHeader_Cart_Page.vue";
import Header_Checkout_Page from "../../../components/Header_Checkout_Page/Header_Checkout_Page.vue";
import Body_Checkout from "../../../components/Body_Checkout/Body_Checkout.vue";
import Footer from "../../../components/Footer/Footer.vue";
import LastFooter from "../../../components/Footer/LastFooter.vue";
export default {
  name: 'CheckoutPage',
  data(){
    return {
       
    }
  },
  components: {
    TopHeader_Cart_Page,
    Header_Checkout_Page,
    Body_Checkout,
    Footer,
    LastFooter,
  }
}
</script>
<style>

</style>