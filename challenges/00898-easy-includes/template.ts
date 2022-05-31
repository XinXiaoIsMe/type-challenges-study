import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
? Equal<First, U> extends true
  ? true
  : Includes<Rest, U>
: false

// 递归查看T的第一个元素是否是等于 U