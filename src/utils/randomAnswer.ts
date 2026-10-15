// randomAnswer.ts
// Generates a random answer for the app.
// Keeps randomness out of components and stores.
// Easy to expand later (chaos mode, weighted mode, premium mode).

import type { Answer } from '../store/useAppStore'

// Base answers
const answers: Answer[] = ['yes', 'no', 'maybe']

// Random integer helper
// Helps avoid repeating Math.floor(...) everywhere.
const getRandomIndex = (max: number): number => {
  return Math.floor(Math.random() * max)
}

// Main generator
export const getRandomAnswer = (): Answer => {
  const index = getRandomIndex(answers.length)
  return answers[index]
}
