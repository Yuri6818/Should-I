// clamp.ts
// Ensures a number stays within a min/max range.
// Useful for animations, chaos mode math, UI scaling, safe value boundaries.

export const clamp = (value: number, min: number, max: number): number => {
  // No empty error handlers — clamping is deterministic
  if (value < min) return min
  if (value > max) return max
  return value
}
