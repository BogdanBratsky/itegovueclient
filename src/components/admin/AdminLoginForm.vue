<template>
    <form @submit.prevent="login" class="login-form">
        <div class="login-form__title">
            Авторизация
        </div>
        <input v-model="formData.name" class="login-form__name" placeholder="Логин" type="text" required>
        <input v-model="formData.password" class="login-form__password" placeholder="Пароль" type="password" required>
        <button class="login-form__btn" type="submit">Войти</button>
    </form>
</template>

<script>
import { serverAddres } from '../../../config.js';
import axios from 'axios';

export default {
    name: 'AdminLoginForm',
    data() {
        return {
            formData: {
                name: '',
                password: '',
            },
        };
    },
    methods: {
        async login() {
            await axios
                .post(`${serverAddres}/login`, this.formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    console.log(response.data);
                    // this.token = response.data.token;
                    localStorage.setItem('token', response.data.token);
                    // window.location.href = '/admin';
                })
                .catch(error => {
                    console.error('Error:', error);
                });

            // const token = response.data.token;
            // localStorage.setItem('jwt-token', token);
            // this.$router.push({ name: 'Admin' });
        }
    }
};
</script>

<style lang="scss">
@import '../../variables.scss';

.login-form {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    margin: 12px 0;
    background-color: $adminBlock;
    border: 1px solid #cfcfcf;
    box-shadow: 0 0 20px #d3b8b8;
    width: 400px;
    border-radius: 12px;
    &__title {
        text-align: center;
        font-size: 25px;
        margin: 35px 0;
    }
    input {
        outline: none;
        border: 1px solid black;
        padding: 11px;
        margin-bottom: 45px;
        width: 100%;
    }
    &__password {
        &::placeholder {
            font-family: "Jost", sans-serif;
        }
        font-family: 'Courier New', Courier, monospace;
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
