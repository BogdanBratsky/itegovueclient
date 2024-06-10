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
        <input v-model="formData.email" class="itego-form__input" placeholder="Телефон" type="text">
        <div class="itego-form__label">Или ваша почта:</div>
        <input v-model="formData.phone" class="itego-form__input" placeholder="E-mail" type="text">
        <div class="itego-form__chkbx">
            <input v-model="formData.consent" type="checkbox" name="" id="">
            Я разрешаю обработку моих персональных данных
        </div>
        <button class="itego-form__btn">Отправить</button>
    </form>
</template>

<script>
import { serverAddres } from '../../config.js';
import axios from 'axios';

export default {
    name: 'ItegoForm',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                consent: false
            }
        }
    },
    methods: {
        async sendForm() {
            console.log(this.formData)
            await axios
                .post(`${serverAddres}/send-email`, this.formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
@import '../variables.scss';

.itego-form {
    // z-index: 10;
    position: fixed; /* Можно использовать также absolute или relative */
    top: 50%; /* Располагаем верхнюю границу элемента на 50% от верхнего края родительского блока */
    left: 50%; /* Располагаем левую границу элемента на 50% от левого края родительского блока */
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    // align-items: center;
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
        // background-color: $backgroundColor;
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