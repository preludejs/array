import swap from './swap.js'
import type { Predicate } from './predicate.js'

export const swapDeleteFirst =
  <T>(values: T[], predicate: Predicate<T>): undefined | T => {
    const index = values.findIndex(predicate)
    if (index === -1) {
      return undefined
    }
    swap(values, index, values.length - 1)
    return values.pop() as T
  }

export default swapDeleteFirst
