function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
//array of the template [T] is the input and the return value is arr[0]

const el = getFirstElement(["anishSoni", "PiyushSoni"]);
console.log(el.toUpperCase());
