<template>
  <div class="SuggetItem">
    <div class="sugget-item">
        <div class="sugget-item__main">
            <a class="sugget-item__main--link" href="">
                <img class="sugget-item__main--img" src="../../assets/sugget/product_1.jpg" alt="product">
            </a>
        </div>
        <p class="sugget-item__name">
            Gạo 8 thơm (1kg)
        </p>
        <div class="sugget-item__sub d-flex align-items-center justify-content-around">
            <p class="sugget-item__sub--cod">
                18.000đ
            </p>
            <a class="sugget-item__sub--link" href="">
                <img class="sugget-item__sub--img" src="../../assets/sugget/cart.png" alt="cart">
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuggetItem',
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
        max-height: 261px;
        &--img {
            width: 100%;
            object-fit: cover;
            height: auto;
            transition: .3s;
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
