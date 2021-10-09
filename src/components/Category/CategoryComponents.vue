<template>
  <div class="CategoryComponents">
    <div class="category-items">
      <a class="category--link text-decoration-none" @click.prevent="dinhTuyenSangSanPham()">
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
import { bus } from "../../main.js";
import {mapGetters} from 'vuex';
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
  computed: mapGetters(['banhKeo']),
  methods: {    
    dinhTuyenSangSanPham(){
      this.$router.push('/home/product');
      console.log(mapGetters(['banhKeo']));
      setTimeout(()=>{
        bus.$emit("sendBanhKeo", this.banhKeo);
      },100)
    }
  }
};
</script>

<style scoped>
@import "CategoryComponents.scss";

</style>
