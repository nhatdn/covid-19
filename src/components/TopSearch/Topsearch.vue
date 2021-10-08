<template>
  <div class="Topsearch">
    <div class="container topsearch">
      <h2 class="topsearch__title text-uppercase m-0">Tìm kiếm hàng đầu</h2>
      <div class="row topsearch__row">
        <div class="col-12 topsearch__col">
          <splide :options="options">
            <splide-slide class="topsearch__slider">
              <TopsearchItem></TopsearchItem>
            </splide-slide>
            <splide-slide class="topsearch__slider">
              <TopsearchItem></TopsearchItem>
            </splide-slide>
            <splide-slide class="topsearch__slider">
              <TopsearchItem></TopsearchItem>
            </splide-slide>
            <splide-slide class="topsearch__slider">
              <TopsearchItem></TopsearchItem>
            </splide-slide>
            <splide-slide class="topsearch__slider">
              <TopsearchItem></TopsearchItem>
            </splide-slide>
            <splide-slide class="topsearch__slider">
              <TopsearchItem></TopsearchItem>
            </splide-slide>
            <splide-slide class="topsearch__slider">
              <TopsearchItem></TopsearchItem>
            </splide-slide>
            <splide-slide class="topsearch__slider">
              <TopsearchItem></TopsearchItem>
            </splide-slide>
            <splide-slide class="topsearch__slider">
              <TopsearchItem></TopsearchItem>
            </splide-slide>
            <splide-slide class="topsearch__slider">
              <TopsearchItem></TopsearchItem>
            </splide-slide>
          </splide>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopsearchItem from "./TopSearchItem.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  name: "Topsearch",
  components: {
    TopsearchItem,
    Splide,
    SplideSlide,
  },
  data: function() {
    return {
      clicked: 0,
      options: {
        rewind: true,
        autoplay: true,
        gap: "1rem",
        arrows: true,
        perPage: 6,
        breakpoints: {
          1199: {
            perPage: 5,
          },
          992: {
            perPage: 4,
          },
          767: {
            perPage: 3,
          },
          465: {
            perPage: 2,
          },
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "Topsearch.scss";
</style>
