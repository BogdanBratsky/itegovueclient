<template>
    <div class="post-list">
       <header class="post-list__header">
           <div class="post-list__header-title">
                Создание и удаление пользователей
           </div>
           <!-- <div class="post-list__options">
               <router-link to="/admin/articles/create">
                   <CreateBtn/>
               </router-link>
           </div> -->
            <form @submit="createUser()" class="post-list__create-user">
                <input v-model="formData.name" placeholder="Логин" type="text">
                <input v-model="formData.email" placeholder="Почта" type="text">
                <input v-model="formData.password" placeholder="Пароль" type="text">
                <button>Создать</button>
            </form>
        </header>
       <div class="post-list__wrap-header">
           Cписок пользователей: 
       </div>
       <div class="post-list__wrapper">
           <AdminUser 
                v-for="user in users"
                :key="user.id"
                :user="user"
           />
       </div>
    </div>
</template>

<script>
import { serverAddres } from '../../../config.js';
import axios from 'axios';
import AdminUser from '../../components/admin/AdminUser.vue'
import CreateBtn from '../../components/CreateBtn.vue'

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: '',
                superuser: false
            },
            users: []
        }
    },
    components: {
            AdminUser,
            CreateBtn
    },
    methods: {
        async createUser() {
            await axios
                .post(`${serverAddres}/register`, this.formData, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.token}`
                        }
                })
                .then(() => {
                    window.location.href = `/admin/users`;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        async getUsers() {
            await axios
                .get(`${serverAddres}/users`)
                .then(response => {
                    this.users = response.data.users;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    },
    mounted() {
        this.getUsers()
    }
}
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.post-list {
    &__header {
        border: 1px solid $borderCol;
        border-radius: 5px;
        box-shadow: 0 4px 12px #e0e0e0;
        color: black;
        background-color: $adminBlock;
        padding: 16px;
        margin-bottom: 36px;
        font-size: 26px;
        &-title {
            border-bottom: 1px solid $borderCol;
            padding-bottom: 12px;
            margin-bottom: 16px;
        }
    }
    &__create-user {
        display: inline-flex;
        flex-direction: column;
        font-size: 16px;
        width: 250px;
        input {
            outline: none;
            padding: 8px 6px;
            margin-bottom: 12px;
            border: 1px solid #d6d6d6;
            border-radius: 5px;
            &::placeholder {
                font-size: 14px;
            }
        }
        button {
            outline: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            // box-shadow: -10px 0 5px black;
            height: 100%;
            background-color: $buttonColor;
            // background-color: inherit;
            border-radius: 4px;
            color: white;
            padding: 8px 12px;
            font-size: 17px;
        }
    }
    &__wrap-header {
        padding: 10px 0;
        font-size: 20px;
    }
    &__wrapper {
        display: flex;
        flex-wrap: wrap;
    }
}

</style>