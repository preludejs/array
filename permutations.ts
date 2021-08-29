import swap from './swap.js'
import zeroes from './zeroes.js'

/**
 * Based on [Permutation Generation Methods, Robert Sedgewick](http://homepage.math.uiowa.edu/~goodman/22m150.dir/2007/Permutation%20Generation%20Methods.pdf).
 * @returns permutations of an array.
 */
const permutations =
  function* <T>(values: readonly T[]): Generator<T[]> {
    const values_ = values.slice()
    const n = values_.length
    const c = zeroes(n)
    let i = 1
    let k = 0
    yield values_.slice()
    while (i < n) {
      if (c[i] < i) {
        k = i % 2 && c[i]
        swap(values_, i, k)
        ++c[i]
        i = 1
        yield values_.slice()
      } else {
        c[i++] = 0
      }
    }
  }

export default permutations
