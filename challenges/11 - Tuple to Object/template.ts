type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}

// T[number]: 取出数组的值
