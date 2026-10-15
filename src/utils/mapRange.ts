// mapRange.ts
// Maps a number from one range to another.
// Useful for chaos intensity → animation speed,
// scroll distance → opacity, time → position,
// responsive UI effects, and game-like logic.

export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  if (inMax === inMin) {
    throw new Error('mapRange: input range cannot be zero')
  }

  const t = (value - inMin) / (inMax - inMin)
  return outMin + t * (outMax - outMin)
}
