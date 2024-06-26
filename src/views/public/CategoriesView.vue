<template>
    <div class="posts-list">
        <header class="posts-list__header">
            {{ category }}
        </header>
        <ItegoPost
            v-for="article in articles"
            :key="article.id"
            :article="article"
        />
        <ItegoLoadMore @click="loadArticles" v-if="count > 20 && count != articles.length"/>
    </div>
</template>

<script>
import { serverAddres } from '../../../config.js';
import axios from 'axios';
import ItegoPost from '../../components/ItegoPost.vue'
import ItegoLoadMore from '../../components/ItegoLoadMore.vue'

export default {
    data() {
        return {
            category: '',
            articles: [],
            count: null,
            page: 1,
            limit: 20
        }
    },
    components: {
        ItegoPost,
        ItegoLoadMore
    },
    methods: {
        async getArticles(id) {
            await axios
                .get(`${serverAddres}/categories/${id}/articles?page=${this.page}&limit=${this.limit}`)
                .then(response => {
                    this.articles = [...this.articles, ...response.data.articles];
                    this.count = response.data.totalCount

                    this.page++;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        async getCategory(id) {
            await axios
                .get(`${serverAddres}/categories/${id}`)
                .then(response => {
                    this.category = response.data.category.name
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
    },
    beforeRouteUpdate(to, from, next) {
        // Вызывается, когда параметры маршрута обновляются
        this.articles = []; // Очистка массива перед загрузкой новых данных
        this.page = 1;
        this.getCategory(to.params.id);
        this.getArticlesByCategory(to.params.id);
        next();
    },
    mounted() {
        document.title = this.category
        this.getArticles(this.$route.params.id)
        this.getCategory(this.$route.params.id)
    },
}
</script>

<style lang="scss">
.posts-list {
    &__header {
        font-size: 25px;
        background-color: white;
        box-shadow: 0 0 12px #dfdfdf;
        border-radius: 8px;
        margin-bottom: 12px;
        padding: 12px 25px;
    }
}
</style>