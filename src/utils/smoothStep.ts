// smoothStep.ts
// Classic game-dev smoothing function.
// Produces a soft S-curve between 0 and 1.
// Useful for natural transitions, chaos mode,
// UI polish, particle motion, and animation blending.

export const smoothStep = (t: number): number => {
  // Clamp t to [0, 1]
  const clamped = Math.max(0, Math.min(1, t))

  // SmoothStep formula: t * t * (3 - 2 * t)
  return clamped * clamped * (3 - 2 * clamped)
}
