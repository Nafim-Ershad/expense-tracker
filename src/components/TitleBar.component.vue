<template>
  <header>
    <h1>Expense Tracker</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Platypi:ital,wght@0,300..800;1,300..800&display=swap');

header {
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: rgb(224, 224, 224);
  h1 {
    font-family: 'Platypi', serif;
  }
}
</style>
