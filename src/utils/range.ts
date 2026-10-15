// range.ts
// Generates an array of numbers from start to end (inclusive).
// Useful for animation frames, chaos mode loops,
// building index arrays, and game-like logic.

export const range = (start: number, end: number): number[] => {
  if (end < start) {
    throw new Error('range: end must be greater than or equal to start')
  }

  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}
