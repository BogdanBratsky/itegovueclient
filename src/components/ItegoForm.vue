<template>
    <form v-if="!formSubmitted" @submit.prevent="sendForm()" action="" class="itego-form">
        <div 
            class="itego-form__cancel"
            @click="close"
        >
            &#10006;
        </div>
        <div class="itego-form__title">
            Оставьте свои данные
        </div>
        <div class="itego-form__label">Ваше имя:</div>
        <input v-model="formData.name" class="itego-form__input" placeholder="Имя" type="text">
        <div class="itego-form__label">Ваш телефон:</div>
        <input v-model="formData.email" class="itego-form__input" placeholder="Телефон" type="text">
        <div class="itego-form__label">Или ваша почта:</div>
        <input v-model="formData.phone" class="itego-form__input" placeholder="E-mail" type="text">
        <div class="itego-form__chkbx">
            <input v-model="formData.consent" type="checkbox" name="" id="">
            Я разрешаю обработку моих персональных данных
        </div>
        <div v-if="errorMessage" class="itego-form__error">{{ errorMessage }}</div>
        <button class="itego-form__btn">Отправить</button>
    </form>
    
    <div v-if="formSuccess" class="itego-form">
        <div class="itego-form__succes-text">
            Спасибо, что оставили заявку!
        </div>
        <div class="itego-form__success-img">
            <img src="../assets/images/card_imgs/9.svg" alt="">
        </div>
        <div @click="closeAndResetUrl" class="itego-form__success-close">
            Закрыть
        </div>
    </div>

    <div @click="closeAndResetUrl" class="background"></div>
</template>

<script>
import { serverAddres } from '../../config.js';
import axios from 'axios';

export default {
    name: 'ItegoForm',
    props: ['close'],
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                consent: false
            },
            formSubmitted: false,
            formSuccess: false,
            errorMessage: '',
            initialUrl: ''
        }
    },
    mounted() {
        // Сохраняем текущий URL при монтировании компонента
        this.initialUrl = window.location.href;
    },
    methods: {
        validateForm() {
            this.errorMessage = '';

            if (!this.formData.name) {
                this.errorMessage = 'Пожалуйста, введите ваше имя.';
                return false;
            }
            if (!this.formData.email && !this.formData.phone) {
                this.errorMessage = 'Пожалуйста, введите ваш телефон или почту.';
                return false;
            }
            if (!this.formData.consent) {
                this.errorMessage = 'Пожалуйста, разрешите обработку персональных данных.';
                return false;
            }
            return true;
        },
        async sendForm() {
            if (!this.validateForm()) {
                return;
            }
            await axios
                .post(`${serverAddres}/send-email`, this.formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    if (response.status === 200) {
                        this.formSubmitted = true;
                        this.formSuccess = true;
                        this.changeUrl('/thanks');
                    } else {
                        this.formSubmitted = true;
                        this.formSuccess = false;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    this.formSubmitted = true;
                    this.formSuccess = false;
                });
        },
        close() {
            this.$emit('close');
        },
        changeUrl(newUrl) {
            const absoluteUrl = new URL(newUrl, window.location.origin);
            history.pushState(null, '', absoluteUrl);
        },
        closeAndResetUrl() {
            this.$emit('close');
            // Возвращаемся к исходному URL
            history.pushState(null, '', this.initialUrl);
            // Перезагружаем страницу
            window.location.reload();
        }
    }
}
</script>

<style lang="scss">
@import '../variables.scss';

.background {
    z-index: 6;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.6;
    width: 100%;
    height: 100vh;
}

.itego-form {
    z-index: 10;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    margin: 12px 0;
    background-color: white;
    border: 1px solid #cfcfcf;
    box-shadow: 0 0 50px #606060;
    width: 500px;
    border-radius: 12px;

    &__succes-text {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        padding: 30px 0;
    }
    &__success-img {
        display: flex;
        justify-content: center;
        img {
            max-width: 300px;
            margin-bottom: 30px;
        }
    }
    &__success-close {
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        font-size: 18px;
        text-decoration: underline;
        color: $buttonColor;
    }
    &__cancel {
        user-select: none;
        cursor: pointer;
        color: #ebebeb;
        position: absolute;
        top: 0;
        right: -40px;
        font-size: 30px;
        &:hover {
            color: #fff7f7;
            transition: 0.7s;
        }
    }
    &__title {
        text-align: center;
        font-size: 25px;
        margin: 30px 0;
    }
    &__label {
        margin-bottom: 6px;
    }
    &__input {
        outline: none;
        border: 1px solid black;
        padding: 11px;
        margin-bottom: 35px;
        width: 100%;
    }
    &__chkbx {
        input {
            width: 16px;
            margin-right: 8px;
        }
        display: flex;
        margin-bottom: 40px;
    }
    &__error {
        color: red;
        margin-bottom: 20px;
    }
    &__btn {
        cursor: pointer;
        font-size: 20px;
        border: none;
        border-radius: 8px;
        padding: 10px;
        background-color: $buttonColor;
        color: white;
        margin-bottom: 40px;
    }
}
</style>
