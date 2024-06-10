<template>
    <div class="posts-list">
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
        async loadArticles() {
            await axios
                .get(`${serverAddres}/articles?page=${this.page}&limit=${this.limit}`)
                .then(response => {
                    console.log(response.data)
                    this.articles = [...this.articles, ...response.data.articles];
                    this.count = response.data.totalCount

                    this.page++;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    },
    mounted() {
        this.loadArticles()
    }
}
</script>

<style lang="scss">

</style>