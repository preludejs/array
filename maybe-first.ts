/** @returns first element of an array or `undefined`. */
const maybeFirst =
 <T>(values: T[]): undefined | T => {
   return values[0]
 }

export default maybeFirst
