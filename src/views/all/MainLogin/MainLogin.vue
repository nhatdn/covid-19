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
          setCookie(md5("username"), md5(this.username), 5);
          setCookie(md5("password"), md5(this.password), 5); 
          this.$router.push('/xac-thuc-thong-tin');
        } else {
          localStorage.setItem(md5("username"), md5(this.username));
          localStorage.setItem(md5("password"), md5(this.password));
          //this.$router.push('/xac-thuc-thong-tin');
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
      this.$router.push('/xac-thuc-thong-tin'); 
    } else {
      this.interfaceLogin = true;
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import "../../../components/style/reset.css";
.MainLogin,
.container,
.container-fuild,
.mb-3 {
  min-height: auto !important;
}

.mb-3 {
  background-image: url('../../../assets/login/background.jpg');
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.MainLogin {
  font-family: 'Open Sans';
}
.MainLogin,
.container,
.container-fuild,
.mb-3 {
  min-height: calc(100vh - 65px);
}
.mb-3 {
  margin: 0px;
}

.form-login {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin-left: 60px;
}
.login-form-detail {
  width: 400px;
  min-height: 100px;
  padding: 32px 24px;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  margin: 24px;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.login-form-detail .Heading {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 48px;
}

.form-group {
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
}
.form-label,
.form-message {
  text-align: left;
}

.form-label {
  font-weight: 450;
  font-size: 1.4rem;
  line-height: 1.8rem;
  padding-bottom: 6px;
}

.inputLux {
  display: inline-block;
}

.form-control {
  height: 40px;
  padding: 12px 15px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
}
.form-control:hover {
  border-color: #ee4d2d;
}

.form-group.invalid .form-control {
  border-color: #f33a58;
}

.form-group.invalid .form-message {
  color: #f33a58;
}

.form-message {
  font-size: 1.4rem;
  line-height: 1.6rem;
  padding: 4px 0 0;
}

.form-submit {
  outline: none;
  background-color: #ee4d2d;
  margin-top: -12px;
  padding: 12px 16px;
  font-weight: 600;
  color: #fff;
  border: none;
  width: 100%;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  line-height: revert;
  transition: background-color 0.5s;
}
.form-submit:hover {
  background: #e57660;
}

.check-save {
  display: flex;
  margin-top: 16px;
  margin-bottom: 16px;
}

#btn-check {
  position: relative;
  margin-right: 8px;
  top: 6px;
  background: #c4c4c4;
  border: 1px solid #000000;
  box-sizing: border-box;
  cursor: pointer;
}

.checkmark {
  font-size: 1rem;
  font-family: 'Open Sans';
  font-style: normal;
}

.spacer {
  margin-top: 36px;
}

.togglePassword {
  position: relative;
  top: -29px;
  margin-left: 315px;
  cursor: pointer;
}

/*Media Querie*/
/* PC RESPONSIVE */
@media (min-width: 1024px) {
}

/* Tablet responsive */
@media (min-width: 740px) and (max-width: 1023px) {
  .form-group .form-label {
    margin: 0;
  }
  .form-control {
    margin-bottom: 10px;
  }
  .togglePassword {
    top: -38px;
  }

  .form-login {
    margin-left: -14px;
  }
  .mb-3 {
    background-size: cover;
  }
}
/* mobile responsive */
@media (max-width: 740px) {
  .mb-3 {
    background-size: cover;
  }
}
.form-login {
  margin-left: 12px;
}
.login-form-detail {
  position: relative;
  top: -24px;
}

</style>