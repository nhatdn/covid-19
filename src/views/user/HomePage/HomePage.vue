<template>
  <div id="HomePage">
        <FixedMainHeader></FixedMainHeader>
        
        <router-view></router-view>


        <!--  <Home></Home>-->
        <!--  <AllProduct></AllProduct> -->


        <Footer></Footer>
        <LastFooter></LastFooter>
        <Messenger></Messenger>
        <Contact></Contact>
  </div>
</template>
<script>
import FixedMainHeader from "../../../components/FixedMainHeader/FixedMainHeader.vue";


//import Home from "../../../components/Home/Home.vue";
//import AllProduct from "../../../components/AllProduct/AllProduct.vue";



import Footer from "../../../components/Footer/Footer.vue";
import LastFooter from "../../../components/Footer/LastFooter.vue";
import Messenger from "../../../components/Messenger/Messenger.vue";
import Contact from "../../../components/Contact/Contact.vue";
export default { 
  name: 'HomePage',
  components: {
    FixedMainHeader,
    
    //Home,
    //AllProduct,
    Footer,
    LastFooter,
    Messenger,
    Contact,
  }
}
</script>
<style>

</style>