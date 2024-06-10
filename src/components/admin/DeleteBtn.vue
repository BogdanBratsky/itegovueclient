<template>
    <div class="delete-btn">
        <img src="../../assets/images/interface/delete.svg" alt="">
        Удалить
    </div>
</template>

<script>
export default {
    name: 'deleteBtn',
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
@import '../../variables.scss';

.delete-btn {
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: white;
    background-color: #b15757;
    padding: 6px 10px;
    border: 1px solid $borderCol;
    border-radius: 5px;
    box-shadow: 0 0 10px #f0f0f0;
    margin-left: 8px;
    img {
        max-width: 16px;
        margin-right: 6px;
    }
    &:hover {
        background-color: #c55656;
        transition: 0.2s;
    }
}

</style>