// function fetchUserData() {
//   let data = {
//     id: 1,
//     username: 'john_doe',
//     email: 'john@example.com',
//   };
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userData = data;
//       resolve(userData);
//     }, 3000); // Simulating a 3-second delay
//   });
// }

// // Example usage:
// fetchUserData()
//   .then((userData) => {
//     console.log(userData); // After 3 seconds: { id: 1, username: 'john_doe', email: 'john@example.com' }
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// const data = [1, 2, 3, 4, 5];
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 2000); // Simulating a 2-second delay
//   });
// }

// function processData(numbers) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Array.isArray(numbers)) {
//         const doubledNumbers = numbers.map((num) => num * 2);
//         resolve(doubledNumbers);
//       } else {
//         reject(new Error('Invalid input. Expecting an array of numbers.'));
//       }
//     }, 1000); // Simulating a 1-second delay
//   });
// }

// // Example usage: Chain fetchData and processData
// fetchData()
//   .then(processData)
//   .then((result) => {
//     console.log(result); // After 3 seconds: [2, 4, 6, 8, 10]
//   })
// .catch((error) => {
//   console.error(error);
// })



// function fetchDataWithError() {
//   return new Promise((resolve, reject) => {
//     // Simulate a random error (50% chance)
//     const randomError = Math.random() < 0.5;


//     if (randomError) {
//       const data = [1, 2, 3, 4, 5];
//       resolve(data);
//     } else {
//       reject(new Error('Random error occurred.'));
//     }
//     // Simulating a 2-second delay
//   });
// }

// // Example usage: Handle the error appropriately
// fetchDataWithError()
//   .then((data) => {
//     console.log(data); // After 2 seconds: [1, 2, 3, 4, 5]
//   })
//   .catch((error) => {
//     console.error(error.message); // Handle the error if it occurs
//   });



// function delayGreeting(name) {
//   return setTimeout(() => {
//     console.log("hello " + `${name}`)
//   }, 2000)
// }
// delayGreeting('Alice')


// function fetchUserData(userData){
//    return new Promise((resolve, reject) => {
//      setTimeout(() => {
//        const userData = {
//          id: 1,
//          username: 'john_doe',
//          email: 'john@example.com',
//        };
//        resolve(userData);
//      }, 3000);
//    })
// }
// function displayUSerData(userData){
//    console.log(userData);
// }
// fetchUserData().then(displayUSerData).catch(err=>console.error(err))

// function registerUser(username, callback) {
//   // Simulating user registration after a delay of 2 seconds
//   setTimeout(() => {
//     const isUsernameAvailable = Math.random() < 0.5; // Simulate availability

//     if (isUsernameAvailable) {
//       // Resolve with a success message
    
//       callback(null, `Username "${username}" registered successfully.`);
//     } else {
//       // Reject with an error message
//       callback(new Error(`Username "${username}" is already taken.`));
//     }
//   }, 2000);
// }

// // Example usage:
// registerUser('john_doe', (error, message) => {
//   if (error) {
//     console.error(error.message); // Handle error
//   } else {
//     console.log(message); // Success message
//   }
// });


