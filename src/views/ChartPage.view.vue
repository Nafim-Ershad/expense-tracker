<template>
  <section>
    <RouterLink to="/">
      <span class="material-symbols-outlined"> keyboard_arrow_left </span>
    </RouterLink>
    <ChartContainerComponent />
  </section>
</template>

<script lang="ts">
import ChartContainerComponent from '@/components/ChartContainer.component.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ChartContainerComponent },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
section {
  width: 100%;
  height: calc(100vh - 85px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translate(-50%, -50%);
    span {
      font-size: 55px;
      font-weight: 700;
      color: black;
    }
  }
}
</style>
