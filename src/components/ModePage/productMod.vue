<template>
  <div class="productMod">
    <div class="product__content">
      <div class="product__content-title">
        <h3 class="product__content-heading">Thông Tin Chi Tiết</h3>
      </div>
      <div class="product__content-item-title">
        <h3 class="product__content-item-heading">Thể Loại</h3>
        <select
          name=""
          id="product__content-item-input"
          class="product__content-item-input"
        >
          <option value="" class="product-item__input">Lương Thực</option>
          <option value="" class="product-item__input">
            Thực Phẩm Đóng Gói
          </option>
          <option value="" class="product-item__input">
            Thực Phẩm Tươi Sống
          </option>
          <option value="" class="product-item__input">Bánh Kẹo</option>
          <option value="" class="product-item__input">Gia vị</option>
          <option value="" class="product-item__input">
            Nhu Yếu Phẩm Khác
          </option>
        </select>
      </div>
      <div class="product__content-item-title">
        <span class="product__content-item-item">Mã Sản Phẩm:</span>
        <input type="text" class="product__content-item-input" />
      </div>
      <div class="product__content-item-title">
        <span class="product__content-item-item">Tên Sản Phẩm:</span>
        <input type="text" class="product__content-item-input" />
      </div>
      <div class="product__content-item-title">
        <span class="product__content-item-item">Đơn giá:</span>
        <input type="text" class="product__content-item-input" />
      </div>
      <div class="product__content-item-title">
        <span class="product__content-item-item">Chất lượng:</span>
        <input type="text" class="product__content-item-input" />
      </div>
      <div class="product__content-item-title">
        <span class="product__content-item-item">Mô Tả:</span>
        <textarea
          type="text"
          class="product__content-item-input-text"
          rows="4"
          cols="30"
        />
      </div>
      <div class="product__content-item-btn">
        <button class="product__content-btn">Mới</button>
        <button class="product__content-btn">Lưu</button>
        <button class="product__content-btn">Xóa</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productMod',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
.product__content {
  font-family: 'Open Sans', sans-serif;
  background: #f5f5f5;
}
.product__content-title {
  margin-top: 20px;
}
.product__content-heading {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  padding: 20px;
  
}
.product__content-item-title {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-left: 80px;
}
.product-item {
  outline: none;
  height: 44px;
  width: 275px;
}


.product__content-item-input {
  height: 34px;
  width: 38%;
  margin-right: 160px;
  outline: none;
}
.product__content-item-input-text {
  margin-right: 160px;
  outline: none;
  overflow: auto;
  text-overflow: ellipsis;
  width: 38%;
  line-height: 30px;
  resize: none;
}

.product__content-item-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}
.product__content-btn {
  padding: 10px 20px;
  outline: none;
  margin-right: 36px;
  border-radius: 4px;
  border-color: snow;
  background: #ed4d27;
  color: #fff;
}
</style>
