import * as A from './index.js'

test('shuffle', () => {
  const xs = A.sort(A.randoms(100), A.Cmp.number)
  const before = A.clone(xs)
  const ys = A.shuffle(xs)
  expect(ys).not.toEqual(before)
  A.sort(ys, A.Cmp.number)
  expect(ys).toEqual(before)
})
