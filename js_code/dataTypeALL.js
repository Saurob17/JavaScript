
// Primitive Data Types: string, number, boolean, null, undefined, symbol, bigint
// Non-Primitive Data Types: object, array, function



//********************************** */

// Stack (primitive) , Heap (non-primitive)

//********************************** */
 let myYoutubname="historybd";;
 let anootherName=myYoutubname;


 anootherName="javascriptbd";

 console.log(myYoutubname);
console.log(anootherName);

//++++++++++++++++++++++++++++++++

let userOne={name:"historybd",job:"student"};
let userTwo=userOne;



userTwo.name="javascriptbd";

// userOne আর userTwo দুইটা reference variable, যেটা একই object কে refer করছে

// তাই userTwo এর name change করলে userOne এর name ও change হয়ে যাবে
console.log(userOne);
console.log(userTwo);



