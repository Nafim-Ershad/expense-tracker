<script setup lang="ts">
import TitleBarComponent from './components/TitleBar.component.vue'
import AddSymbolComponent from './components/AddSymbol.component.vue'
import { onMounted } from 'vue'
import { useBudgetStore } from './stores/Store'

const budgetStore = useBudgetStore()

onMounted(() => {
  budgetStore.getAll
})
</script>

<template>
  <TitleBarComponent />
  <div class="view-container">
    <RouterView />
  </div>
  <AddSymbolComponent />
</template>

<style scoped></style>
