export function compact(array: Array<any>) {
  let resIndex = 0;
  const result: Array<any> = [];

  if (array == null) {
    return result;
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}