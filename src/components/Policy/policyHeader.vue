<template>
  <div class="policyHeader">
    <div class="policy__logo d-flex align-items-center">
      <a
        href=""
        class="policy__logo-link d-flex align-items-center text-decoration-none"
      >
        <img
          src="../../assets/login/icon.png"
          alt=""
          class="policy__logo-img"
        />
        <span class="policy__logo-title">Helpee</span>
      </a>
      <span class="policy-text">Hỗ Trợ</span>
    </div>
    <div class="policy-navbar">
      <div class="policy-heading">
        <h3 class="policy-heading__title">
          Xin chào, Helpee có thể giúp gì cho bạn?
        </h3>
        <input class="input" type="text" placeholder="Search..." />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "policyHeader",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap");
.policyHeader {
  font-family: "Open Sans", sans-serif;
}
.policy__logo-img {
  width: 100px;
  height: 80px;
}
.policy__logo-title {
  font-size: 40px;
  font-weight: bold;
  color: #ed4d27;
  font-family: "Bonheur Royale", cursive;
  border-right: 3px solid rgba(0, 0, 0, 0.3);
  padding-right: 18px;
}
.policy-text {
  font-size: 1.4rem;
  font-weight: 600;
  padding-left: 10px;
  color: #ed4d27;
}

.policy-navbar {
  background-color: #ed4d27;
  margin-bottom: 10px;
}
.policy-heading {
  text-align: center;
}
.policy-heading__title {
  padding: 30px 0 30px 0;
  font-size: 1.8rem;
  color: #fff;
  font-weight: 600;
  line-height: 34px;
}
.input {
  margin-bottom: 30px;
  width: 38%;
  border-radius: 16px;
  outline: none;
  padding: 12px;
  font-size: 1.4rem;
  border: none;
}

@media (max-width: 767px) {
  .input {
    display: none;
  }
  .policy-navbar {
    margin-bottom: 0;
  }
}
</style>
