// Q1)
const numbers = [1, 2, 3, 4, 5];
// Given the array numbers = [1, 2, 3, 4, 5],
// write code to create a new array where each
// number is multiplied by 2 using the map method.
// ============== Your answer here:
const myNumbers = numbers.map((num) => num * 2);
console.log(myNumbers);
// ==============

// Q2)
const names = ["Alice", "Bob", "Charlie"];
// Given the array names = ["Alice", "Bob", "Charlie"],
// write code to create a new array where each name is
// converted to uppercase using the map method.
// ============== Your answer here:
const myUpper = names.map((caps) => caps.toUpperCase());
console.log(myUpper);
// ==============

// Q3)
const numbers2 = [1, 4, 9, 16, 25];
// Given the array numbers = [1, 4, 9, 16, 25],
// write code to create a new array where each
//  number is squared using the map method.
// ============== Your answer here:
const mySquares = numbers2.map((num) => num * num);
console.log(mySquares);
// ==============

// Q4)
const names2 = ["John", "Jane", "Tom"];
// Given the array names = ["John", "Jane", "Tom"],
// write code to create a new array where each name
// is appended with " Smith" using the map method.
// ============== Your answer here:
const smithies = names2.map((adding) => adding + " " + "Smith");
console.log(smithies);
// ==============

// Q5)
const numbers3 = [2, 4, 6, 8, 10];
// Given the array numbers = [2, 4, 6, 8, 10],
//  write code to create a new array where each
// number is divided by 2 using the map method.
// ============== Your answer here:
const dividies = numbers3.map((num) => num / 2);
console.log(dividies);
// ==============

// Q6)
const fruits = ["apple", "banana", "orange"];
// Given the array fruits = ["apple", "banana", "orange"],
//  write code to create a new array where each fruit
//  name is capitalized using the map method. Ex, Apple ...
// ============== Your answer here:
const food = fruits.map(
  (fruit) => fruit.charAt(0).toUpperCase() + fruit.slice(1)
);
console.log(food);
// ==============
