<template>
  <div class="chart-container">
    <ChartComponent :data="dataSet" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useBudgetStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

import ChartComponent from './Chart.component.vue'

export default defineComponent({
  components: { ChartComponent },
  setup() {
    const budgetStore = useBudgetStore()

    const { getTotalExpense, getTotalIncome } = storeToRefs(budgetStore)

    const dataSet = ref([getTotalExpense, getTotalIncome])

    return { dataSet }
  }
})
</script>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  max-width: 350px;
  height: 100%;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
