<template>
  <aside :class="extendedSideBar ? '' : 'shrink'">
    <div class="logo-container">
      <img src="" alt="logo" class="logo" />
    </div>
    <nav>
      <RouterLink to="/" class="dashboard" :class="currentTab === 'dashboard' ? 'active' : ''">
        <div>
          <span class="material-symbols-outlined"> team_dashboard </span>
          <p>Dashboard</p>
        </div>
      </RouterLink>
      <RouterLink to="/history" class="history" :class="currentTab === 'history' ? 'active' : ''">
        <div>
          <span class="material-symbols-outlined"> history </span>
          <p>History</p>
        </div>
      </RouterLink>
      <RouterLink
        to="/settings"
        class="settings"
        :class="currentTab === 'settings' ? 'active' : ''"
      >
        <div>
          <span class="material-symbols-outlined"> settings </span>
          <p>Settings</p>
        </div>
      </RouterLink>
    </nav>
    <div class="side-arrow" @click="changeArrow">
      <span v-if="!extendedSideBar" class="material-symbols-outlined"> chevron_right </span>
      <span v-else class="material-symbols-outlined"> chevron_left </span>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { useOptionsStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

const optionStore = useOptionsStore()

const { extendedSideBar, currentTab } = storeToRefs(optionStore)

function changeArrow(): void {
  optionStore.changeSideBar()
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/__variable.scss';

aside {
  position: relative;
  height: 100vh;
  width: 7rem;
  padding: 0 5rem;
  box-shadow: 0.01rem 0 0 $secondaryColor;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &.shrink {
    width: 2rem;
    padding: 0 2rem;
    nav {
      a {
        padding: 0;
        div {
          min-width: 100%;
          justify-content: center;
          p {
            display: none;
          }
        }
      }
    }
  }
  .logo-container {
    width: 100%;
    height: 5rem;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav {
    width: 100%;
    height: calc(100% - 5rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    cursor: pointer;
    a {
      padding: 0.25rem 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.25rem;
      text-decoration: none;
      outline: none;
      color: $secondaryColor;
      div {
        min-width: 7rem;
        height: 2.25rem;
        margin-left: 0.25rem;
        padding: 0 0.25rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        &:hover {
          background-color: $secondaryColor;
          color: white;
        }
        span {
          font-size: 1.75rem;
        }
        p {
          width: max-content;
          font-size: 1rem;
          font-weight: 500;
          text-align: right;
        }
      }
    }
  }
  .side-arrow {
    position: absolute;
    top: 45%;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 3.125rem;
    aspect-ratio: 1;
    cursor: pointer;
    background-color: white;
    z-index: 1000;
    span {
      border: 1px solid $secondaryColor;
      border-radius: 35%;
      font-size: 3rem;
      color: $secondaryColor;
    }
  }
}

@media screen and (max-width: 500px) {
  aside {
    width: 2rem;
    padding: 0 2rem;
    box-shadow: 0.01rem 0 0 $secondaryColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    nav {
      a {
        padding: 0;
        div {
          min-width: 100%;
          justify-content: center;
          p {
            display: none;
          }
        }
      }
    }
    .side-arrow {
      display: none;
    }
  }
}
</style>
