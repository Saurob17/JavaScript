// ============================================
// ✨ JavaScript String Explained (by Saurob)
// ============================================

// 🧠👉 Primitive vs Object
// সাধারণভাবে string তৈরি করা যায় দু’ভাবে —
// ১. Primitive String: const str = "Hello";
// ২. String Object: const str = new String("Hello");
// সাধারণত primitive string ব্যবহার করাই ভালো।

//-------------------------------------------------
// ✅ Variable & Template Literal Example
//-------------------------------------------------
const Name = "Saurob";
const repoCount = 5;///


// ❌ পুরনো কনক্যাটেনেশন পদ্ধতি (not recommended)
// console.log(Name + repoCount + " Value");

// ✅ Template literal ব্যবহার করা উত্তম
console.log(`My Name is ${Name} and I have ${repoCount} repo`);
// Output: My Name is Saurob and I have 5 repo

//-------------------------------------------------
// ✅ Multi-line string (using backticks ` `)
//-------------------------------------------------
const fullName = `My Name is ${Name}
I have ${repoCount} repo
This is multi line string`;

console.log(fullName);
/*
Output:
My Name is Saurob
I have 5 repo
This is multi line string
*/

//-------------------------------------------------
// ✅ String Object ব্যবহার
//-------------------------------------------------
const gameName = new String("Football");

console.log(gameName); 
// Output: [String: 'Football']

console.log(typeof gameName);
// Output: object

console.log(gameName.__proto__);
// Output: সব string object এর prototype method গুলো দেখাবে

//-------------------------------------------------
// ✅ String indexing
//-------------------------------------------------
console.log(gameName[0]);
// Output: F  (প্রথম অক্ষর)

// ✅ String length
console.log(gameName.length);
// Output: 8

// ✅ toUpperCase()
console.log(gameName.toUpperCase());
// Output: FOOTBALL

// ✅ toLowerCase()
console.log(gameName.toLowerCase());
// Output: football

// ✅ charAt(position)
console.log(gameName.charAt(2));
// Output: o  (ইনডেক্স 2 এ যে অক্ষর আছে)

// ✅ indexOf(character)
console.log(gameName.indexOf('t'));
// Output: 4

// ✅ includes(substring)
console.log(gameName.includes('ball'));
// Output: true

// ✅ startsWith(prefix)
console.log(gameName.startsWith('Foot'));
// Output: true

// ✅ endsWith(suffix)
console.log(gameName.endsWith('ball'));
// Output: true

//-------------------------------------------------
// ✅ split() method
//-------------------------------------------------
console.log(gameName.split(''));
// Output: [ 'F', 'o', 'o', 't', 'b', 'a', 'l', 'l' ]

console.log(gameName.split('o'));
// Output: [ 'F', '', 'tball' ]

//=================================================
// 🧩 String Slicing (slice method)
//=================================================

// 🧠 slice(start, end)
// 👉 start: কোন index থেকে শুরু করবে
// 👉 end: কোন index পর্যন্ত যাবে (end-এর আগ পর্যন্ত)
// 👉 negative index দিলে, সেটা শেষ দিক থেকে গণনা করে
// ⚠️ যদি start > end হয় → খালি স্ট্রিং ফেরত দেয়

const gameTitle = "Football"; // ✅ এখানে নতুন নাম ব্যবহার করা হয়েছে (error fixed)
// index:  0 1 2 3 4 5 6 7
// letter: F o o t b a l l

// 1️⃣ শুরু থেকে নির্দিষ্ট অংশ নেওয়া
const part1 = gameTitle.slice(0, 4);
console.log(`1️⃣ slice(0,4): ${part1}`);
// Output: Foot  (index 0 থেকে 3 পর্যন্ত)

// 2️⃣ শুধু start দিলে বাকি অংশ নেয়
const part2 = gameTitle.slice(4);
console.log(`2️⃣ slice(4): ${part2}`);
// Output: ball  (index 4 থেকে শেষ পর্যন্ত)

// 3️⃣ negative index দিলে পেছন দিক থেকে গণনা করে
const part3 = gameTitle.slice(-4);
console.log(`3️⃣ slice(-4): ${part3}`);
// Output: ball  (শেষ ৪ অক্ষর)



// 4️⃣ negative range: -8 থেকে -4 পর্যন্ত
// ⚙️ এখন slice(-8, -4) মানে কী?

// start = -8 → শেষ দিক থেকে ৮তম অক্ষর
// ⇒ index 3 (কারণ -8 মানে 11 - 8 = 3)

// end = -4 → শেষ দিক থেকে ৪র্থ অক্ষর পর্যন্ত (end before that)
// ⇒ index 7 (কারণ 11 - 4 = 7)

// তাহলে slice(-8, -4) মানে আসলে
// ➡️ slice(3, 7)

const part4 = gameTitle.slice(-8, -4);
console.log(`4️⃣ slice(-8,-4): ${part4}`);   
// Output: Foot  (প্রথম ৪ অক্ষর)


// 5️⃣ 0 থেকে -4 পর্যন্ত মানে শেষের ৪টা বাদে বাকিগুলো
const part5 = gameTitle.slice(0, -4);
console.log(`5️⃣ slice(0,-4): ${part5}`);
// Output: Foot

// 6️⃣ ভুল (invalid) range হলে খালি স্ট্রিং ফেরায়
const part6 = gameTitle.slice(-1, 3);
console.log(`6️⃣ slice(-1,3): "${part6}"`);
// Output: "" (empty string, কারণ -1 > 3)

//----------------------------------------------
// 🔍 BONUS EXAMPLES
//----------------------------------------------

// ✅ শুধুমাত্র এক অক্ষর নেওয়া
const singleChar = gameTitle.slice(2, 3);
console.log(`🎯 slice(2,3): ${singleChar}`);
// Output: o

// ✅ পুরো string কপি করা
const fullCopy = gameTitle.slice();
console.log(`📄 slice(): ${fullCopy}`);
// Output: Football

// ✅ শুধু শেষের অক্ষর
const lastChar = gameTitle.slice(-1);
console.log(`🏁 slice(-1): ${lastChar}`);
// Output: l

//-------------------------------------------------
// ✅ replace()
//-------------------------------------------------
const url = "https://quickprogramming.net";
const replaceUrl = url.replace('net', 'com');
console.log(replaceUrl);
// Output: https://quickprogramming.com

//-------------------------------------------------
// ✅ trim()
//-------------------------------------------------
const userName = "   historybd   ";
console.log(userName.length);
// Output: 15  (space সহ)

const trimmedUserName = userName.trim();
console.log(trimmedUserName.length);
// Output: 9  (space বাদ দিয়ে)

//-------------------------------------------------
// ✅ split()
//-------------------------------------------------
const message = "I am learning javascript. I love javascript. javascript is fun";

const splittedMessage = message.split(' ');
console.log(splittedMessage);
// Output: [ 'I', 'am', 'learning', 'javascript.', 'I', 'love', 'javascript.', 'javascript', 'is', 'fun' ]

const splittedMessage2 = message.split('.');
console.log(splittedMessage2);
// Output: [ 'I am learning javascript', ' I love javascript', ' javascript is fun' ]  
