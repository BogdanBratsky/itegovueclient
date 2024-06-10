<template>
    <itego-header></itego-header>
    <div class="container">
        <div style="display: flex; flex-direction: column; min-height: 100vh;">
            <router-view></router-view>
        </div>
    </div>
    <itego-footer></itego-footer>
</template>

<script>
import ItegoPoster from '../../components/ItegoPoster.vue';
import ItegoServices from '../../components/ItegoServices.vue';

export default {
    name: 'MainView',
    components: {
        ItegoPoster,
        ItegoServices
    },
    mounted() {
        document.title = "ITEGO";
    }
}
</script>

<style lang="scss">
@import '../../variables.scss';

</style>