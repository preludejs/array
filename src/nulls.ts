/** @returns an array of `n` nulls. */
export const nulls =
  <T = null>(length: number): (null | T)[] =>
    Array
      .from({ length })
      .fill(null) as null[]

export default nulls
