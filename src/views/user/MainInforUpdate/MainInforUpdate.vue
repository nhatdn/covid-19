<template>
  <div class="MainInforUpdate">
      <div class="container-title">
            <div class="container">
                <div class="row">
                    <div class="title col">
                        <h2 class="text-uppercase">
                            Cập nhật thông tin
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    <div class="container">
        <div class="intro row" style="line-height: 25px;">
            <h3>Chào mừng bạn đến với Helpee, đây là lần đầu bạn đăng nhập.</h3>
            <p>Để đảm bảo sự an toàn và tính bảo mật cho tài khoản, bạn cần đổi mật khẩu mặc định (bên trái). Ngoài ra, dịch vụ cũng cần thiết cung cấp những thông tin cần thiết bên dưới (bên phải).</p>
            <span>(*) Bắt buộc</span>
        </div>
        <div class="row main-form">
            <div class="col-md-6 col-12 form-1">
                <h3 class="child-form-title">Đổi mật khẩu</h3>
                <form action="" class="child-form child-form-1">
                    <div class="container-form">
                        <div class="title-box">
                            <label for="oldpassword">Nhập mật khẩu cũ*:</label>
                        </div>
                        <div class="box">
                            <input type="password" name="" id="oldpassword">
                        </div>
                        <div class="title-box">
                            <label for="newpassword">Mật khẩu mới*:</label>
                        </div>
                        <div class="box">
                            <input type="password" name="" id="newpassword">
                        </div>
                        <div class="title-box">
                            <label for="repeatpassword">Nhập lại mật khẩu mới*:</label>
                        </div>
                        <div class="box">
                            <input type="password" name="" id="repeatpassword">
                        </div>
                        <span>Sử dụng mật khẩu mạnh, tối thiếu 8 ký tự, có sử dụng chữ hoa, số và ký tự đặc biệt</span>
                    </div>
                </form>
            </div>
            <div class="col-md-6 col-12 form-2">
                <h3 class="child-form-title">Cập nhật thông tin</h3>
                <form action="" class="child-form child-form-2">
                    <div class="container-form">
                        <div class="title-box">
                            <label for="hostname">Nhập tên chủ hộ*:</label>
                        </div>
                        <div class="box">
                            <input type="text" name="" id="hostname">
                        </div>
                        <div class="title-box">
                            <label for="nummembers">Nhập số lượng thành viên*:</label>
                        </div>
                        <div class="box">
                            <input type="number" min="0" name="" id="nummembers">
                        </div>
                        <div class="title-box">
                            <label for="mainphone">Nhập số điện thoại liên lạc chính*:</label>
                        </div>
                        <div class="box">
                            <input type="text" name="" id="mainphone">
                        </div>
                        <div class="title-box">
                            <label for="address">Nhập địa chỉ nhà cụ thể*:</label>
                        </div>
                        <div class="box">
                            <input type="text" name="" id="address" placeholder="K199 Phạm Văn Đồng,...">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="container-btn"> 
            <button type="button" class="btn btn-submit">Lưu thay đổi</button>
        </div>
    </div>
  </div>
</template>
<script>
import {   getCookie } from "../../../handle/index.js"
import md5 from "md5";
export default {
  name: 'MainInforUpdate',
  methods: {
  },
  created() {
      console.log((localStorage.getItem(md5("username"))));
      console.log((localStorage.getItem(md5("password"))));
      if(!(getCookie(md5("username")) && getCookie(md5("password"))) && !(localStorage.getItem(md5("username")) && localStorage.getItem(md5("password")))) {
           this.$router.push('/login');
      }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import "MainInforUpdate.css";
</style>