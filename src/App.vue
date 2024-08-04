<script setup lang="ts">
import { onMounted } from 'vue'
import { useBudgetStore } from './stores/Store'

// import TitleBarComponent from './components/TitleBar.component.vue'
import AddSymbolComponent from './components/AddSymbol.component.vue'
import SideBarComponent from './components/SideBar.component.vue'

const budgetStore = useBudgetStore()

onMounted(() => {
  budgetStore.getAll
})
</script>

<template>
  <!-- <TitleBarComponent /> -->
  <SideBarComponent />
  <div class="view-container">
    <RouterView />
  </div>
  <AddSymbolComponent />
</template>

<style lang="scss" scoped>
.view-container {
  width: 100%;
  height: 100vh;
}
</style>
