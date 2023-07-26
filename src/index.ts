import { AssertEqual, AssertExtends, AssertIsExtendedBy } from './base'
import { AssertAny, AssertStrictEqual, AssertStrictExtends, AssertStrictIsExtendedBy } from './strict'


export function type<T>(): {
  is: <E>(_: AssertEqual<T, E>) => AssertEqual<T, E>
  extends: <E>(_: AssertExtends<T, E>) => AssertExtends<T, E>
  isExtendedBy: <E>(_: AssertIsExtendedBy<T, E>) => AssertIsExtendedBy<T, E>
  isAny: (r: AssertAny<T>) => AssertAny<T>

  strictly: {
    is: <E>(_: AssertStrictEqual<T, E>) => AssertStrictEqual<T, E>
    extends: <E>(_: AssertStrictExtends<T, E>) => AssertStrictExtends<T, E>
    isExtendedBy: <E>(_: AssertStrictIsExtendedBy<T, E>) => AssertStrictIsExtendedBy<T, E>
  }
}

export function type<T>(t: T): {
  is: <E>(_: AssertEqual<T, E>) => AssertEqual<T, E>
  extends: <E>(_: AssertExtends<T, E>) => AssertExtends<T, E>
  isExtendedBy: <E>(_: AssertIsExtendedBy<T, E>) => AssertIsExtendedBy<T, E>
  isAny: (r: AssertAny<T>) => AssertAny<T>

  strictly: {
    is: <E>(_: AssertStrictEqual<T, E>) => AssertStrictEqual<T, E>
    extends: <E>(_: AssertStrictExtends<T, E>) => AssertStrictExtends<T, E>
    isExtendedBy: <E>(_: AssertStrictIsExtendedBy<T, E>) => AssertStrictIsExtendedBy<T, E>
  }
}

export function type<T>(_?: T) {
  return {
    is: <E>(r: AssertEqual<T, E>) => r,
    extends: <E>(r: AssertExtends<T, E>) => r,
    isExtendedBy: <E>(r: AssertIsExtendedBy<T, E>) => r,
    isAny: (r: AssertAny<T>) => r,

    strictly: {
      is: <E>(r: AssertStrictEqual<T, E>) => r,
      extends: <E>(r: AssertStrictExtends<T, E>) => r,
      isExtendedBy: <E>(r: AssertStrictIsExtendedBy<T, E>) => r,
    }
  }
}
