<template>
  <div id="Page404">
    <TopbarAccount></TopbarAccount>
    <Body_404Page></Body_404Page>
    <Footer></Footer>
    <LastFooter></LastFooter> 
  </div>
</template>
<script>
import TopbarAccount  from "../../../components/FixedMainHeader/TopbarAccount/TopbarAccount.vue";
import Body_404Page from "../../../components/Body_404Page/Body_404Page.vue";
import Footer from "../../../components/Footer/Footer.vue";
import LastFooter from "../../../components/Footer/LastFooter.vue";

export default { 
  name: 'Page404',
  components: {
    TopbarAccount,
    Body_404Page,
    Footer,
    LastFooter,
  }
}
</script>
<style>

</style>