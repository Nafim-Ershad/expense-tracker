<template>
  <AddNewStatementComponent />
  <button @click="handleAdderVisibility">
    <span class="material-symbols-outlined" :class="showAdder ? 'cross' : 'plus'"> add </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'

import { useBudgetStore } from '@/stores/Store'

import AddNewStatementComponent from './AddNewStatement.component.vue'

export default defineComponent({
  components: { AddNewStatementComponent },
  setup() {
    const budgetStore = useBudgetStore()
    const { showAdder } = storeToRefs(budgetStore)

    const handleAdderVisibility = () => {
      budgetStore.changeAdderVisibility()
    }

    return {
      showAdder,
      handleAdderVisibility
    }
  }
})
</script>

<style scoped lang="scss">
button {
  width: 60px;
  aspect-ratio: 1;
  position: absolute;
  right: 25px;
  bottom: 25px;
  border-radius: 50%;
  z-index: 1000;
  cursor: pointer;

  span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    transition: transform 200ms ease-in-out;
    &.cross {
      transform: rotate(45deg);
    }
  }
}
</style>
