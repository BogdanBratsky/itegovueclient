<template>
    <router-view></router-view>
    <ScrollToTopBtn/>
</template>

<script>
import ScrollToTopBtn from './components/ScrollToTopBtn.vue';

export default {
    name: 'App',
    components: {
        ScrollToTopBtn
    }
}
</script>

<style lang="scss">
@import './variables.scss';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

li {
    text-decoration: none;
    // list-style: none;
}

html, body {
  height: 100%;
}

body {
    background-color: $backgroundColor;
    font-family: "Jost", sans-serif;
}

.container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}
</style>
