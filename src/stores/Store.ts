import { defineStore } from 'pinia'

export type BudgetType = {
  id: number
  itemName: string
  amount: number
  date: string
  isExpense: boolean
}

export interface BudgetOptions {
  budget: BudgetType[]
  isLoading: boolean
  showAdder: boolean
}

export const useBudgetStore = defineStore('budgetStore', {
  state: (): BudgetOptions => ({
    budget: [],
    isLoading: false,
    showAdder: false
  }),
  getters: {
    async getAll() {
      this.isLoading = true

      try {
        const response = await fetch('http://localhost:3000/budget')
        const data = await response.json()

        this.budget = data
      } catch (err: any) {
        console.log(err.message)
      } finally {
        this.isLoading = false
      }
    },
    getTotalExpense: (state): number => {
      return parseFloat(
        state.budget
          .reduce((p: number, curr: BudgetType) => (curr.isExpense ? p + curr.amount : p), 0)
          .toFixed(2)
      )
    },
    getTotalIncome: (state): number => {
      return parseFloat(
        state.budget
          .reduce((p: number, curr: BudgetType) => (!curr.isExpense ? p + curr.amount : p), 0)
          .toFixed(2)
      )
    },
    getTotal: (state): number => {
      return parseFloat(
        state.budget
          .reduce(
            (p: number, curr: BudgetType) => (curr.isExpense ? p - curr.amount : p + curr.amount),
            0
          )
          .toFixed(2)
      )
    }
  },
  actions: {
    async addNewTrack(item: BudgetType): Promise<void> {
      this.budget.push(item)

      try {
        await fetch('http://localhost:3000/budget', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item)
        })
      } catch (err: any) {
        console.log(err.message)
      }
    },
    changeAdderVisibility(): void {
      this.showAdder = !this.showAdder
    }
  }
})
