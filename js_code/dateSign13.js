// =========================
// 📅 JavaScript Date Object
// =========================

// 👉 Date object তৈরি করার বিভিন্ন উপায়

// 1️⃣ বর্তমান তারিখ ও সময়ের Date object
let myDate = new Date(); 
console.log(myDate); 
// আউটপুট: বর্তমান তারিখ ও সময় (সম্পূর্ণ ফরম্যাটে)
// যেমনঃ Tue Oct 14 2025 14:52:12 GMT+0600 (Bangladesh Standard Time)


// 2️⃣ বিভিন্ন format এ তারিখ তৈরি করা যায়

// let myCreatedDate = new Date(2025, 1, 24); 
// এখানে (Year, Month, Day) —  মাস গণনা শুরু হয় 0 থেকে (মানে 0=Jan, 1=Feb,...)

// let myCreatedDate = new Date(2023, 0, 23, 4, 9); 
// এখানে (Year, Month, Day, Hour, Minute)

// let myCreatedDate = new Date("02-25-2025"); 
// MM-DD-YYYY ফরম্যাটে

let myCreatedDate = new Date("2025-04-23"); 
// YYYY-MM-DD ফরম্যাটে

// console.log(myCreatedDate.toLocaleString());  
// আউটপুট হবে স্থানীয় টাইম ফরম্যাটে: যেমন "4/23/2025, 12:00:00 AM"


// ===============================
// 🕐 TimeStamp এবং সময়ের তুলনা
// ===============================

// ⏱️ বর্তমান সময়কে মিলিসেকেন্ডে পাওয়া যায় (১ জানুয়ারি ১৯৭০ থেকে এখন পর্যন্ত)
let myTimestamp = Date.now();
console.log(myTimestamp); 
// যেমন: 1760508768234 (মিলিসেকেন্ড)

// কোনো Date object এর সময় মিলিসেকেন্ডে পেতে:
console.log(myCreatedDate.getTime()); 


// ================================
// 📆 Date Object এর বিভিন্ন Method
// ================================

let newDate = new Date();

console.log(newDate); 
// বর্তমান সম্পূর্ণ তারিখ ও সময় প্রিন্ট করবে

console.log(newDate.getMonth()); 
// মাসের index (0 থেকে শুরু): জানুয়ারি = 0, ফেব্রুয়ারি = 1, ...

console.log(newDate.getDay()); 
// সপ্তাহের দিন index: রবিবার=0, সোমবার=1, ..., শনিবার=6


// ==========================
// 📅 তারিখ ফরম্যাট করার Method
// ==========================

// নিচের সবগুলা method মূলত Date object কে string এ কনভার্ট করে বিভিন্ন ফরম্যাটে দেখায়।

// newDate.toString()
// 👉 সম্পূর্ণ তারিখ ও সময় সহ string দেয়
// উদাহরণ: "Tue Oct 14 2025 14:57:32 GMT+0600 (Bangladesh Standard Time)"

// newDate.toDateString()
// 👉 শুধু তারিখ দেয়: "Tue Oct 14 2025"

// newDate.toTimeString()
// 👉 শুধু সময় দেয়: "14:57:32 GMT+0600 (Bangladesh Standard Time)"

// newDate.toISOString()
// 👉 আন্তর্জাতিক ISO ফরম্যাটে দেয়: "2025-10-14T08:57:32.123Z"

// newDate.toUTCString()
// 👉 Universal Time (UTC) ফরম্যাটে দেয়: "Tue, 14 Oct 2025 08:57:32 GMT"

// newDate.toLocaleString()
// 👉 স্থানীয় সময় ও তারিখ দেখায়: "10/14/2025, 2:57:32 PM"

// newDate.toLocaleDateString()
// 👉 শুধু স্থানীয় তারিখ: "10/14/2025"

// newDate.toLocaleTimeString()
// 👉 শুধু স্থানীয় সময়: "2:57:32 PM"


// ==============================
// 🎯 নির্দিষ্টভাবে লোকাল ফরম্যাট কাস্টমাইজ
// ==============================

// নিচের ফাংশনে ভুল ছিল (একটা কমা মিসিং ছিল)। ঠিকভাবে লেখা হবে 👇

console.log(
  newDate.toLocaleString('default', {
    weekday: 'long'
  })
);
// আউটপুট: "Tuesday" (weekday full নাম দেখাবে)

