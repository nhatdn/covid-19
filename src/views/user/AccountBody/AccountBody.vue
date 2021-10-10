<template>
  <div class="container-fluid" style="margin: 0px; padding: 0px;">
    <div class="container">
      <div class="row">
      <SidebarAccount></SidebarAccount>
      <router-view></router-view>
      </div>
    </div>
   
  </div>
</template>

<script>

import SidebarAccount from "../../../components/AccountBody/SidebarAccount/SidebarAccount.vue";

export default {
  name: 'App',
  data(){
    return {

    } 
  },
  components: {
    SidebarAccount,
    
  }
}
</script>
<style>
</style>