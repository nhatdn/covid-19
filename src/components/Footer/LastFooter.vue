<template>
  <div class="LastFooter">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center lastfooter">
            <p class="lastfooter--content m-0">
              © 2021 Chiến binh Covid - TPDNQ
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LastFooter',
  data: function () {
    return {
      clicked: 0,
    };
  }
};
</script>

<style scoped>
.LastFooter {
  background-color: #fff;
}
.lastfooter {
  padding: 25px 0;
}
.lastfooter--content {
  font-family: Open Sans;
  font-size: 20px;
  line-height: 30px;
  color: #ee4d2d;
}
@media (max-width: 767px) {
  .lastfooter--content {
    font-size: 16px;
    line-height: 25px;
  }
}
</style>
