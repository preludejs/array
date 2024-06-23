[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=preludejs_array)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=preludejs_array)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=bugs)](https://sonarcloud.io/summary/new_code?id=preludejs_array)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=preludejs_array)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=preludejs_array)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=preludejs_array)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=preludejs_array)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=preludejs_array)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=coverage)](https://sonarcloud.io/summary/new_code?id=preludejs_array)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=preludejs_array)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=preludejs_array&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=preludejs_array)

---

# Array module

* `at: <T>(values: T[], index: number) => T`

  Returns value at `index`.

  Throws {TypeError} if index is out of bounds.

* `bounded: <T>(values: T[], index: number) => T`

  Like `at` but bounds less than zero index to 0 and out of bound to last.

* `bsearch: <T>(values: T[], cmp: Cmp1<T>) => number`

* `clone: <T>(values: T[]) => T[]`

* `Cmp: typeof import("/Users/mirek/prelude/packages/array/node_modules/@prelude/cmp/cjs/index")`

* `deleteSwapRandom: <T>(values: T[]) => T`

  Deletes and returns random element. Removed element is replaced by last element.

  Throws {TypeError} if `values` array is empty.

  Returns deleted element.

* `first: <T>(values: T[]) => T`

  Returns first element of an array.

  Throws if array length is 0.

* `groups: <T, R extends string | number | boolean | symbol>(values: T[], keyOfValue: (value: T) => R) => T[][]`

  Returns values grouped by key (result of `keyOfValue`).

* `indices: (n: number) => number[]`

  Returns array with 0 to n-1 indices.

* `last: <T>(values: T[]) => T`

  Returns last element of an array.

  Throws {TypeError}

* `maybeAt: <T>(values: T[], index: number) => T`

  Returns value at `index` or `undefined`.

* `maybeFirst: <T>(values: T[]) => T`

  Returns first element of an array or `undefined`.

* `maybeLast: <T>(values: T[]) => T`

  Returns last element of an array or `undefined`.

* `maybeSample: <T>(values: T[]) => T`

  Returns random element or `undefined` if array is empty.

* `modulo: <T>(values: T[], index: number) => T`

  Like `at` but wraps using modulo on length.

  Throws {TypeError} if array is empty or index is not a safe integer.

* `nulls: (n: number) => null[]`

  Returns an array of `n` nulls.

* `of: <T>(n: number, valueOrFunction: T | ((index: number) => T)) => T[]`

* `ones: (n: number) => number[]`

* `permutations: <T>(values: T[]) => Generator<T[], any, unknown>`

  Based on [Permutation Generation Methods, Robert Sedgewick](http://homepage.math.uiowa.edu/~goodman/22m150.dir/2007/Permutation%20Generation%20Methods.pdf).

  Returns permutations of an array.

* `randomIndex: (length: number) => number`

* `sample: <T>(values: T[]) => T`

  Returns random element.

  Throws if array is empty.

* `shuffle: <T>(values: T[]) => T[]`

  In-place shuffle.

* `shuffled: <T>(values: T[]) => T[]`

  Returns shuffled array.

* `sort: <T>(values: T[], cmp: t<T>) => T[]`

* `sorted: <T>(values: T[], cmp: t<T>) => T[]`

* `swap: <T>(values: T[], i: number, j: number) => T[]`

  In-place swap elements at index `i` and `j`.

* `swapDeleteAt: <T>(values: T[], index: number) => T`

* `swapDeleteFirst: <T>(values: T[], predicate: (value: T, index: number, values: T[]) => boolean) => T`

* `unique: <T, R extends string | number | boolean | symbol>(values: T[], keyOfValue: (value: T) => R) => T[]`

  Returns unique array.

* `zeroes: (n: number) => number[]`

  Returns an array of `n` zeroes.

# Usage

```bash
npm i -E @prelude/array
```

```ts
import * as A from '@prelude/array'
```

# License

```
MIT License

Copyright 2021 Mirek Rusin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
