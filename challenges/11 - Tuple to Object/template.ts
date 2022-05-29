type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [K in T[number]]: K
}

// T[number]: 取出数组的值
