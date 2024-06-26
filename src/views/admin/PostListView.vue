<template>
     <div class="post-list">
        <header class="post-list__header">
            <div class="post-list__header-title">
                Создание, редактирование и удаление статей
           </div>
            <div class="post-list__options">
                <router-link to="/admin/articles/create">
                    <CreateBtn/>
                </router-link>
            </div>
        </header>
        <div class="post-list__wrap-header">
            Cписок статей 
            <div class="post-list__counter" v-if="count > 0">
                {{ count }}
            </div>
            <div class="post-list__counter" v-else>
                0
            </div>
        </div>
        <div class="post-list__wrapper">
            <AdminPost
                v-for="article in articles"
                :key="article.id"
                :article="article"
            />
            <ItegoLoadMore @click="loadArticles" v-if="count > 20 && count != articles.length"/>
        </div>
     </div>
</template>

<script>
import { serverAddres } from '../../../config.js';
import axios from 'axios';
import AdminPost from '../../components/admin/AdminPost.vue'
import ItegoLoadMore from '@/components/ItegoLoadMore.vue';
import CreateBtn from '../../components/CreateBtn.vue'

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
        AdminPost,
        ItegoLoadMore,
        CreateBtn
    },
    methods: {
        async loadArticles() {
            await axios
                .get(`${serverAddres}/articles?page=${this.page}&limit=${this.limit}`)
                .then(response => {
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
        }
    }
    &__wrap-header {
        display: flex;
        align-items: center;
        padding: 10px 0;
        font-size: 20px;
    }
    &__counter {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        // color: white;
        color: black;
        // background-color: #414141;
        border: 1px solid #414141;
        border-radius: 50px;
        padding: 1px 6px;
        margin-left: 6px;
    }
    &__wrapper {
        display: flex;
        flex-wrap: wrap;
    }
}

</style>