export const scaled =
  (values: readonly number[], factor: number) =>
    values.map(value => value * factor)

export default scaled
