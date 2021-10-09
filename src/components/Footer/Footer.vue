<template>
  <div class="Footer">
    <div class="container footer">
      <div class="row footer--row">
        <div class="col-md-4 footer--items">
          <div class="about-us">
            <h3 class="about-us--title text-uppercase m-0">Về chúng tôi</h3>
            <p class="about-us--content m-0">
              Đây là trang web phi lợi nhuận nhằm hỗ trợ bà con và các cán bộ
              trong công tác “đi chợ hộ”.
            </p>
          </div>

          <div class="category">
            <h3 class="category--title text-uppercase m-0">
              Danh mục sản phẩm
            </h3>
            <ul class="category--form list-unstyled">
              <li class="category--items">
                <a class="category--link text-decoration-none" href=""
                  >Lương thực</a
                >
              </li>
              <li class="category--items">
                <a class="category--link text-decoration-none" href=""
                  >Thực phẩm tươi sống</a
                >
              </li>
              <li class="category--items">
                <a class="category--link text-decoration-none" href=""
                  >Thực phẩm đóng gói</a
                >
              </li>
              <li class="category--items">
                <a class="category--link text-decoration-none" href=""
                  >Nhu yếu phẩm khác</a
                >
              </li>
              <li class="category--items">
                <a class="category--link text-decoration-none" href=""
                  >Bánh kẹo</a
                >
              </li>
              <li class="category--items">
                <a class="category--link text-decoration-none" href=""
                  >Gia vị</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-4 footer--items">
          <div class="policy">
            <h3 class="policy--title text-uppercase m-0">Các chính sách</h3>
            <ul class="policy--form list-unstyled">
              <li class="policy--items">
                <a class="policy--link text-decoration-none" href=""
                  >Chính sách bảo mật</a
                >
              </li>
              <li class="policy--items">
                <a class="policy--link text-decoration-none" href=""
                  >Chính sách chăm sóc khách hàng</a
                >
              </li>
              <li class="policy--items">
                <a class="policy--link text-decoration-none" href=""
                  >Chính sách giao hàng</a
                >
              </li>
              <li class="policy--items">
                <a class="policy--link text-decoration-none" href=""
                  >Vận chuyển</a
                >
              </li>
              <li class="policy--items">
                <a class="policy--link text-decoration-none" href=""
                  >Chính sách bảo hành</a
                >
              </li>
              <li class="policy--items">
                <a class="policy--link text-decoration-none" href=""
                  >Thanh toán</a
                >
              </li>
            </ul>
          </div>

          <div class="donate">
            <h3 class="donate--title text-uppercase m-0">Donate</h3>
            <p class="donate--content m-0">
              Ngân hàng AGRIBANK
              <span class="donate--content__span">5005205192429</span>
            </p>
          </div>
        </div>

        <div class="col-md-4 footer--items">
          <div class="about-helpee">
            <h3 class="about-helpee--title text-uppercase m-0">Về Helpee</h3>
            <ul class="about-helpee--form list-unstyled">
              <li class="about-helpee--items">
                <a class="about-helpee--link text-decoration-none" href=""
                  >Điều khoản sử dụng</a
                >
              </li>
              <li class="about-helpee--items">
                <a class="about-helpee--link text-decoration-none" href=""
                  >Trung tâm trợ giúp</a
                >
              </li>
              <li class="about-helpee--items">
                <a class="about-helpee--link text-decoration-none" href=""
                  >Helpee BLog</a
                >
              </li>
            </ul>
          </div>

          <div class="follow">
            <h3 class="follow--title text-uppercase m-0">
              theo dõi chúng tôi trên
            </h3>
            <div class="follow--icons m-0">
              <div class="h2 m-0 p-0">
                <a class="follow--link" href=""
                  ><b-icon icon="instagram" class="follow--icons"></b-icon
                ></a>
                <a
                  class="follow--link"
                  href="https://www.facebook.com/tucute200/"
                  ><b-icon icon="facebook" class="follow--icons"></b-icon
                ></a>
                <a class="follow--link" href=""
                  ><b-icon icon="twitter" class="follow--icons"></b-icon
                ></a>
                <a class="follow--link" href=""
                  ><b-icon icon="youtube" class="follow--icons"></b-icon
                ></a>
                <a class="follow--link" href=""
                  ><b-icon icon="linkedin" class="follow--icons"></b-icon
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="region text-center">
            <p class="region--content m-0">Quốc gia và Khu vực Việt Nam</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data: function () {
    return {
      clicked: 0,
    };
  }
};
</script>

<style scoped>
.Footer {
  background-color: #ed4d27;
  font-size: 18px;
  font-family: Open Sans;
}
.about-us--title,
.about-us--content,
.category--title,
.policy--title,
.donate--title,
.donate--content,
.about-helpee--title,
.follow--title {
  padding: 20px 0;
  color: #ffffff;
  line-height: 30px;
}

.about-us--title,
.category--title,
.policy--title,
.donate--title,
.about-helpee--title,
.follow--title {
  border-bottom: 4px solid #ffffff;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
}

.about-us,
.category,
.policy,
.donate,
.about-helpee,
.follow {
  padding: 0 15px;
}

.category--link,
.policy--link,
.about-helpee--link {
  color: #ffffff;
  position: relative;
  line-height: 30px;
}

.donate--content__span {
  font-size: 20px;
  font-weight: 500;
}

.category--items,
.policy--items,
.about-helpee--items {
  padding-top: 20px;
}

.follow--icons {
  margin: 15px;
  color: #ffffff;
}

.region {
  padding: 20px 0;
}
.region--content {
  font-weight: 600;
  font-size: 26px;
  line-height: 35px;
  color: #ffffff;
}

@media (min-width: 1024px) {
  .follow--icons {
    transition: 0.4s;
  }
  .follow--link:hover .follow--icons {
    transform: scale(1.1);
  }
  .category--link::after,
  .policy--link::after,
  .about-helpee--link::after {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    top: auto;
    left: 0;
    bottom: -2px;
    background-color: #ffffff;
    transition: 0.5s;
    transform: scaleX(0);
  }
  .category--link:hover.category--link::after,
  .policy--link:hover.policy--link::after,
  .about-helpee--link:hover.about-helpee--link::after {
    transform: scaleX(1);
  }
}
@media (max-width: 991px) {
  .about-us--title,
  .category--title,
  .policy--title,
  .donate--title,
  .about-helpee--title,
  .follow--title {
    font-size: 21px;
  }
}
@media (max-width: 767px) {
  .about-us--title,
  .category--title,
  .policy--title,
  .donate--title,
  .about-helpee--title,
  .follow--title {
    font-size: 20px;
  }
  .about-us--title,
  .about-us--content,
  .category--title,
  .policy--title,
  .donate--title,
  .donate--content,
  .about-helpee--title,
  .follow--title {
    padding: 10px 0;
  }
  .category--items,
  .policy--items,
  .about-helpee--items {
    padding-top: 10px;
  }
  .region--content {
  font-size: 22px;
  line-height: 30px;
}
}
</style>
