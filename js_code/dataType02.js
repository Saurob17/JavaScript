/*
==========================
"use strict"; এর নোটস (এক ব্লকে)
==========================

1. সংজ্ঞা:
   - "use strict"; হলো strict mode চালু করার জন্য নির্দেশনা।
   - কোডকে strict rules অনুযায়ী চালায় এবং অনেক সাধারণ ভুল ধরতে সাহায্য করে।

2. Strict mode এ পরিবর্তন:
   a) Undeclared variable তৈরি করা যাবে না:
      x = 10; // ❌ Error
   b) Duplicate function parameter names অনুমোদিত নয়:
      function sum(a, a) { ... } // ❌ Error
   c) Assignment to read-only বা const variable error:
      const y = 5; y = 10; // ❌ Error
   d) this behavior পরিবর্তিত হয়:
      function test(){ console.log(this); } // undefined
   e) Octal literals অনুমোদিত নয়:
      var num = 010; // ❌ Error

3. সুবিধা:
   - কোড safer এবং predictable হয়।
   - Undeclared variable, accidental global, duplicate parameter ইত্যাদি ভুল ধরা যায়।
   - বড় প্রজেক্টে ব্যবহার করলে bug কমে এবং maintain করা সহজ হয়।

==========================
*/

"use strict"; // Strict mode চালু করা হলো

// ==========================
alert("Hello, Strict Mode!");
// ==========================

// ==========================
// ১. undeclared variable (কোন declaration ছাড়া)
// ==========================
/*
x = 10; // ❌ Error: x is not defined
console.log(x);
*/


console.log("Strict mode is enabled.");




// 
// ==========================
// ১. let (block scoped, পরিবর্তনযোগ্য)
let name = "John";               // string
let age = 30;                     // number
let isStudent = false;            // boolean
let address = null;               // null (standalone value)
let phone;                        // undefined (declare কিন্তু value assign করা হয়নি)
let person = { firstName: "Jane", lastName: "Doe" }; // object
let uniqueId = Symbol("id");      // symbol (unique & immutable)

// ==========================
// ২. var (function scoped, পরিবর্তনযোগ্য, redeclare সম্ভব)
var accountCity = "New York";     // string
var accountCity = "Chicago";      // একই scope-এ redeclare allowed
var Age = 25;                     // number
var IsStudent = true;             // boolean
var Address = null;               // null
var Phone;                        // undefined
var Person = { firstName: "Alice", lastName: "Smith" }; // object
var UniqueId = Symbol("id");      // symbol (unique & immutable)

// ==========================
// ৩. const (block scoped, immutable / পুনরায় মান assign করা যাবে না)
const accountId = 12345;          // number
// accountId = 67890; // ❌ Error: const variable মান পরিবর্তন করা যাবে না

const userName = "JohnDoe";       // string
// userName = "JaneDoe"; // ❌ Error

const accountInfo = { city: "Dhaka", zip: 1212 }; // object
// accountInfo = {}; // ❌ Error, কিন্তু content পরিবর্তন করা যাবে
accountInfo.city = "Chittagong"; // ✅ ঠিক আছে

const uniqueKey = Symbol("key");  // symbol, unique & immutable

/* ==========================
Notes:
1. let → block scoped, পরিবর্তনযোগ্য, redeclare একই block এ ❌
2. var → function scoped, পরিবর্তনযোগ্য, redeclare allowed
3. const → block scoped, immutable, redeclare & reassign ❌
4. Primitive data types: string, number, boolean, null, undefined, symbol
5. Object → key-value data, mutable
6. Symbol → unique, immutable, object property হিসেবে conflict কমায়
==========================
*/
