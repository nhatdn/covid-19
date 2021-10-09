<template>
    <div class="Detail">
        <ul>
            <li class="d-flex align-items-center justify-content-center">
                <div class="rank d-flex align-items-center">
                    <p>5</p>
                    <img src="../../../../assets/products/star.png" alt="" class="star">
                </div>
                <span class="progress-wrap">
                    <div class="review-progress">
                        <div class="bar bg">
                            
                        </div>
                        <div class="bar fg">
                            
                        </div>
                    </div>
                </span>
                <div class="percent d-flex">
                    <span>3</span>
                    <p>đánh giá</p>
                </div>
            </li>
            <li class="d-flex align-items-center justify-content-center">
                <div class="rank d-flex align-items-center">
                    <p>4</p>
                    <img src="../../../../assets/products/star.png" alt="" class="star">
                </div>
                <span class="progress-wrap">
                    <div class="review-progress">
                        <div class="bar bg">
                            
                        </div>
                        <div class="bar fg" style="width: 0%">
                            
                        </div>
                    </div>
                </span>
                <div class="percent d-flex">
                    <span>0</span>
                    <p>đánh giá</p>
                </div>
            </li>
            <li class="d-flex align-items-center justify-content-center">
                <div class="rank d-flex align-items-center">
                    <p>3</p>
                    <img src="../../../../assets/products/star.png" alt="" class="star">
                </div>
                <span class="progress-wrap">
                    <div class="review-progress">
                        <div class="bar bg">
                            
                        </div>
                        <div class="bar fg" style="width: 0%">
                            
                        </div>
                    </div>
                </span>
                <div class="percent d-flex">
                    <span>0</span>
                    <p>đánh giá</p>
                </div>
            </li>
            <li class="d-flex align-items-center justify-content-center">
                <div class="rank d-flex align-items-center">
                    <p>2</p>
                    <img src="../../../../assets/products/star.png" alt="" class="star">
                </div>
                <span class="progress-wrap">
                    <div class="review-progress">
                        <div class="bar bg">
                            
                        </div>
                        <div class="bar fg" style="width: 0%">
                            
                        </div>
                    </div>
                </span>
                <div class="percent d-flex">
                    <span>0</span>
                    <p>đánh giá</p>
                </div>
            </li>
            <li class="d-flex align-items-center justify-content-center">
                <div class="rank d-flex align-items-center">
                    <p>1</p>
                    <img src="../../../../assets/products/star.png" alt="" class="star">
                </div>
                <span class="progress-wrap">
                    <div class="review-progress">
                        <div class="bar bg">
                            
                        </div>
                        <div class="bar fg" style="width: 0%">
                            
                        </div>
                    </div>
                </span>
                <div class="percent d-flex">
                    <span>0</span>
                    <p>đánh giá</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
p {
    margin: 0;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.rank img {
    padding-left: 3px;
}
.progress-wrap {
    padding: 0 5px;
    width: 65%;
}
.review-progress {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 12px;
}
.bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.bg {
    background: #eff0f5;
}
.fg {
    background: #ED4D27;
}
.percent p {
    padding-left: 3px;
}
@media (max-width: 768px) {
    .progress-wrap {
        width: 70%;
    }
}
@media(min-width: 768px) and (max-width: 992px) {
    .progress-wrap {
        width: 50%;
    }
}
@media (max-width: 376px) {
    .progress-wrap {
        width: 40%;
    }
}
</style>