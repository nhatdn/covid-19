<template>
  <div class="FixedMainHeader">
    <div>
    <TopbarAccount></TopbarAccount>
    <HeaderAccount></HeaderAccount>
    </div></div>
</template>

<script>
import TopbarAccount from "./TopbarAccount/TopbarAccount.vue";
import HeaderAccount from "./HeaderAccount/HeaderAccount.vue";

export default {
  name: 'FixedMainHeader',
  components: {
    TopbarAccount,
    HeaderAccount
  }
}
</script>
<style scoped>
.FixedMainHeader{
  height: 105px;
  width: 100%;
  background: #fff;
}

</style>