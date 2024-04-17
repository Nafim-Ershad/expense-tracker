<template>
  <canvas id="chart"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Chart from 'chart.js/auto'

export default defineComponent({
  setup() {
    const ctx = document.querySelector<HTMLCanvasElement>('chart')
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }
    return {}
  }
})
</script>

<style scoped></style>
