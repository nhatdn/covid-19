<template>
  <div id="Body_404Page">
      <div class="container-fluid">
          <div class="row">
              <div class="col page-404">
                  <div class="page-404__box">
                      <router-link type="button" class="page-404__button" to="/home" style="text-decoration: none">
                        <img class="img-responsive page-404__img " src="../../assets/page404/icon.png" alt="">
                        <span class="page-404__span">Về Trang Chủ</span>
                    </router-link>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default { 
  name: 'Body_404Page',
  components: {

  }
}
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
    .page-404 {
        margin-top: 55px;
        height: 100vh;
        background-image: url('../../assets/page404/bg404.jpg');
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        background-size: cover;

        &__box {
            border-radius: 30px;
            display: block;
            position: absolute;
            top: auto;
            left: 50%;
            bottom: 25%;
            transform: translate(-50%, -50%);
            box-shadow: 10px 10px 20px rgba(#000, 0.3);
            padding: 10px 20px;
            background: #FFFFFF;
            transition: all 0.3s;
            width: 330px;
        }
        &__button {
            outline: none;
            border: none;
            background: #FFFFFF;
            display: flex;
            align-items: center;        
        }
        &__span {
            font-family: 'Open Sans', sans-serif;
            font-weight: bold;
            font-size: 28px;
            line-height: 38px;
            color: #ED4D27;
            padding: 10px 20px;
            display: block;
        }
        &__img {
            width: 50px; 
            height: 50px;
        }   
    }

    @media (min-width:1025px) {
        .page-404__box:hover {
            opacity: .8;
        }
    }

    @media (max-width:991px) {
        .page-404 {
            height: 55vh;
        }
    }

    @media (max-width:420px) {
        .page-404 {
            height: 46vh;
            &__box {
                width: 280px;
                bottom: 20%;
            }
            &__span {
                font-size: 22px;
                line-height: 28px;
                padding: 10px 15px;
            }
            &__img {
                width: 40px;
                height: 40px;
            }
        }
    }
    @media (max-width:380px) {
        .page-404 {
            height: 40vh;
        }
    }
</style>