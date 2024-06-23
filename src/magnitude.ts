
/** @returns cartesian distance from origin. */
export const magnitude =
  (values: readonly number[]) =>
    Math.sqrt(values.reduce((r, value) => r + (value * value), 0))

export default magnitude
