// useAppStore.ts
// Central app state: modes, answers, history, UI selections.
// Keeps components clean and avoids prop-drilling.
// Expandable as the app grows.

import { create } from 'zustand'

// Types for clarity and safety
export type Mode = 'default' | 'chaos' | 'calm' | 'random'
export type Answer = 'yes' | 'no' | 'maybe'

// Shape of the store
interface AppStore {
  mode: Mode
  setMode: (_mode: Mode) => void

  answer: Answer | null
  setAnswer: (_answer: Answer) => void

  history: Answer[]
  addToHistory: (_answer: Answer) => void
  clearHistory: () => void
}

// Zustand store
export const useAppStore = create<AppStore>((set, get) => ({
  // Default mode
  mode: 'default',

  // Change mode
  setMode: (_mode) => {
    set({ mode: _mode })
  },

  // Current answer
  answer: null,

  // Set answer
  setAnswer: (_answer) => {
    set({ answer: _answer })
  },

  // Answer history
  history: [],

  // Add answer to history
  addToHistory: (_answer) => {
    const current = get().history
    set({ history: [...current, _answer] })
  },

  // Clear history
  clearHistory: () => {
    set({ history: [] })
  },
}))
