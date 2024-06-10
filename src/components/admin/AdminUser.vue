<template>
    <div class="admin-user">
        <div class="admin-user__info">
            <div class="admin-user__name">
                пользователь
            </div>
            <div class="admin-user__email">
                user1234@email.com
            </div>
        </div>
        <div class="admin-user__options">
            <!-- <div class="admin-user__option" id="edit">
                <img src="../../assets/images/interface/edit.svg" alt="">
                Редактировать
            </div> -->
            <deleteBtn @click="showForm()"/>
        </div>
    </div>
</template>

<script>
import deleteBtn from './DeleteBtn.vue'

export default {
    name: 'AdminUser',
    components: {
        deleteBtn
    },
}
</script>

<style lang="scss">
@import '../../variables.scss';

.admin-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    background-color: $adminBlock;
    box-shadow: 0 0 12px #dfdfdf;
    margin-bottom: 10px;
    // border-bottom: 1px solid #eeeeee;
    border-radius: 8px;
    color: gray;
    &:active {
        box-shadow: 0 0 15px #dfdfdf;
    }
    &__name {
        font-size: 20px;
        margin-bottom: 12px;
    }
    &__options {
        display: flex;
    }
}
</style>