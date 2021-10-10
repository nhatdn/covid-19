<template>
  <div class="ContentAdmin">
    <div class="content d-flex justify-content-center">
      <form class="content__form text-center" style="">
        <h4 class="content__form--text">Thêm sản phẩm</h4>
        <div class="content__form--two-components">
          <div class="content__form--component py-3">
            <label for="product" class="content__form--component---label"
              >Tên sản phẩm</label
            >
            <input
              type="text"
              class="content__form--component---input form-control"
              id="product"
              required
            />
          </div>
          <div class="content__form--component d-grid py-3 mx-2">
            <label for="category">Thuộc danh mục</label>

            <select
              class="content__form--component---input form-select category mx-2"
              aria-label="Default select example"
              id="category"
            >
              <option
                v-for="(item, index) in category_menu"
                :key="index"
                :value="index"
              >
                {{ item.category }}
              </option>
            </select>
          </div>
        </div>

        <div class="content__form--btn-container">
          <button type="submit" class="content__form--btn btn">
            Thêm sản phẩm
          </button>
        </div>
      </form>
    </div>
    <div class="content">
      <form class="content__form2">
        <div class="content__form-search--container py-2 px-3">
          <h4 class="content__form-search--text d-flex align-items-center">
            Tìm kiếm sản phẩm:
          </h4>
          <div
            class="
              content__form-search
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <input
              class="content__form-search--input form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <label for="content__form-search--label search-bar"></label>
            <button
              @click="clickEvent = !clickEvent"
              class="content__form-search--icon-container"
            >
              <b-icon icon="search" id="search-bar"></b-icon>
            </button>
          </div>
        </div>

        <h4 class="content__form--text py-2 px-3">Tất cả sản phẩm</h4>

        <table class="table table-bordered table-striped table-hover">
          <thead class="table-secondary border-top border-bottom fw-bold">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in product_menu" :key="index">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.product }}</td>
              <td>{{ item.category }}</td>
              <td>
                <b-icon
                  icon="pencil-square"
                  class="mx-2 content__table--icon"
                ></b-icon
                ><b-icon
                  icon="trash-fill"
                  class="content__table--icon"
                ></b-icon>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          class="
            content__form--menubar
            d-flex
            justify-content-end
            align-items-center
            px-3
            pb-2
          "
        >
          <b-icon
            class="content__menubar--icon"
            icon="arrow-right-circle"
            rotate="180deg"
          ></b-icon>
          <div
            class="
              content__menubar--page
              d-flex
              justify-content-center
              align-items-center
              mx-2
            "
          >
            1
          </div>
          <b-icon
            class="content__menubar--icon"
            icon="arrow-right-circle"
          ></b-icon>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentAdmin",
  data: function () {
    return {
      clicked: 0,
      product_menu: [
        {
          id: 1,
          product: "alo alo",
          category: "Lương thực",
        },

        {
          id: 2,
          product: "xin anh em",
          category: "Thực phẩm đóng gói",
        },

        {
          id: 3,
          product: "chú ý",
          category: "Bánh kẹo",
        },

        {
          id: 4,
          product: "nghe rõ",
          category: "Lương thực",
        },
        {
          id: 5,
          product: "trả lời",
          category: "Lương thực",
        },
      ],
      category_menu: [
        {
          id: 1,
          category: "Lương thực",
        },
        {
          id: 2,
          category: "Bánh kẹo",
        },
        {
          id: 3,
          category: "Thực phẩm đóng gói",
        },
        {
          id: 4,
          category: "Gia vị",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.content {
  &__form {
    width: 100%;
  }
}
@import "./scss/ContentAdminTypical";
</style>