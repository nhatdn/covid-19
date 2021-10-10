<template>
  <div class="AllModePage">
    <div class="container">
      <div class="row">
        <div class="col-3 p-0">
          <sibarMod></sibarMod>
        </div>
        <div class="col-9 p-0">
          <headerMod></headerMod>
          <!-- <modAdmin></modAdmin> -->
          <router-view></router-view>
        </div>
        
      </div>
    <lastFooter />
    </div>
  </div>
</template>

<script>
import sibarMod from "../../components/ModePage/sibarMod.vue";
import headerMod from "../../components/ModePage/headerMod.vue";
import lastFooter from "../../components/Footer/LastFooter.vue"
// import modAdmin from "../../components/ModePage/modAdmin.vue";
export default {
  name: "AllModPage",
  data: function () {
    return {
      clicked: 0,
    };
  },
  components: {
    sibarMod,
    headerMod,
    lastFooter
    // modAdmin,
  },
};
</script>

<style scoped>
</style>