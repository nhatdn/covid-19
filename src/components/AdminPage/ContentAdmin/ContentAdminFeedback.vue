<template>
  <div class="ContentAdmin">
    <div class="content">
      <form class="content__form2">
        <h4 class="content__form--text py-3 px-3">Quản lý đóng góp</h4>

        <table class="content__form--table table table-bordered table-striped table-hover">
          <thead class="table-secondary border-top border-bottom fw-bold">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tài khoản</th>
              <th scope="col">Email</th>
              <th scope="col">Nội dung</th>
              <th scope="col">Phản hồi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in account_menu" :key="index">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.account_name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.feedback }}</td>
              <td class="justify-content-center">
                <b-icon
                  icon="pencil-square"
                  class="mx-2 content__table--icon"
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
          email: "ntmd.npk@yahoo.com",
          feedback:
            "Nhiều lúc tui cũng không hiểu ha, tại sao bạn có thể tuyệt vời đến mức khó hiểu như vậy? ^^  Xin chào mọi người. Em là một thành viên của nhóm khác, nhưng em vào đây vì có anh í ở đây. Em nói ra điều này chắc có hơi sai, vì anh í có người yêu ròi. Nhưng mà em thật sự bị u mê ảnh í chời. Người gì mà hoạt bát, đáng yêu lại còn chuẩn gu của em, ảnh cười 1 phát là em đỡ khum nổi luonnn. Buồn một chút, nhưng hỏng sao, tại zì cũng chỉ mới chào hỏi sương sương thôi à chứ anh í chưa có quen biết với em, nên em sẽ lẳng lặng không để ảnh biết em từng để ý ảnh đâu á. Em còn chưa kịp crush ảnh nữa mà, người ta mới để ý thôi í nha!!!! À quên, đọc nảy giờ chắc anh hỏng nghĩ là em nói anh đâu ha, anh \"Tiger\". Nhưng mà là anh đóoooooo. Em cũng chỉ nói để anh biết là có một người để ý anh ngay lần đầu gặp chỉ vì cái phong thái cầm mic làm MC của anh thui đó!!!! :>>>",
        },
        {
          id: 2,
          account_name: "NPK001",
          email: "ntmd.npk@yahoo.com",
          feedback:
            "Nhiều lúc tui cũng không hiểu ha, tại sao bạn có thể tuyệt vời đến mức khó hiểu như vậy? ^^ Xin chào mọi người. Em là một thành viên của nhóm khác, nhưng em vào đây vì có anh í ở đây. Em nói ra điều này chắc có hơi sai, vì anh í có người yêu ròi. Nhưng mà em thật sự bị u mê ảnh í chời. Người gì mà hoạt bát, đáng yêu lại còn chuẩn gu của em, ảnh cười 1 phát là em đỡ khum nổi luonnn. Buồn một chút, nhưng hỏng sao, tại zì cũng chỉ mới chào hỏi sương sương thôi à chứ anh í chưa có quen biết với em, nên em sẽ lẳng lặng không để ảnh biết em từng để ý ảnh đâu á. Em còn chưa kịp crush ảnh nữa mà, người ta mới để ý thôi í nha!!!!",
        },
        {
          id: 3,
          account_name: "NPK001",
          email: "ntmd.npk@yahoo.com",
          feedback:
            "Nhiều lúc tui cũng không hiểu ha, tại sao bạn có thể tuyệt vời đến mức khó hiểu như vậy? ^^",
        },
        {
          id: 4,
          account_name: "NPK001",
          email: "ntmd.npk@yahoo.com",
          feedback:
            "Nhiều lúc tui cũng không hiểu ha, tại sao bạn có thể tuyệt vời đến mức khó hiểu như vậy? ^^ Xin chào mọi người. Em là một thành viên của nhóm khác, nhưng em vào đây vì có anh í ở đây. Em nói ra điều này chắc có hơi sai, vì anh í có người yêu ròi. Nhưng mà em thật sự bị u mê ảnh í chời. Người gì mà hoạt bát, đáng yêu lại còn chuẩn gu của em, ảnh cười 1 phát là em đỡ khum nổi luonnn. Buồn một chút, nhưng hỏng sao, tại zì cũng chỉ mới chào hỏi sương sương thôi à chứ anh í chưa có quen biết với em, nên em sẽ lẳng lặng không để ảnh biết em từng để ý ảnh đâu á. Em còn chưa kịp crush ảnh nữa mà, người ta mới để ý thôi í nha!!!!",
        },
        {
          id: 5,
          account_name: "NPK001",
          email: "ntmd.npk@yahoo.com",
          feedback:
            "Nhiều lúc tui cũng không hiểu ha, tại sao bạn có thể tuyệt vời đến mức khó hiểu như vậy? ^^",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./scss/ContentAdminTypical";
</style>