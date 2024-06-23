/** @returns unique array. */
export const unique =
  <T, R extends boolean | number | symbol | string>(values: T[], keyOfValue: (value: T) => R): T[] => {
    const seen = new Set<R>()
    return values.filter(_ => {
      const k = keyOfValue(_)
      return seen.has(k) ? false : (seen.add(k), true)
    })
  }

export default unique
