<template>
  <div class="FixedMainHeader">
    <div>
    <TopbarAccount v-on:switchMenuShow="handleSwitch()"></TopbarAccount>
    <HeaderAccount v-bind:menuShow="menuShow"></HeaderAccount>
    </div></div>
</template>

<script>
import TopbarAccount from "./TopbarAccount/TopbarAccount.vue";
import HeaderAccount from "./HeaderAccount/HeaderAccount.vue";

export default {
  name: 'App',
  data(){
    return {
       menuShow: false
    }
  },
  methods: {
    handleSwitch(){this.menuShow = !this.menuShow}
  },
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