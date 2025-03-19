// map()

// const numbers = [1, 4, 9, 16];

// const squareRoots = numbers.map(Math.sqrt);

// console.log(`Square roots from ${numbers} are ${squareRoots};`);

// ----------------------------------------------------------
//  filter()

// const numbers = [5, 12, 8, 130, 44];

// const filteredNumbers = numbers.filter((number) =>{
//     return number >= 10; 
// })

// console.log(filteredNumbers);

// ----------------------------------------------------------
// reduce() 
// const numbers = [1, 2, 3, 4, 5];

// const total = numbers.reduce((currentNum, number) => {
//     return number + currentNum; 
// }, 0)

// console.log(total);


// ----------------------------------------------------------
// forEach()

// const names = ["Anna", "Ben", "Charlie"];

// names.forEach((name) => {
//     console.log(`Hello, ${name}`);
// })

// ----------------------------------------------------------
// find()

// const users = [
//     { name: "Alice", age: 22 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 30 }
//     ];

// const findUser = users.find((user) => {
//     return user.age === 25; 
// })
// console.log(findUser);


// ----------------------------------------------------------
// every()

// const numbers = [2, 4, 6, 8];

// const isEven = numbers.every((number) => {
//     return number % 2 == 0; 
// })

// console.log(isEven);

// ----------------------------------------------------------
// some()

// const tasks = [
//     { title: "Do homework", done: false },
//     { title: "Clean room", done: true }
//     ];

// const done = tasks.some((task) => {
//     return task.done == true; 
// })

// console.log(done);


// ----------------------------------------------------------
// sort()

const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b); 

console.log(numbers);



