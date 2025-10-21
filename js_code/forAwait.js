/* 
===========================================
🧠 JavaScript Full Note: for await...of Loop
===========================================

🔹 1️⃣ কী এটা?
----------------
👉 "for await...of" হলো একটি Asynchronous Loop।
👉 এটি এমন iterable object (যেমন array, async generator) এর উপর কাজ করে
   যেগুলোর value গুলো Promise আকারে আসে।
👉 এই লুপ প্রতিটি Promise resolve না হওয়া পর্যন্ত অপেক্ষা করে,
   তারপর পরের আইটেমে যায়।

-------------------------------------------------------
🔹 2️⃣ Syntax:
-------------------------------------------------------
async function example() {
   for await (const item of asyncIterable) {
       // এখানে প্রতিটি Promise resolve হওয়ার পর কোড চলবে
   }
}

👉 "await" keyword ব্যবহার করা যায় শুধুমাত্র async function এর ভিতরে।

-------------------------------------------------------
🔹 3️⃣ Step-by-Step কাজের ধরন:
-------------------------------------------------------
1️⃣ iterable object (যেমন array) এর প্রতিটি আইটেম যদি Promise হয়,
2️⃣ লুপ প্রথম Promise resolve না হওয়া পর্যন্ত "await" করে থেমে থাকে,
3️⃣ resolve হয়ে গেলে তার value variable এ আসে,
4️⃣ এরপর পরের Promise এ যায়।
5️⃣ সবগুলো Promise resolve হয়ে গেলে লুপ শেষ হয়।

-------------------------------------------------------
🔹 4️⃣ উদাহরণ:
-------------------------------------------------------
async function getFruits() {
  const fruits = [
    Promise.resolve("🍎 Apple"),
    Promise.resolve("🍌 Banana"),
    Promise.resolve("🥭 Mango")
  ];

  for await (const fruit of fruits) {
    console.log("Got:", fruit);
  }

  console.log("All fruits received!");
}

getFruits();

👉 Output:
Got: 🍎 Apple
Got: 🍌 Banana
Got: 🥭 Mango
All fruits received!

-------------------------------------------------------
🔹 5️⃣ কেন দরকার?
-------------------------------------------------------
✅ একটার পর একটা asynchronous কাজ ক্রমানুসারে চালানোর জন্য
✅ যেমন: একটার পর একটা API call, file read, database query
✅ parallel execution (Promise.all) এর পরিবর্তে serial execution এর জন্য

-------------------------------------------------------
🔹 6️⃣ সাধারণ ভুল:
-------------------------------------------------------
❌ async function ছাড়া "for await...of" ব্যবহার করলে error হবে।

for await (const x of arr) { console.log(x); }
// ❌ SyntaxError: for await...of is only valid in async functions

✅ ঠিক উপায়:
async function run() {
  for await (const x of arr) { console.log(x); }
}
run();

-------------------------------------------------------
🔹 7️⃣ Modern Feature (Top-Level Await):
-------------------------------------------------------
👉 ES Module (type="module" বা .mjs ফাইল) এ async function ছাড়াও ব্যবহার করা যায়:

const promises = [Promise.resolve(1), Promise.resolve(2)];
for await (const p of promises) {
   console.log(p);
}

-------------------------------------------------------
🔹 8️⃣ Practical Example (API Fetch):
-------------------------------------------------------
async function fetchData() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
  ];

  const requests = urls.map(url => fetch(url));

  for await (const response of requests) {
    const data = await response.json();
    console.log("Title:", data.title);
  }
}

fetchData();
*/
async function demo() {
  const promises = [
    Promise.resolve("✅ Task 1 done"),
    Promise.resolve("✅ Task 2 done"),
    Promise.resolve("✅ Task 3 done")
  ];

  for await (const msg of promises) {
    console.log(msg);
  }

  console.log("🎉 All tasks completed!");
}

demo();


/*

-------------------------------------------------------
🔹 9️⃣ Summary Table:
-------------------------------------------------------
| বিষয়                     | বর্ণনা |
|---------------------------|----------------------------------|
| Loop Type                | Asynchronous Iterator Loop        |
| Keyword                  | for await...of                   |
| async function লাগবে?    | হ্যাঁ (ES Module ছাড়া)           |
| Wait করে                 | প্রতিটি Promise resolve হওয়া পর্যন্ত |
| Use Case                 | Serial async কাজ, API call, file read |

-------------------------------------------------------
🔹 10️⃣ সংক্ষিপ্ত সারসংক্ষেপ:
-------------------------------------------------------
👉 "for...of" — সাধারণ value গুলোর জন্য (synchronous)
👉 "for await...of" — Promise বা asynchronous value গুলোর জন্য
👉 প্রতিটি async অপারেশনের ফলাফল ধারাবাহিকভাবে (serially) পেতে সাহায্য করে।
*/
