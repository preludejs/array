/** @returns values grouped by key (result of `keyOfValue`). */
const groups =
  <T, R extends boolean | number | symbol | string>(values: T[], keyOfValue: (value: T) => R): T[][] => {
    const groups_ = new Map<R, T[]>()
    for (const value of values) {
      const key = keyOfValue(value)
      const group = groups_.get(key)
      if (group) {
        group.push(value)
      } else {
        groups_.set(key, [ value ])
      }
    }
    return Array.from(groups_.values())
  }

export default groups
