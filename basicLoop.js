// 🌀 JavaScript Loop Summary (for, while, do...while)

// ---------- 1️⃣ for loop ----------
/*
for(initialization; condition; update){
   // code block
}

👉 
- initialization: এখানে ভেরিয়েবল শুরু হয় (যেমন let i = 0)
- condition: যতক্ষণ পর্যন্ত শর্ত true থাকবে, লুপ চলবে
- update: প্রতিবার লুপের শেষে ভেরিয়েবল আপডেট হয় (যেমন i++)

উদাহরণ:
*/

//✅ যখন লুপের সংখ্যা আগে থেকেই জানা থাকে
for(let i = 1; i <= 5; i++){
   console.log("For Loop:", i);
}
// 👉 উদাহরণ: 1 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট করা, বা array ঘোরানো।


// ---------- 2️⃣ while loop ----------
/*
while(condition){
   // code block
   // update statement
}

👉 
- condition আগে চেক হয়।
- যদি শর্ত true হয়, কোড চলবে।
- শর্ত false হলে লুপ বন্ধ।
*/

// ✅ যখন শর্ত true থাকা পর্যন্ত চালাতে হবে, কিন্তু কয়বার চলবে জানা নেই
let j = 1;
while(j <= 5){
   console.log("While Loop:", j);
   j++;
}


// ---------- 3️⃣ do...while loop ----------
/*
// ✅ যখন অন্তত একবার লুপ চালাতে হবে (শর্ত পরে চেক হবে)
do {
   // code block
   // update statement
} while(condition);

👉 
- এই লুপে কোড অন্তত একবার চলবেই।
- কারণ condition শেষে চেক হয়।
*/
let k = 1;
do {
   console.log("Do While Loop:", k);
   k++;
} while(k <= 5);


// ---------- ⚡ Summary ----------
/*
for → নির্দিষ্ট সংখ্যক বার কোড চালাতে।
while → শর্ত true থাকা পর্যন্ত চালাতে।
do...while → অন্তত একবার কোড চালাতে চাইলে।
*/
