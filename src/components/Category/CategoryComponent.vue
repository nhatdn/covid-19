<template>
  <div class="CategoryComponent">
    <div class="container">
      <h2 class="category--title text-uppercase m-0">Danh mục sản phẩm</h2>
      <div class="row">
        <div class="col-lg-4 col-6 category-item" v-for="(category, index) in categorys" :key="index">
            <CategoryComponents :category="category" ></CategoryComponents>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryComponents from "./CategoryComponents.vue";

export default {
  name: "CategoryComponent",
  components: {
      CategoryComponents
  },
  data: function () {
    return {
      clicked: 0,
      categorys: [
        {
          name: "Lương thực",
          imageUrl: 'luongthuc.jpg'
        },
        {
          name: "Thực phẩm đóng gói",
          imageUrl: 'thucphamdonggoi.jpg'
        },
        {
          name: "Thực phẩm tươi sống",
          imageUrl: 'thucphamtuoisong.jpg'
        },
        {
          name: "Bánh kẹo",
          imageUrl: 'banhkeo.jpg'
        },
        {
          name: "Gia vị",
          imageUrl: 'giavi.jpg'
        },
        {
          name: "Nhu yếu phẩm khác",
          imageUrl: 'nhuyeupham.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
.CategoryComponent {
  background-color: #F5F5F5;
}
.container {
  background-color: #FFF;
}
.category--title {
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  color: #ED4D27;
  padding: 20px;
}
.category-item {
  overflow: hidden;
  border-radius: 15px;
}
@media (max-width: 465px) {
  .category--title {
    font-size: 26px;
    line-height: 30px;
  }
}
@media (max-width: 400px) {
  .category-item {
    padding: 0 10px;
  }
  .category--title {
    font-size: 24px;
  }
}

@media (max-width: 365px) {
  .category--title {
    font-size: 23px;
  }
}
</style>
