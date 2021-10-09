<template>
  <div class="SuggetItem">
    <div class="sugget-item d-flex flex-column justify-content-between">
        <div class="sugget-item__main">
            <a class="sugget-item__main--link" href="">
                <img class="sugget-item__main--img" :src="require(`../../assets/${product.imgUrl}`)" alt="product">
            </a>
        </div>
        <div>
        <p class="sugget-item__name">
             {{product.name}}
        </p>
        <div class="sugget-item__sub d-flex align-items-center justify-content-around">
            <p class="sugget-item__sub--cod">
                {{product.cost}}đ
            </p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuggetItem',
  props: {
      product: {},
  },
  data: function () {
    return {
      clicked: 0,
    };
  }
}
</script>

<style scoped lang="scss">
.sugget-item {
    background-color: #FFF;
    margin: 15px 0;
    &__main {
        overflow: hidden;
        height: 100%;
        &--img {
            width: 100%;
            object-fit: contain;
            transition: .3s;
            height: 100%;
        }
    }

    &__name {
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        line-height: 27px;
        text-align: center;
        color: #000000;
        padding: 5px 0;
    }

    &__sub {
        padding: 5px 0;
        &--cod {
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            font-size: 24px;
            line-height: 33px;
            text-align: center;
            color: #ED4D27;
        }
        &--link {
            padding: 2px 10px;
        }
        &--img {
            max-width: 40px;
            height: auto;
            transition: .3s;
        }

    }
}

@media (min-width: 1024px) {
    .sugget-item {
        height: 305px;
        &__main {
            &--link {
               &:hover .sugget-item__main--img{
                   transform: scale(1.1);
               }
            }            
        }
        &__sub {
            &--link {
                &:hover .sugget-item__sub--img{
                    transform: scale(1.05);
                }
            }          
        }
    }
}

@media (min-width:1199px ) and (max-width: 1399px) {

}
</style>
