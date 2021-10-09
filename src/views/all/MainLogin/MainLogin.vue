<template>
  <div class="MainLogin" v-if="interfaceLogin">
    <div class="container-fluid"> 
      <HeaderLogin/>
    </div>
    <div class="container-fuild">
      <div class="mb-3 ">
        <div class="container d-flex align-items-center">
          <div class="col-12 d-flex align-items-center">
            <div class="form-login">
              <form id="form-1" class="login-form-detail">
                <h3 class="Heading">Đăng nhập</h3>
                <div class="spacer"></div>
                <div class="form-group">
                    <label for="fullName" class="form-label" id="">Tài Khoản</label>
                    <input v-model="username" class="form-control" rules="required" type="text" id="fullName" name="fullName" placeholder="Tên tài khoản">
                    <span class="form-message"></span>
                </div>
                <div class="form-group">
                    <label for="password" class="form-label">Mật Khẩu</label>
                    <input v-model="password" class="form-control" rules="required|min:6" type="password" id="password" name="password" autocomplete="on" placeholder="Nhập Mật Khẩu">
                    
                    <span class="form-message"></span>
                </div>
                 <button class="form-submit" @click.prevent="Login()">Đăng nhập</button>
                 <label for="btn-check" class="check-save">
                    <input id="btn-check" type="checkbox" @click="save = !save">
                    <span class="checkmark">Lưu Tài Khoản</span>
                 </label>
                 <p v-if="message != ''" style="color: red"> {{ message }}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

import HeaderLogin from "../../../components/HeaderLogin/HeaderLogin.vue";
import { API_LOGIN_ADMIN as API } from "../../../API/index.js";
import { setCookie, getCookie } from "../../../handle/index.js"
import md5 from "md5";

export default {
  name: 'MainLogin',
  data(){
    return {
      username: "",
      password: "",
      save: false,
      message: "",
      result: null,
      interfaceLogin: false
    }
  }, 
  components: {
    HeaderLogin
  },
  methods: {
    async Login(){
      const data = await this.checking(md5(this.username),md5(this.password));
      console.log(md5(this.username));
      if(data.length === 1 && data[0].username === md5(this.username) && data[0].password === md5(this.password)) {
        this.message = "";
        if(this.save){
          console.log("update data at cookie");
          setCookie(md5("username"), md5(this.username), 5);
          setCookie(md5("password"), md5(this.password), 5); 
          this.$router.push('/admin');
        } else {
          console.log("update data at localStorage")
          localStorage.setItem(md5("username"), md5(this.username));
          localStorage.setItem(md5("password"), md5(this.password));
          this.$router.push('/admin');
        }
        
      } else {
        this.message = "Sai mật khẩu hoặc tài khoản";
      }
    },

    checking(username = getCookie(md5("username")), password = getCookie(md5("username"))){
      return fetch(API + `?username=${username}&password=${password}`).then(response => response.json());
    }

  },

  async created(){
    var myPromise = await this.checking();
    if(myPromise.length == 1){
      console.log("you logined at cookie")
      this.$router.push('/admin'); 
    } else {
      this.interfaceLogin = true;
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import "../../../components/style/reset.css";
@import "MainLogin.css";
</style>