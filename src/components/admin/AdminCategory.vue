<template>
    <div class="admin-category">
        <div class="admin-category__name">
            {{ category.name }}
        </div>
        <div class="admin-category__options">
            <div class="admin-category__option" id="edit">
                <img src="../../assets/images/interface/edit.svg" alt="">
                Редактировать
            </div>
            <deleteBtn @click="showForm()"/>
        </div>
    </div>

    <div class="delete-confirmation" v-if="isOpen">
        <header class="delete-confirmation__title">
            Вы уверены, что хотите удалить запись?
        </header>
        <div class="delete-confirmation__options">
            <div id="cancel" @click="isOpen = false">Отмена</div>
            <div id="delete" @click="deleteCategory()">Удалить</div>
        </div>
    </div>

    <div @click="showForm()" v-if="isOpen" class="background"></div>
</template>

<script>
import { serverAddres } from '../../../config.js';
import axios from 'axios';
import deleteBtn from './DeleteBtn.vue'

export default {
    name: 'AdminCategory',
    data() {
        return {
            isOpen: false
        }
    },
    props: ['category'],
    components: {
        deleteBtn
    },
    methods: {
        async deleteCategory() {
            await axios
                .delete(`${serverAddres}/categories/${this.category.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}`
                    }
                })
                .then(() => {
                    window.location.href = `/admin/categories`;
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

<style lang="scss">
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

.admin-category {
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
    &__options {
        display: flex;
    }
    &__option {
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 6px 10px;
        border: 1px solid $borderCol;
        border-radius: 5px;
        box-shadow: 0 0 10px #f0f0f0;
        background-color: $buttonCol;
        color: black;
        img {
            max-width: 16px;
            margin-right: 6px;
        }
        // &:hover {
            //     background-color: #ffdada;
            //     transition: 0.2s;
            // }
        }
        #edit {
            &:hover {
                background-color: #ffffff;
                transition: 0.2s;
            }
        }
        #delete {
            margin-left: 8px;
            &:hover {
                background-color: #ffd1d1;
                transition: 0.2s;
            }
    }
    &__name {
        font-size: 20px;
    }
}
</style>