// =====================================
// 📦 JavaScript Array Object (Full Note)
// =====================================

// 🧩 Array কী?
// 👉 Array হলো একধরনের list-like object, যেখানে একাধিক value একসাথে রাখা যায়।
// 👉 Index দিয়ে প্রতিটি মানে access করা হয় (index শুরু হয় 0 থেকে)।

// ==========================
// 🔹 ১️⃣ Array তৈরি করার উপায়
// ==========================

// ✅ 1. Array Literal (সবচেয়ে সহজ ও ব্যবহৃত পদ্ধতি)
let arr1 = [10, 20, 30];
console.log(arr1); 
// আউটপুট: [10, 20, 30]

// ✅ 2. new Array() Constructor দিয়ে
let arr2 = new Array(10, 20, 30);
console.log(arr2); 
// আউটপুট: [10, 20, 30]

// ⚠️ কিন্তু যদি শুধু ১টা সংখ্যা দাও, সেটাকে "size" ধরে নেয়!
let arr3 = new Array(5);
console.log(arr3); 
// আউটপুট: [ <5 empty items> ]  → ৫টা খালি জায়গা (value নয়)

// ✅ 3. Array.of() → Confusion-free (ES6 থেকে)
let arr4 = Array.of(10, 20, 30);
console.log(arr4); 
// আউটপুট: [10, 20, 30]

let arr5 = Array.of(5);
console.log(arr5);
// আউটপুট: [5] → এটাকে সবসময় value হিসেবে নেয় (size নয়)


// =======================================
// 🔹 ২️⃣ Array এর ভিতরে কী কী রাখা যায়?
// =======================================

let mixedArray = [
  42, 
  "JavaScript", 
  true, 
  { name: "Saurob", age: 21 }, 
  [1, 2, 3], 
  function greet() { return "Hi!"; }
];
console.log(mixedArray);
// আউটপুট: [42, "JavaScript", true, {...}, [1,2,3], ƒ]


// ===================================
// 🔹 ৩️⃣ Array এর গুরুত্বপূর্ণ Properties
// ===================================

// 🧾 length → মোট কয়টা element আছে
console.log(arr1.length); // 3


// ===================================
// 🔹 ৪️⃣ Array Element Access & Update
// ===================================

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // "Apple" (index 0)
console.log(fruits[2]); // "Mango"

// ✅ মান পরিবর্তন
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]


// ===================================
// 🔹 ৫️⃣ Array এর Common Methods
// ===================================

// ✅ push() → শেষে নতুন item যোগ করে
fruits.push("Guava");
console.log(fruits); // ["Apple", "Orange", "Mango", "Guava"]

// ✅ pop() → শেষ item মুছে ফেলে
fruits.pop();
console.log(fruits); // ["Apple", "Orange", "Mango"]

// ✅ unshift() → শুরুতে যোগ করে
fruits.unshift("Lichi");
console.log(fruits); // ["Lichi", "Apple", "Orange", "Mango"]

// ✅ shift() → শুরু থেকে মুছে ফেলে
fruits.shift();
console.log(fruits); // ["Apple", "Orange", "Mango"]

// ✅ includes() → কোনো মান আছে কিনা চেক করে
console.log(fruits.includes("Mango")); // true

// ✅ indexOf() → কোনো মানের index জানায়
console.log(fruits.indexOf("Orange")); // 1

// ✅ join() → সব element string আকারে combine করে
console.log(fruits.join(" - ")); // "Apple - Orange - Mango"


// ===================================
// 🔹 ৬️⃣ Array Slice & Splice
// ===================================

// ✅ slice(start, end) → অংশ কেটে নেয় (মূল array অপরিবর্তিত থাকে)
let sliced = fruits.slice(0, 2);
console.log(sliced); // ["Apple", "Orange"]
console.log(fruits); // ["Apple", "Orange", "Mango"]

// ✅ splice(start, deleteCount, addItems) → অংশ বাদ বা যোগ করে (মূল array পরিবর্তিত হয়)
fruits.splice(1, 1, "Papaya");
console.log(fruits); // ["Apple", "Papaya", "Mango"]





// ===================================
// 🔹 ৭️⃣ Loop দিয়ে Array Traverse
// ===================================

// ✅ for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ✅ for...of loop
for (let item of fruits) {
  console.log(item);
}

// ✅ forEach()
fruits.forEach((item, index) => {
  console.log(index, item);
});


// ===================================
// 🔹 ৮️⃣ Array Concatenation & Spread
// ===================================

let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]

// ✅ Spread Operator (...)
let d = [...a, ...b];
console.log(d); // [1, 2, 3, 4]


// ===================================
// 🔹 ৯️⃣ Multidimensional Array
// ===================================

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]); // 6


// ===================================
// 🔹 🔟 Array vs Array.of() vs new Array()
// ===================================

console.log([5]);          // [5] → value হিসেবে নেয়
console.log(Array.of(5));  // [5] → সবসময় value হিসেবে নেয় ✅
console.log(new Array(5)); // [ <5 empty items> ] → size হিসেবে নেয় ⚠️


// ===================================
// 🏁 Summary Table
// ===================================

/*
| বৈশিষ্ট্য | [] | Array.of() | new Array() |
|------------|----------------|----------------|----------------|
| Introduced | পুরনো | ES6 | পুরনো |
| Syntax | [1,2,3] | Array.of(1,2,3) | new Array(1,2,3) |
| একটিমাত্র সংখ্যায় আচরণ | [5] (value) | [5] (value) | [ <5 empty> ] (size) |
| Safe for numeric input | ❌ না | ✅ হ্যাঁ | ❌ না |
| Typical Use | সাধারণ value array | confusion-free array | fixed size array |
*/



//
