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

export default { 
  name: 'HomePage',
  components: {
    FixedMainHeader,
    Footer,
    LastFooter,
    Messenger,
    Contact,
  }
}
</script>
<style>

</style>