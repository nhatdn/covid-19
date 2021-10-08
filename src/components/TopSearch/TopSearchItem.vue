<template>
  <div class="TopsearchItem">
    <div class="slides">
      <div class="slides__product">
        <div class="slides__product--main">
          <a class="slides__product--link" href="">
            <img
              class="slides__product--image"
              src="../../assets/topsearch/product_1.jpg"
              alt="product"/>
          </a>
        </div>
        <p class="slides__product--title text-left">
          Gạo
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
};
</script>

<style scoped lang="scss">
@import 'TopSearchItem.scss';
</style>
