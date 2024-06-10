<template>
    <div class="post-create">
        <div class="post-create__header">
            Создание статьи
        </div>
        <form @submit.prevent="create()" class="post-create__form" action="">
            <textarea 
                v-model="formData.title" 
                ref="titleTextarea"
                class="post-create__title-input" 
                placeholder="Заголовок"
                @input="adjustTextareaHeight('titleTextarea')"
                autofocus
            ></textarea>
            <textarea 
                v-model="formData.text" 
                ref="textTextarea"
                class="post-create__text-input" 
                placeholder="Текст статьи"
                @input="adjustTextareaHeight('textTextarea')"
            ></textarea>
            <select v-model="formData.category" name="Выбор категории" id="">
                <option 
                    v-for="category in categories" 
                    :key="category.id"
                    :value="category.id"
                >
                    {{ category.name }}
                </option>
            </select>
            <div class="post-create__btn">
                <button>Опубликовать</button>
            </div>
        </form>
    </div>
</template>

<script>
import { serverAddres } from '../../../config.js';
import axios from 'axios';

export default {
    name: 'AdminCreateArticle',
    data() {
        return {
            formData: {
                title: '',
                text: '',
                category: null
            },
            categories: []
        };
    },
    methods: {
        async create() {
            await axios
                .post(`${serverAddres}/articles`, this.formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}`
                    }
                })
                .then(() => {
                    window.location.href = `/admin/articles`;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        async loadCategories() {
            await axios
                .get(`${serverAddres}/categories`)
                .then(response => {
                    console.log(response.data.categories)
                    this.categories = response.data.categories
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        adjustTextareaHeight(refName) {
            const textarea = this.$refs[refName];
            textarea.style.height = 'auto';
            textarea.style.height = (textarea.scrollHeight) + 'px';
        }
    },
    mounted() {
        this.loadCategories();
    }
}
</script>

<style lang="scss">
@import '../../variables.scss';

.post-create {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: $adminBlock;
    box-shadow: 0 0 12px #f1f1f1;
    border: 1px solid $borderCol;
    padding: 18px;
    &__header {
        font-size: 26px;
        border-bottom: 1px solid $borderCol;
        padding-bottom: 18px;
    }
    &__form {
        display: flex;
        flex-direction: column;
    }
    textarea {
        border: none;
        outline: none;
        padding: 12px 0;
        background-color: inherit;
        resize: none;
        overflow-y: hidden;
        &::placeholder {
            color: #dfdfdf;
        }
    }
    &__title-input {
        // margin: 12px 0;
        font-size: 35px;
        // order: 3;
        &::placeholder {
            font-size: 35px;
        }
    }
    &__text-input {
        // height: 12em;
        font-size: 20px;
        &::placeholder {
            font-size: 20px;
        }
    }
    select {
        cursor: pointer;
        padding: 5px;
        width: 200px;
        border: 1px solid $borderCol;
        box-shadow: 0 0 12px #eeeeee;
        outline: none;
    }
    &__btn {
        position: absolute;
        top: 100%;
        left: 0;
        display: flex;
        // justify-content: end;
        button {
            user-select: none;
            outline: none;
            border: none;
            cursor: pointer;
            font-size: 22px;
            padding: 10px 30px;
            margin-bottom: 12px;
            background-color: #e9e2e2;
            border: 1px solid $borderCol;
            color: #ffffff;
            border-radius: 0 0 8px 8px;
            &:hover {
                background-color: #e39b9b;
                transition: 0.4s;
            }
            &:active {
                background-color: red;
                transition: 0;
            }
        }
    }
}
</style>