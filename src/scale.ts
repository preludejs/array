/** Scales values inplace by a provided factor. */
export const scale =
  (mutableValues: number[], factor: number) => {
    for (let i = 0; i < mutableValues.length; ++i) {
      mutableValues[i] *= factor
    }
    return mutableValues
  }

export default scale
