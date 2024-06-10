<template>
    <div class="post-card">
            <RouterLink :to="'/blog/' + article.id">
                <div class="post-card__title">
                   {{ article.title }}
                </div>
            </RouterLink>
            <div class="post-card__text">
                {{ formatText(article.text) }}
            </div>
            <div class="post-card__info">
                <div class="post-card__category">
                    {{ this.category }}
                </div>
                <div class="post-card__date">
                    {{ formatDate(article.createdAt) }}
                </div>
            </div>
        </div>
</template>

<script>
import { serverAddres } from '../../config.js';
import axios from 'axios';

export default {
    name: 'ItegoPost',
    data() {
        return {
            category: ''
        }
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
        formatText(text) {
            if (text.length > 550) {
                return text.slice(0, 550) + '...';
            } else {
                return text;
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
        this.loadCategory()
    }
}
</script>

<style lang="scss">
@import '../variables.scss';

.post-card {
    width: 900px;
    padding: 25px;
    background-color: white;
    box-shadow: 0 0 12px #dfdfdf;
    margin-bottom: 10px;
    // border-bottom: 1px solid #eeeeee;
    border-radius: 8px;
    color: gray;
    &:active {
        box-shadow: 0 0 15px #dfdfdf;
    }
    &__title {
        color: black;
        font-size: 28px;
        &:hover {
            color: $btnHoverCol;
            transition: 0.2s;
        }
    }
    &__text {
        margin: 20px 0;
        font-size: 17px;
    }
    &__info {
        padding-top: 20px;
        border-top: 1px solid #eeeeee;
        display: flex;
        align-items: center;
    }
    &__category {
        cursor: pointer;
        color: black;
        border: 1px solid #e7e7e7;
        box-shadow: 0 0 10px #e4e4e4;
        border-radius: 4px;
        padding: 3px 8px;
        margin-right: 20px;
    }
}
</style>