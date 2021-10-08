<template>
  <div class="modInfo">
    <div class="modInfo__All-item d-flex">
      <div class="modInfo__All col-5">
        <div class="modInfo__Heading">
          <h3 class="modInfo__Heading-title">Đổi Mật Khẩu</h3>
        </div>
        <div class="modInfo__content">
          <div class="modInfo__content-item">
            <span class="modInfo__content-item__title">
              Nhập mật khẩu cũ:
            </span>
          </div>
          <div class="modInfo__content-item__btn">
            <input type="text" />
          </div>
          <div class="modInfo__content-item">
            <span class="modInfo__content-item__title"> Mật khẩu mới: </span>
          </div>
          <div class="modInfo__content-item__btn">
            <input type="text" />
          </div>
          <div class="modInfo__content-item">
            <span class="modInfo__content-item__title">
              Nhập mật khẩu mới:
            </span>
          </div>
          <div class="modInfo__content-item__btn">
            <input type="text" />
          </div>
        </div>
        <div class="modInfo__footer">
          <span class="modInfo__footer-title">
            Sử dụng mật khẩu mạnh, tối thiếu 8 ký tự, có sử dụng chữ hoa, số và
            ký tự đặc biệt
          </span>
        </div>
      </div>
      <div class="modInfo__All col-5">
        <div class="modInfo__Heading">
          <h3 class="modInfo__Heading-title">Cập nhật thông tin</h3>
        </div>
        <div class="modInfo__content">
          <div class="modInfo__content-item">
            <span class="modInfo__content-item__title">
              Nhập tên tổ trưởng:
            </span>
          </div>
          <div class="modInfo__content-item__btn">
            <input type="text" />
          </div>
          <div class="modInfo__content-item">
            <span class="modInfo__content-item__title">
              Nhập số điện thoại liên lạc chính:</span
            >
          </div>
          <div class="modInfo__content-item__btn">
            <input type="text" />
          </div>
          <div class="modInfo__content-item">
            <span class="modInfo__content-item__title"> Nhập tên phường: </span>
          </div>
          <div class="modInfo__content-item__btn">
            <input type="text" />
          </div>
          <div class="modInfo__content-item">
            <span class="modInfo__content-item__title">
              Nhập tên tổ dân phố:
            </span>
          </div>
          <div class="modInfo__content-item__btn">
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
    <div class="modInfo__btn">
      <button class="modInfo__btn-content">Lưu thay đổi</button>
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

.modInfo {
  background: #f1f4f9;
}
.modInfo__All {
  background: #fff;
  border: 1px solid #ed4d27;
  border-radius: 3px;
  margin-left: 52px;
  margin-top: 30px;
}
.modInfo__Heading {
  background: #c4c4c4;
  padding: 18px;
}
.modInfo__Heading-title {
  font-size: 1.8rem;
  line-height: 30px;
  font-weight: 600;
}
.modInfo__content {
  padding: 18px;
  font-size: 1.4rem;
}
.modInfo__content-item ,
.modInfo__content-item__btn{
  margin-bottom: 16px;
}

input[type="text"] {
  border-radius: 3px;
  outline: none;
  border: 1px solid #ed4d27;
  width: 100%;
  height: 42px;
}
.modInfo__footer {
  margin: 18px;
  text-align: justify;
}
.modInfo__footer-title {
  color: #c4c4c4;
  font-size: 1rem;
  line-height: 26px;
}
.modInfo__btn {
  text-align: center;
  margin: 20px 0 20px 0;
}
.modInfo__btn-content {
    background: #32cb00;
    color: #fff;
    font-size: 1.4rem;
    line-height: 30px;
    border-radius: 4px;
    padding: 10px;
    border: 0;
    margin-bottom: 20px;
}
.modInfo__btn-content:hover{
    background: #6adb45;
}
</style>
