//====================================================
// 🧿 JavaScript Symbol — Full Note (বাংলা সহ)
//====================================================

/*
📦 Symbol Overview
├── Symbol হলো JavaScript-এর একটি Primitive Data Type
│   ├─ প্রতিবার Symbol() কল করলে নতুন unique মান তৈরি হয়
│   └─ Symbol সাধারণত object key হিসেবে ব্যবহৃত হয় (hidden/private data রাখার জন্য)
|
├── ✅ Syntax:
│      const mySym = Symbol("description");
|
├── 🧭 Example:
│      const sym1 = Symbol("id");
│      const sym2 = Symbol("id");
│      console.log(sym1 === sym2); // false (সব Symbol আলাদা)
|
├── ⚙️ Symbol দিয়ে Object Property
│      const mySym = Symbol("key1");
│      const user = {
│          name: "Saurob",
│          [mySym]: "Secret Value"
│      };
│      console.log(user[mySym]); // Secret Value ✅
|
└── 🔒 কেন Symbol ব্যবহার করা হয়
    ├─ 1️⃣ Unique Key তৈরি করতে
    │     → Symbol key সবসময় একক হয়, কোনো duplicate হয় না
    |
    ├─ 2️⃣ Hidden / Private Property রাখতে
    │     → for...in, Object.keys(), JSON.stringify() তে Symbol key দেখা যায় না
    |
    ├─ 3️⃣ Key Conflict এড়াতে
    │     → অন্য কোড বা লাইব্রেরি একই নামের key ব্যবহার করলেও Symbol key safe থাকে
    |
    ├─ 4️⃣ Object Behavior কাস্টমাইজ করতে (Built-in Symbol)
    │     → যেমন: Symbol.iterator, Symbol.toPrimitive, Symbol.toStringTag ইত্যাদি
    |
    └─ 5️⃣ Internal Logic লুকিয়ে রাখতে
          → Sensitive data বা internal value লুকানো যায়

//----------------------------------------------------
// 🕵️ Hidden Property Example
//----------------------------------------------------
const secret = Symbol("password");
const account = {
    name: "Admin",
    [secret]: "12345"
};
for (let key in account) {
    console.log(key); // শুধু 'name' দেখা যাবে
}
console.log(Object.keys(account)); // ["name"]
console.log(account[secret]);      // "12345" ✅

//----------------------------------------------------
// ⚙️ Conflict-Free Property Example
//----------------------------------------------------
const id = Symbol("id");
const user = {
    name: "Rafi",
    [id]: 101
};
user["id"] = "Normal ID"; // string key
console.log(user["id"]); // "Normal ID"
console.log(user[id]);   // 101 ✅

//----------------------------------------------------
// 🧠 Well-known Symbols (Built-in Use)
//----------------------------------------------------
/*
JavaScript কিছু predefined Symbol ব্যবহার করে object behavior কাস্টমাইজ করতে:
  ├─ Symbol.iterator     → Object কে iterable বানায়
  ├─ Symbol.toPrimitive  → Object কে number/string এ কনভার্ট করার সময় কাস্টম রিটার্ন দেয়
  ├─ Symbol.toStringTag  → Object এর toString() আউটপুট কাস্টম করে
*/
const obj = {
  [Symbol.toPrimitive](hint) {
      return hint === "string" ? "Custom" : 99;
  }
};
console.log(`${obj}`); // "Custom"
console.log(+obj);     // 99

//----------------------------------------------------
// 🔍 Symbol vs String Key তুলনা
//----------------------------------------------------
/*
| বিষয় | String Key | Symbol Key |
|------|-------------|-------------|
| ইউনিক | ❌ না | ✅ হ্যাঁ |
| ট্রাভার্সেবল | ✅ হ্যাঁ | ❌ না |
| ওভাররাইট হতে পারে | ✅ হ্যাঁ | ❌ না |
| Built-in Behavior কাস্টমাইজ | ❌ না | ✅ হ্যাঁ |
*/

//----------------------------------------------------
// 🧩 Symbol Info & Description
//----------------------------------------------------
const mySym = Symbol("secret");
console.log(typeof mySym);        // "symbol"
console.log(mySym.description);   // "secret"

//====================================================
// 🧭 সারসংক্ষেপ
//====================================================
/*
🔹 Symbol হলো একক ও unique primitive data type।
🔹 এটি object key হিসেবে ব্যবহার করে hidden/private property রাখা যায়।
🔹 Symbol key for...in বা Object.keys() এ দেখা যায় না।
🔹 অন্য কোডে একই key নাম ব্যবহার করলেও conflict হয় না।
🔹 JavaScript-এর অনেক internal behavior Symbol দ্বারা নিয়ন্ত্রিত হয়।
*/
//====================================================
