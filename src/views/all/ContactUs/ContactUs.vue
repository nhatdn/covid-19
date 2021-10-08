<template>
    <div class="AllPolicy">
        <FixedMainHeader></FixedMainHeader>
        <div class="container">
            <div class="row">
                <div class="col-8">
                <p>
                  Dự án Helpee ra đời trong hoàn cảnh cả thế giới đang trong tình trạng dịch bệnh ngày càng phức tạp, 
                  và ở việt nam nói chung và thế giới nói riêng, vấn nạn thiếu lương thực và không thể tự đi mua lương thực, 
                  được xem là một trong những vấn đề quan trọng và cấp bách nhất hiện nay. Cho nên chúng tôi đã xây dựng lên 
                  một trang website để hỗ trợ những vấn đề này.
                </p>
                <p>
                      Với sự nhiệt huyết và làm việc nhóm một cách chỉnh chu bài bản, chúng tôi gồm 5 
                      thành viên đã lên kế hoạch và đưa ra dự định để có thể cùng nhau lên phương án và xây dựng ra được một ứng
                      dụng để có thể phục vụ bà con trong mùa dịch khó khăn này, mong mọi người sử dụng ứng dụng một cách thỏa
                      mái và an toàn nhất có thể.
                    </p>
                    <!-- <policyHeader></policyHeader> -->
                </div>
                <div class="col-4">
                  <ul>
                  <li style="list-style: none;"><h3>Ban Lãnh Đạo</h3></li>
                  <li style="list-style: none;"><span>Ban lãnh đạo của Helpee:</span></li>
                  <li><a href="https://www.facebook.com/ntmd.npk">Nguyễn Thị Mỹ Duyên</a></li>
                  <li><a href="https://www.facebook.com/loser.NDN">Nguyễn Đình Nhật</a></li>
                  <li><a href="https://www.facebook.com/quan.bbro/">Dương Công Quân</a></li>
                  <li><a href="https://www.facebook.com/tucute200/">Trần Xuân Tú</a></li>
                  <li><a href="https://www.facebook.com/phong.levan.5815255">Lê Văn Phong</a></li>
                  </ul>
                    <!-- <policyList></policyList> -->
                </div>
                
                    <!-- <policyContent></policyContent> -->
                
            </div>
        </div>
        <Footer></Footer>
        <LastFooter></LastFooter>
    </div>
</template>

<script>

// import policyHeader from "../../../components/Policy/policyHeader.vue";
// import policyList from "../../../components/Policy/policyList.vue";
// import policyContent from "../../../components/Policy/policyContent.vue";
// import FixedMainHeader from "../../../components/FixedMainHeader/FixedMainHeader.vue";
// import Footer from "../../../components/Footer/Footer.vue";
// import LastFooter from "../../../components/Footer/LastFooter.vue";

export default {
  name: "AllPolicy",
  data: function () {
    return {
      clicked: 0,
    };
  },
  components: {
  },
  created(){
    document.title = "Liên hệ";
  }
};
</script>

<style scoped>
.col-4 {
  padding-left: 45px;
}
p {
  line-height: 25px;
  font-size: 20px;
  font-family: sans-serif;
  text-align: justify;
  margin: 30px 0px;
}
.AllPolicy {
  margin: 10px 0px;
}
li {
  list-style: circle;
}
a {
  text-decoration: none;
  color : black;
  font-family: sans-serif;  
  padding: 5px 0px;
  display: block;
  margin: 3px 8px;
}
a:hover {
  text-decoration: underline;
}
h3, span {
  padding: 10px 0px;
  font-size: 25px;
  font-family: sans-serif;  
  font-weight: 600;
}
span {
  display: block;
  font-size: 20px;
  padding-bottom: 20px;
}
</style>