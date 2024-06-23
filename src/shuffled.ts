import clone from './clone.js'
import shuffle from './shuffle.js'

/** @returns shuffled array. */
export const shuffled =
  <T>(values: readonly T[]): T[] =>
    shuffle(clone(values))

export default shuffled
