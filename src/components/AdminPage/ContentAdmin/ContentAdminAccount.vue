<template>
  <div class="ContentAdmin">
    <div class="content d-flex justify-content-center">
      <form class="content__form text-center" style="">
        <h4 class="content__form--text">Thêm mới tài khoản</h4>

        <div class="content__form--component py-3">
          <label for="account_amount" class="content__form--component---label"
            >Số lượng tài khoản</label
          >
          <input
            type="number"
            class="content__form--component---input form-control"
            min="1"
            id="account_amount"
            pattern="[0-9]+"
            required
          />
        </div>

        <div class="content__form--btn-container">
          <button type="submit" class="content__form--btn btn">
            Thêm tài khoản
          </button>
        </div>
      </form>
    </div>
    <div class="content">
      <form class="content__form2">
        <h4 class="content__form--text py-3 px-3">Quản lý tài khoản</h4>

        <table class="table table-bordered table-striped table-hover">
          <thead class="table-secondary border-top border-bottom">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Tên chủ hộ</th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Phân quyền</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in account_menu" :key="index">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.account_name }}</td>
              <td>{{ item.head_name }}</td>
              <td>{{ item.password }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.level }}</td>
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
      account_menu: [
        {
          id: 1,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "232 Trưng Nữ Vương",
          level: 2,
        },
        {
          id: 2,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "232 Trưng Nữ Vương",
          level: 1,
        },
        {
          id: 3,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "232 Trưng Nữ Vương",
          level: 0,
        },
        {
          id: 4,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "232 Trưng Nữ Vương",
          level: 2,
        },
        {
          id: 5,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "232 Trưng Nữ Vương",
          level: 2,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.content{
  &__form {
    // This only for Account
    width: 500px;}}
@import "./scss/ContentAdminTypical"
</style>