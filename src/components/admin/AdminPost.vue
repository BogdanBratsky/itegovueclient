<template>
    <div class="admin-post">
        <div class="admin-post__info">
            <div style="display: flex; align-items: center;">
                <div class="admin-post__category">
                    {{ category }}
                </div>
                <div class="admin-post__date">
                    {{ formatDate(article.createdAt) }}
                </div>
            </div>
        </div>
        <RouterLink :to="'/blog/' + article.id">
            <div class="admin-post__title">
                {{ article.title }}
            </div>
        </RouterLink>
        <!-- <div class="admin-post__text">
            <div v-html="textPrepare"></div>
        </div> -->
        <div class="admin-post__options">
            <router-link :to="'/admin/articles/edit/' + article.id">
                <div id="edit">
                    <img src="../../assets/images/interface/edit.svg" alt="">
                    Редактировать
                </div>
            </router-link>
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
    name: 'AdminPost',
    data() {
        return {
            category: '',
            isOpen: false,
            textPrepare: ''
        }
    },
    components: {
        deleteBtn
    },
    props: ['article'],
    methods: {
        async loadCategory() {
            await axios
                .get(`${serverAddres}/categories/${this.article.category}`)
                .then(response => {
                    this.category = response.data.category.name
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        async deleteArticle() {
            await axios
                .delete(`${serverAddres}/articles/${this.article.id}`, {
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
        formatText(text) {
            if (text.length > 550) {
                return text.slice(0, 550) + '...';
            } else {
                return text;
            }
        },
        showForm() {
            this.isOpen = !this.isOpen
            if (this.isOpen == true) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        },
        formatDate(isoDate) {
            // Создаем объект Date из строки ISO
            const date = new Date(isoDate);

            // Получаем компоненты даты и времени в UTC
            const year = date.getUTCFullYear();
            const month = String(date.getUTCMonth() + 1).padStart(2, '0');
            const day = String(date.getUTCDate()).padStart(2, '0');
            const hours = String(date.getUTCHours()).padStart(2, '0');
            const minutes = String(date.getUTCMinutes()).padStart(2, '0');

            // Форматируем строку в нужном формате
            return `${day}.${month}.${year}, ${hours}:${minutes}`;
        }
    },
    mounted() {
        this.loadCategory();
        this.textPrepare = this.formatText(this.article.text)
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

.admin-post {
    width: 100%;
    padding: 16px;
    background-color: $adminBlock;
    box-shadow: 0 0 12px #dfdfdf;
    margin-bottom: 10px;
    // border-bottom: 1px solid #eeeeee;
    border-radius: 8px;
    color: #242424;
    &:active {
        box-shadow: 0 0 15px #dfdfdf;
    }
    &__options {
        display: flex;
        #edit {
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
            &:hover {
                background-color: #ffffff;
                transition: 0.2s;
            }
        }
    }
    &__title {
        color: black;
        font-size: 28px;
        border-bottom: 1px solid #eeeeee;
        padding-bottom: 16px;
        margin: 16px 0;
        &:hover {
            color: $btnHoverCol;
            transition: 0.2s;
        }
    }
    &__text {
        margin: 12px 0;
        font-size: 17px;
    }
    &__info {
        // padding-top: 16px;
        // border-top: 1px solid #eeeeee;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__category {
        color: #2e2e2e;
        box-shadow: 0 0 10px #f3f3f3;
        // background-color: #f5f5f5;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        padding: 3px;
        margin-right: 12px;
    }
}
</style>