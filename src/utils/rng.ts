// rng.ts
// Centralized random number helpers.
// Keeps randomness consistent across the app.
// Useful for chaos mode, animations, weighted logic, particle bursts.


// Returns a float between 0 and 1
export const rng = (): number => {
  return Math.random()
}


// Returns an integer between 0 and max - 1
export const rngInt = (max: number): number => {
  // No empty error handlers — deterministic math
  return Math.floor(rng() * max)
}


// Returns an integer between min and max (inclusive)
export const rngRange = (min: number, max: number): number => {
  return Math.floor(rng() * (max - min + 1)) + min
}


// Returns true/false based on probability (0–1)
export const rngChance = (probability: number): boolean => {
  return rng() < probability
}
