<template>
  <div id="HomePage">
        <FixedMainHeader></FixedMainHeader>
        <router-view></router-view>
        <Footer></Footer>
        <LastFooter></LastFooter>
        <Messenger></Messenger>
        <Contact></Contact>
  </div>
</template>
<script>

import FixedMainHeader from "../../../components/FixedMainHeader/FixedMainHeader.vue";
import Footer from "../../../components/Footer/Footer.vue";
import LastFooter from "../../../components/Footer/LastFooter.vue";
import Messenger from "../../../components/Messenger/Messenger.vue";
import Contact from "../../../components/Contact/Contact.vue";
import md5 from 'md5';
import { getCookie } from "../../../handle/index.js"
export default { 
  name: 'HomePage',
  components: {
    FixedMainHeader,
    Footer,
    LastFooter,
    Messenger,
    Contact,
  },  
  created() {
    console.log("check");
      if(!(getCookie(md5("username")) && getCookie(md5("password"))) && !(localStorage.getItem(md5("username")) && localStorage.getItem(md5("password")))) {
           this.$router.push('/');
      }
  }
}
</script>
<style>

</style>