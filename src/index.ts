export type AssertExtends<T, Expected> = T extends Expected ? true : false;
export type AssertIsExtendedBy<T, Expected> = Expected extends T ? true : false;
export type AssertEqual<T, Expected> = AssertExtends<T, Expected> & AssertIsExtendedBy<T, Expected>;


export function type<T>(): {
  is: <E>(_: AssertEqual<T, E>) => AssertEqual<T, E>;
  extends: <E>(_: AssertExtends<T, E>) => AssertExtends<T, E>;
  isExtendedBy: <E>(_: AssertIsExtendedBy<T, E>) => AssertIsExtendedBy<T, E>;
}

export function type<T>(t: T): {
  is: <E>(_: AssertEqual<T, E>) => AssertEqual<T, E>;
  extends: <E>(_: AssertExtends<T, E>) => AssertExtends<T, E>;
  isExtendedBy: <E>(_: AssertIsExtendedBy<T, E>) => AssertIsExtendedBy<T, E>;
}

export function type<T>(_?: T) {
  return {
    is: <E>(r: AssertEqual<T, E>) => r,
    extends: <E>(r: AssertExtends<T, E>) => r,
    isExtendedBy: <E>(r: AssertIsExtendedBy<T, E>) => r,
  }
}
