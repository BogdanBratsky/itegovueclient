<template>
    <section class="comparisons">
        <header class="comparisons__title">
            Содержать штатного специалиста или локальную it-инфраструктуру - НЕ ВЫГОДНО
        </header>
        <table class="comparisons__table">
            <tr class="comparisons__table-header">
                <td class="comparisons__expenses">Расходы из рассчета за год</td>
                <td class="comparisons__employee">Штатный сотрудник</td>
                <td class="comparisons__itego">Команда itego</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Зарплата</td>
                <td>600 000</td>
                <td>500 000</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Налоги</td>
                <td>258 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Рабочее место (ПК)</td>
                <td>50 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Больничный</td>
                <td>25 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Аренда и доп. расходы сотрудника</td>
                <td>30 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Повышение квалификации</td>
                <td>30 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>ПО для удаленного доступа</td>
                <td>27 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-footer">
                <td>Всего</td>
                <td>1 020 000</td>
                <td style="color: #a77070">500 000</td>
            </tr>
        </table>
    </section>
</template>

<script>
export default {
    name: 'ItegoComparisons'
}
</script>

<style lang="scss">
.comparisons {
    width: 100%;
    &__title {
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
    &__table {
        width: 100%;
        border-radius: 14px;
        box-shadow: 0 0 12px #dfdfdf;
        margin-bottom: 10px;
        background-color: white;
        // padding: 30px 0;
        tr:nth-child(2n) {
            background-color: #f9f9ff;
        }
        &-header {
            font-size: 36px;
            & td {
                color: #3d3d3d;
                padding: 25px;
            }
        }
        &-body {
            font-size: 26px;
            & td {
                padding: 16px 25px;
                color: grey;
            }
        }
        &-footer {
            font-size: 26px;
            & td {
                padding: 25px;
                color: grey;
            }
        }
    }
}
</style>