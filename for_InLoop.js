// 🌀 for...in loop — Full Note (Bangla Explanation)

// ---------- 🔹 Syntax ----------
/*
for (variable in object) {
   // code block
}

👉 বাংলা ব্যাখ্যা:
- variable: প্রতিবার object বা array-এর property name (key) এখানে আসে।
- object: যেটার key বা index ঘোরাতে হবে।
*/

// ---------- 🔹 Example 1: Object ----------
const person = {
   name: "Saurob",
   age: 21,
   city: "Dhaka"
};

for (let key in person) {
   console.log(key, "=", person[key]);
}
/*
Output:
name = Saurob
age = 21
city = Dhaka
👉 ব্যাখ্যা: এখানে key মানে property name (যেমন name, age, city)
person[key] দিয়ে value বের করেছি।
*/


// ---------- 🔹 Example 2: Array ----------
const fruits = ["apple", "banana", "mango"];

for (let index in fruits) {
   console.log("Index:", index, "Value:", fruits[index]);
}
/*
Output:
Index: 0 Value: apple
Index: 1 Value: banana
Index: 2 Value: mango
👉 ব্যাখ্যা: for...in লুপ array-এর index দেয়, value নয়।
*/


// ---------- ⚠️ গুরুত্বপূর্ণ বিষয় ----------
/*
❌ for...in সাধারণ array looping এর জন্য ভালো না,
কারণ index number গ্যারান্টি করে না — object property order change হতে পারে।

✅ for...in → object বা property নাম বের করতে।
✅ for...of → array, string, set, map এর value বের করতে।
*/


// ---------- 🔹 Example: Difference ----------
const arr = ["A", "B", "C"];

console.log("for...in:");
for (let i in arr) console.log(i);  // index: 0,1,2

console.log("for...of:");
for (let val of arr) console.log(val); // value: A,B,C
