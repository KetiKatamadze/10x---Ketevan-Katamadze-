const person = {
    name: "Ketevan",
    surname: "Katamadze",
    age: 28,
    students: [{
        name: "kata",
        surname: "katadze"
    },
    {
        name: "liza",
        surname: "lizadze"
    }]
}


console.log(person.name)

// console.log(person.students.name)


for(i = 0; i < person.students.length; i++){
    console.log(`${person.students[i].name} ${person.students[i].surname}`)
}

// 1.Manually Clone an Object
console.log("1.Manually Clone an Object")

const original = { name: "Luka", age: 28, job: "Dev" }
const newObj = {}

for(key  in original){
    newObj[key] = original[key]
}

console.log(newObj)

// 2.Filter Keys by Value
console.log("2.Filter Keys by Value")

const data = { a: 5, b: 15, c: 8, d: 20 }
const newData = {}
for(key in data){
    if(data[key] > 10){
        newData[key] = data[key]
    }
}
console.log(newData)

// 3. Swap Keys and Values
console.log("3. Swap Keys and Values")

const obj = { name: "Alice", age: "25", country: "Georgia" }
const newObj1 = {}
for(key in obj){
    newObj1[obj[key]] = key
}
console.log(newObj1)

// 4. Find the Key with the Highest Value
console.log("4. Find the Key with the Highest Value")

const scores = { anna: 10, luka: 22, gio: 17 };
let largestNum = 0
let name = ""

for(key in scores){
    if(scores[key] > largestNum){
        largestNum = scores[key]
        name = key;
    }
}
console.log(name)


// 5.Remove Keys with Falsy Values
console.log("5. Remove Keys with Falsy Values")
const messy = { a: 0, b: "Hello", c: false, d: 42, e: null }
const clean = {}

for(key in messy){
    if(messy[key]){
        clean[key] = messy[key]
    }
}

console.log(clean)

// 6. Count Total Characters in All Keys
console.log("6. Count Total Characters in All Keys")

const obj2 = { name: "Kate", age: 30, city: "Batumi" }
let charSum = 0;

for (let key in obj2) {
    charSum += key.length;
}

console.log(charSum); 


// 7. Find the Longest Key
console.log("7. Find the Longest Key")
const obj3 = { short: "a", longerKey: "b", reallyLongKey: "c" };
let maxLength = 0; 
let keyName = "";

for(key in obj3){
    if(key.length > maxLength){
        maxLength = key.length
        keyName = key
    }
}
console.log(keyName)

