import swap from './swap.js'

/** In-place shuffle. */
export const shuffle =
  <T>(mutableValues: T[]): T[] => {
    let n = mutableValues.length
    while (n > 0) {
      const i = Math.floor(Math.random() * n--)
      swap(mutableValues, n, i)
    }
    return mutableValues
  }

export default shuffle
