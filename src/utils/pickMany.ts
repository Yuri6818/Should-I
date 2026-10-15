// pickMany.ts
// Picks N unique random items from an array.
// Useful for chaos mode bursts, multi-border selection,
// randomizing multiple UI elements, and game-like logic.

import { shuffle } from './shuffle'

export const pickMany = <T>(array: T[], count: number): T[] => {
  if (count < 1) {
    throw new Error('pickMany: count must be at least 1')
  }

  if (array.length === 0) {
    throw new Error('pickMany: cannot pick from an empty array')
  }

  // Shuffle first to ensure randomness
  const shuffled = shuffle(array)

  // Clamp count to array length
  const safeCount = Math.min(count, shuffled.length)

  return shuffled.slice(0, safeCount)
}
