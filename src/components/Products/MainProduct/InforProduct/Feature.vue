<template>
    <div class="Feature">
        <div class="general-features">
            <ul>
                <li>
                    <h6>Đặc tính</h6>
                    <p>Dẻo nhiều, cơm mềm</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Feature',
}
</script>
<style scoped>
.general-features ul {
    padding: 0;
}
.general-features ul li {
    list-style-type: none;
    display: flex;
}
.general-features ul li h6 {
    width: 30%;
    line-height: 26px;
    color: #898989;
}
</style>