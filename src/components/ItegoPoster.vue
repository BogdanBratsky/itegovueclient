<template>
    <div class="poster">
        <div class="poster__info">
            <header class="poster__title">ITEGO</header>
            <div class="poster__text">
                Мы небольшая команда специалистов, которая подходит индивидуально к каждому клиенту. В нашей команде только настоящие профессионалы своего дела.
                Оставьте свои данные и мы поможем Вам более эффективно построить it-инфраструктуру.
            </div>
            <div 
                class="poster__btn"
                @click="showForm()"    
            >
                Оставить заявку
            </div>
        </div>
    </div>
    <div @click="showForm()" v-if="isOpen" class="background"></div>
    <ItegoForm v-if="isOpen" @close="showForm()"/>
</template>

<script>
import ItegoForm from '../components/ItegoForm.vue';

export default {
    name: 'ItegoPoster',
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
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
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
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.6;
    width: 100%;
    height: 100vh;
}

.poster {
    background: white url('../assets/images/poster/poster.svg') no-repeat;
    background-position: right;
    box-shadow: 0 0 12px #dfdfdf;
    width: 100%;
    padding: 30px;
    border-radius: 12px;
    margin-bottom: 10px;

    &__title {
        font-size: 2.375rem; // 38px
    }

    &__text {
        margin: 30px 0;
        width: 100%;
        max-width: 700px;
        font-size: 1.25rem; // 20px
        color: grey;
    }

    &__btn {
        user-select: none;
        cursor: pointer;
        display: inline-block;
        background-color: $buttonColor;
        color: white;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 1.5rem; // 24px

        &:hover {
            background-color: $btnHoverCol;
            transition: 0.2s;
        }
    }
}

@media (max-width: 768px) {
    .poster {
        padding: 20px;
        border-radius: 8px;

        &__title {
            font-size: 1.875rem; // 30px
        }

        &__text {
            font-size: 1.125rem; // 18px
        }

        &__btn {
            font-size: 1.25rem; // 20px
        }
    }
}

@media (max-width: 480px) {
    .poster {
        padding: 15px;
        border-radius: 6px;

        &__title {
            font-size: 1.5rem; // 24px
        }

        &__text {
            font-size: 1rem; // 16px
        }

        &__btn {
            font-size: 1rem; // 16px
        }
    }
}
</style>
