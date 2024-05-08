<template>
  <div class="history-container">
    <!-- <div class="loading-screen" v-if="isLoading">Loading Data ...</div> -->
    <LoadingWheelComponent v-if="isLoading" />
    <ListContainerComponent :loading="isLoading" :budgets="budgets" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ListContainerComponent from './ListContainer.component.vue'
import LoadingWheelComponent from './LoadingWheel.component.vue'

export default defineComponent({
  components: { ListContainerComponent, LoadingWheelComponent },
  props: ['isLoading', 'budgets'],
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.history-container {
  width: 100%;
  height: 330px;
  margin: 15px 0;
}
</style>
