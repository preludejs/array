import randomIndex from './random-index'

/** @returns random element or `undefined` if array is empty. */
const maybeSample =
  <T>(values: T[]): undefined | T =>
    values.length > 0 ?
      values[randomIndex(values.length)] :
      undefined

export default maybeSample
