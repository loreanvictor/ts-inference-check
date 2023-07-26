<div align="right">

[![npm](https://img.shields.io/npm/v/ts-inference-check?color=black&label=&style=flat-square)](https://www.npmjs.com/package/ts-inference-check)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/loreanvictor/ts-inference-check/coverage.yml?label=&style=flat-square)](https://github.com/loreanvictor/ts-inference-check/actions/workflows/coverage.yml)


</div>

# ts-inference-check

Make sure TypeScript is making the expected type inference from your types.

```bash
npm i ts-inference-check --save-dev
```

<br>

## Usage

👉 Check if inferred type of some `obj` is `SomeType` (and is not `SomeOtherType`):

```ts
import { type } from 'ts-inference-check'


type(obj).is<SomeType>(true)
type(obj).is<SomeOtherType>(false)
```

☝️ `type(...).is<T>(true)` will result in a compiler error if inferred type is not `T`.
Similarly, `type(...).is<T>(false)` will result in a compiler error if inferred type is `T`.

Example usage in Jest (you can use with any testing library):

```ts
import { type } from 'ts-inference-check'

test('something', () => {
  // ...

  expect(type(obj).is<SomeType>(true)).toBe(true)
  expect(type(obj).is<SomeOtherType>(false)).toBe(false)

  // ...
})
```

<br>

> 💡 `type(...).is<T>()` only accepts `true` if inferred type is `T`, and only accepts `false` if inferred type is not `T`.
> It will return the given value untouched. All other methods of `type(...)` or `type<T>()` behave in the same manner.

<br>

👉 Check if inferred type is subtype of `SomeType` (and is not subtype of `SomeOtherType`):

```ts
type(obj).extends<SomeType>(true)  
type(obj).extends<SomeOtherType>(false)
```

👉 Check if inferred type is super type of `SomeType` (and is not supertype of `SomeOtherType`):

```ts
type(obj).isExtendedBy<SomeType>(true)
type(obj).isExtendedBy<SomeOtherType>(false)
```

👉 Pass type arguments instead of values:

```ts
type<A>().is<B>(true)
type<A>().extends<B>(true)
type<A>().isExtendedBy<B>(true)
```

<br>

### Strict Checks

👉 `any` passes most of the checks described above. Use `type(...).strictly` to avoid this:

```ts
type(obj).strictly.is<SomeType>(true)
type(obj as any).is<SomeType>(true)
type(obj as any).strictly.is<SomeType>(false)
```
```ts
type(obj as any).extends<SomeType>(true)
type(obj as any).strictly.extends<SomeType>(false)
type(obj as any).isExtendedBy<SomeType>(true)
type(obj as any).strictly.isExtendedBy<SomeType>(false)
```

<br>

👉 Use `.isAny()` to check if inferred type is `any`:

```ts
type(obj as any).isAny(true)
type(obj).isAny(false)
```

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
```
```bash
npm run lint     # 👉 check code style
```
```bash
npm run lint:fix # 👉 fix trivial stylistic issues
```

<br>

When making a PR, make sure all checks pass. Specifically, run tests, check coverage and check the linter to ensure they all pass.

<br><br>
