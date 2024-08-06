import { defineStore } from 'pinia'

import { supabase } from '@/lib/supabaseClient'

export type BudgetType = {
  id: number
  itemName: string
  amount: number
  created_at: string
  isExpense: boolean
}

export type AddType = {
  itemName: string
  amount: number
  isExpense: boolean
}

export interface BudgetOptions {
  budget: BudgetType[]
  isLoading: boolean
  showAdder: boolean
}

type CurrentTab = 'dashboard' | 'settings' | 'history'
type Language = 'en' | 'bn' | 'de'
export interface OptionOptions {
  extendedSideBar: boolean
  currentTab: CurrentTab
  theme: 'dark' | 'light'
  language: Language
  notification: boolean
}

export const useBudgetStore = defineStore('budgetStore', {
  state: (): BudgetOptions => ({
    budget: [],
    isLoading: false,
    showAdder: false
  }),
  getters: {
    async getAll(): Promise<void> {
      this.isLoading = true

      try {
        const { data } = await supabase.from('budgets').select('*')
        if (data) {
          this.budget = [...data]
        } else {
          this.isLoading = false
          throw new Error('No data')
        }
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
    async addNewTrack(item: AddType): Promise<void> {
      const { data, error } = await supabase
        .from('budgets')
        .insert([{ itemName: item.itemName, amount: item.amount, isExpense: item.isExpense }])
        .select()

      if (data) {
        data.forEach((el) => this.budget.push(el))
      }
      if (error) {
        throw Error(error.message)
      }
    },

    async deleteTask(itemId: number) {
      try {
        await supabase.from('budgets').delete().eq('id', itemId)

        this.budget = this.budget.filter((el) => el.id !== itemId)
      } catch (err: any) {
        throw Error(err.message)
      }
    },
    changeAdderVisibility(): void {
      this.showAdder = !this.showAdder
    }
  }
})

export const useOptionsStore = defineStore('optionStore', {
  state: (): OptionOptions => ({
    extendedSideBar: true,
    currentTab: 'dashboard',
    theme: 'light',
    language: 'en',
    notification: false
  }),
  getters: {},
  actions: {
    changeSideBar(): void {
      this.extendedSideBar = !this.extendedSideBar
    },
    setCurrentTab(value: CurrentTab): void {
      this.currentTab = value
    }
  }
})
