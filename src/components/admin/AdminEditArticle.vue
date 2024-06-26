<template>
    <div class="post-create">
        <div class="post-create__header">
            Редактирование статьи
        </div>
        <form @submit.prevent="updateArticle()" class="post-create__form" action="">
            <textarea 
                v-model="formData.title" 
                ref="titleTextarea"
                class="post-create__title-input" 
                placeholder="Заголовок"
                @input="adjustTextareaHeight('titleTextarea')"
                autofocus
            ></textarea>
            <Editor
                v-model="formData.text" 
                api-key="0p026ajwzl6u3x61qmcma8tbtohty2lkzkbv7tttddcnzqx7"
                :init="{
                    toolbar_mode: 'sliding',
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                    ],
                }"
                initial-value="Welcome to TinyMCE!"
            />
            <select v-model="formData.category" name="Выбор категории">
                <option 
                    v-for="category in categories" 
                    :key="category.id"
                    :value="category.id"
                >
                    {{ category.name }}
                </option>
            </select>
            <div class="post-create__btn">
                <button>Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script>
import { serverAddres } from '../../../config.js';
import axios from 'axios';
import Editor from '@tinymce/tinymce-vue';

export default {
    name: 'AdminEditArticle',
    components: {
        Editor
    },
    data() {
        return {
            formData: {
                title: '',
                text: '',
                category: null
            },
            categories: [],
            article: null,
            tinymceConfig: {
                apiKey: '0p026ajwzl6u3x61qmcma8tbtohty2lkzkbv7tttddcnzqx7',
                height: 500,
                menubar: false,
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                ],
            }
        };
    },
    methods: {
        async updateArticle() {
            try {
                await axios.patch(`${serverAddres}/articles/${this.article.id}`, this.formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}`
                    }
                });
                window.location.href = `/admin/articles`;
            } catch (error) {
                console.error('Error:', error);
                alert('Произошла ошибка при сохранении статьи. Пожалуйста, попробуйте снова.');
            }
        },
        async getArticle(id) {
            try {
                const response = await axios.get(`${serverAddres}/articles/${id}`);
                this.article = response.data.article;
                this.formData.title = this.article.title;
                this.formData.text = this.article.text;
                this.formData.category = this.article.category;
                this.$nextTick(() => {
                    this.adjustTextareaHeight('titleTextarea');
                    // Метод adjustTextareaHeight можно также вызвать для textTextarea, если нужно
                });
            } catch (error) {
                console.error('Error:', error);
                alert('Произошла ошибка при загрузке статьи. Пожалуйста, попробуйте снова.');
            }
        },
        async getCategories() {
            try {
                const response = await axios.get(`${serverAddres}/categories`);
                this.categories = response.data.categories;
            } catch (error) {
                console.error('Error:', error);
                alert('Произошла ошибка при загрузке категорий. Пожалуйста, попробуйте снова.');
            }
        },
        adjustTextareaHeight(refName) {
            const textarea = this.$refs[refName];
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    },
    mounted() {
        this.getCategories();
        this.getArticle(this.$route.params.id);
    }
};
</script>

<style lang="scss">
@import '../../variables.scss';

.post-create {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: $adminBlock;
    box-shadow: 0 0 12px #ecdada;
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
        font-size: 35px;

        &::placeholder {
            font-size: 35px;
        }
    }

    select {
        margin-top: 12px;
        cursor: pointer;
        padding: 5px;
        max-width: 240px;
        border: 1px solid $borderCol;
        box-shadow: 0 0 12px #ecdada;
        outline: none;
    }

    &__btn {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;

        button {
            user-select: none;
            outline: none;
            border: none;
            cursor: pointer;
            font-size: 22px;
            padding: 10px 30px;
            background-color: #e9e2e2;
            border: 1px solid $borderCol;
            color: #ffffff;
            border-radius: 8px;

            &:hover {
                background-color: #e39b9b;
                transition: 0.4s;
            }
        }
    }
}
</style>
