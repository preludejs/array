/** @returns sum of values. */
export const sum =
  (values: readonly number[]) =>
    values.reduce((r, value) => r + value, 0)

export default sum
