<template>
  <div class="policyList">
    <nav class="policy">
      <h3 class="policy-Heading text-uppercase">
        <b-icon
          class="list-ul policy_icon"
          icon="list"
          id="search-bar"
        ></b-icon>
        Danh mục
      </h3>
      <ul class="policy-list">
        <li class="policy-item">
          <router-link to="/home/policy" class="policy-item__link--active text-decoration-none">
            <span class="policy-item__title">Chính Sách Bảo Mật</span>
          </router-link>
        </li>
        <li class="policy-item">
          <router-link to="/home/policy" class="policy-item__link text-decoration-none">
            <span class="policy-item__title">Chăm Sóc Khách Hàng</span>
          </router-link>
        </li>
        <li class="policy-item">
          <router-link to="/home/policy" class="policy-item__link text-decoration-none">
            <span class="policy-item__title">Chính Sách Giao Hàng</span>
          </router-link>
        </li>
        <li class="policy-item">
          <router-link to="/home/policy" class="policy-item__link text-decoration-none">
            <span class="policy-item__title">Vận Chuyển</span>
          </router-link>
        </li>
        <li class="policy-item">
          <router-link to="/home/policy" class="policy-item__link text-decoration-none">
            <span class="policy-item__title">Chính Sách Bảo Hành</span>
          </router-link>
        </li>
        <li class="policy-item">
          <router-link to="/home/policy" class="policy-item__link text-decoration-none">
            <span class="policy-item__title">Thanh Toán</span>
          </router-link>
        </li>
        <li class="policy-item">
          <router-link to="/home/policy" class="policy-item__link text-decoration-none">
            <span class="policy-item__title">Điều Khoản Sử Dụng</span>
          </router-link>
        </li>
        <li class="policy-item">
          <router-link to="/home/policy" class="policy-item__link text-decoration-none">
            <span class="policy-item__title">Trung Tâm Trợ Giúp</span>
          </router-link>
        </li>
        <li class="policy-item">
          <router-link to="/home/policy" class="policy-item__link text-decoration-none">
            <span class="policy-item__title">Helpee Blog</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AllPolicy",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");
.policyList {
  font-family: "Open Sans", sans-serif;
}

.policy {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.3);
}

.policy-Heading {
  font-size: 1.4rem;
  font-weight: bold;
  padding: 8px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.policy_icon {
  font-size: 2rem;
}

.policy-list {
  margin: 10px 10px 10px 16px;
}

.policy-item {
  margin-bottom: 16px;
}

.policy-item__link {
  color: #000;
  font-size: 1.4rem;
  display: block;
  line-height: 1.8rem;
}

.policy-item__link:hover > .policy-item__title {
  text-decoration: underline;
  transition: width 0.4s linear;
}

.policy-item__link::after {
  content: "";
  width: 0;
  height: 2px;
  background: rgba(0, 0, 0, 0.3);
}
.policy-item__link:hover {
  color: #ed4d27;
}

.policy-item__link:hover::after {
  color: #ed4d27;
  margin-right: 3px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  transition: left 250ms ease-in-out, right 250ms ease-in-out;
  opacity: 0;
}

.policy-item__title {
  display: inline-block;
}

.policy-item__link--active {
  color: #ed4d27;
  font-size: 1.4rem;
  display: block;
  line-height: 1.8rem;
}
</style>