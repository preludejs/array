import * as A from './index.js'

test('deleteSwapRandom', () => {
  const a = A.indices(1000)
  const b = A.clone(a)
  expect(a).toEqual(b)
  const c: number[] = []
  while (b.length) {
    c.push(A.deleteSwapRandom(b))
  }
  expect(c).toHaveLength(1000)
  expect(A.sorted(c, A.Cmp.number)).toEqual(a)
})

test('unique', () => {
  expect(A.unique([ 3, 5, 5, 7, 3, 7 ], _ => _)).toEqual([ 3, 5, 7 ])
})

test('groups', () => {
  expect(A.groups([ 3, 5, 4, 2, 5, 7, 2 ], _ => _ % 2)).toEqual([
    [ 3, 5, 5, 7 ],
    [ 4, 2, 2 ]
  ])
})
