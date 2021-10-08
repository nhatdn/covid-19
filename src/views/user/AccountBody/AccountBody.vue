<template>
  <div class="container-fluid" style="margin: 0px; padding: 0px;">
  <FixedMainHeader></FixedMainHeader>
    <div class="container">
      <div class="row">
      
      <SidebarAccount></SidebarAccount>
      <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
    <LastFooter></LastFooter>
  </div>
</template>

<script>

import FixedMainHeader from "../../../components/FixedMainHeader/FixedMainHeader.vue";
import SidebarAccount from "../../../components/AccountBody/SidebarAccount/SidebarAccount.vue";
import Footer from "../../../components/Footer/Footer.vue";
import LastFooter from "../../../components/Footer/LastFooter.vue";

export default {
  name: 'App',
  data(){
    return {

    } 
  },
  components: {
    SidebarAccount,
    FixedMainHeader,
    Footer,
    LastFooter,
  }
}
</script>
<style>
</style>