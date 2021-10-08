<template>
  <div class="Slider">
    <div class="container-fluid p-0">
      <splide :options="options" style="z-index: 0 !important;">
        <splide-slide class="slider">
          <div class="container">
            <div class="row slider--row">
              <div class="col slider--contents">
                <h2
                  class="
                    slider--title
                    m-0
                    animate__animated animate__backInDown
                  "
                >
                  ĐI CHỢ
                  <span class="slider--content__one">Khó?</span>
                  <span class="slider--content__two">Có...</span>
                  <span class="slider--content__three">Helpee</span>
                </h2>
                <div class="shopping-now text-center">
                  <a
                    class="
                      btn--shopping btn--1
                      text-decoration-none
                      d-inline-block
                      animate__animated animate__backInUp
                    "
                    href=""
                    >Mua sắm ngay</a
                  >
                </div>
              </div>
            </div>
          </div>
        </splide-slide>
        <splide-slide class="slider">
          <div class="container">
            <div class="row slider2-row">
              <div class="col-lg-7">
                <h2
                  class="
                    slider2--title
                    m-0
                    animate__animated animate__backInDown
                  "
                >
                  Thực phẩm từ thiên nhiên
                  <span class="slider2--content">Bảo vệ sức khỏe</span>
                </h2>
                <div class="shopping-now text-center">
                  <a
                    class="
                      btn--shopping btn--2
                      text-decoration-none
                      d-inline-block
                      animate__animated animate__backInUp
                    "
                    href=""
                    >Mua sắm ngay</a
                  >
                </div>
              </div>
            </div>
          </div>
        </splide-slide>
        <splide-slide class="slider">
          <div class="container">
            <div class="row slider3-row">
              <div class="col-12">
                <h2
                  class="
                    slider3--title
                    m-0
                    animate__animated animate__backInDown
                  "
                >
                  NÔNG SẢN SẠCH
                </h2>
                <div class="shopping-now text-center">
                  <a
                    class="
                      btn--shopping btn--2
                      text-decoration-none
                      d-inline-block
                      animate__animated animate__backInUp
                    "
                    href=""
                    >Mua sắm ngay</a
                  >
                </div>
              </div>
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "LastFooter",
  components: {
    Splide,
    SplideSlide,
  },
  data: function () {
    return {
      clicked: 0,
      options: {
        rewind: true,
        autoplay : true,
        gap: "1rem",
        arrows: false,
      },
    };
  },
};
</script>
<style scoped>
@import 'styleSlider.css';
.splide__pagination {
  z-index: 0 !important;
}
</style>
