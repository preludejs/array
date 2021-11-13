const of =
  <T>(n: number, valueOrFunction: T | ((index: number) => T)): T[] =>
    typeof valueOrFunction === 'function' ?
      Array.from(Array(n), (_, index) => (valueOrFunction as ((index_: number) => T))(index)) :
      Array.from(Array(n), () => valueOrFunction)

export default of
