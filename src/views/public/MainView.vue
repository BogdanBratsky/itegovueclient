<template>
    <ItegoPoster/>
    <ItegoAbout/>
    <ItegoServices/>
    <ItegoComparisons/>
</template>

<script>
import ItegoPoster from '../../components/ItegoPoster.vue';
import ItegoServices from '../../components/ItegoServices.vue';
import ItegoComparisons from '../../components/ItegoСomparisons.vue';
import ItegoAbout from '../../components/ItegoAbout.vue';

export default {
    name: 'MainView',
    components: {
        ItegoPoster,
        ItegoServices,
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