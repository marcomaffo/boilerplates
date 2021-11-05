export function groupBy<T>(arr: T[], groupByFn: (value: T) => any): {[key: string]: T[]} {
  return arr.reduce((acc, value) => {
    // Group initialization
    const groupByValue = groupByFn(value);
    if (!acc[groupByValue]) {
      acc[groupByValue] = [];
    }
   
    // Grouping
    acc[groupByValue].push(value);
   
    return acc;
  }, {});
}