<template>
    <section id="our__services">
        <div class="main__cards-title">
            Решения для ваших задач
        </div>
        <div class="card-wrap">
            <div class="card-item">
                <header class="card-item__head">
                    НУЖНО ОРГАНИЗОВАТЬ УДАЛЕННУЮ РАБОТУ СОТРУДНИКОВ?
                </header>
                <div class="card-item__img">
                    <img src="../assets/images/card_imgs/11.svg" alt="">
                </div>
                <div class="card-item__body">
                    В кратчайшие сроки переведём сотрудников на удаленную работу и сохраним деятельность компании в полном объеме.
                </div>
            </div>
            <div class="card-item">
                <header class="card-item__head">
                    ТОРМОЗИТ СЕРВЕР 1С?
                </header>
                <div class="card-item__img">
                    <img src="../assets/images/card_imgs/3.svg" alt="">
                </div>
                <div class="card-item__body">
                    Наши специалисты найдут причины медленной работы 1с сервера, предложат решение по оптимизации и улучшению работы.
                </div>
            </div>
            <div class="card-item">
                <header class="card-item__head">
                    ИЗБАВИМ ВАС ОТ ГОЛОВНОЙ БОЛИ IT.
                </header>
                <div class="card-item__img">
                    <img src="../assets/images/card_imgs/7.svg" alt="">
                </div>
                <div class="card-item__body">
                    В нашей команде ребята с огромным опытом работы с серверами, пользовательскими компьютерами и сетевым оборудованием. Возьмём все головные боли на себя, организуем работу таким образом чтобы не отвлекать вас от бизнеса.
                </div>
            </div>
            <div class="card-item">
                <header class="card-item__head">
                    НУЖЕН ПРОГРАММИСТ 1С?
                </header>
                <div class="card-item__img">
                    <img src="../assets/images/card_imgs/1.svg" alt="">
                </div>
                <div class="card-item__body">
                    В нашем штате настоящие профессионалы, решающие задачи любой сложности, за приемлемый бюджет.
                </div>
            </div>
            <div class="card-item">
                <header class="card-item__head">
                    ПЛАНИРУЕТЕ ПЕРЕЕЗД ИЛИ РАСШИРЯТЬ ОФИС?
                </header>
                <div class="card-item__img">
                    <img src="../assets/images/card_imgs/12.svg" alt="">
                </div>
                <div class="card-item__body">
                    Наша команда спроектирует всё необходимое для it структуры вашей организации и перевезет ваше оборудование.
                </div>
            </div>
            <div class="card-item">
                <header class="card-item__head">
                    ПЛОХО РАБОТАЕТ WI-FI?
                </header>
                <div class="card-item__img">
                    <img src="../assets/images/card_imgs/4.svg" alt="">
                </div>
                <div class="card-item__body">
                    Мы спроектируем и настроим «бесшовный» wi-fi на всей территории помещения, без лишних переключений, вы перемешаетесь, а оборудование всё будет делать за вас.
                </div>
            </div>
            <div class="card-item">
                <header class="card-item__head">
                    ВАШ СИСТЕМНЫЙ АДМИНИСТРАТОР ЧАСТО «ПРОПАДАЕТ»?
                </header>
                <div class="card-item__img">
                    <img src="../assets/images/card_imgs/6.svg" alt="">
                </div>
                <div class="card-item__body">
                    Если вам необходимо, то наши специалисты будут на связи 24/7.
                </div>
            </div>
            <div class="card-item">
                <header class="card-item__head">
                    ТЕХНИЧЕСКАЯ ПОДДЕРЖКА ПОЛЬЗОВАТЕЛЕЙ.
                </header>
                <div class="card-item__img">
                    <img src="../assets/images/card_imgs/8.svg" alt="">
                </div>
                <div class="card-item__body">
                    Мы постоянно на связи, используем лучшие по безопасности программы для удаленного доступа и решение пользовательских задач.
                </div>
            </div>
            <div class="card-item">
                <header class="card-item__head">
                    ВАШ АДМИНИСТРАТОР ИЛИ АУТСОРСИНГ РАБОТАЮТ СТРОГО С 9-18?
                </header>
                <div class="card-item__img">
                    <img src="../assets/images/card_imgs/5.svg" alt="">
                </div>
                <div class="card-item__body">
                    Мы подходим индивидуально к каждому клиенту, и планируем работы так, чтобы не отвлекать ваших специалистов от работы, нужно обновление в 3 часа ночи? Значит так и сделаем!
                </div>
            </div>
        </div>    
    </section>
</template>

<script>
export default {
    name: 'ItegoServices'
}
</script>

<style lang="scss">
#our__services {
    width: 100%;
    /* background-color: #ffffff; */
}

.main__cards-title {
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

.card-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
}

.card-item {
    background-color: white;
    border-radius: 14px;
    box-shadow: 0 0 12px #dfdfdf;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    cursor: default;
    /* border: 1px solid #dfdfdf; */
    width: 383px;
    padding: 30px 25px;
    margin-bottom: 10px;
    &:not(:nth-child(3n)) {
        margin-right: 10px;
    }
    &__img {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    
    &__img img {
        max-width: 300px;
        max-height: 500px;
    }
    
    &__head {
        text-align: center;
        font-size: 26px;
        margin-bottom: 20px;
    }
    
    &__body {
        /* width: 300px; */
        font-size: 20px;
        color: grey;
    }
}

</style>