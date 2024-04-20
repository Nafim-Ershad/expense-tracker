<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <canvas id="chart"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Chart from 'chart.js/auto'

export default defineComponent({
  props: ['data'],
  setup(props) {
    const dataSets = [...props.data].map((e) => e.value)

    onMounted(() => {
      const ctx = document.querySelector<HTMLCanvasElement>('#chart')
      if (ctx !== null) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Expense', 'Income'],
            datasets: [
              {
                label: '',
                data: dataSets,
                backgroundColor: ['rgba(228, 8, 10, 0.5)', 'rgba(6, 248, 19, 0.5)'],
                borderColor: ['rgb(228, 8, 10)', 'rgb(6, 248, 19)'],
                borderWidth: 3
              }
            ]
          },
          options: {
            responsive: true
          }
        })
      }
    })
  }
})
</script>

<style scoped></style>
