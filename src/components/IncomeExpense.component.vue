<template>
  <div class="income-expense">
    <span class="income">${{ income }}</span>
    <span class="expense">${{ expense }}</span>
  </div>
</template>

<script lang="ts">
import { useBudgetStore, type BudgetType } from '@/stores/Store'
import { storeToRefs } from 'pinia'
import { defineComponent, ref, type Ref } from 'vue'

export default defineComponent({
  setup() {
    const budgetStore = useBudgetStore()
    const { getTotalExpense, getTotalIncome } = storeToRefs(budgetStore)

    const income: Ref<number> = ref(getTotalIncome)
    const expense: Ref<number> = ref(getTotalExpense)

    return {
      income,
      expense
    }
  }
})
</script>

<style scoped lang="scss">
div {
  width: 100%;
  margin: 15px 0;
  display: flex;
  &.income-expense {
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: space-evenly;
    span {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      pointer-events: none;
      &.income {
        background-color: rgb(93, 255, 93);
      }
      &.expense {
        background-color: rgb(255, 93, 93);
      }
    }
  }
}
</style>
