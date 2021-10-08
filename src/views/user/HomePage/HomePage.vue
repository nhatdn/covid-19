<template>
  <div id="HomePage">
        <FixedMainHeader></FixedMainHeader>
        <Slider></Slider>
        <CategoryComponent></CategoryComponent>
        <Topsearch></Topsearch>
        <TopBanner></TopBanner>
        <Sugget></Sugget>
        <Footer></Footer>
        <LastFooter></LastFooter> 
        <Messenger></Messenger>
        <Contact></Contact>
  </div>
</template>
<script>
import FixedMainHeader from "../../../components/FixedMainHeader/FixedMainHeader.vue";
import Slider from "../../../components/Slider/Slider.vue";
import CategoryComponent from "../../../components/Category/CategoryComponent.vue";
import Topsearch from "../../../components/TopSearch/Topsearch.vue";
import TopBanner from "../../../components/TopSearch/TopBanner.vue";
import Sugget from "../../../components/Suggest/Suggest.vue";
import Footer from "../../../components/Footer/Footer.vue";
import LastFooter from "../../../components/Footer/LastFooter.vue";
import Messenger from "../../../components/Messenger/Messenger.vue";
import Contact from "../../../components/Contact/Contact.vue";
export default { 
  name: 'HomePage',
  components: {
    FixedMainHeader,
    Slider,
    CategoryComponent,
    Topsearch,
    TopBanner,
    Sugget,
    Footer,
    LastFooter,
    Messenger,
    Contact,
  }
}
</script>
<style>

</style>