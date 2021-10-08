<template>
  <div class="userMod">
    <div class="userModAll">
      <div class="userModeList d-flex">
        <div class="listMod col-4">
          <h3 class="listMod-heading">Danh Sách Tài Khoản</h3>
          <select class="listMod__title">
            <option>User 2112</option>
            <option>User 2112</option>
            <option>User 2112</option>
            <option>User 2112</option>
          </select>
          <div class="listMod-btn">
            <button class="listMod-Btn">Chọn</button>
          </div>
        </div>
        <div class="listModeNoti col-5">
          <h3 class="listModeNoti-heading">Thông Báo</h3>
          <div class="listModeNoti-heading-item">
            <span class="listModeNoti-heading__title">
              Tài khoản user2110 đã được xác minh!
            </span>
          </div>
          <div class="listModeNoti-heading-item">
            <span class="listModeNoti-heading__title">
              Tài khoản user2110 đã được xác minh!
            </span>
          </div>
          <div class="listModeNoti-heading-item">
            <span class="listModeNoti-heading__title">
              Tài khoản user2110 đã được xác minh!
            </span>
          </div>
          <div class="listModeNoti-heading-item">
            <span class="listModeNoti-heading__title">
              Tài khoản user2110 đã được xác minh!
            </span>
          </div>
          <div class="listModeNoti-heading-item">
            <span class="listModeNoti-heading__title">
              Tài khoản user2110 đã được xác minh!
            </span>
          </div>
        </div>
      </div>
      <div class="listMode__Verifi">
        <h3 class="listMode__Verifi-heading">Xác Minh Tài Khoản Mới:</h3>
        <div class="listMode__Verifi-title">
          <span class="listMode__Verifi-item">Tên Tài Khoản:</span>
          <input type="text" class="listMode__Verifi-input" />
        </div>
        <div class="listMode__Verifi-title">
          <span class="listMode__Verifi-item">Tên Chủ Hộ:</span>
          <input type="text" class="listMode__Verifi-input" />
        </div>
        <div class="listMode__Verifi-title">
          <span class="listMode__Verifi-item">Số Lượng Thành Viên:</span>
          <input type="text" class="listMode__Verifi-input" />
        </div>
        <div class="listMode__Verifi-title">
          <span class="listMode__Verifi-item">Địa Chỉ:</span>
          <input type="text" class="listMode__Verifi-input" />
        </div>
        <div class="listMode__Verifi-title">
          <span class="listMode__Verifi-item">Số Điện Thoại Liên Lạc:</span>
          <input type="text" class="listMode__Verifi-input" />
        </div>
        <div class="listMode__Verifi-input-submit">
          <input
            type="checkbox"
            name="input"
            id="input"
            class="listMode__verifi-input-title"
          />
          <label for="input" class="listMode__verifi-input-content"
            >Đây là tài khoản hợp lệ</label
          >
        </div>
        <button class="listMode__Verifi-btn">Xác Nhận</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllModPage",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");

.userMod {
  font-family: "Open Sans", sans-serif;
}
.userModAll {
  background: #f1f4f9;
  padding: 24px;
}

.listMod {
  background: #fff;
  text-align: center;
  margin-left: 52px;
}

.listMod-heading,
.listModeNoti-heading {
  font-size: 1.6rem;
  line-height: 30px;
  font-weight: 600;
  padding: 20px 0 30px 0;
}

.listMod__title {
  width: 46%;
  border-color: #ccc;
  outline: none;
  margin-bottom: 26px;
  height: 36px;
  font-size: 1.2rem;
  line-height: 30px;
}
.listMod-Btn ,
.listMode__Verifi-btn{
  background: #ed4d27;
  color: #fff;
  padding: 10px 20px 10px 20px;
  border-radius: 6px;
  font-size: 1.2rem;
  margin-bottom: 28px;
  border: none;
  margin-top: 62px;
}
.listMod-Btn:hover ,
.listMode__Verifi-btn:hover {
    background: #e66444;
}
.listModeNoti {
  background: #fff;
  margin-left: 90px;
  text-align: center;
}
.listModeNoti-heading__title {
  display: block;
  font-size: 1.2rem;
  line-height: 30px;
  font-weight: 500;
  margin-bottom: 10px;
}
.listMode__Verifi {
  background: #fff;
  margin-top: 16px;
  padding: 18px;
}

.listMode__Verifi-heading {
  font-size: 1.4rem;
  line-height: 30px;
  font-weight: 600;
}
.listMode__Verifi-title {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: 10px;
}

.listMode__Verifi-input {
  height: 34px;
  width: 38%;
  margin-right: 160px;
  outline: none;
}
.listMode__Verifi-input-submit {
  padding: 28px 0 0 0;
}
.listMode__verifi-input-title {
  height: 16px;
  width: 20px;
}

.listMode__verifi-input-content {
  padding-left: 24px;
  line-height: 30px;
  font-size: 1.2rem;
}


</style>