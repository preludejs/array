/**
 * @returns first element of an array.
 * @throws if array length is 0.
 */
const first =
 <T>(values: readonly T[]): T => {
   if (!values.length) {
     throw new TypeError('Expected non empty array to get first element.')
   }
   return values[0]
 }

export default first
