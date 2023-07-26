export type AssertExtends<T, Expected> = T extends Expected ? true : false
export type AssertIsExtendedBy<T, Expected> = Expected extends T ? true : false
export type AssertEqual<T, Expected> = AssertExtends<T, Expected> & AssertIsExtendedBy<T, Expected>
