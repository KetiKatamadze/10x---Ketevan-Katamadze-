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

// const numbers = [40, 100, 1, 5, 25, 10];
// numbers.sort((a, b) => a - b); 

// console.log(numbers);



// ----------------------------------------------------------
// 1. Chain map, filter, and reduce

// const numbers = [5, 12, 8, 130, 44, 3, 10];

// const filteredNums = numbers.filter((number) => {
//     return number > 10;
// })

// console.log(filteredNums);

// const multiplyNums = numbers.map((number) => {
//     return number * 2;
// })

// console.log(multiplyNums);

// const total = numbers.reduce((currentNum, number) => {
//     return number + currentNum;
// }, 0)

// console.log(total);


// ----------------------------------------------------------
// 2. Sort objects by multiple criteria
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 25 },
//     { name: "David", age: 20 }
//     ];



// const sortedPeople = people.sort((a,b) => {
//         if(a.age === b.age){
//             return a.name.localeCompare(b.name)
//         }
//         return a.age-b.age;
//     })

// console.log(sortedPeople);

// ----------------------------------------------------------
// 3. Find unique values from two arrays

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];

// const uniqueArr1 = arr1.filter(num => !arr2.includes(num))

// const uniqueArr2 = arr2.filter(num => !arr1.includes(num))

// const arr3 = uniqueArr1.concat(uniqueArr2);

// console.log(arr3);

// ----------------------------------------------------------
// 4. Check if all users have emails ... 

// const users = [
//     { name: "Alice", email: "alice@mail.com", role: "user" },
//     { name: "Bob", email: "bob@mail.com", role: "admin" },
//     { name: "Charlie", email: "charlie@mail.com", role: "user" }
// ];

// const checkEmail = users.every((user) => {
//     return user.email;
// })

// console.log(checkEmail);

// const checkAdmin = users.some((user) => {
//     return user.role == "admin"
// })

// console.log(checkAdmin);

// ----------------------------------------------------------
// 5. Group items by a property

const products = [
    { name: "Apple", category: "fruit" },
    { name: "Banana", category: "fruit" },
    { name: "Carrot", category: "vegetable" },
    { name: "Cucumber", category: "vegetable" }
];


const filterVeg = products.filter((product)=>{
    return product.category === "vegetable"
})

const filterFruit = products.filter((product) => {
    return product.category === "fruit"
})

console.log(`Vegetable:`, filterVeg);
console.log(`Fruit:`, filterFruit);



