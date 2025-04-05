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