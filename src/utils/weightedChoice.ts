// weightedChoice.ts
// Selects an item based on weighted probabilities.
// Useful for chaos mode intensity, premium weighting,
// mood-based answers, animation randomness with bias.

import { rng } from './rng'

// Generic weighted choice
// items: array of values
// weights: array of numbers (same length)
// Returns one item based on weight distribution
export const weightedChoice = <T>(items: T[], weights: number[]): T => {
  if (items.length !== weights.length) {
    throw new Error('weightedChoice: items and weights must have equal length')
  }

  // Total weight
  const total = weights.reduce((sum, w) => sum + w, 0)

  if (total <= 0) {
    throw new Error('weightedChoice: total weight must be greater than zero')
  }

  // Random threshold
  const threshold = rng() * total

  // Walk through weights until threshold is crossed
  let running = 0
  for (let i = 0; i < items.length; i++) {
    running += weights[i]
    if (threshold <= running) {
      return items[i]
    }
  }

  // Fallback (should never happen)
  return items[items.length - 1]
}
