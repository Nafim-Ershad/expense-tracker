<template>
  <section>
    <div class="settings-container">
      <div class="theme-selector">
        <span>Theme</span>
        <div class="selector">
          <select v-model="theme">
            <option name="dark" value="dark">Dark</option>
            <option name="light" value="light">Light</option>
          </select>
        </div>
      </div>
      <div class="language-selector">
        <span>Language</span>
        <div class="selector">
          <select v-model="language">
            <option value="en">English</option>
            <option value="bn">Bangla</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
      <div class="notifications-selector">
        <span>Notifications</span>
        <div class="checkbox">
          <input type="checkbox" name="notifications" v-model="notification" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useOptionsStore } from '@/stores/Store'
export default defineComponent({
  setup() {
    const optionsStore = useOptionsStore()

    const { language, theme, notification } = storeToRefs(optionsStore)

    return { language, theme, notification }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/__variable.scss';
section {
  width: 100%;
  height: 100%;
  padding: 5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .settings-container {
    width: 60%;
    border: 1px solid rgba(160, 160, 160, 0.1);
    border-radius: 0.95rem;
    box-shadow:
      0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
    div {
      width: 100%;
      height: 3.5rem;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(160, 160, 160, 0.3);
      &:last-child {
        border: none;
        box-shadow: none;
      }
      span {
        font-size: 1.2rem;
        font-weight: 700;
      }
      .selector {
        position: relative;
        max-width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &::after {
          content: '';
          position: absolute;
          right: 2.5rem;
          top: 50%;
          border-style: solid;
          border-width: 5px;
          border-color: transparent;
          border-top-color: black;
          transform: translate(0, -50%);
          pointer-events: none;
        }
        select {
          width: 20%;
          min-width: 6.5rem;
          height: 70%;
          padding: 0.25rem 0.5rem;
          border: 1px solid rgba(160, 160, 160, 0.5);
          border-radius: 1rem;
          font-size: 1rem;
          outline: none;
          appearance: none; // Removes the arrow
          -moz-appearance: none;
          -webkit-appearance: none;
        }
      }
      .checkbox {
        max-width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
}
</style>
