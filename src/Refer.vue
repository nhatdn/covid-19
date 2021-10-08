<template>
  <div id="">
    <FixedMainHeader></FixedMainHeader>
    <AccountBody></AccountBody>
    <Testing></Testing>

  </div>
</template>

<script>
import FixedMainHeader from "./components/FixedMainHeader/FixedMainHeader.vue";
import AccountBody from "./components/AccountBody/AccountBody.vue";
import Testing from "./components/Testing/Testing.vue";
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  components: {
    FixedMainHeader,
    AccountBody,
    Testing
  }
}
</script>
<style>

</style>