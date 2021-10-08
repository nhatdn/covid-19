<template>
  <div class="MainLogin" v-if="interfaceLogin">
    <div class="container-fluid"> 
      <HeaderLogin></HeaderLogin>  
    </div>
    <div class="container-fuild main-login">
      <div class="row login-page">
          <div class="col-12 d-flex align-items-center">
            <div class="form-login">
              <form id="form-1" class="login-form-detail">
                <h3 class="Heading">Đăng nhập</h3>
                <div class="spacer"></div>
                <div class="form-group">
                    <label for="fullName" class="form-label" id="">Tài khoản:</label>
                    <input v-model="username" class="form-control" rules="required" type="text" id="fullName" name="fullName" placeholder="Tên tài khoản">
                    <span class="form-message"></span>
                </div>
                <div class="form-group">
                    <label for="password" class="form-label">Mật khẩu:</label>
                    <input v-model="password" class="form-control" rules="required|min:6" :type="show ? 'text' : 'password'" id="password" name="password" autocomplete="on" placeholder="Nhập Mật Khẩu">
                    <b-icon @click="show = !show" icon="eye-slash" class="togglePassword"></b-icon>
                    <span class="form-message"></span>
                </div>
                 <button class="form-submit" @click.prevent="Login()">Đăng nhập</button>
                 <label for="btn-check" class="login__label">
                    <input class="login__input" id="btn-check" type="checkbox" @click="save = !save">
                    <span class="checkmark">Lưu tài khoản</span>
                 </label>
                 <p v-if="message != ''" style="color: red"> {{ message }}</p>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>
<script>

import HeaderLogin from "../HeaderLogin/HeaderLogin.vue";

export default {
  name: 'MainLogin',
  data(){
    return {
      username: "",
      password: "",
      save: false,
      show: false,
      message: "",
      result: null,
      interfaceLogin: true
    }
  }, 
  components: {
    HeaderLogin
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import "../../components/style/reset.css";
@import "MainLogin.css";
</style>