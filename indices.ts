/** @returns array with 0 to n-1 indices. */
const indices =
  (n: number): number[] => {
    const array = new Array(n)
    for (let i = 0; i < n; i++) {
      array[i] = i
    }
    return array
  }

export default indices
