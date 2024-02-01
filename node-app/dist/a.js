"use strict";
function sum(a, b) {
    return a + b;
}
//type inference:
const value = sum(1, 2);
console.log(value);
//you don't need to explicitly define the return type.
//the hovering is the function signature, which already defines it.
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal(19);
//A function which takes another function as an argument.
