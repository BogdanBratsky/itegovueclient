<template>
    <div class="post-details">
        <div class="post-details__title">
            {{ article.title }}
        </div>
        <div class="post-details__info">
            <RouterLink :to="'/blog/categories/' + category.id">
                <div class="post-details__category">
                    {{ category.name }}
                </div>
            </RouterLink>
            <div class="post-details__date">
                <img src="../assets/images/interface/calendar.svg" alt="">
                {{ formatDate(article.createdAt) }}
            </div>
        </div>
        <div 
            class="post-details__text"
            style="display: flex; flex-direction: column;"
        >
            <div v-html="article.text"></div>
        </div>
    </div>
</template>

<script>
import { serverAddres } from '../../config.js';
import axios from 'axios';

export default {
    name: 'ItegoPostDetails',
    data() {
        return {
            article: [],
            category: {
                id: null,
                name: ''
            },
        }
    },
    methods: {
        async loadCategory() {
            await axios
                .get(`${serverAddres}/categories/${this.article.category}`)
                .then(response => {
                    this.category.id = response.data.category.id
                    this.category.name = response.data.category.name
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        async loadArticle(id) {
            await axios
                .get(`${serverAddres}/articles/${id}`)
                .then(response => {
                    this.article = response.data.article;
                    document.title = this.article.title;
                    // Добавляем стили к содержимому статьи
                    this.loadCategory();

                })
                .catch(error => {
                    console.error('Error:', error);
                });
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
        this.loadArticle(this.$route.params.id)
        // this.$refs.articleText.innerHTML = this.article.text;
    }
}
</script>

<style lang="scss" scoped>

.post-details {
    width: 900px;
    padding: 30px;
    background-color: white;
    box-shadow: 0 0 12px #dfdfdf;
    margin-bottom: 10px;
    border-top: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    border-left: 1px solid #eeeeee;
    border-radius: 8px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
    // color: gray;
    &__title {
        color: black;
        font-size: 34px;
    }
    &__text {
        width: 100%;
        font-size: 20px;
        p, div {
            width: 100%;
            margin: 0 auto;
            // display: flex;
            // flex-direction: column;
            // align-items: center;
            // justify-content: center;
        }
    }
    &__info {
        padding: 20px 0;
        display: flex;
        align-items: center;
    }
    &__category {
        cursor: pointer;
        color: black;
        border: 1px solid #e7e7e7;
        box-shadow: 0 0 10px #e4e4e4;
        border-radius: 4px;
        padding: 4px 8px;
        margin-right: 8px;
    }
    &__date {
        display: flex;
        align-items: center;
        color: black;
        // border: 1px solid #e7e7e7;
        // box-shadow: 0 0 10px #e4e4e4;
        border-radius: 4px;
        padding: 4px 8px;
        img {
            max-width: 15px;
            margin-right: 8px;
        }
    }
}
</style>