<template>
    <header class="header">
        <div class="container">
            <nav class="header__nav">
                <div class="header__logo-wrap">
                    <router-link to="/">
                        <img id="logo-img" src="../assets/images/logo.svg" alt="">
                    </router-link>
                </div>
                <div class="header__options">
                    <router-link to="/main">
                        <div class="header__options-item">Главная</div>
                    </router-link>
                    <div class="header__options-item">Решения</div>
                    <div class="header__options-item">Сравнения</div>
                    <div class="header__options-item">Услуги</div>
                </div>
                <div class="header__phone">
                    +7 (499) 348 99 33
                </div>
                <div class="header__buttons">
                    <router-link to="/blog">
                        <div class="header__blog-btn">
                            Блог
                            <img src="../assets/images/interface/blog.svg" alt="">
                        </div>
                    </router-link>
                    <div 
                        class="header__btn"
                        @click="showForm()"
                    >
                        Оставить заявку
                    </div>
                </div>
                <div class="header__burger">&#9776;</div>
            </nav>
        </div>
    </header>

    <div @click="showForm()" v-if="isOpen" class="background"></div>
    <ItegoForm v-if="isOpen" @close="showForm()"/>
</template>

<script>
import ItegoForm from '../components/ItegoForm.vue';

export default {
    data() {
        return {
            isOpen: false
        }
    },
    components: {
        ItegoForm,
    },
    methods: {
        showForm() {
            this.isOpen = !this.isOpen
            if (this.isOpen == true) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    }
}
</script>

<style lang="scss" scoped> 
@import '../variables.scss';

.background {
    // z-index: 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.6;
    width: 100%;
    height: 100vh;
}

.header {
    /* background-color: white;
    border: 1px solid #dfdfdf;
    box-shadow: 0 0 10px #dfdfdf;
    margin-bottom: 10px; */
    font-family: "Jost", sans-serif;
    &__nav {
        margin: 0 auto;
        padding: 16px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__logo-wrap {
        display: flex;
        align-items: center;
        cursor: pointer;
        /* max-width: 90px;
        max-height: 50px; */
    }
    #logo-img {
        user-select: none;
        height: 35px;
    }
    &__options {
        user-select: none;
        display: flex;
        font-size: 17px;
    }
    &__options-item {
        cursor: pointer;
        padding: 5px 11px;
        border-radius: 5px;
        color: black;
        &:hover {
            background-color: #f0f0f0;
            transition: 0.2s;
        }
        // &:active {
        //     color: red;
        //     transition: 0.1s;
        // }
    }
    &__phone {
        color: #03001a;
    }
    &__buttons {
        display: flex;
        align-items: center;
    }
    &__blog-btn {
        user-select: none;
        display: flex;
        align-items: center;
        color: black;
        background-color: white;
        border: 1px solid #e2e2e2;
        border-radius: 6px;
        box-shadow: 0 0 12px #e2e2e2;
        padding: 6px 10px;
        font-size: 18px;
        margin-right: 12px;
        // &:hover {
        //     background-color: #f7f8ff;
        //     transition: 0.2s;
        // }
        &:active {
            // border: 1px solid $btnHoverCol;
            background-color: #ffffff;
        }
        & img {
            max-width: 15px;
            max-height: 20px;
            margin-left: 6px;
        }
    }
    &__btn {
        user-select: none;
        cursor: pointer;
        padding: 6px 10px;
        border: 1px solid #e2e2e2;
        border-radius: 6px;
        background-color: $buttonColor;
        color: white;
        font-size: 18px;
        box-shadow: 0 0 12px #bfbfbf;
        &:hover {
            background-color: $btnHoverCol;
            transition: 0.2s;
        }
    }
    &__burger {
        display: none;
        font-size: 25px;
    }
}

</style>