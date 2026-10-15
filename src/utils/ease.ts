// ease.ts
// Common easing functions for smooth animations.
// Useful for chaos mode transitions, UI polish,
// particle motion, and game-like movement curves.

// t is expected to be in [0, 1]

export const easeIn = (t: number): number => {
  const clamped = Math.max(0, Math.min(1, t))
  return clamped * clamped
}

export const easeOut = (t: number): number => {
  const clamped = Math.max(0, Math.min(1, t))
  return 1 - (1 - clamped) * (1 - clamped)
}

export const easeInOut = (t: number): number => {
  const clamped = Math.max(0, Math.min(1, t))
  return clamped < 0.5
    ? 2 * clamped * clamped
    : 1 - Math.pow(-2 * clamped + 2, 2) / 2
}
