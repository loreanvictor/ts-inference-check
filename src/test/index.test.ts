import { inferred, isSameType, extendsType, isExtendedByType } from '../index'


describe(inferred, () => {
  test('checks equality of inferred types.', () => {
    const f = (a: { b: number, c?: boolean }) => {
      expect(inferred(a.b).is<number>(true)).toBe(true)
      expect(inferred(a.b).is<string>(false)).toBe(false)

      if (a.c) {
        expect(inferred(a.c).is<boolean>(true)).toBe(true)
        expect(inferred(a.c).is<string>(false)).toBe(false)
      } else {
        expect(inferred(a.c).is<boolean>(false)).toBe(false)
        expect(inferred(a.c).is<undefined>(true)).toBe(true)
      }
    }

    f({ b: 42 })
    f({ b: 42, c: true })
  })

  test('checks if inferred type is a subtype of given type.', () => {
    class A { a = 2 }
    class B extends A { b = false }
    class C { c = 'halo' }

    expect(inferred(new B()).extends<A>(true)).toBe(true)
    expect(inferred(new A()).extends<B>(false)).toBe(false)
    expect(inferred(new B()).extends<C>(false)).toBe(false)
  })


  test('checks if inferred type is a supertype of given type.', () => {
    class A { a = 2 }
    class B extends A { b = false }
    class C { c = 'halo' }

    expect(inferred(new A()).isExtendedBy<B>(true)).toBe(true)
    expect(inferred(new B()).isExtendedBy<A>(false)).toBe(false)
    expect(inferred(new C()).isExtendedBy<B>(false)).toBe(false)
  })
})


describe(isSameType, () => {
  test('it can test if two types are the same.', () => {
    expect(isSameType<number, number>(true)).toBe(true)
    expect(isSameType<number, boolean>(false)).toBe(false)
  })
})


describe(extendsType, () => {
  test('it can test if a type is a subtype of another.', () => {
    expect(extendsType<number, number>(true)).toBe(true)
    expect(extendsType<number, boolean>(false)).toBe(false)
    expect(extendsType<number, string>(false)).toBe(false)

    class A {}
    class B extends A { _ = false }

    expect(extendsType<A, B>(false)).toBe(false)
    expect(extendsType<B, A>(true)).toBe(true)
  })
})


describe(isExtendedByType, () => {
  test('it can test if a type is a supertype of another.', () => {
    expect(isExtendedByType<number, number>(true)).toBe(true)
    expect(isExtendedByType<number, boolean>(false)).toBe(false)
    expect(isExtendedByType<number, string>(false)).toBe(false)

    class A {}
    class B extends A { _ = false }

    expect(isExtendedByType<A, B>(true)).toBe(true)
    expect(isExtendedByType<B, A>(false)).toBe(false)
  })
})

