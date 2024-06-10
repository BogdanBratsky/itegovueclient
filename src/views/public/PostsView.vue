<template>
    <div class="wrapper">
        <router-view></router-view>
        <ItegoCategoryList/>
        <!-- <ScrollToTopBtn/> -->
    </div>
</template>

<script>
import ItegoCategoryList from '../../components/ItegoCategoryList.vue';
// import ScrollToTopBtn from '../../components/ScrollToTopBtn.vue';

export default {
    components: {
        ItegoCategoryList,
        // ScrollToTopBtn
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: space-between;
}
</style>