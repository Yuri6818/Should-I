// useThemeStore.ts
// Handles dark/light mode for the entire app.
// Syncs with localStorage and updates the <html> element.
// Keeps App.tsx clean and avoids theme logic scattered everywhere.

import { create } from 'zustand'

// Allowed theme values
type Theme = 'light' | 'dark'

// Helper: read theme from localStorage safely
const getStoredTheme = (): Theme => {
  try {
    const value = localStorage.getItem('theme')
    return value === 'dark' ? 'dark' : 'light'
  } catch {
    // If storage fails, default to light
    return 'light'
  }
}

// Helper: apply theme to <html> element
const applyThemeToHtml = (theme: Theme): void => {
  const html = document.documentElement
  html.classList.remove('light', 'dark')
  html.classList.add(theme)
}

// Zustand store
interface ThemeStore {
  theme: Theme
  setTheme: (_theme: Theme) => void   // <-- FIXED HERE
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>((set, get) => {
  const initialTheme = getStoredTheme()
  applyThemeToHtml(initialTheme)

  return {
    theme: initialTheme,

    // Set theme directly
    setTheme: (_theme) => {
      localStorage.setItem('theme', _theme)
      applyThemeToHtml(_theme)
      set({ theme: _theme })
    },

    // Toggle between light/dark
    toggleTheme: () => {
      const current = get().theme
      const next: Theme = current === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', next)
      applyThemeToHtml(next)
      set({ theme: next })
    },
  }
})
