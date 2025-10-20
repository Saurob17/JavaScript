// arrow function and this keyword

const user = {
  name: "saurob",
  age: 33,
  wellcomeMessage: function () {
    console.log("Hello " + this.name);
  },
};

user.wellcomeMessage(); //Hello saurob
(user.name = "Bhuyan"), user.wellcomeMessage(); //Hello Bhuyan

// function chai(){
//     let name="Saurob Bhuyan";
//     console.log(this.name);//undefined  because this refers to global object
// }
// chai();

let name = "Saurob Bhuyan";
function chai() {
  console.log(this.name); //Saurob Bhuyan  because this refers to global object
}
chai();

const addTow = (a, b) => num1 + num2;
console.log(addTow(5, 3)); //8

// ❌ Wrong → undefined
const user2 = (num) => {
  userName: "num3";
};
console.log(user2("saurob")); // undefined

// ✅ Correct → object return
const user3 = (num) => ({ userName: "num3" });
console.log(user3("saurob")); // { userName: 'num3' }

/*
🔹 ব্যাখ্যা:
Object return করতে হলে object literal টাকে () এর মধ্যে রাখতে হয়।
( ) ব্যবহার করলে JS বুঝে এটা object, block না।

🔹 {} → function body (return লাগে)
🔹 ({}) → object return
*/
