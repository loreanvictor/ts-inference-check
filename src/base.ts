export type AssertExtends<T, Expected> = [T] extends [Expected] ? true : false
export type AssertIsExtendedBy<T, Expected> = [Expected] extends [T] ? true : false
export type AssertEqual<T, Expected> = [T] extends [Expected] ? [Expected] extends [T] ? true : false : false
