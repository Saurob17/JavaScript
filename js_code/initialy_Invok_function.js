// 🔹 Normal IIFE
(function () {
  console.log("This is an Immediately Invoked Function Expression (IIFE)");
})(); // <- ; দরকার যদি পরের লাইনে আরেকটা statement থাকে

// 🔹 Arrow Function IIFE
(() => {
  console.log("This is an Immediately Invoked Arrow Function Expression (IIFE)");
})();


((name)=>{
    console.log("Hello "+name);
})("Saurob");