<template>
  <div class="chart-container">
    <PieChartComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PieChartComponent from './PieChart.component.vue'

export default defineComponent({
  components: { PieChartComponent },
  setup() {
    return {}
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
