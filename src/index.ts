export type AssertExtends<T, Expected> = T extends Expected ? true : false;
export type AssertIsExtendedBy<T, Expected> = Expected extends T ? true : false;
export type AssertEqual<T, Expected> = AssertExtends<T, Expected> & AssertIsExtendedBy<T, Expected>;


export function isSameType<T, E>(r: AssertEqual<T, E>) {
  return r
}


export function extendsType<T, E>(r: AssertExtends<T, E>) {
  return r
}


export function isExtendedByType<T, E>(r: AssertIsExtendedBy<T, E>) {
  return r
}


export function inferred<T>(_: T) {
  return {
    is: <E>(r: AssertEqual<T, E>) => r,
    extends: <E>(r: AssertExtends<T, E>) => r,
    isExtendedBy: <E>(r: AssertIsExtendedBy<T, E>) => r,
  }
}
