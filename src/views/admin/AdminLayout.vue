<template>
    <div class="container">
        <div style="display: flex; flex-direction: column; min-height: 100vh;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainView',
    mounted() {
        document.title = "ITEGO";
    }
}
</script>

<style lang="scss">
@import '../../variables.scss';

</style>