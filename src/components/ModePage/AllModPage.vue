<template>
  <div class="AllModePage">
    <div class="container">
      <div class="row">
        <div class="col-3 p-0">
          <sibarMod></sibarMod>
        </div>
        <div class="col-9 p-0">
          <headerMod></headerMod>
          <!-- <userMode></userMode> -->
          <!-- <modInfo></modInfo> -->
          <modAdmin></modAdmin>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sibarMod from "./sibarMod.vue";
import headerMod from "./headerMod.vue";
// import userMode from "./userMod.vue"
// import modInfo from "./modInfo.vue";
import modAdmin from "./modAdmin.vue";

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
    //   userMode,
    // modInfo,
    modAdmin,
  },
};
</script>

<style scoped>
</style>
