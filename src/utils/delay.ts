// delay.ts
// Simple promise-based delay helper.
// Keeps timing logic out of components and stores.
// Useful for animations, chaos mode, transitions, cooldowns.

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    // No empty error handlers — delay cannot fail
    setTimeout(resolve, ms)
  })
}
