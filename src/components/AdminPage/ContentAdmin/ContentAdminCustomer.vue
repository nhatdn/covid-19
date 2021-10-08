<template>
  <div class="ContentAdmin">
    <div class="content d-flex justify-content-center">
      <form class="content__form text-center" style="">
        <h4 class="content__form--text">Thêm mới tài khoản</h4>
        <div class="content__form--components">
          <div class="content__form--component py-3 mx-2">
            <label for="account" class="content__form--component---label"
              >Tài Khoản</label
            >
            <input
              type="text"
              class="content__form--component---input form-control"
              placeholder="Vd: HTD001"
              id="account"
              required
            />
          </div>
          <div class="content__form--component py-3 mx-2">
            <label for="password" class="content__form--component---label"
              >Mật khẩu</label
            >
            <input
              type="password"
              class="content__form--component---input form-control"
              id="password"
              placeholder="**********"
              required
            />
          </div>

          <div class="content__form--component py-3 mx-2">
            <label
              for="account-address"
              class="content__form--component---label"
              >Địa Phương</label
            >
            <input
              type="text"
              class="content__form--component---input form-control"
              id="account-address"
              placeholder="Vd: Hòa Thuận Đông"
              required
            />
          </div>
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
          <thead class="table-secondary border-top border-bottom fw-bold">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Tên tổ trưởng</th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Tên phường</th>
              <th scope="col">Tên tổ dân phố</th>
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
              <td>{{ item.group_number }}</td>
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
          address: "Hòa Thuận Đông",
          group_number: "Tổ 1",
        },
        {
          id: 2,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "Hòa Thuận Đông",
          group_number: "Tổ 1",
        },
        {
          id: 3,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "Hòa Thuận Đông",
          group_number: "Tổ 1",
        },
        {
          id: 4,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "Hòa Thuận Đông",
          group_number: "Tổ 1",
        },
        {
          id: 5,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "Hòa Thuận Đông",
          group_number: "Tổ 1",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.content{
  &__form {
    width: 100%;}}
@import "./scss/ContentAdminTypical"
</style>