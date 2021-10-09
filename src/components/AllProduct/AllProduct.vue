<template>
  <div class="AllProduct">
    <Slider></Slider>
    <div class="container">
      <div class="row">
        <div class="col-xxl-3 col-sm-12 col-md-4">
      <Listcattegory></Listcattegory>
        </div>
      <div class="col-sm-12 col-md-8 col-xxl-9">
      <ListProduct></ListProduct>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from "../Slider/Slider.vue";
import Listcattegory from "./Listcategory.vue";
import ListProduct from "./ListProduct.vue";


export default {
  name: "AllProduct",
  data: function () {
    return {
      clicked: 0, 
    };
  },
  components: {
    Listcattegory,
    ListProduct,
    Slider
  },
};
</script>

<style scoped>

.container {
  background: #f6f6f6;
  margin-top: 3%;
  margin-bottom: 3%;

}

.col-3 {
  background: #eee8e8;
}

.col-sm-12 {
  padding: none;
}
@media (max-width: 443px) {
  .container {
    overflow: hidden;
    margin-top: 0;
  }
}
@media (max-width: 376px) {
  .category-list {
    padding: 0px;
  }

  .container {
    overflow: hidden;
    margin-top: 0;
  }
}
@media (max-width: 1023px) {
  .hide-on-mobil-tablet {
    display: none;
  }
  .container {
    overflow: hidden;
    max-width: 100%;
  }

}

@media (min-width: 768px) and (max-width: 1023px) {
    
  }
</style>