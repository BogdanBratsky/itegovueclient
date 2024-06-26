<template>
    <header class="header">
        <div class="header__logo-block">
            <img id="logo" src="../../assets/images/logo.svg" alt="">
            <span class="header__admin-panel">admin panel</span>
        </div>
        <nav class="header__nav">
            <router-link to="/main">
                <div class="header__mainpage-btn">На главную</div>
            </router-link>
            <div @click="showMenu" class="header__user-name">
                {{ name }}
                <img src="../../assets/images/interface/user.svg" alt="">
            </div>
            <div v-if="isClicked" class="header__exit-menu" @click="showForm()">
                <img id="exit" src="../../assets/images/interface/exit.svg">
                Выйти
            </div>
        </nav>
        <div class="delete-confirmation" v-if="isOpen">
            <header class="delete-confirmation__title">Вы уверены, что хотите выйти?</header>
            <div class="delete-confirmation__options">
                <div id="cancel" @click="isOpen = false">Отмена</div>
                <div id="delete" @click="logout()">Выйти</div>
            </div>
        </div>
        <div @click="showForm()" v-if="isOpen" class="background"></div>
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
                <router-link v-if="superuser" to="/admin/users">
                    <div class="admin-sidebar__item">Пользователи</div>
                </router-link>
            </div>
        </aside>
        <section class="admin-sandbox">
            <router-view></router-view>
        </section>
    </main>
</template>

<script>
import { serverAddres } from '../../../config.js';
import axios from 'axios';

export default {
    data() {
        return {
            name: localStorage.getItem('name'),
            superuser: false,
            success: false,
            isClicked: false,
            isOpen: false
        }
    },
    methods: {
        async checkUser() {
            await axios
                .get(`${serverAddres}/checktoken`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.token}`
                    }
                })
                .then(response => {
                    this.superuser = response.data.superuser;
                    this.success = response.data.success;
                    localStorage.setItem('success', this.success);
                    if (!this.success) {
                        this.$router.push('/admin/login');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    this.success = false;
                    localStorage.setItem('success', this.success);
                    this.$router.push('/admin/login');
                });
        },
        showMenu() {
            this.isClicked = !this.isClicked;
        },
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.setItem('success', 'false');
            this.$router.push('/admin/login');
        },
        showForm() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        },
    },
    mounted() {
        this.checkUser();
    }
}
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.delete-confirmation {
    z-index: 10;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    background-color: white;
    border-radius: 8px;
    &__title {
        font-size: 24px;
        margin-bottom: 50px;
    }
    &__options {
        display: flex;
        align-items: center;
        float: right;
        div {
            user-select: none;
            box-shadow: 0 0 10px #afafaf;
            border-radius: 3px;
            padding: 4px 8px;
            font-size: 20px;
        }
        #cancel {
            cursor: pointer;
            margin-right: 8px;
            &:active {
                box-shadow: 0 0 20px #afafaf;
            }
        }
        #delete {
            cursor: pointer;
            background-color: #b15757;
            color: white;
            &:active {
                background-color: #c43333;
            }
        }
    }
}

.background {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.6;
    width: 100%;
    height: 100vh;
}

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
    #logo {
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
    &__nav {
        display: flex;
        align-items: center;
        position: relative;
    }
    &__mainpage-btn {
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        box-shadow: 0 0 10px #d8d8d8; 
        padding: 6px 10px;
        color: black;
        margin-right: 24px;
    }
    &__user-name {
        cursor: pointer;
        text-decoration: underline;
        display: flex;
        align-items: center;
        img {
            max-width: 14px;
            margin-left: 8px;
        }
    }
    &__exit-menu {
        cursor: pointer;
        display: flex;
        align-items: center;
        position: absolute;
        top: 100%;
        right: 0;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        padding: 6px 12px;
        background-color: white;
        color: #b15757;
        box-shadow: 0 5px 10px #e6e6e6;
        #exit {
            max-width: 12px;
            margin-right: 6px;
        }
        &:hover {
            background-color: #fff6f6;
            transition: 0.2s;
        }
    }
}

.main-wrapper {
    display: flex;
    justify-content: space-between;
}

.admin-sidebar {
    display: flex;
    flex-direction: column;
    width: 210px;
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
        font-size: 17px;
        padding: 12px;
        color: gray;
        border-bottom: 1px solid #ece3e3;
        &:hover {
            text-decoration: underline;
            background-color: #f0f0f0;
            transition: 0.2s;
        }
    }
}

.admin-sandbox {
    padding-left: 12px;
    width: 100%;
}
</style>
