<template>
  <div class="HeaderInforUpdate">
     <div class="container">
       <div class="row">
         <div class="col-md-6 col-12">
            <a class="link-login d-flex align-items-center text-decoration-none" href="">
              <img class="icon" src="../../../assets/login/icon.png">
              <img class="icon" src="../../../assets/login/helpee.png">
            </a>
         </div>
         <div class="col-md-6 col-12 d-flex flex-row-reverse align-items-center">
           <a href="" class="link-danger text-decoration-none" data-toggle="tooltip" data-placement="top" title="Click vào đây">Cần trợ giúp?</a>
         </div>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderInforUpdate',
  data: function(){
    return {
      clicked: 0
    }
  }
}
</script>

<style scoped>
.HeaderInforUpdate {
    font-family: 'Open Sans';
}
.link-login {
  display: block;
  padding: 25px 0;

}
@media (max-width: 767px) {
  .link-login {
    justify-content: center;
  }
  .link-danger {
    display: none;
  }
}
</style>
