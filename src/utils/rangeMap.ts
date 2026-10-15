// rangeMap.ts
// Generates an array of mapped values from start to end (inclusive).
// Useful for animation frame objects, chaos mode multi-step effects,
// building computed arrays, and game-like logic.

export const rangeMap = <T>(
  start: number,
  end: number,
  mapper: (_value: number, _index: number) => T
): T[] => {
  if (end < start) {
    throw new Error('rangeMap: end must be greater than or equal to start')
  }

  const length = end - start + 1

  return Array.from({ length }, (_, i) => {
    const value = start + i
    return mapper(value, i)
  })
}
