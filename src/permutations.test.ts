import * as A from './index.js'

const p =
  (value: string) =>
    Array
      .from(A.permutations(value.split('')))
      .map(_ => _.join(''))

test('permutations', () => {
  expect(p('')).toEqual([
    ''
  ])
  expect(p('a')).toEqual([
    'a'
  ])
  expect(p('ab')).toEqual([
    'ab',
    'ba'
  ])
  expect(p('abc')).toEqual([
    'abc',
    'bac',
    'cab',
    'acb',
    'bca',
    'cba'
  ])
  expect(p('abcd')).toEqual([
    'abcd',
    'bacd',
    'cabd',
    'acbd',
    'bcad',
    'cbad',
    'dbac',
    'bdac',
    'adbc',
    'dabc',
    'badc',
    'abdc',
    'acdb',
    'cadb',
    'dacb',
    'adcb',
    'cdab',
    'dcab',
    'dcba',
    'cdba',
    'bdca',
    'dbca',
    'cbda',
    'bcda'
  ])
})
