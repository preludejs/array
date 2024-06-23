export const of =
  <T>(length: number, valueOrFunction: T | ((index: number) => T)): T[] =>
    typeof valueOrFunction === 'function' ?
      Array.from({ length }, (_, index) => (valueOrFunction as ((index_: number) => T))(index)) :
      Array.from({ length }, () => valueOrFunction)

export default of
