<template>
    <div class="InforUpdate">
        <HeaderLogin></HeaderLogin>
        <MainInforUpdate></MainInforUpdate>
        <FooterInforUpdate></FooterInforUpdate>
    </div>
</template>
<script>
import MainInforUpdate from '../../../components/InforUpdate/MainInforUpdate/MainInforUpdate.vue';
import HeaderLogin from "../../../components/HeaderLogin/HeaderLogin.vue";
import FooterInforUpdate from '../../../components/InforUpdate/FooterInforUpdate/FooterInforUpdate.vue';
export default {
    name:'InforUpdate',
    components: {
        MainInforUpdate,
        HeaderLogin,
        FooterInforUpdate
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
.InforUpdate {
    font-family: 'Open Sans';
}
</style>