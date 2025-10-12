// ==========================
// JavaScript Type Conversion (বাংলায়)
// ==========================

// ১. Number → String
let score = 22;                       // number
console.log("score:", score, "type:", typeof score); 

let valueInString = String(score);    // Number → String
console.log("valueInString:", valueInString, "type:", typeof valueInString); 


// ২. Boolean → Number
let isTrue = true;                    // boolean
console.log("isTrue:", isTrue, "type:", typeof isTrue); 

let booleanInNumber = Number(isTrue); // true → 1, false → 0
console.log("booleanInNumber:", booleanInNumber, "type:", typeof booleanInNumber); 


// ৩. String → Number
let str = "123";                       // string
console.log("str:", str, "type:", typeof str); 

let strInNumber = Number(str);         // "123" → 123
console.log("strInNumber:", strInNumber, "type:", typeof strInNumber); 


// ৪. Invalid String → Number
let str2 = "123abc";                   // string
console.log("str2:", str2, "type:", typeof str2); 

let str2InNumber = Number(str2);       // invalid → NaN
console.log("str2InNumber:", str2InNumber, "type:", typeof str2InNumber); 


// ৫. Number → Boolean
let num = 0;                            // 0 → false
let numInBool = Boolean(num);
console.log("numInBool:", numInBool, "type:", typeof numInBool);

let num2 = 5;                           // non-zero → true
let num2InBool = Boolean(num2);
console.log("num2InBool:", num2InBool, "type:", typeof num2InBool);


// ৬. String → Boolean
let emptyStr = "";                       // empty string → false
let emptyStrInBool = Boolean(emptyStr);
console.log("emptyStrInBool:", emptyStrInBool, "type:", typeof emptyStrInBool);

let someStr = "Hello";                   // non-empty string → true
let someStrInBool = Boolean(someStr);
console.log("someStrInBool:", someStrInBool, "type:", typeof someStrInBool);


// ==========================
// সংক্ষেপে নোট (বাংলায়)
// ==========================
// 1. String(value) → যেকোনো value কে string এ convert করে
// 2. Number(value) → string বা boolean কে number এ convert করে
//    - invalid conversion → NaN
// 3. Boolean(value) → 0, "", null, undefined → false
//    - অন্য value → true
// 4. NaN এর type = number, কিন্তু এটি invalid numeric value বোঝায়






// ১. Unary + operator (explicit Number conversion)
console.log(+true);     // 1
console.log(+false);    // 0
console.log(+"123");    // 123
console.log(+"abc");    // NaN

// ২. + operator (Addition vs Concatenation)
console.log(1 + 2);         // 3 (number + number → addition)
console.log("1" + 2);       // "12" (string + number → concatenation)
console.log("1" + true);    // "1true" (string + boolean → concatenation)
console.log(true + 2);      // 3 (boolean → number → addition)

// ===========================
// 1. Unary + → explicit conversion to Number
// 2. + operator:
//    - যদি কোনো value string → string concatenation
//    - অন্যসব → number addition