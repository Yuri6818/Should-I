// clamp01.ts
// Clamps a number to the [0, 1] range.
// Useful for animation progress, chaos intensity,
// easing inputs, scroll mapping, and particle lifetimes.

export const clamp01 = (t: number): number => {
  return Math.max(0, Math.min(1, t))
}
