//=========================================
// 🧮 JavaScript Number & Math Full Concept
//=========================================


// ✅ Primitive Number (Stored in Stack)
const score = 400;
console.log(score);           // 👉 400
console.log(typeof score);    // 👉 "number"

//-----------------------------------------

// ✅ Number Object (Stored in Heap)
// "new Number()" ব্যবহার করলে primitive না, Object তৈরি হয়
const balance = new Number(100);
console.log(balance);          // 👉 [Number: 100]
console.log(typeof balance);   // 👉 "object"

//-----------------------------------------

// ✅ toFixed() → দশমিকের পর কত ঘর থাকবে তা নির্ধারণ করে (string রিটার্ন করে)
console.log(balance.toFixed(2));   // 👉 "100.00"

// ✅ toString() → সংখ্যাকে string এ রূপান্তর করে
console.log(balance.toString());   // 👉 "100"

//-----------------------------------------

// ✅ toPrecision(n) → মোট n সংখ্যক significant digit রাখে
const otherNumber = 1244.956;
console.log(otherNumber.toPrecision(3));  // 👉 "1.24e+3" (scientific notation format)

//-----------------------------------------

// ✅ toLocaleString(locale) → সংখ্যাকে স্থানীয় ভাষার ফরম্যাটে দেখায়
const handreds = 100000;
console.log(handreds.toLocaleString("bn-BD")); // 👉 "১,০০,০০০"

//=========================================
// 🧠 Math Object (Built-in Utility)
//=========================================

// Math নিজেই একটি Object
console.log(Math);           // 👉 Object [Math] {}
console.log(typeof Math);    // 👉 "object"

//-----------------------------------------

// ✅ Math Constants
console.log(Math.PI);   // 👉 3.141592653589793
console.log(Math.E);    // 👉 2.718281828459045

//-----------------------------------------

// ✅ Rounding Methods
const num = 4.56789;
console.log(num);               // 👉 4.56789
console.log(Math.round(num));   // 👉 5   (nearest integer)
console.log(Math.floor(num));   // 👉 4   (always down)
console.log(Math.ceil(num));    // 👉 5   (always up)
console.log(Math.trunc(num));   // 👉 4   (removes decimal part)

//-----------------------------------------

// ✅ Math.random() → 0 থেকে 1 এর মধ্যে র‍্যান্ডম মান দেয়
const randomNum = Math.random();
console.log(randomNum);                  // 👉 random decimal (like 0.4563)
console.log(Math.round(randomNum * 100)); // 👉 random integer (0–100)

//-----------------------------------------

// ✅ Min & Max
console.log(Math.min(23,45,67,12,34,89,-23,-45));  // 👉 -45
console.log(Math.max(23,45,67,12,34,89,-23,-45));  // 👉 89

//-----------------------------------------

// ✅ Power & Square Root
console.log(Math.pow(2,3));  // 👉 8   (2³)
console.log(2**3);           // 👉 8   (same)
console.log(Math.sqrt(64));  // 👉 8   (√64)
console.log(64**0.5);        // 👉 8   (same)

//=========================================
// 🔸 Summary:
// toFixed(), toPrecision(), toString(), toLocaleString() → সবই string return করে
// Math object → provides utility methods for numeric operations
//=========================================
