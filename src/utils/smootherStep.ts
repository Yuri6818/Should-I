// smootherStep.ts
// Advanced smoothing function.
// Even softer S-curve than smoothStep.
// Used in high-quality animation systems, chaos transitions,
// UI polish, particle motion, and camera movement.

export const smootherStep = (t: number): number => {
  // Clamp t to [0, 1]
  const clamped = Math.max(0, Math.min(1, t))

  // SmootherStep formula: t^3 * (t * (6t - 15) + 10)
  return clamped * clamped * clamped * (clamped * (clamped * 6 - 15) + 10)
}
