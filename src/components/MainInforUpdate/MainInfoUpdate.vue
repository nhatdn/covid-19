<template>
  <div class="MainLogin">
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
        <div class="intro row">
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
            <a class="btn btn-submit" @click.prevent="temp++">Lưu thay đổi</a>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainInfoUpdate',
  data() {
      temp : 0;
  }
  methods: {
      routeHomePage() {
            console.log("click roi");
            this.$router.push('/home'); 
      }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
.MainInforUpdate {
    font-family: 'Open Sans';
}
.h3 {
    font-size: 20px;
    font-weight: bold;
}
.container-title {
    background-color: #ED4D27;
    height: 90px;
    align-items: center;
}
.title h2 {
    color: #FFFFFF;
    line-height: 90px;
    margin: 0;
    font-size: 20px;
}
.intro {
    color: #ED4D27;
    padding:45px 0 0;
}
.intro span {
    font-size: 14px;
    line-height: 33px;
    color: #C4C4C4;
}
.container-form span {
    color: #C4C4C4;
}
.form-1 {
    margin-top: 40px;
}
.form-2 {
    margin-top: 40px;
}
.child-form {
    border: 1px solid #ED4D27;
    border-radius: 0 0 15px 15px;
    background-color: #fff;
    padding: 0 50px 25px;
}
.child-form-1 {
    padding-bottom: 107px;
}
.child-form-title {
    background-color: #ED4D27;
    border-radius: 15px 15px 0 0;
    padding: 20px 50px;
    margin: 0;
    color: #FFFFFF;
}
.container-form {
    padding-top: 30px;
}
.title-box {
    margin-bottom: 20px;
}
.title-box label {
    font-weight: 600;
}
.box {
    margin-bottom: 40px;
}
.box input {
    width: 100%;
    border: 1px solid #ED4D27;
    outline: none;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
}
.container-btn {
    margin: 60px 0;
    text-align: center;
}
.btn-submit {
    background: #32CB00;
    border-radius: 15px;
    padding: 20px 60px ;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
}
/* Hover */
@media (min-width: 1024px) {
    .btn:hover {
        color: #EE4D2D;
    }
}
/* Max Width: 767px */
@media (max-width: 767px) {
    .h3 {
        font-size: 16px;        
    }
    .container-title {
        height: 80px;
    }
    .title h2 {
        line-height: 80px;
        font-size: 18px;
    }
    .intro {
        padding: 25px 0;
    }
    .form-1 {
        margin-top: 0;
    }
    .form-2 {
        margin-top: 0;
    }
    .child-form-title {
        padding: 15px 30px;
    }
    .child-form {
        padding: 0 30px;
    }
    .child-form-1 {
    padding-bottom: 25px;
    margin-bottom: 25px;
    }
    .container-form {
    padding-top: 20px;
    }
    .box {
        margin-bottom: 25px;
    }
    .container-btn {
        margin: 30px 0;
    }
    .btn-submit {
        padding: 15px 50px;
        font-size: 16px;
    }
}
</style>