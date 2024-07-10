<template>
    <footer class="footer">
        <div class="container">
            <nav class="footer__nav">
                <div class="footer__logo">
                    <router-link to="/">
                        <img src="../assets/images/logo.svg" alt="">
                    </router-link>
                </div>
                <div class="footer-contacts">
                    <a href="https://vk.com/itegopro" target="_blank">
                        <div class="footer-contacts__item">
                            <img src="../assets/images/contacts/vk.svg" alt="">
                            vk.com/itegopro
                        </div>
                    </a>
                    <a href="https://www.instagram.com/itegopro/" target="_blank">
                        <div class="footer-contacts__item">
                            <img src="../assets/images/contacts/instagram.svg" alt="">
                            @itegopro
                        </div>
                    </a>
                    <div class="footer-contacts__item" @click="togglePhoneVisibility">
                        <img src="../assets/images/contacts/phone.svg" alt="">
                        <span v-if="!isPhoneVisible">+7 (499) 348 9...</span>
                        <span v-else>
                            <a href="tel:+74993489933">
                                +7 (499) 348 99 33
                            </a>
                        </span>
                    </div>
                    <div class="footer-contacts__item" @click="toggleEmailVisibility">
                        <img src="../assets/images/contacts/mail.svg" alt="">
                        <span v-if="!isEmailVisible">help@ite...</span>
                        <span v-else>
                            <a href="mailto:help@itego.pro">
                                help@itego.pro 
                            </a>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'ItegoFooter',
    data() {
        return {
            isPhoneVisible: false,
            isEmailVisible: false
        }
    },
    methods: {
        togglePhoneVisibility() {
            this.isPhoneVisible = true;
        },
        toggleEmailVisibility() {
            this.isEmailVisible = true;
        },
    }
}
</script>

<style lang="scss">
@import '../variables.scss';

.footer {
    border-top: 1px solid #eaeaea;
    box-shadow: 0 5px 15px -10px #eaeaea inset;
    color: gray;
}

.footer__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 45px 0;
}

.footer-contacts {
    display: flex;
    align-items: center;
    &__item {
        cursor: pointer;
        // background-color: $backgroundColor;
        background-color: #f6f6f6;
        padding: 14px 15px;
        color: #808080;
        border-radius: 8px;
        // box-shadow: 0 0 12px #dfdfdf;
        font-size: 16px;
        display: flex;
        align-items: center;
        margin-left: 12px;
        a {
            color: #808080;
        }
        img {
            // filter: grayscale(50%);
            user-select: none;
            margin-right: 12px;
            width: 22px;
            height: 22px;
        }
        &:hover {
            box-shadow: 0 8px 10px #ececec;
            transition: 0.3s;
        }
    }
} 

.footer__col {
    margin-right: 22px;
}


.footer__logo img {
    cursor: pointer;
    filter: grayscale(100%);
    opacity: 0.35;
    height: 40px;
    &:hover {
        filter: grayscale(0);
        opacity: 1;
        transition: 0.7s;
    }
}
</style>