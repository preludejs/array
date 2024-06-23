import * as A from './index.js'

test('scale', () => {
  expect(A.scale([ 7, 3, 5 ], 10)).toEqual([ 70, 30, 50 ])
  expect(A.scale([ 7, 3, 5 ], 0.1)).toEqual([ 0.7000000000000001, 0.30000000000000004, 0.5 ])
})
