import { type } from '../index'


describe(type, () => {
  test('it can test against any', () => {
    const a: any = 42
    const b = 42

    expect(type(a).isAny(true)).toBe(true)
    expect(type(b).isAny(false)).toBe(false)
  })

  test('it can test strict type equality (not any).', () => {
    const a: any = 42
    const b = 42

    expect(type(a).is<number>(true)).toBe(true)
    expect(type(a).strictly.is<number>(false)).toBe(false)
    expect(type(b).strictly.is<number>(true)).toBe(true)
  })

  test('it can test strict subtypes (not any).', () => {
    class A { a = 42 }
    class B extends A { }

    expect(type<any>().extends<A>(true)).toBe(true)
    expect(type<any>().strictly.extends<A>(false)).toBe(false)
    expect(type<B>().strictly.extends<A>(true)).toBe(true)

    expect(type(42 as any).extends<A>(true)).toBe(true)
    expect(type(42 as any).strictly.extends<A>(false)).toBe(false)
    expect(type(new B).strictly.extends<A>(true)).toBe(true)
  })

  test('it can test strict supertypes (not any).', () => {
    class A { a = 42 }
    class B extends A { }

    expect(type<any>().isExtendedBy<B>(true)).toBe(true)
    expect(type<any>().strictly.isExtendedBy<B>(false)).toBe(false)
    expect(type<A>().strictly.isExtendedBy<B>(true)).toBe(true)

    expect(type(42 as any).isExtendedBy<B>(true)).toBe(true)
    expect(type(42 as any).strictly.isExtendedBy<B>(false)).toBe(false)
    expect(type(new A).strictly.isExtendedBy<B>(true)).toBe(true)
  })

  test('type unions are checked strictly.', () => {
    type<string | number>().strictly.is<number>(false)
    type<string | number>().strictly.extends<number>(false)
    type<string | number>().strictly.isExtendedBy<number>(true)

    type<{x: number} | {y: boolean}>().strictly.is<{x: number}>(false)
    type<{x: number} | {y: boolean}>().strictly.extends<{x: number}>(false)
    type<{x: number} | {y: boolean}>().strictly.isExtendedBy<{x: number}>(true)
  })

  test('type intersects are checked strictly.', () => {
    type<{x: number} & {y: boolean}>().strictly.is<{x: number, y: boolean}>(true)
    type<{x: number} & {y: boolean}>().strictly.is<{x: number}>(false)
    type<{x: number} & {y: boolean}>().strictly.extends<{x: number}>(true)
    type<{x: number} & {y: boolean}>().strictly.isExtendedBy<{x: number}>(false)
  })
})
