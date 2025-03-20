// Pokémon Battle – Function Basics

function compareAttack(pokemon1, attack1, pokemon2, attack2) {
  let stronger = attack1 > attack2;
  if (stronger) {
    return `1)${pokemon1} is stronger!`;
  }
  return `1) ${pokemon2} is stronger!`;
}

console.log(compareAttack("Pikachu", 55, "Charizard", 84));

// Hogwarts Spell Casting – Function Parameters

function castSpell(spell, wizard) {
  return `2) ${wizard} casts ${spell}`;
  // console.log(`2) ${wizard} casts ${spell}`);
}

// castSpell("Expelliarmus", "Hermione");
console.log(castSpell("Expelliarmus", "Hermione"));

// One Piece Bounty Calculator – Return Values

let calculateBounty = function (currentBounty, increase) {
  let total = currentBounty + increase;
  return `3) ${total}`;
};

console.log(calculateBounty(1_500_000_000, 500_000_000));

// Jedi Training – Default Parameters

function trainJedi(name, strength = 50) {
  return `4) ${name} has ${strength} power`;
}

console.log(trainJedi("Luke", 100));

// Gollum’s Precious – String Manipulation

function gollumSays(phrase) {
  return `5) ${phrase}... ${phrase}... ${phrase}...`;
}

console.log(gollumSays("My precious"));

// Super Mario Power-Up – Function Expressions

function powerUp(num) {
  num *= 2;
  return `6) ${num}`;
}

console.log(powerUp(5));

// Naruto’s Shadow Clone Jutsu – Arrow Functions

function shadowClone(count) {
  count *= 5;
  return `7) ${count} clones created!`;
}

console.log(shadowClone(10));

// 8. Sorting the Sorting Hat – Callback Functions

function sortStudent(name, callback) {
  console.log(`8) Sorting ${name} into ${callback()}`);
}

const houseArray = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

function houses() {
  const randomNum = Math.floor(Math.random() * 4);
  return houseArray[randomNum];
}

sortStudent("Harry", houses);

// Infinity Gauntlet – Function Scope

function snapFingers() {
  let stones = 6;

  function checkStones() {
    console.log(`9) Thanos has ${stones} stones. The universe trembles!`);
  }

  checkStones();
}

snapFingers();

// Time-Turner – Function Hoisting

turnBackTime();

function turnBackTime() {
  console.log(`10) Going back in time!`);
}

// Batman’s Secret Identity – Function Closures

function batman() {
  function realBatman() {
    return `11) I am Batman!`;
  }
  return realBatman();
}
let batmanId = batman();

console.log(batmanId);

// The Enchanted Mirror – Higher-Order Functions

function magicMirror(message, transformFunction) {
  return `12) The mirror says: ${transformFunction(message)}`;
}

let transformFunction = (str) => str.toUpperCase();

console.log(magicMirror("Will i be rich?", transformFunction));

