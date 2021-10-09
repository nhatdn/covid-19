<template>
    <div class="ProductReviews">
        <div class="container">
            <div class="row row-title">
                <h3>
                    Đánh giá sản phẩm
                </h3>
            </div>
            <div class="row row-content d-flex  align-items-center text-center">
                <div class="summary col-md-2">
                    <div class="score">
                        <span>5.0</span>
                    </div>
                    <div class="average">
                        <img src="../../../../assets/products/big-star.png" alt="">
                    </div>
                    <div class="count d-inline-flex">
                        <span>3</span>
                        <p>đánh giá</p>
                    </div>
                </div>
                <div class="detail col-md-6">
                    <Detail></Detail>
                </div>
                <div class="your-review-wrap  col-md-4">
                    <h6>Gửi đánh giá của bạn</h6>
                    <div class="rate">
                        <a href="">
                            <ul class="d-flex justify-content-center">
                                <li><img src="../../../../assets/products/empty-star.png" alt=""></li>
                                <li><img src="../../../../assets/products/empty-star.png" alt=""></li>
                                <li><img src="../../../../assets/products/empty-star.png" alt=""></li>
                                <li><img src="../../../../assets/products/empty-star.png" alt=""></li>
                                <li><img src="../../../../assets/products/empty-star.png" alt=""></li>
                            </ul>
                        </a>
                    </div>
                </div>
            </div>
            <div class="mod-reviews">
                <Review></Review>
                <Review></Review>
                <Review></Review>
            </div>
            <div class="review-pagination d-flex justify-content-end align-items-center">
                <button class="pagination-arrow pre-pagination-arrow d-flex justify-content-center align-items-center" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
                </button>
                <button class="button-page button-solid">1</button>
                <button class="button-page button-no-outline">2</button>
                <button class="pagination-arrow next-pagination-arrow d-flex justify-content-center align-items-center" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
                </button>
            </div>
            <div class="ask-box">
                <span>
                    <textarea id="ask-box" placeholder="Mời bạn nhập bình luận...." rows="5" maxlength="300" height="100%" type="text"></textarea>
                </span>
                <button class="button-submit">Bình luận</button>
            </div>
        </div>
    </div>
</template>
<script>
import Detail from './Detail.vue'
import Review from '../ProductReviews/Review.vue'
export default {
    name: 'ProductReviews',
    components: {
        Detail,
        Review,
    }
}
</script>
<style scoped>
.ProductReviews {
    background: #FFFFFF;
    padding: 30px 0 15px;
    margin-top: 15px;
    font-family: 'Open Sans';
}
ul {
    list-style-type: none;
    padding: 0;
}
.row-content {
    border: 1px solid #898989;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px 0;
}
.score span {
    font-weight: 600;
    font-size: 30px;
    line-height: 41px;
    color: #898989;
}
.average img {
    max-width: 100%
}
.count {
    line-height: 27px;
    color: #898989;
}
.count p {
    margin-left: 5px;
}
.detail {
    border-left: 1px solid #898989;
    border-right: 1px solid #898989;
    padding-right: 0;
}
.your-review-wrap h6 {
    font-weight: 600;
    line-height: 30px;
    color: #000000;
}
.rate a ul li {
    margin-left: 5px;
}
.rate a ul li img {
    max-width: 100%;
}
.review-pagination {
    margin-top: 20px;
}
.review-pagination button {
    margin-right: 20px;
}
.pagination-arrow {
    width: 1.75em;
    height: 1.75em;
    border-radius: 50%;
    border: 2px solid #898989;
    padding: 0;
    opacity: .7;
    background: #ccc;
}
.pagination-arrow svg {
    width: 1em;
    height: 1em;
}
.pre-pagination-arrow {
    transform: scaleX(-1);
}
.button-page {
    border: none;
    border-radius: 25%;
}
button.button-page.button-solid {
    background: #ED4D27;
    color: #FFFFFF;
}
.ask-box {
    margin-top: 20px;
}
.ask-box span textarea {
    width: 100%;
    border: 1px solid #898989;
    border-radius: 15px;
    padding: 10px;
    outline: none;
    vertical-align: baseline;
}
.button-submit {
    background: #ED4D27;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    padding: 5px 15px;
}
@media (max-width: 425px) {
    .average img {
        max-width: 25%;
    }
    .review-pagination {
        justify-content: center!important;;
    }
}
</style>