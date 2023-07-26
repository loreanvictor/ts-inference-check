import { AssertEqual, AssertExtends, AssertIsExtendedBy } from './base'


type Truthy = { __truthy: true }
type Falsy = { __falsy: true }

export type AssertAny<T> = AssertEqual<T, Truthy> & AssertEqual<T, Falsy>

export type AssertStrictEqual<T, Expected> = AssertAny<T> extends true ? false : AssertEqual<T, Expected>
export type AssertStrictExtends<T, Expected> = AssertAny<T> extends true ? false : AssertExtends<T, Expected>
export type AssertStrictIsExtendedBy<T, Expected> = AssertAny<T> extends true ? false : AssertIsExtendedBy<T, Expected>

