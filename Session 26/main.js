// Task 1 
console.log(`The Sorting Hat (Harry Potter)`)

const names = ['Harry', 'Hermione', 'Ron', 'Draco']
const houseArray = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

const hat = names.map((name) => {
    const randomNum = Math.floor(Math.random() * 4);
    const house = houseArray[randomNum];
    return `${name} - ${house}`
})

console.log(hat)

// Task 2 

console.log(`The Pokémon Filter`)

const pokemon = [ {name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900} ]

const filterCp = pokemon.filter(power => {
    if(power.CP >= 500)
        return power
})

console.log(filterCp)

// Task 3

console.log(`Avengers Assemble (Reduce)`)

const avengers = [ {hero: 'Iron Man', budget: 5000}, {hero: 'SuperMan', budget: 3000}, {hero: 'Hulk', budget: 2000} ]


const fund = avengers.reduce((currentNum, avenger) => {
    return avenger.budget + currentNum 
},0)

console.log(`Total budget: ${fund}`)

// Task 4 
console.log(`The Lost Treasure Map`); 

const moves =['left', 'right', 'forward'];

const pirateMap = moves.map(move => `Move ` + move)
console.log(pirateMap)

// Task 5 

console.log(`The Jedi Archives`)

const jedi = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin']; 

const findYoda = jedi.find(jediName => jediName === 'Yoda');

if(findYoda){
    console.log(`Yay, Master found!`)
} else {
    console.log(`Upsie, Master not found!`)
}

// Task 6 
console.log(`The One Ring Inventory`)

const inventory = [];

const addItem = inventory.push('Lembas Bread', 'Ring')
console.log(inventory);
const removeItem = inventory.pop()
console.log(inventory);

// Task 7 
console.log(`Spider-Man’s Web of Crime`);

const locations = ['Times Square', 'Central Park', 'Brooklyn'];
const sortedLocations = locations.sort()

console.log(sortedLocations)


// Task 8 
console.log(`The Time Stone (Array Slicing)`)

const events = [ 'Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening' ];

const lastThree = events.slice(2)

console.log(lastThree)

// Task 9
console.log(`Matrix Reloaded: Data Processing`)

const numbb = [3, 7, 15, 22]; 

const binary = numbb.map(numb => numb.toString(2)); 
console.log(binary);

const reduceNumb = numbb.reduce((a, b) => {
        if(a > b){
            return a
        } else {
            return b; 
        }
}, numbb[0])

console.log(reduceNumb)

// Task 10 
console.log(`Cyberpunk City Data Processing`);

const cyberNum = [99, 135, 76, 200, 150, 89]; 

// 1. 
const hexademical = cyberNum.map(num => num.toString(16));
console.log(hexademical);
// 2.
const filteredNums = cyberNum.filter(num => num > 100);
console.log(filteredNums);
// 3.
const findNums = cyberNum.find(num => num > 150);
console.log(findNums)
// 4. 
const reduceNums = cyberNum.reduce((num, current) => {return num + current}, 0)
console.log(reduceNums);
// 5. 
const spliceNums = cyberNum.splice(num => num < 80);
console.log(spliceNums)


// Extra Tasks 

// 1. Double the Numbers
console.log(`Double the Numbers`)

const extraNumbers = [1,2,3,4,5,6]

const doubleNums = extraNumbers.map(num => num * 2)
console.log(doubleNums)

// 2. Filter Even Numbers
console.log(`Filter Even Numbers`)

const evenNumbers = extraNumbers.filter(num => num % 2)
console.log(evenNumbers)

// 3. Sum of All Numbers

console.log(`Sum of All Numbers`)

const sumNumb = extraNumbers.reduce((acc, num) => acc + num, 0)
console.log(sumNumb)

// 4. Find the First Negative Number 
console.log(`Find the First Negative Number `)
const extraNums = [1,2,-3,4,-5]
const firstNegative = extraNums.find(num => num < 0)
console.log(firstNegative)

// 5. Check for Any Negatives
console.log(`Check for Any Negatives`)
const allNegative = extraNums.some(num => num < 0);
console.log(allNegative)

// 6. Are All Numbers Positive?
console.log(`Are All Numbers Positive?`)
const isAllPositive = extraNums.every(num => num > 0);
console.log(isAllPositive)

// 7. Print Each Name
console.log(`Print Each Name`)
const extraNames = ["kata", "paskunji", "keti"]
extraNames.forEach(name => console.log(name))

// 8. Capitalize First Letter of Each Word
console.log(`Capitalize First Letter of Each Word`);

const capitizeName = extraNames.map(name => {
    return name.at(0).toUpperCase() + name.slice(1)
})
console.log(capitizeName); 

// 9. Filter Users by Age
console.log(`Filter Users by Age`)
const user = [{name : "Kata", age: 27}, {name: "Lizazu", age: 3}, {name: "Tornike", age: 30}]
const ageControl = user.filter(person => person.age > 18);
console.log(ageControl)

// 10. Sort Numbers Ascending/Descending
console.log(`Sort Numbers Ascending/Descending`)

const forSortNum = [12, 25, 1, 3, 35, 15]
const sortAsc = forSortNum.sort((a,b) => a-b)
console.log(sortAsc)
const sortDesc = forSortNum.sort((a,b) => b-a)
console.log(sortDesc)

// 11. Get Total Price
console.log(`Get Total Price`)
const totalPrice = forSortNum.reduce((acc, num) => acc + num, 0)
console.log(totalPrice)

// 12. Find the Longest Word

console.log(`Find the Longest Word`)
const longestName = extraNames.sort((a, b) => 
    b.length - a.length).at(0)

console.log(longestName)

const reduceLongest = extraNames.reduce((acc, name) => 
    name>acc?name:acc)

console.log(reduceLongest)

// 13. Get Usernames
console.log(`Get Usernames`)
const userInfo = [{id: 10110101010, username: "Paskunji", isactive: true}, {id: 20200020202, username: "Kata", isactive: false}]

const userNameMap = userInfo.map(name => name.username)
console.log(userNameMap)

// 14. Check if All Users Are Active
console.log(`Check if All Users Are Active`)

const isAllActive = userInfo.every(user => user.isactive === true)
console.log(isAllActive)

// 15. Group Words by First Letter
console.log(`Group Words by First Letter`)

const fruits = ['apple', 'apricot', 'banana', 'blueberry', 'cherry'];

const groupedFruits = fruits.reduce((acc, fruit) => {
    const firstLetter = fruit[0];
    if(!acc[firstLetter]){
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(fruit);
    return acc
},[])

console.log(groupedFruits);

// 16. Flatten a Nested Array
console.log(`Flatten a Nested Array`);

const nestedNums = [[1, 2], [3, 4], [5]];

const flatted = nestedNums.flat();
console.log(flatted) 

const flattened = nestedNums.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened);

// 17. Count Word Frequencies
console.log(`Count Word Frequencies`);

const countWord = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});
  
  console.log(countWord);

// 18. Find Most Expensive Product

console.log(`Find Most Expensive Product`)

const products = [{product: "Banana", price: 100}, {product: "apple", price: 20}, {product: "cherry", price: 70}]

const prices = products.sort((a,b) => b.price - a.price)
console.log(prices[0])

// 19. Remove Duplicates

console.log(`Remove Duplicates`)

const duplitcateNums = [1,2,3,3,4,5,5]

const removeDupl = duplitcateNums.filter((a,b) => {
    return duplitcateNums.indexOf(a) === b
})

console.log(removeDupl)

// 20. Create a Comma-Separated List
console.log(`Create a Comma-Separated List`);

const singleWord = ["paskunji", "kata"]

const comma = singleWord.join(",")
console.log(comma)

// 21. Nested Property Extractor
console.log("Nested Property Extractor")

const data = [
    { user: { name: 'Anna', age: 22 } },
    { user: { name: 'Ben', age: 31 } },
    { user: { name: 'Cara', age: 27 } }
  ];

const specificData  = data.map(userName => userName.user.name)
console.log(specificData)

// 22. Flatten Deeply Nested Arrays
console.log(`Flatten Deeply Nested Arrays`);

const arr = [1, [2, [3, [4]], 5]]; 
const flat = arr.flat(Infinity);
console.log(flat);

// 23. Sort by Multiple Properties
console.log("Sort by Multiple Properties")

const users = [
    { name: 'Alex', age: 30 },
    { name: 'Alex', age: 25 },
    { name: 'Bella', age: 22 }
  ];

  const nameSorting = users.sort(name => name.name);
  console.log(nameSorting)

  const ageSorting = users.sort((a,b) => a.age - b.age )

// 24. Group by Category
console.log("Group by Category");

const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Cucumber', category: 'Vegetable' },
    { name: 'Banana', category: 'Fruit' }
  ];

const groupedItems = items.reduce((acc, item) => {
    const { category, name } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(name);
    return acc;
  }, {});
  
  console.log(groupedItems);


