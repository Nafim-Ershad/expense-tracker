<template>
  <div class="cardContainer">
    <div>
      <span class="title"> {{ $props.title }} </span>
      <span class="icon">
        <span class="material-symbols-outlined" :class="$props.color"> {{ $props.iconName }} </span>
      </span>
    </div>
    <span class="value" :class="$props.color">
      $
      {{ numberWithCommas($props.value) }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { numberWithCommas } from '@/lib/utils'

type PropType = {
  title?: string
  value?: number
  iconName?: string
  color?: 'green' | 'red' | 'none'
}

export default defineComponent({
  props: ['title', 'value', 'iconName', 'color'],
  setup(props: PropType) {
    return {
      numberWithCommas
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/__variable.scss';
.cardContainer {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(160, 160, 160, 0.1);
  border-radius: 1.2rem;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 18rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
  div {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      width: max-content;
      display: inline-block;
      font-size: 1rem;
      &.icon {
        .green {
          color: $green;
        }
        .red {
          color: $red;
        }
      }
    }
  }
  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    font-weight: 600;
  }
}
</style>
