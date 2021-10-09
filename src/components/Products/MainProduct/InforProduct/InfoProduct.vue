<template>
    <div class="InfoProduct">
        <div class="container">
            <h3 class="section-title">
                Thông tin sản phẩm
            </h3>
            <p class="p-description">
                Gạo thơm A An ST21 túi 5kg được thu hoạch từ giống lúa ST21 tự nhiên. Gạo của thương hiệu A An được sản xuất trên dây chuyền hiện đại, cam kết không đấu trộn, không chất tạo mùi, mang lại sản phẩm gạo chất lượng, an toàn cho sức khoẻ người dùng
            </p>
            <Feature></Feature>
            <Feature></Feature>
            <Feature></Feature>
            <Feature></Feature>
            <Feature></Feature>
            <Feature></Feature>
            <Feature></Feature>
            <Feature></Feature>
            <Feature></Feature>
            <Feature></Feature>
        </div>
    </div>
</template>
<script>
import Feature from './Feature.vue'
export default {
    components: {
        Feature
    },
    name: 'InforProduct',
}
</script>
<style scoped>
.InfoProduct {
    background: #FFFFFF;
    padding: 30px 0 15px;
    margin-top: 15px;
    font-family: 'Open Sans';
}
.section-title {
    padding-bottom: 15px;
    font-weight: 600;
}
</style>