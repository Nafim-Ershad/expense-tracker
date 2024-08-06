<template>
  <section>
    <div class="card-container-small">
      <ViewCardComponent
        title="Total Income"
        iconName="trending_up"
        :value="totalIncome"
        color="green"
      />
      <ViewCardComponent
        title="Total Expense"
        iconName="trending_down"
        :value="totalExpense"
        color="red"
      />
      <ViewCardComponent
        title="Available Credit"
        iconName="attach_money"
        :value="totalMoney"
        color="none"
      />
    </div>
    <div class="card-container-big">
      <ChartContainerComponent />
      <ListContainerComponent :budgets="budget" :loading="isLoading" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue'
import { storeToRefs } from 'pinia'

import ViewCardComponent from '@/components/ViewCard.component.vue'
// import IncomeExpenseComponent from '@/components/IncomeExpense.component.vue'
// import HistoryContainerComponent from '@/components/HistoryContainer.component.vue'
import ChartContainerComponent from '@/components/ChartContainer.component.vue'
import ListContainerComponent from '@/components/ListContainer.component.vue'

import { useBudgetStore } from '@/stores/Store'

export default defineComponent({
  // components: { IncomeExpenseComponent, HistoryContainerComponent },
  components: { ViewCardComponent, ChartContainerComponent, ListContainerComponent },
  setup() {
    const budgetStore = useBudgetStore()
    const { isLoading, budget, getTotal, getTotalIncome, getTotalExpense } =
      storeToRefs(budgetStore)

    const totalIncome: Ref<number> = ref(getTotalIncome)
    const totalExpense: Ref<number> = ref(getTotalExpense)
    const totalMoney: Ref<number> = ref(getTotal)

    return {
      isLoading,
      budget,
      totalMoney,
      totalIncome,
      totalExpense
    }
  }
})
</script>

<style scoped lang="scss">
section {
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  .card-container-small {
    width: 100%;
    padding: 0.25rem 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
  .card-container-big {
    width: 100%;
    height: 100%;
    padding: 0.25rem 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}
</style>
