<template>
  <div class="TopsearchItem">
    <div class="slides">
      <div class="slides__product">
        <div class="slides__product--main">
          <a class="slides__product--link" href="">
            <img
              class="slides__product--image"
              :src="require(`../../assets/${product.imgUrl[0]}`)"
              alt="product"/>
          </a>
        </div>
        <p class="slides__product--title text-center">
          {{product.name}}
        </p>
        <div class="slides__top">
          <img src="../../assets/topsearch/top.png" alt="top" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopsearchItem",
  props: {
      product: {},
  },
};
</script>

<style scoped lang="scss">
@import 'TopSearchItem.scss';
</style>
