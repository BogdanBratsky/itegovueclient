<template>
    <div class="admin-user">
        <div class="admin-user__info">
            <div class="admin-user__name">
                {{ user.name }}
            </div>
            <div class="admin-user__email">
                {{ user.email }}
            </div>
        </div>
        <div class="admin-user__options">
            <deleteBtn @click="showForm()"/>
        </div>
    </div>

    <div class="delete-confirmation" v-if="isOpen">
        <header class="delete-confirmation__title">
            Вы уверены, что хотите удалить запись?
        </header>
        <div class="delete-confirmation__options">
            <div id="cancel" @click="isOpen = false">Отмена</div>
            <div id="delete" @click="deleteArticle()">Удалить</div>
        </div>
    </div>

    <div @click="showForm()" v-if="isOpen" class="background"></div>
</template>

<script>
import { serverAddres } from '../../../config.js';
import axios from 'axios';
import deleteBtn from './DeleteBtn.vue'

export default {
    data() {
        return {
            isOpen: false
        }
    },
    name: 'AdminUser',
    props: ['user'],
    components: {
        deleteBtn
    },
    methods: {
        async deleteArticle() {
            await axios
                .delete(`${serverAddres}/users/${this.user.id}`, {
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
@import '../../variables.scss';

.delete-confirmation {
    z-index: 10;
    position: fixed; /* Можно использовать также absolute или relative */
    top: 50%; /* Располагаем верхнюю границу элемента на 50% от верхнего края родительского блока */
    left: 50%; /* Располагаем левую границу элемента на 50% от левого края родительского блока */
    transform: translate(-50%, -50%);
    padding: 25px;
    background-color: white;
    border-radius: 8px;
    &__title {
        font-size: 24px;
        margin-bottom: 50px;
    }
    &__options {
        display: flex;
        align-items: center;
        float: right;
        div {
            user-select: none;
            box-shadow: 0 0 10px #afafaf;
            border-radius: 3px;
            padding: 4px 8px;
            font-size: 20px;
        }
        #cancel {
            cursor: pointer;
            margin-right: 8px;
            &:active {
                box-shadow: 0 0 20px #afafaf;
            }
        }
        #delete {
            cursor: pointer;
            background-color: #b15757;
            color: white;
            &:active {
                background-color: #c43333;
            }
        }
    }
}

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

.admin-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    background-color: $adminBlock;
    box-shadow: 0 0 12px #dfdfdf;
    margin-bottom: 10px;
    // border-bottom: 1px solid #eeeeee;
    border-radius: 8px;
    color: gray;
    &:active {
        box-shadow: 0 0 15px #dfdfdf;
    }
    &__name {
        font-size: 20px;
        margin-bottom: 12px;
    }
    &__options {
        display: flex;
    }
}
</style>