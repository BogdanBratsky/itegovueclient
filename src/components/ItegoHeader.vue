<template>
    <header :class="{'header': true, 'header--fixed': isFixed, 'header--hidden': isHidden}">
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
                    <div 
                        @mouseover="handleMouseEnter" 
                        @mouseleave="handleMouseLeave"
                        class="header__options-item"
                    >
                        Услуги
                        <img src="../assets/images/interface/down.svg" alt="">
                        <ul 
                            v-if="servicesIsOpen" 
                            class="services-list"
                            @mouseover="handleMouseEnter" 
                            @mouseleave="handleMouseLeave"
                        >
                            <li class="services-list__item">Администрирование</li>
                            <li class="services-list__item">Техническая поддержка</li>
                            <li class="services-list__item">Сервера 1с</li>
                            <li class="services-list__item">Ремонт компьютеров и орг. техники</li>
                            <li class="services-list__item">Подбор оборудования</li>
                            <li class="services-list__item">Подбор серверов в дата-центре</li>
                            <li class="services-list__item">Рекламные компании Яндекс.Директ</li>
                            <li class="services-list__item">Антивирусная защита</li>
                            <li class="services-list__item">IP-телефония</li>
                            <li class="services-list__item">ИТ-аутсорсинг</li>
                            <li class="services-list__item">Резервное копирование данных</li>
                            <li class="services-list__item">Миграция в облако</li>
                            <li class="services-list__item">Видеонаблюдение</li>
                        </ul>
                    </div>
                    <div class="header__options-item">О компании</div>
                    <div class="header__options-item">FAQ</div>
                </div>
                <div class="header__phone" @click="togglePhoneVisibility">
                    <span v-if="!isPhoneVisible">+7 (499) 348 9...</span>
                    <span v-else>+7 (499) 348 99 33</span>
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
                        @click="showForm"
                    >
                        Оставить заявку
                    </div>
                </div>
                <div class="header__burger">&#9776;</div>
            </nav>
        </div>
    </header>

    <ItegoForm v-if="isOpen" @close="showForm"/>
</template>

<script>
import ItegoForm from '../components/ItegoForm.vue';

export default {
    data() {
        return {
            isOpen: false,
            isFixed: false,
            isHidden: false,
            isPhoneVisible: false,
            lastScrollTop: 0,
            servicesIsOpen: false,
            isMouseOverServices: false,
            isMouseOverMenu: false,
        }
    },
    components: {
        ItegoForm,
    },
    methods: {
        showForm() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        },
        togglePhoneVisibility() {
            this.isPhoneVisible = !this.isPhoneVisible;
        },
        handleScroll() {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > this.lastScrollTop && currentScroll > 50) {
                this.isHidden = true;
            } else {
                this.isHidden = false;
            }

            this.isFixed = currentScroll > 50;
            this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        },
        handleMouseEnter() {
            this.servicesIsOpen = true;
        },
        handleMouseLeave() {
            this.servicesIsOpen = false;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss" scoped> 
@import '../variables.scss';

.header {
    font-family: "Jost", sans-serif;
    transition: top 0.3s ease-in-out;

    &--fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 5;
        background-color: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid #e2e2e2;
    }

    &--hidden {
        top: -100px;
    }

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
    }

    #logo-img {
        user-select: none;
        height: 35px;
    }

    &__options {
        user-select: none;
        display: flex;
        font-size: 17px;
        
        &-item {
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 5px 11px;
            border-radius: 5px;
            color: black;

            &:hover {
                background-color: #f0f0f0;
                transition: 0.2s;
            }

            img {
                max-width: 10px;
                margin-left: 6px;
            }
        }
    }

    .services-list {
        position: absolute;
        top: 100%;
        left: 0;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 10px #dfdfdf;
        border-radius: 5px;
        background-color: white;
        border: 1px solid #e6e6e6;
        font-size: 14px;
        &__item {
            width: 250px;
            display: flex;
            align-items: center;
            padding: 12px;
            border-bottom: 1px solid #e6e6e6;
            color: #4e4e4e;
            &:hover {
                background-color: #f3f3f3;
                text-decoration: underline;
                transition: 0.2s;
            }
        }
    }

    &__phone {
        color: #03001a;
        cursor: pointer;
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

        &:active {
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
