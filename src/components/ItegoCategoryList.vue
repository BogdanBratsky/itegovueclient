<template>
    <div class="">
        <aside class="category-list">
            <label for="" class="category-list__title">Выбор категории</label>
            <router-link v-for="category in categories" :to="'/blog/categories/' + category.id">
                <div class="category-list__item">{{ category.name }}</div>
            </router-link>
        </aside>
    </div>
</template>

<script>
import { serverAddres } from '../../config.js';
import axios from 'axios';

export default {
    name: 'ItegoCategoryList',
    data() {
        return {
            categories: []
        }
    },
    methods: {
        async loadCategories() {
            try {
                const response = await axios.get(`${serverAddres}/categories`);
                this.categories = response.data.categories;
            } catch (error) {
                console.error('Error:', error);
            }
        }
    },
    created() {
        this.loadCategories(); // Загрузка данных при создании компонента
    },
    watch: {
        '$route': 'loadCategories' // Перезагрузка данных при изменении маршрута
    }
}
</script>


<style lang="scss">
.category-list {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 12px #dfdfdf;
    border-radius: 8px;
    &__title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        padding: 12px;
        // margin-bottom: 12px;
        background-color: white;
        box-shadow: 0 6px 12px #dfdfdf;
        border-radius: 8px;
    }
    &__item {
        cursor: pointer;
        display: flex;
        align-items: center;
        // justify-content: flex-start;
        font-size: 17px;
        padding: 12px 18px;
        width: 260px;
        color: gray;
        &:hover {
            text-decoration: underline;
            background-color: #f0f0f0;
            transition: 0.2s;
        }
        &:hover:last-child {
            border-radius: 0 0 8px 8px;
        }
        &:not(:last-child) {
            border-bottom: 1px solid #ff0000;
        }
    }
}
</style>