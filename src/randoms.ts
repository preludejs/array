export const randoms =
  (n: number) => {
    const values = new Array(n)
    for (let i = 0; i < n; ++i) {
      values[i] = Math.random()
    }
    return values
  }

export default randoms
