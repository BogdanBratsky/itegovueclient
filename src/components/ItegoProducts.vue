<template>
    <section class="products">
        <div class="products__title">
            Перечень наших услуг
        </div>
        <div class="products__wrap">
            <div class="products__item">
                Администрирование
            </div>
            <div class="products__item">
                Техническая поддержка
            </div>
            <div class="products__item">
                Сервера 1с
            </div>
            <div class="products__item">
                Ремонт компьютеров и орг. техники
            </div>
            <div class="products__item">
                Подбор оборудования
            </div>
            <div class="products__item">
                Подбор серверов в дата-центре
            </div>
            <div class="products__item">
                Рекламные компании Яндекс.Директ
            </div>
            <div class="products__item">
                Антивирусная защита
            </div>
            <div class="products__item">
                IP-телефония
            </div>
            <div class="products__item">
                ИТ-аутсорсинг
            </div>
            <div class="products__item">
                Резервное копирование данных
            </div>
            <div class="products__item">
                Миграция в облако
            </div>
            <div class="products__item">
                Видеонаблюдение
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ItegoProducts'
}
</script>

<style lang="scss" scoped>
.products {
    width: 100%;
    &__title {
        width: 100%;
        // box-shadow: 0 -50px 30px -20px #f5f8ff inset;
        // border-radius: 15px;
        // background-color: white;
        padding: 50px 0;
        text-align: center;
        /* text-shadow: -2px -2px 1px var(--btn-hov); */
        font-size: 42px;
        margin-bottom: 10px;
        color: #3e3e3e;
    }
    &__wrap {
        display: flex;
        flex-wrap: wrap;
        // align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    &__item {
        background-color: white;
        border-radius: 14px;
        box-shadow: 0 0 12px #dfdfdf;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 224px;
        height: 200px;
        margin-bottom: 12px;
        font-size: 18px;
        text-align: center;
        padding: 20px;
    }
}
</style>