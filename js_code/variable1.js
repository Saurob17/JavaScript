// ==========================
// ১. const (স্থির মানের ভেরিয়েবল)
// ==========================
const accountId = 12345; // const দিয়ে একটি স্থির মানের ভেরিয়েবল ঘোষণা
console.log("Account ID:", accountId);

// const ভেরিয়েবল পুনরায় মান দেওয়া যাবে না
// accountId = 67890; // এটি error দিবে কারণ accountId হলো constant
console.log("Updated Account ID:", accountId);

/* 
// Block scope উদাহরণ
if(true) {
    const localConst = "hello";
    console.log(localConst); // hello
}
// console.log(localConst); // Error: localConst is not defined (block scope)
*/


// ==========================
// ২. let (পরিবর্তনযোগ্য ভেরিয়েবল)
// ==========================
let userName = "JohnDoe"; // let দিয়ে ভেরিয়েবল ঘোষণা করা হলো, যা পরিবর্তনযোগ্য
console.log("User Name:", userName);

// let ভেরিয়েবলকে নতুন মান দেওয়া সম্ভব
userName = "JaneDoe";
console.log("Updated User Name:", userName);

// একই scope-এ আবার let দিয়ে একই নামের ভেরিয়েবল ঘোষণা করা যাবে না


// ==========================
// ৩. var (পরিবর্তনযোগ্য ফাংশন-স্কোপ ভেরিয়েবল)
// ==========================
var accountCity = "New York"; // var দিয়ে ভেরিয়েবল ঘোষণা করা হলো
console.log("Account City:", accountCity);

// var ভেরিয়েবলকে নতুন মান দেওয়া সম্ভব
accountCity = "Los Angeles";
console.log("Updated Account City:", accountCity);


/* 
// ==========================
// ৪. var vs let scope উদাহরণ
// ==========================
function testVar() {
    var x = 10;
    if (true) {
        var x = 20; // একই function scope
        console.log(x); // 20
    }
    console.log(x); // 20
}

function testLet() {
    let y = 10;
    if (true) {
        let y = 20; // নতুন block scoped variable
        console.log(y); // 20
    }
    console.log(y); // 10
}

testVar();
testLet();

// ==========================
// ৫. block scope vs global scope
// ==========================
{
    var a = 1;   // function/global scoped
    let b = 2;   // block scoped
    const c = 3; // block scoped
}
console.log(a); // 1
// console.log(b); // Error: b is not defined
// console.log(c); // Error: c is not defined 
*/


// ==========================
// strict mode এ ❌ Error দিবে, তাই declaration সবসময় প্রয়োজন
// ৬. Undeclared variable (কোন declaration ছাড়া)
// ==========================
accountEmail = "lsdlds@gmail.com"; // declaration ছাড়া variable assign
console.log("Account Email:", accountEmail);
// এটি automatic global variable হয়ে যায়, strict mode এ error দিবে
