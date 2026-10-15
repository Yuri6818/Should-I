// shuffle.ts
// Fisher–Yates shuffle (optimal, unbiased).
// Useful for chaos mode, randomizing UI effects,
// mixing animation sequences, and game-like logic.

export const shuffle = <T>(array: T[]): T[] => {
  // Copy array to avoid mutating original
  const result = [...array]

  // Fisher–Yates algorithm
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    // Swap
    const temp = result[i]
    result[i] = result[j]
    result[j] = temp
  }

  return result
}
