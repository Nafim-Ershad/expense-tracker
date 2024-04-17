<template>
  <section>
    <RouterLink to="/chart">
      <span class="material-symbols-outlined"> keyboard_arrow_right </span>
    </RouterLink>
    <div class="tracker-container">
      <div class="total-amount">${{ getTotal }}</div>
      <IncomeExpenseComponent />
      <HistoryContainerComponent :isLoading="isLoading" :budgets="budget" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IncomeExpenseComponent from '@/components/IncomeExpense.component.vue'
import HistoryContainerComponent from '@/components/HistoryContainer.component.vue'
import { useBudgetStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

export default defineComponent({
  components: { IncomeExpenseComponent, HistoryContainerComponent },
  setup() {
    const budgetStore = useBudgetStore()
    const { isLoading, budget, getTotal } = storeToRefs(budgetStore)

    return {
      isLoading,
      budget,
      getTotal
    }
  }
})
</script>

<style scoped lang="scss">
section {
  width: 100%;
  height: calc(100vh - 85px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translate(-50%, -50%);
    span {
      font-size: 55px;
      font-weight: 700;
      color: black;
    }
  }
  .tracker-container {
    width: 100%;
    max-width: 350px;
    height: 100%;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .total-amount {
      width: 100%;
      height: 80px;
      margin: 15px 0 15px 25px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      font-size: 40px;
    }
  }
}
</style>
