<template>
    <div class="category-list">
        <header class="category-list__header">
            <div class="category-list__header-title">
                Создание, редактирование и удаление категорий
            </div>
            <div class="category-list__options">
                <form @submit.prevent="create" action="" class="category-list__create">
                    <input v-model="formData.name" type="text" placeholder="Название категории">
                    <button>
                        Создать
                        <img src="../../assets/images/interface/create.svg" alt="">
                    </button>
                </form>
            </div>
        </header>
        <div class="category-list__wrap-header">
            Список категорий
        </div>
        <div class="category-list__wrapper">
            <AdminCategory
                v-for="category in categories"
                :key="category.id"
                :category="category"
                :currentEditingId="currentEditingId"
                @category-updated="updateCategory"
                @category-deleted="removeCategory"
                @start-editing="setEditingCategory"
                @stop-editing="clearEditingCategory"
            />
        </div>
    </div>
</template>

<script>
import { serverAddres } from '../../../config.js';
import axios from 'axios';
import AdminCategory from '../../components/admin/AdminCategory.vue';

export default {
    data() {
        return {
            formData: {
                name: ''
            },
            categories: [],
            currentEditingId: null
        }
    },
    components: {
        AdminCategory
    },
    methods: {
        async create() {
            await axios
                .post(`${serverAddres}/categories`, this.formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}`
                    }
                })
                .then(() => {
                    this.loadCategories();
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        async loadCategories() {
            await axios
                .get(`${serverAddres}/categories`)
                .then(response => {
                    this.categories = response.data.categories;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        updateCategory(updatedCategory) {
            const index = this.categories.findIndex(category => category.id === updatedCategory.id);
            this.$set(this.categories, index, updatedCategory);
        },
        removeCategory(id) {
            this.categories = this.categories.filter(category => category.id !== id);
        },
        setEditingCategory(id) {
            this.currentEditingId = id;
        },
        clearEditingCategory() {
            this.currentEditingId = null;
        }
    },
    beforeMount() {
        this.loadCategories();
    }
}
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.category-list {
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
            margin-bottom: 16px;
        }
   }
   &__create {
        display: inline-flex;
        align-items: center;
        border: 1px solid #d6d6d6;
        border-radius: 5px;
        background-color: white;
        // box-shadow: 0 0 10px #e7e7e7;
        padding: 0  0  0 12px;
        input {
            background-color: inherit;
            font-size: 15px;
            outline: none;
            width: 250px;
            border: none;
            &::placeholder {
                color: #d1d1d1;
                font-size: 15px;
            }
        }
        button {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            // box-shadow: -10px 0 5px black;
            height: 100%;
            background-color: $buttonColor;
            // background-color: inherit;
            border: 2px solid white;
            border-radius: 4px;
            color: white;
            padding: 8px 12px;
            font-size: 17px;
            img {
                width: 20px;
                margin-left: 8px;
            }
            &:hover {
                background-color: $btnHoverCol;
                transition: 0.2s;
            }
        }
   }
   &__wrap-header {
       padding: 10px 0;
       font-size: 20px;
   }
   &__wrapper {
       display: flex;
       flex-wrap: wrap;
   }
}

</style>