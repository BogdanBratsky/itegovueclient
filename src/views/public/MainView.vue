<template>
    <ItegoPoster/>
    <ItegoAbout/>
    <ItegoProducts/>
    <ItegoServices/>
    <ItegoComparisons/>
</template>

<script>
import ItegoPoster from '../../components/ItegoPoster.vue';
import ItegoServices from '../../components/ItegoServices.vue';
import ItegoComparisons from '../../components/ItegoСomparisons.vue';
import ItegoAbout from '../../components/ItegoAbout.vue';
import ItegoProducts from '../../components/ItegoProducts.vue';

export default {
    name: 'MainView',
    components: {
        ItegoPoster,
        ItegoServices,
        ItegoProducts,
        ItegoComparisons,
        ItegoAbout
    },
    mounted() {
        document.title = "Главная";
    }
}
</script>

<style>

</style>