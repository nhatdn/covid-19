<template>
    <div class="AllPolicy">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <policyHeader></policyHeader>
                </div>
                <div class="col-sm-12 col-md-4">
                    <policyList></policyList>
                </div>
                <div class="col-sm-12 col-md-8">
                    <policyContent></policyContent>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import policyHeader from "./policyHeader.vue";
import policyList from "./policyList.vue";
import policyContent from "./policyContent.vue";

export default {
  name: "AllPolicy",
  data: function () {
    return {
      clicked: 0,
    };
  },
  components: {
    policyHeader,
    policyList,
    policyContent
   
  }
};
</script>

<style scoped>

</style>