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
          <a  @click="sendLuongThuc()"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown"> Lương Thực </a>
        </li>
        <li class="category-item">
          <a 
           @click="sendThucPhamDongGoi()"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown"> Thực Phẩm Đóng Gói </a>
        </li>
        <li class="category-item">
          <a 
          @click="sendThucPhamTuoiSong()"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown"> Thực Phẩm Tươi Sống </a>
        </li>
        <li class="category-item">
          <a @click="sendBanhKeo()"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown"> Bánh Kẹo </a>
        </li>
        <li class="category-item">
          <a 
            @click="sendGiaVi()"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown"> Gia Vị </a>
        </li>
        <li class="category-item">
          <a 
            @click="sendNhuYeuPhamKhac()"
            class="category-item_link text-decoration-none btn dropdown-toggle"
            data-toggle="dropdown"> Nhu Yếu Phẩm Khác </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import { bus } from "../../main.js";

export default {
  name: "AllProduct",
  data() {
    return {
      category: [
        "Lương Thực",
        "Thực Phẩm Đóng Gói",
        "Thực Phẩm Tươi Sống",
        "Bánh Kẹo",
        "Gia Vị",
        "Nhu Yếu Phẩm Khác",
      ]
    }
  },
  computed: mapGetters(['banhKeo', 'luongThuc', 'giaVi', 'nhuYeuPhamKhac', 'thucPhamDongGoi','thucPhamTuoiSong']),
  methods: {
    sendBanhKeo() {
        bus.$emit("sendBanhKeo", this.banhKeo);
    },
    sendLuongThuc() {
        bus.$emit("sendLuongThuc", this.luongThuc);
    },
    sendGiaVi() {
      bus.$emit("sendGiaVi", this.giaVi);
    },
    sendNhuYeuPhamKhac() {
      bus.$emit("nhuYeuPhamKhac", this.nhuYeuPhamKhac);
    },
    sendThucPhamDongGoi() {
      bus.$emit("thucPhamDongGoi", this.thucPhamDongGoi);
    },
    sendThucPhamTuoiSong(){
      bus.$emit("thucPhamTuoiSong", this.thucPhamTuoiSong);
    }
  }
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");
@import "Listcategory.scss";
</style>