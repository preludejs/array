import swap from './swap.js'

const swapDeleteFirst =
  <T>(values: T[], predicate: (value: T, index: number, values: T[]) => boolean): undefined | T => {
    const index = values.findIndex(predicate)
    if (index === -1) {
      return undefined
    }
    swap(values, index, values.length - 1)
    return values.pop() as T
  }

export default swapDeleteFirst
