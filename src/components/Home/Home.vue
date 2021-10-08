<template>
    <div class="Home">
        <Slider></Slider>
        <CategoryComponent></CategoryComponent>
            <Topsearch></Topsearch>
            <TopBanner></TopBanner>
        <Sugget></Sugget>
    </div>
</template>

<script>
import Slider from "../Slider/Slider.vue";
import CategoryComponent from "../Category/CategoryComponent.vue";
import Topsearch from "../TopSearch/Topsearch.vue";
import TopBanner from "../TopSearch/TopBanner.vue";
import Sugget from "../Suggest/Suggest.vue";

export default {
  name: 'Home',
  components: {
    CategoryComponent,
    Topsearch,
    TopBanner,
    Sugget,
    Slider,
  },
  created(){
      document.title = "Trang chủ";
  }
}
</script>

<style>
</style>