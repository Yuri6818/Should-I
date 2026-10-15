// easeMap.ts
// Maps a value from one range to another and applies an easing function.
// Useful for scroll → animation, chaos intensity → eased output,
// time → eased position, opacity/scale transitions, and particle motion.

import { easeIn, easeOut, easeInOut } from './ease'
import { mapRange } from './mapRange'

export type EaseType = 'in' | 'out' | 'inOut'

export const easeMap = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
  ease: EaseType = 'inOut'
): number => {
  if (inMax === inMin) {
    throw new Error('easeMap: input range cannot be zero')
  }

  // Normalize input to [0, 1]
  const t = mapRange(value, inMin, inMax, 0, 1)

  // Apply easing
  let eased: number
  switch (ease) {
    case 'in':
      eased = easeIn(t)
      break
    case 'out':
      eased = easeOut(t)
      break
    case 'inOut':
    default:
      eased = easeInOut(t)
      break
  }

  // Map eased value to output range
  return mapRange(eased, 0, 1, outMin, outMax)
}
