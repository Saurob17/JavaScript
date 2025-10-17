//gloval srcope means variable can be accessed from anywhere in the code
var globalVar = "I am a global variable";

function checkGlobalScope() {
  console.log(globalVar); // Accessible here
}

checkGlobalScope();
console.log(globalVar); // Accessible here too

//local scope means variable can be accessed only within the function or block it is defined in
function localScopeExample() {
  var localVar = "I am a local variable"; //local scope and this is local variable
  console.log(localVar); // Accessible here
}

// not accessible here
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined



function one() {
  const oneVar = "I am one var";

  function two() {
    const twoVar = "I am two var";
    console.log(oneVar); //accessible
  }
  two();
  // console.log(twoVar);//not accessible
}

// one();


// ✅ Function Declaration (Hoisted)
console.log(addOne(5)); // Works fine because of hoisting

function addOne(num) {
  return num + 1;
}
// Output: 6

/*
🔹 ব্যাখ্যা:
Function Declaration কোডের আগে বা পরে যেকোনো জায়গা থেকে কল করা যায়।
কারণ JavaScript execution এর আগে এই function টাকে hoist করে memory তে তুলে নেয়।
*/


// ❌ Function Expression (Not Hoisted)
console.log(addTwo(5)); // Error: addTwo is not a function

const addTwo = function (num) {
  return num + 2;
};

/*
🔹 ব্যাখ্যা:
এটা একটি Function Expression।
এখানে function টা const variable এর মধ্যে assign করা হয়েছে।
JavaScript কেবল variable name ‘addTwo’ জানে, কিন্তু function value এখনো assign হয়নি।
তাই declare করার আগে call করলে error দেয়।
*/