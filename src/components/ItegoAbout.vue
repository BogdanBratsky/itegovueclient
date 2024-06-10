<template>
    <section class="about-us">
        <span class="about-us__item">
            <div class="emoji">
                👨‍💻
            </div>
            Мы работаем по сменам, поэтому и поддержку оказываем круглосуточно.
        </span>
        <span class="about-us__item">
            <div class="emoji">
                🤗
            </div>
            Мы подходим ответственно к работе, а значит, вы будeте довольны.
        </span>
        <span class="about-us__item">
            <div class="emoji">
                🔥
            </div>
            Благодаря большой команде мы всегда находим решения, за счет обмена опытом.
        </span>
        <span class="about-us__item">
            <div class="emoji">
                🤓
            </div>
            У нас огромный опыт решения сложных задач. У вас вопрос? Скорее всего мы знаем на него ответ!
        </span>
    </section>
</template>

<script>
export default {
    name: 'ItegoAbout'
}
</script>

<style lang="scss">
.about-us {
    // display: flex;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &__item {
        display: flex;
        align-items: center;
        width: 580px;
        margin-bottom: 10px;
        border-radius: 14px;
        box-shadow: 0 0 12px #dfdfdf;
        padding: 30px 25px;
        font-size: 26px;
        .emoji {
            font-size: 50px;
            margin-right: 25px;
        }
    }
}
</style>