<template>
  <div class="Body_Checkout">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <Information_Order></Information_Order>
            </div>
            <div class="col-lg-6">
                <Order></Order>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Information_Order from "./Information_Order/Information_Order.vue";
import Order from "./Order/Order.vue";
export default {
  name: 'Body_Checkout',
  props: {
    msg: String
  },
  components: {
    Information_Order,
    Order,
  }
}
</script>


<style scoped lang="scss">

</style>
