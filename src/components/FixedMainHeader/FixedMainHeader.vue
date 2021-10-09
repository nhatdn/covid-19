<template>
  <div class="fixed-main-header">
    <div>
    <TopbarAccount></TopbarAccount>
    <HeaderAccount></HeaderAccount>
    </div></div>
</template>

<script>
import TopbarAccount from "./TopbarAccount/TopbarAccount.vue";
import HeaderAccount from "./HeaderAccount/HeaderAccount.vue";

export default {
  name: 'fixed-main-header',
  components: {
    TopbarAccount,
    HeaderAccount
  }
}
</script>
<style scoped>
.fixed-main-header{
  height: 105px;
  width: 100%;
  background: #fff;
}

</style>