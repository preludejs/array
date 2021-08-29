type Cmp1<T> = (a: T) => -1 | 0 | 1

const bsearch =
  <T>(values: readonly T[], cmp: Cmp1<T>): number => {
    let low = 0
    let high = values.length - 1
    while (low <= high) {
      const mid = (low + high) >>> 1
      switch (cmp(values[mid])) {
        case -1:
          low = mid + 1
          break
        case 1:
          high = mid - 1
          break
        default:
          return mid
      }
    }
    return -(low + 1)
  }

export default bsearch
