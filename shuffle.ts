import swap from './swap'

/** In-place shuffle. */
const shuffle =
  <T>(values: T[]): T[] => {
    let n = values.length
    while (n) {
      const i = Math.floor(Math.random() * n--)
      swap(values, n, i)
    }
    return values
  }

export default shuffle
