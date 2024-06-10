<template>
    <div class="create-btn">
        <img src="../assets/images/interface/create.svg" alt="">
        Создать
    </div>
</template>

<script>
export default {
    name: 'CreateBtn'
}
</script>

<style lang="scss">
@import '../variables.scss';

.create-btn {
    user-select: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    font-size: 22px;
    padding: 7px 14px;
    margin-top: 16px;
    border: 1px solid $borderCol;
    border-radius: 5px;
    box-shadow: 0 0 10px #f0f0f0;
    color: white;
    background-color: $buttonColor;
    img {
        width: 20px;
        margin-right: 10px;
    }
    &:hover {
        background-color: $btnHoverCol;
        box-shadow: 0 0 12px #e0e0e0;
        transition: 0.2s;
    }
}
</style>