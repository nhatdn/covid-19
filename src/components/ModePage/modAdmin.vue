<template>
  <div class="ContentAdmin">
    <div class="content">
      <form class="content__form2">
        <h4 class="content__form--text py-3 px-3">Quản lý thành viên</h4>

        <table class="table table-bordered table-striped table-hover">
          <thead class="table-secondary border-top border-bottom">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Tên chủ hộ</th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Thành Viên</th>
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
              <td>{{ item.member }}</td>
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
  name: "AllModPage",
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
          member: 2,
        },
        {
          id: 2,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "232 Trưng Nữ Vương",
          member: 1,
        },
        {
          id: 3,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "232 Trưng Nữ Vương",
          member: 4,
        },
        {
          id: 4,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "232 Trưng Nữ Vương",
          member: 2,
        },
        {
          id: 5,
          account_name: "NPK001",
          head_name: "Trần Văn Kỷ",
          password: "123123123",
          phone: "09322125228",
          address: "232 Trưng Nữ Vương",
          member: 2,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
$font-family: "Open Sans", sans-serif;
$primary-color: #ee4d2d;
$primary-color-dark: #b30d00;
$primary-color-light: #ff8059;

$text-secondary-color: #7b7878;
$border-color: #c4c4c4;
$btn-cancel-hover-color: gainsboro;
$optional-color: #fff;

$form-border-radius: 10px;

// Positioning, Display & Box model, Color, Text và Other (animation, cursor,…).

.ContentAdmin {
  font-family: $font-family;
}
.content {
  &__form,
  &__form2 {
    margin: 40px 10px 10px 10px;

    background: $optional-color;

    border-radius: $form-border-radius;
    box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
  }
  &__form {
    width: 500px;
    padding: 30px;

    &--text {
      font-size: 20px;
      font-weight: 550;
    }
    &--component {
      &---input {
        margin-top: 10px;
        &:focus {
          border-color: $primary-color;

          box-shadow: $primary-color;
          box-shadow: none;
          -webkit-box-shadow: none;
          -webkit-box-shadow: $primary-color;
        }
      }
    }

    &--btn {
      background: $primary-color-light;

      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
    }
  }
  &__table--icon {
    transition: 0.2s;
  }
  &__menubar {
    &--icon {
      width: 25px;
      height: 25px;

      transition: 0.2s;
    }
    &--page {
      width: 30px;
      height: 30px;

      border-radius: 5px;

      color: $optional-color;
      background: $primary-color;
    }
  }
}

@media screen and (min-width: 1024px) {
  .content {
    &__form--btn {
      &:hover {
        color: $optional-color;
        background: $primary-color;

        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.7);
      }
    }
    &__menubar--icon,
    &__table--icon {
      &:hover {
        color: $primary-color;
        transform: scale(1.1);

        cursor: pointer;
      }
    }
  }
}
</style>