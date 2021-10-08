<template>
  <div class="Listcategory">
    <nav class="category">
      <h3 class="=category_heading text-uppercase ">
        <b-icon
          class="list-ul category_icon"
          icon="list"
          id="search-bar"
        ></b-icon>
        Danh mục sản phẩm
      </h3>

      <ul class="category-list form list-unstyled col-sm-12">
        <li class="category-item">
          <a
            href="#"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown"> Lương Thực</a>
        </li>
        <li class="category-item">
          <a
            href="#"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown"> Thực Phẩm Đóng Gói</a
          >
        </li>
        <li class="category-item">
          <a
            href="#"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown"> Thực Phẩm Tươi Sống</a
          >
        </li>
        <li class="category-item">
          <a
            href="#"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown"> Bánh Kẹo</a
          >
        </li>
        <li class="category-item">
          <a
            href="#"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown">Gia Vị</a
          >
        </li>
        <li class="category-item">
          <a
            href="#"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown">Nhu Yếu Phẩm Khác</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "AllProduct",
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");
@import "Listcategory.scss";
</style>