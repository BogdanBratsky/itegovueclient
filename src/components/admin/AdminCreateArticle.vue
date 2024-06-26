<template>
    <div class="post-create">
        <div class="post-create__header">Создание статьи</div>
        <form @submit.prevent="create()" class="post-create__form">
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
            <div class="">Выбор категории</div>
            <select v-model="formData.category" name="Выбор категории">
                <option v-for="category in categories" :key="category.id" :value="category.id">
                    {{ category.name }}
                </option>
            </select>
            <div class="post-create__btn">
                <button>Опубликовать</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import { serverAddres } from '../../../config.js';
import axios from 'axios';

export default {
    name: 'AdminCreateArticle',
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
        async create() {
            await axios
                .post(`${serverAddres}/articles`, this.formData, {
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
        async getCategories() {
            await axios
                .get(`${serverAddres}/categories`)
                .then(response => {
                    this.categories = response.data.categories;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        adjustTextareaHeight(refName) {
            const textarea = this.$refs[refName];
            textarea.style.height = 'auto';
            textarea.style.height = (textarea.scrollHeight) + 'px';
        }
    },
    mounted() {
        this.getCategories();
    }
}
</script>

<style lang="scss">
@import '../../variables.scss';

.post-create {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: $adminBlock;
    box-shadow: 0 0 12px #f1f1f1;
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
    .tox-tinymce {
        font-size: 20px;
        &::placeholder {
            font-size: 20px;
        }
    }
    select {
        cursor: pointer;
        padding: 5px;
        max-width: 240px;
        border: 1px solid $borderCol;
        box-shadow: 0 0 12px #eeeeee;
        outline: none;
    }
    &__btn {
        position: absolute;
        top: 100%;
        left: 0;
        display: flex;
        button {
            user-select: none;
            outline: none;
            border: none;
            cursor: pointer;
            font-size: 22px;
            padding: 10px 30px;
            margin-bottom: 12px;
            background-color: #e9e2e2;
            border: 1px solid $borderCol;
            color: #ffffff;
            border-radius: 0 0 8px 8px;
            &:hover {
                background-color: #e39b9b;
                transition: 0.4s;
            }
            &:active {
                background-color: red;
                transition: 0;
            }
        }
    }
}
</style>
