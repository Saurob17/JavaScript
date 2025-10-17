//function 

//function definition type 1
function print(){
    console.log("Hello World");
}

//function call
print();

//function definition type 2 (parameterized function)
function sum(a, b){
    return a + b;
}

//function call
let result = sum(5, 10);
console.log("Sum:", result); // Sum: 15

//function definition type 3 (anonymous function assigned to a variable)
const multiply = function(x, y){
    return x * y;
};

//function call
let product = multiply(4, 6);
console.log("Product:", product); // Product: 24

//function definition type 4 (arrow function)
const divide = (m, n) => {
    return m / n;
};

//function call
let quotient = divide(20, 4);
console.log("Quotient:", quotient); // Quotient: 5

//function definition type 5 (arrow function with implicit return)
const square = (x) => x * x;// ata return kore because {} na diye direct expression dewa hoise

//function call
let squaredValue = square(7);
console.log("Squared Value:", squaredValue); // Squared Value: 49 

//function definition type 6 (immediately invoked function expression - IIFE)
(function(){
    console.log("This is an IIFE");
})();


//function with default parameters
function greet(name = "Guest"){
    console.log("Hello, " + name + "!");
}
greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!

//function with rest parameters
function concatenate(...strings){
    return strings.join(" ");
}
let sentence = concatenate("JavaScript", "is", "fun!");
console.log(sentence); // JavaScript is fun!

//function with callback
function fetchData(callback){
    // Simulating data fetching
    let data = { id: 1, name: "Sample Data" };
    callback(data);
}

fetchData(function(data){
    console.log("Fetched Data:", data);
});

//function with object parameter
function displayUser({ name, age }){
    console.log("Name:", name);
    console.log("Age:", age);
}

let user = { name: "Bob", age: 25 };
displayUser(user);

//function with array parameter
function sumArray(numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

let nums = [1, 2, 3, 4, 5];
let total = sumArray(nums);
console.log("Total Sum:", total); // Total Sum: 15
