// Task 1 

function countDownFrom(n){
    for(i=n; i>=1; i--){
        console.log(i)
    }
}
countDownFrom(5);

// Task 2 


function printArrayElements(arr){
    for(let fruit of arr){
        console.log(fruit);
    }
}

printArrayElements(["Apple", "Banana", "Cherry"]);

// Task 3 


function sumNumbersUpTo(n) {
    let i = 1; 
    let total = 0;

    while(n >= i){
        total += i
        i++
    }
    return total
}

console.log(sumNumbersUpTo(5))

// Task 4
function repeatString(str, n){
    let i = 0;
    do{
        console.log(str);
        i++
    }
    while(i < n);
}
repeatString("Hello", 3);

// Task 5
function printObjectKeys(obj){
    for(let object in obj){
        console.log(object)
    }
}
printObjectKeys({ name: "Alice", age: 25 });



// Medium Tasks 
// Task 1

function filterOdds(numbers){

    let filterNums = [];
    for(let i = 0; i < numbers.length; i++){
        // console.log(numbers[i])
        if(numbers[i] % 2 !== 0){
            filterNums.push(numbers[i])
            // filterNums[filterNums.length] = numbers[i];        
        }
    }
    console.log(filterNums);
}

filterOdds([1, 2, 3, 4, 5]);


// Task 2 

function findMaxValue(numbers){
    let a = numbers[0]
    for(let b of numbers){
        if(b > a){
            a=b;
        }
    }
    console.log(a)
}

findMaxValue([10, 20, 5, 30]);

// Task 3 

function reverseString(str){
    for(let i = str.length - 1; i >= 0; i--){
        console.log(str[i])
    }
}
reverseString("Hello");


// Task 4 

// function getValidInput() {
//     let userInput;

//     do {
//         userInput = prompt("Choose a number between 1 and 10:");
//         userInput = Number(userInput);
//     } while (userInput < 1 || userInput > 10);
//     alert("Happy For You"); 
// }

// getValidInput();

// Hard Tasks 
// Task 1 
//  1 statement მაკლია ALMOST FIZZ

function fizzBuzzTwist(){
    for(let i=0; i<=50; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        } else if(i % 5 === 0){
            console.log("Buzz")
        } else if(i % 3 === 0){
            console.log("Fizz")
        }else {
            console.log(i)
        }
    }
}

fizzBuzzTwist();

// Task 2


function printMultiplicationTable(n){
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            console.log(`${i}x${j}=${i*j}`)
        }

    }
}
printMultiplicationTable(5)


// Task 3
console.log(`vvvvvvvvvvvaaaaaaaaaaaaaaaatttttttttttttttttttt`)


function removeDuplicates(arr){
    let newArr =[];
    for(let el of arr){
        if(!newArr.includes(el)) {
            // newArr.push(el)
            newArr(newArr.length) = arr[el];
        }    
    }
    console.log(newArr);

}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
//  მეორე ამოხსნა 

// function removeDuplicates(arr){
//     let newArr =[];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 newArr(newArr.length) = arr[i];
//             }
//         }
//         console.log(newArr)
//     }
// }

// removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// ---- EXTRA TASKS

// 1. 

function findPrimes(n){
    let i = 2;
    while(i <= n){
        i++;
        if(i % 2 === 0){
            continue;
        }
        console.log(i);
    }
}

findPrimes(10);

// 2. 

// function total(){
//     let i = 0;
//     let userInput;  

//     do{
//         userInput = prompt("Enter The Number")
//         if(userInput == "stop") {
//             break;
//         }

//         let number = Number(userInput)

//         if(!isNaN(number)) {
//             i += number;
//         } else {
//             alert(`try again`)
//         }

        
//     }
    
//     while(true);
//     console.log(`Sum is: ${i}`);
// }

// total();


// 3. 

function reverseArray(arr){
    for(let i = arr.length - 1 ; i >= 0; i--){
        console.log(arr[i]);
    }
}


reverseArray([1, 2, 3, 4, 5])
reverseArray(["kata","Lizazu", "Paskunji"])
reverseArray("Kata")



// 4. 

const person = {
    name: "Paskunji",
    age: 27, 
    city: "Batumi"
}

for(prop in person){
    console.log(`${prop}: ${person[prop]}`)
}

// 5. 

function longestWord(words){
    let longest = "";

    for(word of words){

        if( word.length > longest.length ){
            longest = word 
        } 
    }
    console.log(longest)
}

longestWord(["kata","Lizazu", "Paskunji"]);

// 6. 

const names = ["alice", "bob", "charlie"];
let newArr = []; 

names.forEach(name => {
    let capitalized = name.toUpperCase()
    newArr.push(capitalized);
})
console.log(newArr);


// 1. 
function countVowels(str){
    let vowel = 0; 
    for(i = 0; i < str.length; i++){
        if(str [i] === "a" ||str [i] === "e" ||str [i] === "i" ||str [i] === "o" ||str [i] === "u"){
            vowel++;
        }
    }
    console.log(`"${str}" has: ${vowel} vowels`);
}

countVowels("paskunji");

// 3. 

function longestNumber(numbers){
    let firstNum = numbers[0]; 
    longestNum = String(firstNum).length

    for(number of numbers){
        let numberDgt = String(number).length
        if(numberDgt > longestNum){
            firstNum = number;
            longestNum = numberDgt;
        }
    }
    console.log(firstNum);

}

longestNumber([12, 12345, 234]);

// 4 

function sumNumbers(arr) {
    let total = 0;
    arr.forEach(num => {
        total += num
    })
    console.log(total);
}

sumNumbers([1, 2, 3, 4])

// 5

function reverseString(str) {
    let i = str.length - 1;
    
    while(i >= 0){
        console.log(str[i]);
        i--
    }
}

reverseString("KATA")

// 6 


// function guessNumberGame(target) {
//     let userInput;
//     let number; 
//     do{
//         userInput = prompt("Guess The Number");
//         number = Number(userInput);
//         if(number < target){
//             alert(`Your Number is too low`)
//         } else{
//             alert(`Your Number is too High`);
//         }
//     }
    
//     while(number !== randomNum)
//         alert("happy for you");
//         console.log(`YOU WIN`);
// }

// const randomNum = Math.floor(Math.random() * 100) + 1
// guessNumberGame(randomNum);


// 1. 

function countEvenNumbers(arr) {
    let newArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            // console.log(arr[i])
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

countEvenNumbers([2, 5, 4, 7, 9])

// 2.

// 3. 

function sumNumbers(arr){
    let sum = 0; 
    for(num of arr){
        sum += num
    }
    console.log(sum);
}

sumNumbers([1, 2, 4])

// 4. 

function factorial(n){
    let count = 1; 
    while (n > 0){
        count *= n  
        n--;
    }
    console.log(count);

}

factorial(5);

// 5. 

function multiplicationTable(n){
    let i = 1;
    do{
        console.log(`${n} x ${i} = ${n*i}`);
        i++
    }
    while(i<=10);
    console.log(`Done!`)
}

multiplicationTable(5);


// 6. 
function reverseArrayy(arr) {
    arr.reverse().forEach(element => {
        console.log(element);
    });
}

reverseArrayy([1, 2, 3, 4, 5]); 

// 7. 
function removeDuplicates(arr) {
    // let firstNum = arr[0];
    let newArr = []; 
    for(numb of arr){
        if(!newArr.includes(numb)){
        newArr.push(numb);
        }
    }
    console.log(newArr)
}
removeDuplicates([1,1, 2, 3,3, 4, 5,5])

// 1. 

console.log(`ახალი`)

function firstRepeatedNumber(arr){
    // let firstNum = arr[0];
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < i; j++){
            if(arr[i] === arr[j]){
                return arr[i]
            }
        }
    }
    return  null
}

console.log(firstRepeatedNumber([1, 2, 3, 4, 3, 5]));
console.log(firstRepeatedNumber([1, 2, 3, 4, 5]))

// 2. 

function countdown(n){
    // let countDo = n; 

    while(n > 0){
        console.log(n);
        n--;
    }
    console.log(`UPS`)
}

countdown(5);

// 3. 

function longestWordd(sentence){
    let words = sentence.split(" ");
    let longest = "";
    
    for(word of words){
        // console.log(word)
        if(word.length > longest.length){
            longest = word
        }
    }
    console.log(longest)
}
longestWordd("JavaScript is the best programming language");

// 4. 

function convertToCelsius(temps){
    let newArr = [];
    temps.forEach(temp => 
        {let cels = (temp - 32)/1.8
            newArr.push(cels);
        })
        return newArr
}

console.log(convertToCelsius([32, 68, 100])); 


// 5. 
function removeNegatives(arr){
    let newArr = [];
    arr.forEach(numb => {
        if(numb > 0){
            newArr.push(numb)
        }
    })
    return newArr
}

console.log(removeNegatives([5, -3, 9, -8, 2, -1]));

// 6. 

function titleCase(sentence) {
    let words = sentence.split(" ");
    let capitalizedWords = [];

    for (let word of words) {
        let capitalizedWord = word[0].toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    }

    return capitalizedWords.join(" ");
}

console.log(titleCase("hello world from javascript"));



// password 

const password = "Paskunji777";

function getPassword() {
    let answer;
    let tryAgain = 2; 

    for (let i = 0; i < 3; i++) {
        answer = prompt("Enter your Password: ");
        
        if (answer === password) {
            alert("Your Password is correct.");
            return;
        } else {
            if (tryAgain) {
                alert(`Wrong Password, you left: ${tryAgain} try`);
                tryAgain--
            } else {
                alert("Too many failed attempts. Failed!");

            }
        }
    }
}

getPassword();
