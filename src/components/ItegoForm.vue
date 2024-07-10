<template>
    <form @submit.prevent="sendForm()" action="" class="itego-form">
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
        <input v-model="formData.phone" @input="validatePhone" class="itego-form__input" placeholder="Телефон" type="text">
        <div v-if="phoneErrorMessage" class="itego-form__error">{{ phoneErrorMessage }}</div>
        <div class="itego-form__label">Или ваша почта:</div>
        <input v-model="formData.email" class="itego-form__input" placeholder="E-mail" type="text">
        <div class="itego-form__policy">
            <router-link to="/privacy-policy" target="_blank" @click="policyAccepted = true">
                Политика конфиденциальности itego
            </router-link>
        </div>
        <div class="itego-form__chkbx">
            <input v-model="formData.consent" :disabled="!policyAccepted" type="checkbox">
            Я разрешаю обработку моих персональных данных
        </div>
        <div v-if="errorMessage" class="itego-form__error">{{ errorMessage }}</div>
        <button class="itego-form__btn">Отправить</button>
    </form>
    
    <div @click="close" class="background"></div>
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
            errorMessage: '',
            phoneErrorMessage: '',
            policyAccepted: false
        }
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
            if (this.formData.phone && !this.formData.phone.match(/^\d+$/)) {
                this.errorMessage = 'Пожалуйста, введите корректный номер телефона.';
                return false;
            }
            if (!this.formData.consent) {
                this.errorMessage = 'Пожалуйста, разрешите обработку персональных данных.';
                return false;
            }
            return true;
        },
        validatePhone(event) {
            const value = event.target.value;
            if (!/^\d*$/.test(value)) {
                this.phoneErrorMessage = 'Пожалуйста, вводите только цифры.';
            } else {
                this.phoneErrorMessage = '';
            }
            this.formData.phone = value.replace(/\D/g, '');
        },
        async sendForm() {
            if (!this.validateForm()) {
                return;
            }
            try {
                const response = await axios.post(`${serverAddres}/send-email`, this.formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200) {
                    this.$router.push('/thanks');
                    this.$emit('close');
                } else {
                    this.errorMessage = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';
                }
            } catch (error) {
                console.error('Error:', error);
                this.errorMessage = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';
            }
        },
        close() {
            this.$emit('close');
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
    &__policy {
        margin-bottom: 8px;
        a {
            text-decoration: underline;
        }
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
