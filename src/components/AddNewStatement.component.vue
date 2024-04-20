<template>
  <form id="form" @submit.prevent="handleSubmit" :class="showAdder ? `move-left` : `move-right`">
    <div class="form-group">
      <span class="expense" :class="isExpense ? 'active' : ''" @click="handleActive(true)"
        >Expense</span
      >
      <span class="income" :class="!isExpense ? 'active' : ''" @click="handleActive(false)"
        >Income</span
      >
    </div>
    <div class="form-group">
      <input type="text" class="title" v-model="itemName" placeholder="What are you planning?" />
    </div>
    <div class="form-group">
      <input type="number" step="0.01" class="amount" v-model="amount" placeholder="Add amount" />
    </div>

    <button>Add To Tracker</button>
  </form>
</template>

<script lang="ts">
import { useBudgetStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const itemName = ref('')
    const amount = ref(0)
    const isExpense = ref(true)

    const budgetStore = useBudgetStore()

    const { showAdder } = storeToRefs(budgetStore)

    const handleActive = (value: boolean): void => {
      isExpense.value = value
    }

    const handleSubmit = (): void => {
      budgetStore.addNewTrack({
        itemName: itemName.value,
        amount: amount.value,
        isExpense: isExpense.value
      })

      itemName.value = ''
      amount.value = 0
      isExpense.value = true
    }

    return {
      itemName,
      amount,
      isExpense,
      showAdder,
      handleActive,
      handleSubmit
    }
  }
})
</script>

<style scoped lang="scss">
form {
  width: 250px;
  height: 250px;
  position: absolute;
  right: 50px;
  bottom: 100px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all 500ms ease-in-out;
  background-color: white;

  &.move-left {
    right: 50px;
  }

  &.move-right {
    right: -20%;
  }

  .form-group {
    width: 100%;
    height: 30%;
    position: relative;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 350ms ease-in-out;
      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-left: 10px;
      }
      &.active {
        &.expense {
          background-color: red;
          color: white;
        }
        &.income {
          background-color: green;
          color: white;
        }
      }
      &.expense {
        border: 3px solid red;
      }
      &.income {
        border: 3px solid green;
      }
    }

    input {
      width: 100%;
      height: 1.3rem;
      outline: none;
    }
  }
}
</style>
