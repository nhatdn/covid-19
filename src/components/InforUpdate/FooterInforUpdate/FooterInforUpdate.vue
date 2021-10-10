<template>
    <div class="FooterInforUpdate">
        <div class="container">
            <div class="row main-footer-row">
                <p class="p-footer">
                    © 2021 Chiến binh Covid - TPDNQ
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FooterInfoUpdate',
    data: function(){
        return {
        clicked: 0
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
.FooterInforUpdate {
    font-family: 'Open Sans';
    background-color: #EE4D2D;
    color: #FFFFFF;
    padding: 25px 0;
}
p {
    padding: 0;
    margin: 0;
}
.main-footer-row {
    text-align: center;
}
</style>