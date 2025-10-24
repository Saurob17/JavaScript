const promiseOne = new Promise(function (resolve, reject) {
  // some async operation
  //DB call or API call or network call cryptographic operation
  setTimeout(function () {
    console.log("Async operation 1 completed");
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async operation 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userame: "John", userId: 123 });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log("User data received");
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "Alice", userId: 456 });
    } else {
      reject("Error: Unable to fetch user data");
    }
  }, 1000);
});

const username = promiseFour
  .then((user) => {
    console.log(user);
    console.log("User data fetched successfully");
    console.log("Username:", user.username);
    return user.username;
  })
  .then((username) => {
    console.log("Username received in next then:", username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Promise operation completed"));



const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "Bob", userId: 789 });
    } else {
      reject("Error: Unable to fetch user data  from promiseFive");
    }
  },100)
});


async function consumedPromiseFive(){
    const responsr= await promiseFive
    console.log(responsr);

}

// async function getAllUsers(){
//    try{
//      const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//    }
//     catch(error){
//         console.log('Error fetching users:', error);
//     }
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Posts data:', data);
  })
  .catch(error => {
    console.log('Error fetching posts:', error);
  });