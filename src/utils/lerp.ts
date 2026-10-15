// lerp.ts
// Linear interpolation between two numbers.
// Useful for animations, chaos mode transitions,
// blending values, easing effects, and game-like logic.

export const lerp = (start: number, end: number, t: number): number => {
  // Clamp t to [0, 1] to avoid weird overshoot unless you want it later
  const clamped = Math.max(0, Math.min(1, t))

  return start + (end - start) * clamped
}
