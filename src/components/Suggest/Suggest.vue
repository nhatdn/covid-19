<template>
  <div class="Sugget">
        <div class="container sugget">
            <h2 class="sugget__title text-uppercase m-0">Gợi ý</h2>
        </div>
        <div class="container suggets">
            <div class="row">
                <div class="col-lg-3 col-xxl-2 col-md-3 col-sm-4 col-4 suggets__item" v-for="(item, index) in products.products" :key="index">
                    <SuggetItem :product="item"></SuggetItem>     
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col button">
                    <a class="button__link text-decoration-none" href="">
                        Xem thêm
                    </a>
                </div>
            </div>    
        </div>   
  </div>
</template>

<script>
import SuggetItem from './SuggetItem.vue';
import { mapState } from 'vuex';
export default {
  name: 'Sugget',
  components: {
    SuggetItem,
  },
  computed: mapState(['products']),
  created() {
  },
  data: function () {
    return {
      clicked: 0,
    };
  },
  
}
</script>

<style scoped lang="scss">
.Sugget {
    background-color: #f5f5f5;
}
.sugget {
    background-color: #FFF;
    &__title {
        font-family: 'Open Sans';
        font-weight: bold;
        font-size: 30px;
        line-height: 41px;
        color: #ED4D27;
        padding: 20px;
    }
}

.suggets {
    background-color: #ece7e780;
    &__item {
        overflow: hidden;
        object-fit: cover;
    }
}
.button {
    padding: 20px ;
    &__link {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 30px;
        line-height: 41px;
        color: #FFFFFF;
        padding: 10px 60px;
        max-width: 300px;
        border-radius: 10px;
        text-align: center;
        background-color: #ED4D27;
        margin: 0 auto;
        display: block;
        position: relative;
        transition: 0.5s;

        &::after {
            content: "";
            width: 100%;
            height: 100%;
            background-color: #ED4D27;
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 10px;
            transition: 0.5s;
        }
    }
}

@media (min-width: 1024px) {
    .button {
        &__link {
            &:hover {
                transform: translateY(-3px);
                box-shadow: 0px 5px 20px #2f332fc7;
            }
            &:active {
                transform: translateY(-1px);
                box-shadow: 0px 5px 10px #2f332fc7;
            }
            &:hover.button__link::after {
                transform: scaleX(1.4) scaleY(1.6);
                opacity: 0;
            }
        }
    }
}
@media (max-width: 991px) {
    .button {
        &__link {
            font-size: 26px;
            line-height: 40px;
            padding: 5px 30px;
            max-width: 230px;
        }
    }
}

@media (max-width: 465px) {

    .sugget {
        &__title {       
            font-size: 26px;
            line-height: 30px;
        }
    }

    .button {
        &__link {
            font-size: 24px;
            line-height: 35px;
            padding: 5px 30px;
            max-width: 180px;
        }
    }
}

@media (max-width: 420px) {
    .suggets {
        &__item {
            width: 50%;
        }
}
}
@media (max-width: 400px) {
    .sugget {
        &__title {       
            font-size: 24px;
        }
    }
}

@media (max-width: 365px) {
    .sugget {
        &__title {       
            font-size: 23px;
        }
    }
}
</style>
