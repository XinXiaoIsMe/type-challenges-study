// 法1:
// type First<T extends any[]> = T extends [] ? never : T[0]

// 法2:
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 法3:
// 注：如果 T 是一个空数组，则 T[number] 为 never，T[0] 为 undefined
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 法4: 使用 infer（推断），可以理解为占位符
type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never
