import * as A from './index.js'

test('map', async () => {
  await expect(
    Promise
      .resolve([ 1, 2, 3, 4, 5 ])
      .then(A.mapOf(_ => _ * 2))
  ).resolves.toEqual([ 2, 4, 6, 8, 10 ])
})
