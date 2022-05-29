type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 1. 遍历 [P in K]
// 2. 取值 T[P]
// 3. 约束 [K extends keyof T]