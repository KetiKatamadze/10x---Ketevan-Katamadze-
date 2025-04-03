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
    let count = 1; 
    let total = 0;

    while(n >= count){
        total += count
        count++
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
        if(numbers[i] % 2 != 0){
            filterNums.push(numbers[i])
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
    for(let letter of str){
        console.log(letter);
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


// function printMultiplicationTable(n){
//     for(let i = 1; i < n; i++){

//     }
// }

// Task 3

function removeDuplicates(arr){
    let newArr =[];
    for(let el of arr){
        if(!newArr.includes(el)) {
            newArr.push(el)
        }    
    }
    console.log(newArr);
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);