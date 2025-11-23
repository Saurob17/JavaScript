//for each loop
// 🌀 forEach() Loop — Full Note (Bangla Explanation)

// ---------- 🔹 Syntax ----------
/*
array.forEach(function(element, index, array) {
   // code block
});

👉 বাংলা ব্যাখ্যা:
- element → প্রতিবার array-এর একটি মান (value)
- index → সেই element-এর অবস্থান (0,1,2,...)
- array → পুরো array (চাইলে ব্যবহার করা যায়)
*/

// ---------- 🔹 Example 1: Simple Use ----------
const fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit){
   console.log("Fruit:", fruit);
});
// Output:
// Fruit: apple
// Fruit: banana
// Fruit: mango


// ---------- 🔹 Example 2: With Arrow Function ----------
fruits.forEach((fruit, index) => {
   console.log(index, "=", fruit);
});
// Output:
// 0 = apple
// 1 = banana
// 2 = mango


// ---------- 🔹 Example 3: Using all parameters ----------
fruits.forEach((fruit, index, arr) => {
   console.log(`At index ${index}, value = ${fruit}, full array = ${arr}`);
});


// ---------- 🔹 Example 4: on numbers ----------
const numbers = [10, 20, 30];
let sum = 0;
numbers.forEach(num => sum += num);
console.log("Total Sum:", sum); // 60

// ---------- 🔹 Example 5: with arrow function ----------
const classes = ["one","two", "tree", "four", "five"];


classes.forEach((classe)=>{
   console.log("Class Name:", classe);
});

// ---- with callback function defined separately ----
function printClass(classe){
   console.log("Class (from callback):", classe);
}

classes.forEach(printClass);


//



// ---------- ⚡ Important Notes ----------
/*
✅ forEach() শুধুমাত্র array-এর জন্য কাজ করে।
✅ প্রতিটি element-এর জন্য একটি function চালায়।
✅ break বা continue ব্যবহার করা যায় না (অর্থাৎ থামানো যায় না)।
✅ পরিবর্তন না করে শুধু “কাজ” করতে সুবিধা।
//return karate পারে না।
✅ asynchronous কাজের জন্য উপযোগী নয়।

*/


// ---------- 🔹 Comparison Summary ----------
/*
for → traditional counter-based looping।
for...of → array value iterate করার জন্য।
forEach → functionally array-এর প্রতিটি item প্রক্রিয়া করতে।
*/
