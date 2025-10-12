
// ==========================
// JavaScript Comparison Operators (বাংলায় নোট)
// ==========================

// ১. ==  (value compare only)
console.log(1 == 1);     // true, value একই

console.log(1 == "1");   // true, string "1" → number 1 এ convert হয়ে compare হয়
// == operator শুধু **value check করে**, type ignore করে


// ২. ===  (value + type compare)
console.log(1 === "1");  // false, type ভিন্ন (number !== string)
// === operator both **value & type** check করে


// ৩. !=  (value compare only)
console.log(1 != "1");   // false, value একই

// ৪. !==  (value + type compare)
console.log(1 !== "1");  // true, type ভিন্ন

 
// ৫. undefined এবং null comparison
console.log(undefined == null);   // true, value তুলনা করে == operator
console.log(undefined === null);  // false, type & value দুইটা !== operator


// ৬. Null এবং Number comparison
console.log(null >= 0); // true (null → 0, 0 >= 0 → true)
console.log(null > 0);  // false (0 > 0 → false)
console.log(null <= 0); // true
console.log(null < 0);  // false

// ৭. Undefined এবং Number comparison
console.log(undefined >= 0); // false (undefined → NaN, NaN >= 0 → false)
console.log(undefined > 0);  // false
console.log(undefined <= 0); // false
console.log(undefined < 0);  // false

// ===========================
// Rules / ব্যাখ্যা (বাংলায়)
// ===========================
// 1. ==  → value compare only, type ignore করে
// 2. === → value + type compare
// 3. !=  → value compare only
// 4. !== → value + type compare
// 5. undefined == null → true, কিন্তু undefined === null → false
// 6. null → numeric comparison এ 0 হিসেবে consider করা হয়
// 7. undefined → numeric comparison এ NaN হিসেবে consider হয়, সব comparison false
//==========================

