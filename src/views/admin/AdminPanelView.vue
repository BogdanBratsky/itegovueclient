<template>
    <header class="header">
        <div class="header__logo-block">
            <img src="../../assets/images/logo.svg" alt="">
            <span class="header__admin-panel">
                admin panel
            </span>
        </div>
        <router-link to="/main">
            <div class="header__mainpage-btn">
                На главную
            </div>
        </router-link>
    </header>
    <main class="main-wrapper">
        <aside class="admin-sidebar">
            <div class="admin-sidebar__wrapper">
                <router-link to="/admin/articles">
                    <div class="admin-sidebar__item">Статьи</div>
                </router-link>
                <router-link to="/admin/categories">
                    <div class="admin-sidebar__item">Категории</div>
                </router-link>
                <router-link to="/admin/users">
                    <div class="admin-sidebar__item">Пользователи</div>
                </router-link>
                <!-- <li class="admin-sidebar__item">Главная</li> -->
            </div>
        </aside>

        <section class="admin-sandbox">
            <router-view></router-view>
        </section>
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.header {
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid $borderCol;
    margin-bottom: 12px;
    box-shadow: 0 10px 16px -20px black;
    &__logo-block {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    img {
        border-right: 2px solid #7e7e7e;
        padding-right: 6px;
        max-height: 35px;
        filter: grayscale(100%); 
        margin-right: 6px;
    }
    &__admin-panel {
        white-space: nowrap;
        display: inline-block;
        font-size: 20px;
    }
    &__mainpage-btn {
        text-decoration: underline;
    }
}

.main-wrapper {
    display: flex;
    justify-content: space-between
}

.admin-sidebar {
    display: flex;
    flex-direction: column;
    width: 210px;
    // border-right: 1px solid $borderCol;
    &__wrapper {
        border-top: 1px solid #ece3e3;
        box-shadow: 0 0 10px #e9e9e9;
        border-radius: 4px;
        background-color: white;
    }
    &__item {
        cursor: pointer;
        display: flex;
        align-items: center;
        // justify-content: flex-start;
        font-size: 17px;
        padding: 12px;
        color: gray;
        // &:not(:last-child) {
            border-bottom: 1px solid #ece3e3;
        // }
        &:hover {
            text-decoration: underline;
            background-color: #f0f0f0;
            transition: 0.2s;
        }
        // &:not(:last-child) {
        //     border-bottom: 1px solid black;
        //     // border-radius: 0 0 8px 8px;
        // }
    }
}

.admin-sandbox {
    padding-left: 12px;
    width: 100%;
    &__header {
        font-size: 26px;
        padding-bottom: 12px;
        border-bottom: 1px solid $borderCol;
    }
}

// .create-article-btn {
//     user-select: none;
//     cursor: pointer;
//     display: inline-flex;
//     align-items: center;
//     font-size: 18px;
//     padding: 8px 10px;
//     margin-top: 12px;
//     border: 1px solid $borderCol;
//     border-radius: 5px;
//     box-shadow: 0 0 10px #e0e0e0;
//     img {
//         max-width: 20px;
//         margin-right: 6px;
//     }
//     &:hover {
//         background-color: #ffe9e9;
//         box-shadow: 0 0 12px #e0e0e0;
//         transition: 0.2s;
//     }
// }
</style>