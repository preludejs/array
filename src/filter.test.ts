import * as A from './index.js'

test('filter', async () => {
  await expect(
    Promise
      .resolve([ 1, 2, 3, 4, 5 ])
      .then(A.filter(_ => _ % 2 === 0))
  ).resolves.toEqual([ 2, 4 ])
})
