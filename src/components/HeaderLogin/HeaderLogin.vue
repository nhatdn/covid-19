<template>
  <div class="HeaderLogin">
     <div class="container">
       <div class="row">
         <div class="col-6 p-0 main-logo">
           <a class="link-login d-flex align-items-center text-decoration-none" href="">
            <img class="icon" src="../../assets/login/icon.png">
            Helpee
          </a>
         </div>
         <div class="col-6 d-flex flex-row-reverse align-items-center">
           <a href="" class="link-danger text-decoration-none" data-toggle="tooltip" data-placement="top" title="Click vào đây">Cần trợ giúp?</a>
         </div>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderLogin',
  data: function(){
    return {
      clicked: 0
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap');

.link-login {
 font-size: 50px;
 font-family: 'Bonheur Royale', cursive;
 line-height: 1.25;
  color: #ee4d2d;
  font-weight: bold;
}
.icon {
  width: 85px;
  height: auto;
}

.logo {
  width: 98px;
  height: 50px;
}
.main-logo {
  transform: translateX(-10px);
}
.link-danger {
  font-size: 18px;
  font-style: italic;
}

@media (max-width: 1025px) {
  .link-danger {
    font-size: 20px;
  }
}

@media (max-width:767px) {
  .link-login {
    font-size: 40px;
  }
}
</style>
