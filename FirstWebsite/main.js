// console.log("Hello world!");

/* 
Comments, Data Types, Variables, Conditions, Loops, Functions, Arrays, Objects (ES6 Version)
*/

// Comments (CTRL + /);

// Data Types
// String (ANY TEXT -> "Rajdeep Dutta")
// Number (Integer) -> 89, 12,
// Boolean -> true, false
// Object
// let a = {
//   // Key : Value
//   name: "Upasana",
//   age: 23,
//   qualification: "Bachelor",
// };
// Array
// 0      1    2       3         4
// let b = ["Sudip", 23, true, "Rajdeep", "Babai"];
// b.length (5)
// null
// let c = null;
// // undefined
// let d;
// console.log(d);

// Variables
// var a = "Upasana";
// a = "Sagnik";
// let b = "Sudip";
// b = "Mrinmoy";
// const c = "Rajdeep";

// console.log(a, b, c);

// let vs var

// Conditions
// Print "Adult" if age is greater than equal to 18 else print "Not Adult"
let age = 70;
// if (age >= 18 && age < 60) {
//   console.log("Adult");
// } else if (age >= 60) {
//   console.log("OLD");
// } else {
//   console.log("Not Adult");
// }
// Turnery Operators
// age >= 18 ? console.log("Adult") : console.log("NotAdult");
//              True                      False
// age >= 18 && age < 60
//   ? console.log("Adult")
//   : age >= 60
//   ? console.log("OLD")
//   : age >= 100
//   ? console.log("Legend")
//   : console.log("NotAdult");

// Hoisting
// printSomething("Rajdeep");
function printSomething(value) {
  console.log(`printSomething: ${value}`);
}

// Arrow Function
const printSomething2 = (value) => {
  console.log(`printSomething2: ${value}`);
};
// anonymous function
((value) => {
  // console.log(`printSomething2: ${value}`);
})();

// printSomething2("Mrinmoy");

////       0  1  2  3  4
// let clg = [
//   1,
//   2,
//   3,
//   5,
//   9,
//   "Hello",
//   true,
//   {
//     name: "NBU",
//     year: 1948,
//   },
// ];
// console.log(clg);

// Loops and Question
// while, for,
// map(), filter(), reduce()
// let a = 1;
// while (a <= 20) {
//   console.log(a);
//   a++;
// }
let clg = [
  {
    name: "BIT Sindri",
    year: 1949,
  },
  {
    name: "BCROY",
    year: 2000,
  },
  {
    name: "NBU",
    year: 1962,
  },
];
// let oldClg = [];
// for (let i = 0; i < clg.length; i++) {
//   if (clg[i].year < 2000) {
//     oldClg.push(clg[i]);
//   }
// }
// console.log(oldClg);
// let res = clg.map((item, i) => {
//   return item;
// });
// console.log(res);
// let oldClg = clg.filter((item) => item.year < 2000);
// console.log(oldClg);

// .map() vs .forEach()
let res = clg.map((item, i) => {
  //   console.log(item, i);
  return item;
});
let res2 = clg.forEach((item, i) => {
  //   console.log(item, i);
  return item;
});

// console.log(res, res2);

let nums = [3, 7, 9, 2, 5];
let sum = nums.reduce((acc, cur) => {
  //           0   3
  //           3   7
  //          10   9
  //          19   2
  //          21   5
  // console.log(acc, cur);
  return acc + cur;
}, 0);
// console.log(sum);

//something1 -> HighOrderFunction
// CallBack Function -> something2
function something1(something2) {
  something2();
  return null;
}

function something2() {
  return null;
}
