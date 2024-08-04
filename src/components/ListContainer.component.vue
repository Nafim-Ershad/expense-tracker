<template>
  <div class="list-container" v-if="!loading">
    <div class="container">
      <div v-for="budget in budgets" :key="budget.id">
        <BudgetCardComponent :budget="budget" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BudgetCardComponent from './BudgetCard.component.vue'

export default defineComponent({
  props: ['loading', 'budgets'],
  components: { BudgetCardComponent },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.list-container {
  width: 50%;
  height: 100%;
  max-height: 35rem;
  border: 1px solid rgba(160, 160, 160, 0.1);
  border-radius: 1.2rem;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: 0.5 1 45%;
  align-items: center;
  justify-content: center;
  .container {
    width: 100%;
    height: 90%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    div {
      width: 100%;
      height: 60px;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
