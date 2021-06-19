import * as A from '../index.js'

test('deleteSwapRandom', () => {
  const a = A.indices(1000)
  const b = A.clone(a)
  expect(a).toEqual(b)
  const c: number[] = []
  while (b.length) {
    c.push(A.deleteSwapRandom(b))
  }
  expect(c).toHaveLength(1000)
  expect(A.sorted(c, A.Cmp.numbers)).toEqual(a)
})
