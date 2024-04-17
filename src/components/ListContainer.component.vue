<template>
  <div class="list-container" v-if="!loading">
    <div v-for="budget in budgets" :key="budget.id">
      <BudgetCardComponent :budget="budget" />
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
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  div {
    width: 100%;
    height: 60px;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
