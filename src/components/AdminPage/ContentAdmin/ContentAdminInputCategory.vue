<template>
  <div class="ContentAdmin">
    <div class="content d-flex justify-content-center">
      <form class="content__form text-center" style="">
        <h4 class="content__form--text">Thêm danh mục sản phẩm</h4>

        <div class="content__form--component py-3">
          <label for="category" class="content__form--component---label"
            >Tên danh mục</label
          >
          <input
            type="text"
            class="content__form--component---input form-control"
            id="category"
            required
          />
        </div>

        <div class="content__form--btn-container">
          <button type="submit" class="content__form--btn btn">
            Thêm danh mục
          </button>
        </div>
      </form>
    </div>
    <div class="content">
      <form class="content__form2">
        <div class="content__form-search--container py-2 px-3">
          <h4 class="content__form-search--text d-flex
           
            align-items-center">
            Tìm kiếm danh mục:
          </h4>
          <div class="content__form-search 
            d-flex
            justify-content-center
            align-items-center">
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

        <h4 class="content__form--text py-2 px-3">Danh mục sản phẩm đã có</h4>

        <table class="table table-bordered table-striped table-hover">
          <thead class="table-secondary border-top border-bottom">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên danh mục</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in category_menu" :key="index">
              <th scope="row">{{ item.id }}</th>
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
    // This only for Account
    width: 500px;
  }
}
@import "./scss/ContentAdminTypical";
</style>