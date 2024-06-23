export const randomIndex =
  (length: number): number => {
    if (length < 1) {
      throw new TypeError(`Can't get random index for length ${length}.`)
    }
    return Math.min(length - 1, Math.floor(Math.random() * length))
  }

export default randomIndex
