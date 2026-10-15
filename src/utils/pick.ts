// pick.ts
// Picks a random item from an array.
// Useful for chaos mode, UI randomization, border selection,
// animation picking, and game-like logic.

import { rngInt } from './rng'

export const pick = <T>(array: T[]): T => {
  if (array.length === 0) {
    throw new Error('pick: cannot pick from an empty array')
  }

  const index = rngInt(array.length)
  return array[index]
}
