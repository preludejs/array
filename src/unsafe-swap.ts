/** In-place swap elements at index `i` and `j` without bound checks. */
export const unsafeSwap =
  <T>(mutableValues: T[], i: number, j: number): T[] => {
    [ mutableValues[j], mutableValues[i] ] = [ mutableValues[i], mutableValues[j] ]
    return mutableValues
  }

export default unsafeSwap
