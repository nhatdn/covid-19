<template>
  <div class="CategoryComponents">
    <div class="category-items">
      <a class="category--link text-decoration-none" href="">
        <figure class="category--figure">
          <img class="category--figure__image" :src="require(`../../assets/category/${category.imageUrl}`)" alt="">
        </figure>
        <figcaption class="category--figcaption">
          <h3 class="category--figcaption__title m-0">{{category.name}}</h3>
          <a class="category--figcaption__link text-decoration-none" href="">Mua ngay</a>
        </figcaption>
      </a>
      {{category.imageUrl}}
    </div>    
  </div>
</template>
<script>
export default {
  name: "CategoryComponents",
  props: {
    category: Object
  },
  data: function () {
    return {
      clicked: 0,
    };
  },
  methods: {    
  }
};
</script>

<style scoped>
@import "CategoryComponents.scss";

</style>
