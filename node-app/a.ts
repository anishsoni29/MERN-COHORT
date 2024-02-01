function sum(a: number, b: number) {
  return a + b;
}

//type inference:

const value = sum(1, 2);
console.log(value);

//you don't need to explicitly define the return type.
//the hovering is the function signature, which already defines it.

function isLegal(age: number) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
isLegal(19);

//A function which takes another function as an argument.

//the type here is void.
function runAfter1S(fn) {
  setTimeout(fn, 1000);
}

runAfter1S(() => {
  console.log("Hi there, this is the second function!");
});
