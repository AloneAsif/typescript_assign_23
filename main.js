"use strict";
//Question no 24        More Conditional Tests: 
//  Tests for equality and inequality with strings
let stringTest = 'karachi';
console.log(stringTest == 'karachi'); // true
console.log(stringTest == 'lahore'); // false
// Tests using the lower case function
let lowerCase = 'AsIf';
console.log(lowerCase.toLowerCase() == 'asif'); //true will come
// Numerical tests
let nums = 9;
console.log(nums == 9 || nums > 8 && nums != 2 && nums <= 22); // true
console.log(nums == 7 || nums > 32 && nums != 2 && nums <= 2); // false
// Tests using "and" and "or" operators
let nums4 = 8;
console.log(nums4 == 5 || nums4 == 8 && nums4 == 8);
console.log(nums4 == 3 || nums4 == 8 && nums4 != 8);
// Test whether an item is in a array
const listOfArr = ['apple', 'mango', 'banana', 'grapes'];
for (let items of listOfArr) {
    // console.log(items)
}
const item = 'apple';
if (listOfArr.includes(item)) {
    console.log(`this ${item} is available in list.`);
}
else {
    console.log(`${item} is not in the list...`);
}
