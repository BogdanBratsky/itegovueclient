<template>
    <div class="post-create">
        <div class="post-create__header">
            Редактирование статьи
        </div>
        <form class="post-create__form" action="">
            <textarea 
                v-model="title" 
                ref="titleTextarea"
                class="post-create__title-input" 
                placeholder="Заголовок"
                @input="adjustTextareaHeight('titleTextarea')"
                autofocus
            ></textarea>
            <textarea 
                v-model="text" 
                ref="textTextarea"
                class="post-create__text-input" 
                placeholder="Текст статьи"
                @input="adjustTextareaHeight('textTextarea')"
            ></textarea>
            <select name="Выбор категории" id="">
                <option value="">Категория 1</option>
                <option value="">Категория 2</option>
                <option value="">Категория 3</option>
            </select>
            <div class="post-create__btn">
                <button>Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AdminEditArticle',
    data() {
        return {
            title: '',
            text: ''
        };
    },
    methods: {
        adjustTextareaHeight(refName) {
            const textarea = this.$refs[refName];
            textarea.style.height = 'auto';
            textarea.style.height = (textarea.scrollHeight) + 'px';
        }
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
        // margin: 12px 0;
        font-size: 35px;
        // order: 3;
        &::placeholder {
            font-size: 35px;
        }
    }
    &__text-input {
        // height: 12em;
        font-size: 20px;
        &::placeholder {
            font-size: 20px;
        }
    }
    select {
        cursor: pointer;
        padding: 5px;
        width: 200px;
        border: 1px solid $borderCol;
        box-shadow: 0 0 12px #ecdada;
        outline: none;
    }
    &__btn {
        position: absolute;
        top: 100%;
        left: 0;
        display: flex;
        // justify-content: end;
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