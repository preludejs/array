import swap from './swap.js'
import zeroes from './zeroes.js'

/**
 * Based on [Permutation Generation Methods, Robert Sedgewick](http://homepage.math.uiowa.edu/~goodman/22m150.dir/2007/Permutation%20Generation%20Methods.pdf).
 * @returns permutations of an array.
 */
export const permutations =
  function* <T>(values: T[]): Generator<T[]> {
    const n = values.length
    const c = zeroes(n)
    let i = 1
    let k = 0
    yield values.slice()
    while (i < n) {
      if (c[i] < i) {
        k = (i & 1) === 1 ? c[i] : 0
        swap(values, i, k)
        ++c[i]
        i = 1
        yield values.slice()
      } else {
        c[i++] = 0
      }
    }
  }

export default permutations
