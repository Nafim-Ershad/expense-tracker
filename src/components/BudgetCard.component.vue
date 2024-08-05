<template>
  <div class="budget-list" :class="budget.isExpense ? `expense` : `income`">
    <span class="material-symbols-outlined delete" @click="deleteTask">close</span>
    <span class="item-details">
      <span class="item-name">{{ budget.itemName }}</span>
      <span class="item-date-container">
        <span class="item-time">
          {{ new Date(budget.created_at).toLocaleTimeString() }}
        </span>
        <span class="item-date">
          {{ new Date(budget.created_at).toLocaleDateString() }}
        </span>
      </span>
    </span>
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
    span {
      margin: 0;
    }
    &.delete {
      cursor: pointer;
    }
    &.item-details {
      width: 70%;
      padding: 0.3125rem 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .item-name {
        font-weight: 600;
        font-size: 1.125rem;
      }
      .item-date-container {
        width: 100%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 300;
        font-size: 0.75rem;
        span {
          margin: 0;
        }
      }
    }
  }
}
</style>
