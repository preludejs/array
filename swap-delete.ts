import swap from './swap.js'

const swapDelete =
  <T>(values: T[], index: number): T => {
    if (index < 0 || index >= values.length) {
      throw new TypeError(`Out of bounds index ${index}, length ${values.length}.`)
    }
    swap(values, index, values.length - 1)
    return values.pop() as T
  }

export default swapDelete
