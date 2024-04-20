<template>
  <div class="budget-list" :class="budget.isExpense ? `expense` : `income`">
    <span class="material-symbols-outlined delete" @click="deleteTask">close</span>
    <span>{{ budget.itemName }}</span>
    <span>{{ budget.amount.toFixed(2) }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useBudgetStore } from '@/stores/Store'

export default defineComponent({
  props: ['budget'],
  setup(props) {
    const budgetStore = useBudgetStore()

    const deleteTask = () => {
      budgetStore.deleteTask(props.budget.id)
    }

    return { deleteTask }
  }
})
</script>

<style scoped lang="scss">
div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  &.expense {
    border-right: 5px solid red;
  }
  &.income {
    border-right: 5px solid green;
  }
  span {
    height: 100%;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.delete {
      cursor: pointer;
    }
  }
}
</style>
