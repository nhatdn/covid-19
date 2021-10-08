<template>
  <div class="TopBanner">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="top-banner">
                    <img class="top-banner__img" src="../../assets/banner/banner.png" alt="banner">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBanner'
}
</script>

<style scoped lang="scss">
.TopBanner {
    background-color: #f5f5f5;
}
.container {
    background-color: #FFF;
}
.top-banner {

    padding: 20px 0;

    &__img {
        display: block;
        margin: 0 auto;
        width: 100%;
    }
}
</style>
