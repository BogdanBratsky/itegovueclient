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
                    <div class="footer-contacts__item">
                        <img src="../assets/images/contacts/mail.svg" alt="">
                        support@itego.pro
                    </div>
                    <div class="footer-contacts__item">
                        <img src="../assets/images/contacts/phone.svg" alt="">
                        +7 (499) 348 99 33
                    </div>
                    <div class="footer-contacts__item">
                        <img src="../assets/images/contacts/instagram.svg" alt="">
                        @itegopro
                    </div>
                </div>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'ItegoFooter'
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
        // background-color: $backgroundColor;
        background-color: #f6f6f6;
        padding: 14px 15px;
        // color: gray;
        border-radius: 8px;
        // box-shadow: 0 0 12px #dfdfdf;
        font-size: 16px;
        display: flex;
        align-items: center;
        margin-left: 12px;
        & img {
            margin-right: 12px;
            width: 22px;
            height: 22px;
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