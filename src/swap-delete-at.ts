import swap from './swap.js'

export const swapDeleteAt =
  <T>(values: T[], index: number): T => {
    if (index < 0 || index >= values.length) {
      throw new Error(`Out of bounds index ${index}, length ${values.length}.`)
    }
    swap(values, index, values.length - 1)
    return values.pop() as T
  }

export default swapDeleteAt
