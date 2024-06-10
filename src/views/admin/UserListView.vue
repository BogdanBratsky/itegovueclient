<template>
    <div class="post-list">
       <header class="post-list__header">
           <div class="post-list__header-title">
                Создание, редактирование и удаление пользователей
           </div>
           <div class="post-list__options">
               <router-link to="/admin/articles/create">
                   <CreateBtn/>
               </router-link>
           </div>
       </header>
       <div class="post-list__wrap-header">
           Cписок пользователей: 
       </div>
       <div class="post-list__wrapper">
           <AdminUser/>
           <AdminUser/>
           <AdminUser/>
           <AdminUser/>
       </div>
    </div>
</template>

<script>
import AdminUser from '../../components/admin/AdminUser.vue'
import CreateBtn from '../../components/CreateBtn.vue'

export default {
   components: {
        AdminUser,
        CreateBtn
   }
}
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.post-list {
   &__header {
        border: 1px solid $borderCol;
        border-radius: 5px;
        box-shadow: 0 4px 12px #e0e0e0;
        color: black;
        background-color: $adminBlock;
        padding: 16px;
        margin-bottom: 36px;
        font-size: 26px;
        &-title {
            border-bottom: 1px solid $borderCol;
            padding-bottom: 12px;
        }
   }
   &__wrap-header {
       padding: 10px 0;
       font-size: 20px;
   }
   &__wrapper {
       display: flex;
       flex-wrap: wrap;
   }
}

</style>