<template>
    <div class="Review">
        <div class="top d-flex align-items-center">
            <h6>
                Lê Văn A
            </h6>
            <div class="container-star">
                <img src="../../../../assets/products/star.png" alt="">
                <img src="../../../../assets/products/star.png" alt="">
                <img src="../../../../assets/products/star.png" alt="">
                <img src="../../../../assets/products/star.png" alt="">
                <img src="../../../../assets/products/star.png" alt="">
            </div>
        </div>
        <div class="content">
            Gạo ngon, dẻo, thơm
        </div>
        <div class="bottom">
            <span class="comments">
                <a href="">Bình luận</a>
            </span>
            <span class="likes">
                <a href="">
                    <img src="../../../../assets/products/like.svg" alt="">
                    <span>Thích</span>
                </a>
            </span>
            <span class="comment-date">
                1 ngày trước
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Review'
}
</script>
<style scoped>
.Review {
    margin-top: 15px;
    padding: 5px;
}
h6 {
    margin: 0;
}
a {
    text-decoration: none;
    color: #0750A7;
}
.top h6 {
    font-weight: 600;
    line-height: 30px;
    color: #000000;
    padding-right: 10px;
}
.container-star {
    padding-bottom: 2px;
}
.container-star img {
    padding-right: 2px;
}
.content {
    line-height: 29px;
}
.bottom {
    line-height: 27px;
}
.comments,
.likes {
    padding-right: 25px;
}
.likes a img {
    width: 15px;
    padding-bottom: 5px;
    margin-right: 5px;
}
</style>