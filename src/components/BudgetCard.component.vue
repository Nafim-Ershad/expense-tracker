<template>
  <div class="budget-list" :class="budget.isExpense ? `expense` : `income`">
    <span class="material-symbols-outlined delete" @click="deleteTask">close</span>
    <span>{{ budget.itemName }}</span>
    <span>{{ numberWithCommas(budget.amount.toFixed(2)) }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { numberWithCommas } from '@/lib/utils'
import { useBudgetStore } from '@/stores/Store'

export default defineComponent({
  props: ['budget'],
  setup(props) {
    const budgetStore = useBudgetStore()

    const deleteTask = () => {
      budgetStore.deleteTask(props.budget.id)
    }

    return { deleteTask, numberWithCommas }
  }
})
</script>

<style scoped lang="scss">
@import '../assets/styles/__variable.scss';
.budget-list {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(160, 160, 160, 0.1);
  border-radius: 0.25rem;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  &.expense {
    border-right: 5px solid $red;
  }
  &.income {
    border-right: 5px solid $green;
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
