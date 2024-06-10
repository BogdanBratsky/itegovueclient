<template>
    <div class="post-details">
        <div class="post-details__title">
            {{ article.title }}
        </div>
        <div class="post-details__info">
            <div class="post-details__category">
                Категория
            </div>
            <div class="post-details__date">
                <img src="../assets/images/interface/calendar.svg" alt="">
                {{ article.createdAt }}
            </div>
        </div>
        <div class="post-details__text">
            <pre>
                {{ article.text }}
            </pre>
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
            article: []
        }
    },
    methods: {
        async loadArticle(id) {
            await axios
                .get(`${serverAddres}/articles/${id}`)
                .then(response => {
                    this.article = response.data.article
                })
                .catch(error => {
                    console.error('Error:', error)
                });
        }
    },
    mounted() {
        this.loadArticle(this.$route.params.id)
    }
}
</script>

<style lang="scss" scoped>

pre {
    font-family: "Jost", sans-serif;
    white-space: pre-wrap;
    img {
        max-width: 500px;
    }
}

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
    color: gray;
    &__title {
        color: black;
        font-size: 34px;
    }
    &__text {
        width: 700px;
        font-size: 20px;
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
        border: 1px solid #e7e7e7;
        box-shadow: 0 0 10px #e4e4e4;
        border-radius: 4px;
        padding: 4px 8px;
        img {
            max-width: 15px;
            margin-right: 8px;
        }
    }
}
</style>