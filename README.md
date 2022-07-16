# ts-inference-check

[![tests](https://github.com/loreanvictor/ts-inference-check/actions/workflows/test.yml/badge.svg)](https://github.com/loreanvictor/ts-inference-check/actions/workflows/test.yml)
[![coverage](https://github.com/loreanvictor/ts-inference-check/actions/workflows/coverage.yml/badge.svg)](https://github.com/loreanvictor/ts-inference-check/actions/workflows/coverage.yml)
[![version](https://img.shields.io/npm/v/ts-inference-check?logo=npm)](https://www.npmjs.com/package/ts-inference-check)


Provides utilities to test behavior of custom types and type guards in TypeScript code and ensure they provide
the correct typing with respect to type inference.

```bash
npm i ts-inference-check --save-dev
```

<br>

## Usage

```ts
import { type } from 'ts-inference-check'

// Here we use jest as an example, but you can use `ts-inference-check` with any
// testing library (or even without one), since its tests cause TypeScript to throw compile errors.

expect(type(obj).is<SomeType>(true)).toBe(true)
expect(type(obj).is<SomeOtherType>(false)).toBe(false)
```
☝️ `type(...).is<T>()` function only accepts `true` if the inferred type of given object is the expected type, and only accepts `false` otherwise, returning the value it receives in either case. So in the example above, if `obj` is not of type `SomeType`, TypeScript compiler will throw an error, resulting in the test failing.

<br>

```ts
type(obj).is<SomeType>(true)           // --> ok when `obj` is `SomeType`, compile error o.w.
type(obj).extends<SomeType>(true)      // --> ok when `obj` is from a type extending `SomeType`, compile error o.w.
type(obj).isExtendedBy<SomeType>(true) // --> ok when `obj` is from a type that is extended by `SomeType`, compile error o.w.
```
☝️ Beyond checking equality, `type()` also provides other functions for checking whether a type extends another type, etc.

<br>

```ts
type<A>().is<B>(true)                  // --> ok when `A` and `B` are the same type, compile error o.w.
type<A>().extends<B>(true)             // --> ok when `A` extends `B`, compile error o.w.
type<A>().isExtendedBy<B>(true)        // --> ok when `A` is extended by `B`, compile error o.w.
```
☝️ `type()` can also be used without an argument, in which case you need to provide the type you want to check as a type argument directly.

<br>

## Contribution

Simply be nice and respectful to other people. Here are some useful commands for contributing:

```bash
git clone git@github.com:loreanvictor/ts-inference-check.git  # 👉 clone the code (generally fork it before cloning though)
```
```bash
npm i            # 👉 install all dependencies
```
```bash
npm test         # 👉 run the tests
```
```bash
npm run coverage # 👉 check code coverage
```bash
npm run lint     # 👉 check code style
```
```bash
npm run lint:fix # 👉 fix trivial stylistic issues
```

<br>

When making a PR, make sure all checks pass. Specifically, run tests, check coverage and check the linter to ensure they all pass.

<br><br>
