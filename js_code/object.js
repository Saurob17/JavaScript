/*
📦 JavaScript Object (অবজেক্ট)
==============================

🧩 সংজ্ঞা:
👉 Object হলো এমন একটা data structure যেখানে ডেটা key-value pair আকারে রাখা হয়।

🔹 Syntax:
const objName = {
    key1: value1,
    key2: value2
};

🔸 প্রতিটি key কে বলে property
🔸 প্রতিটি value যেকোনো data type হতে পারে:
    - String
    - Number
    - Boolean
    - Array
    - Object
    - Function
    - Symbol ইত্যাদি

উদাহরণ:
---------
const jaUser = {
    name: "Saurob",
    age: 21,
    email: "mdsaurob@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"],
};
*/




//**************************************
// 🧱 Object Declare করার ৩টি উপায়
//**************************************

// 1️⃣ Object Literal (সবচেয়ে সাধারণ)
const user1 = {
    name: "Rafi",
    age: 22
};

// 2️⃣ new Object() Constructor
const user2 = new Object();
user2.name = "Rafi";
user2.age = 22;

// 3️⃣ Object.create() Method
const proto = { type: "Human" };
const user3 = Object.create(proto);
user3.name = "Rafi";




//**************************************
// 🧩 Access Property (ডেটা বের করার উপায়)
//**************************************

const jaUser = {
    name: "Saurob",
    "full name": "Md Saurob Bhuyan",
    age: 21,
    location: "Bangladesh",
    email: "mdsaurob@gmail.com",
};

// console.log(jaUser.name);          // Dot Notation
// console.log(jaUser["full name"]);  // Bracket Notation (যখন space থাকে)
// console.log(jaUser["email"]);      // Bracket দিয়ে access



//**************************************
// 🧿 Symbol Key ব্যবহার
//**************************************
const mySym = Symbol("key1");

const person = {
    name: "Rafi",
    [mySym]: "secretKey"
};

console.log(person[mySym]); // 'secretKey'




//**************************************
// ✍️ Add / Update / Delete Property
//**************************************

jaUser.email = "mdsaurobbhuyan@gmail.com";  // Update
jaUser.country = "Bangladesh";              // Add
delete jaUser.age;                          // Delete

console.log(jaUser);




//**************************************
// 🔐 Freeze / Seal Object
//**************************************
//Object.freeze(jaUser); // এখন কিছু পরিবর্তন করা যাবে না

jaUser.name = "Changed"; // কাজ করবে না
jaUser.newKey = "Try";   // কাজ করবে না




//**************************************
// ⚙️ Function as a Value (Method)
//**************************************

// function কে object property হিসেবে রাখা যায়
jaUser.greeting = function(){
    console.log("Hello jaUser");
}

jaUser.greetingTwo = function(){
    return `Hello ${this.name}, welcome to our website`;
}

jaUser.greeting();                    // "Hello jaUser"
console.log(jaUser.greetingTwo());    // "Hello Saurob, welcome to our website"




//**************************************
// 🧭 Object Built-in Methods
//**************************************

const student = {
    name: "Rafi",
    dept: "CSE",
    id: 101
};

// console.log(Object.keys(student));    // ['name', 'dept', 'id']
// console.log(Object.values(student));  // ['Rafi', 'CSE', 101]
// console.log(Object.entries(student)); // [['name','Rafi'], ['dept','CSE'], ['id',101]]




//**************************************
// 🧩 Nested Object (Object এর ভিতরে Object)
//**************************************

const school = {
    name: "Dhaka College",
    address: {
        city: "Dhaka",
        zip: 1205
    },
    principal: {
        name: "Mr. Karim",
        age: 50
    }
};

console.log(school.address.city); // Dhaka




//**************************************
// 🔁 Loop through Object (for...in)
//**************************************

// for(let key in school){
//     console.log(key, ":", school[key]);
// }




//**************************************
// 🧩 Object Merge (Combine)
//**************************************

// 1️⃣ Spread Operator
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3 };
// const combined = { ...obj1, ...obj2 };
console.log(combined); // { a:1, b:2, c:3 }

// 2️⃣ Object.assign()
const clone = Object.assign({}, obj1);
console.log(clone);




//**************************************
// 🧠 Destructuring
//**************************************

const person1 = { name: "Rafi", age: 22, city: "Dhaka" };
const { name, city } = person1;
// console.log(name); // Rafi
// console.log(city); // Dhaka




//**************************************
// ⚡ Shorthand Method Syntax (ES6+)
//**************************************

// const user = {
//     name: "Rafi",
//     greet() {
//         console.log(`Hi ${this.name}`);
//     }
// };
// user.greet();




//**************************************
// 🌐 JSON Conversion
//**************************************

const obj = { name: "Saurob", age: 21 };
const jsonStr = JSON.stringify(obj); // Object → String
console.log(jsonStr); // '{"name":"Saurob","age":21}'

const backToObj = JSON.parse(jsonStr); // String → Object
console.log(backToObj);


//**************************************
// 🧱 Object inside Object
const objA={x:1,y:2};
const objB={y:3,z:4};

//object shorthand
//const objC={objA,objB};


//object merge
const objC=Object.assign({},objA,objB);



console.log(objC);

//------------------------------------------------------
// 🧠 Object Reference vs Primitive Reference

const objD = { x: 1, y: 2 };
const objE = { y: 3, z: 4 };

// object merge
const objF = Object.assign(objD, objE);
console.log(objC===objD); // true

//objecr sprlit
const objG={...objD,...objE};
console.log(objG===objD); // false


//++++++++++++++++++++++++++++++++++++++++++++
//object in array

const users=[
    {name:"Rafi",age:22},
    {name:"Sakib",age:32},
    {name:"Tamim",age:42},
];

// for(let user of users){
//     console.log(user.name);
// }


//==============================
// Object Destructuring (Bangla Notes)
//==============================

const course = {
  courseName: "JavaScript",
  price: 999,
  duration: "3 months",
  courseInstructor: "Saurob"
};

// Object থেকে property বের করা এবং নতুন variable এ রাখা
const { courseInstructor: instructor } = course;

// console.log(courseInstructor); // ❌ Error, variable নাম instructor
console.log(instructor);          // ✅ Output: Saurob

/*
সংক্ষেপে:
1️⃣ { propName } = obj → একই নামের variable
2️⃣ { propName: newVar } = obj → নতুন variable নাম
*/
