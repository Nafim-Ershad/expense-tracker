<template>
  <div class="chart-container">
    <Bar :data="data" :options="options" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useBudgetStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import * as chartConfig from './chartConfig'
import { getToday } from '@/lib/utils'

export default defineComponent({
  components: { Bar },
  setup() {
    const budgetStore = useBudgetStore()

    const { getTotalExpense, getTotalIncome, budget } = storeToRefs(budgetStore)

    const dataSet = ref([getTotalExpense, getTotalIncome])

    const budgetValue = budget.value

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    const { options } = chartConfig
    const data = ref<any>({
      datasets: []
    })

    budgetValue.forEach((value) => {
      if (value.isExpense) {
        chartConfig.data.datasets[1].data.push(value.amount)
      } else {
        chartConfig.data.datasets[0].data.push(value.amount)
      }
    })

    data.value = chartConfig.data
    // console.log(getToday())

    return { dataSet, options, data }
  }
})
</script>

<style scoped lang="scss">
.chart-container {
  width: 50%;
  height: 100%;
  max-height: 35rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(160, 160, 160, 0.1);
  border-radius: 1.2rem;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex: 0.5 1 45%;
  align-items: center;
  justify-content: space-between;
}
</style>
