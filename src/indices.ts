/** @returns array with 0 to n-1 indices. */
export const indices =
  (length: number): number[] =>
    Array.from({ length }, (_, i) => i)

export default indices
