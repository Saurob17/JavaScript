// for of loop
/*
👉 বাংলা ব্যাখ্যা: --- IGNORE ---
 for(let item of iterable){
    // code block
 }

উদাহরণ:
*/

// 🧠 let vs var vs const — কবে কোনটা ব্যবহার করব

// ---------- 1️⃣ var ----------
/*
👉 পুরনো পদ্ধতি (ES5 পর্যন্ত ব্যবহৃত)
👉 function scope ({} দিয়ে সীমাবদ্ধ না)
👉 বারবার declare করা যায় (bug হওয়ার সম্ভাবনা)

*/

const frurits = ["apple", "bannana", "mango"];

for (let frut of frurits) {
  console.log("For of Loop:", frut);
}


// array এর প্রতিটা item এ লুপ চালাবে

//js string এর প্রতিটা character এ লুপ চালাবে
const message = "Hello";
for (let char of message) {
  console.log("Character:", char);
}

//object এর জন্য for...of ব্যবহার করা যায় না
//object এর জন্য for...in ব্যবহার করতে হয়

