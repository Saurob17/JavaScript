//==============================
// JavaScript: Filter & Map Function (Bangla Notes)
//==============================

// 1️⃣ Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// =============================
// FILTER FUNCTION
// =============================
// Filter function array থেকে condition অনুযায়ী element বের করে
// Syntax:
// array.filter(callbackFunction)
// callbackFunction: function(element, index, array) { return condition; }

// Example 1: Traditional function - even numbers
//এখানে num হলো parameter বা placeholder variable যা fillter function-এর callback function-এ প্রতিটি element কে ধরে।
const evenNumbers = numbers.filter(function (num) {//এখানে num হলো parameter বা placeholder variable যা map function-এর callback function-এ প্রতিটি element কে ধরে।
  return num % 2 === 0; // condition: even number
});
console.log("Even Numbers:", evenNumbers); // [2, 4, 6, 8, 10]

// Example 2: Arrow function - odd numbers
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers); // [1, 3, 5, 7, 9]

// =============================
// MAP FUNCTION
// =============================
// Map function array-এর প্রতিটি element modify করে নতুন array তৈরি করে
// Syntax:
// array.map(callbackFunction)
// callbackFunction: function(element, index, array) { return newValue; }

// Example 1: Traditional function - squared numbers
const squaredNumbers = numbers.map(function (num) {
  return num * num;
});
console.log("Squared Numbers:", squaredNumbers); // [1,4,9,...,100]

// Example 2: Arrow function - doubled numbers
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled Numbers:", doubledNumbers); // [2,4,6,...,20]

// =============================
// COMBINING FILTER & MAP
// =============================
// একসাথে filter + map ব্যবহার করে নতুন array তৈরি করা
const squaredEvenNumbers = numbers
  .filter((num) => num % 2 === 0) // even filter
  .map((num) => num * num);       // square map
console.log("Squared Even Numbers:", squaredEvenNumbers); // [4,16,36,64,100]

// =============================
// EXAMPLE WITH OBJECTS
// =============================
const users = [
  { name: "saurob", age: 22, isStudent: true, roll: 101, email: "abc@gmail.com" },
  { name: "Rafi", age: 21, isStudent: false, roll: 102, email: "lskd@gmail.com" },
  { name: "Jahid", age: 23, isStudent: true, roll: 103, email: "pppp@gmail.com" },
];

// Example 1: Print only student names
const studentNames = users
  .filter((usr) => usr.isStudent) // isStudent = true
  .map((stu) => stu.name);        // only name
console.log("Student Names:", studentNames); // ['saurob', 'Jahid']

// Example 2: Print names with age >= 22 (traditional function)
const ageAbove22 = users
  .filter(function (usr) {
    return usr.age >= 22;
  })
  .map(function (ageUsr) {
    return ageUsr.name;
  });
console.log("Age above 22:", ageAbove22); // ['saurob', 'Jahid']

// =============================
// SUMMARY (Bangla)
// =============================
// 1️⃣ filter: condition অনুযায়ী array থেকে element select করে
// 2️⃣ map: array-এর element পরিবর্তন করে নতুন array তৈরি করে
// 3️⃣ Combined: filter + map একসাথে ব্যবহার করে ফিল্টার ও modify করা যায়
// 4️⃣ Syntax variations:
//    - Traditional function
//    - Arrow function
//    - Inline arrow function (implicit return)
