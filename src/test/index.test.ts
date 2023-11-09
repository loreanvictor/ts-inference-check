import { type } from '../index'


describe(type, () => {
  test('checks equality of inferred types.', () => {
    const f = (a: { b: number, c?: boolean }) => {
      expect(type(a.b).is<number>(true)).toBe(true)
      expect(type(a.b).is<string>(false)).toBe(false)

      if (a.c !== undefined) {
        expect(type(a.c).is<boolean>(true)).toBe(true)
        expect(type(a.c).is<string>(false)).toBe(false)
      } else {
        expect(type(a.c).is<boolean>(false)).toBe(false)
        expect(type(a.c).is<undefined>(true)).toBe(true)
      }
    }

    f({ b: 42 })
    f({ b: 42, c: true })
  })

  test('checks if inferred type is a subtype of given type.', () => {
    class A { a = 2 }
    class B extends A { b = false }
    class C { c = 'halo' }

    expect(type(new B()).extends<A>(true)).toBe(true)
    expect(type(new A()).extends<B>(false)).toBe(false)
    expect(type(new B()).extends<C>(false)).toBe(false)
  })


  test('checks if inferred type is a supertype of given type.', () => {
    class A { a = 2 }
    class B extends A { b = false }
    class C { c = 'halo' }

    expect(type(new A()).isExtendedBy<B>(true)).toBe(true)
    expect(type(new B()).isExtendedBy<A>(false)).toBe(false)
    expect(type(new C()).isExtendedBy<B>(false)).toBe(false)
  })

  test('it can test if two types are the same.', () => {
    expect(type<number>().is<number>(true)).toBe(true)
    expect(type<number>().is<boolean>(false)).toBe(false)
  })

  test('it can test if a type is a subtype of another.', () => {
    expect(type<number>().extends<number>(true)).toBe(true)
    expect(type<number>().extends<boolean>(false)).toBe(false)
    expect(type<number>().extends<string>(false)).toBe(false)

    class A {}
    class B extends A { _ = false }

    expect(type<A>().extends<B>(false)).toBe(false)
    expect(type<B>().extends<A>(true)).toBe(true)
  })

  test('it can test if a type is a supertype of another.', () => {
    expect(type<number>().isExtendedBy<number>(true)).toBe(true)
    expect(type<number>().isExtendedBy<boolean>(false)).toBe(false)
    expect(type<number>().isExtendedBy<string>(false)).toBe(false)

    class A {}
    class B extends A { _ = false }

    expect(type<A>().isExtendedBy<B>(true)).toBe(true)
    expect(type<B>().isExtendedBy<A>(false)).toBe(false)
  })

  test('type unions are checked strictly.', () => {
    type<string | number>().is<number>(false)
    type<string | number>().extends<number>(false)
    type<string | number>().isExtendedBy<number>(true)

    type<{x: number} | {y: boolean}>().is<{x: number}>(false)
    type<{x: number} | {y: boolean}>().extends<{x: number}>(false)
    type<{x: number} | {y: boolean}>().isExtendedBy<{x: number}>(true)
  })

  test('type intersects are checked strictly.', () => {
    type<{x: number} & {y: boolean}>().is<{x: number, y: boolean}>(true)
    type<{x: number} & {y: boolean}>().is<{x: number}>(false)
    type<{x: number} & {y: boolean}>().extends<{x: number}>(true)
    type<{x: number} & {y: boolean}>().isExtendedBy<{x: number}>(false)
  })
})
