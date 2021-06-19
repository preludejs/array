import shuffle from './shuffle'

/** @returns shuffled array. */
const shuffled =
  <T>(values: T[]): T[] =>
    shuffle(values.slice(0))

export default shuffled
