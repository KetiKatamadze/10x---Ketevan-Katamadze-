// 1. Pokémon Battle – Function Basics

function compareAttack(pokemon1, attack1, pokemon2, attack2) {
  let stronger = attack1 > attack2;
  if (stronger) {
    return `1)${pokemon1} is stronger!`;
  }
  return `1) ${pokemon2} is stronger!`;
}

console.log(compareAttack("Pikachu", 55, "Charizard", 84));

// 2. Hogwarts Spell Casting – Function Parameters

function castSpell(spell, wizard) {
  return `2) ${wizard} casts ${spell}`;
  // console.log(`2) ${wizard} casts ${spell}`);
}

// castSpell("Expelliarmus", "Hermione");
console.log(castSpell("Expelliarmus", "Hermione"));

// 3. One Piece Bounty Calculator – Return Values

let calculateBounty = function (currentBounty, increase) {
  let total = currentBounty + increase;
  return `3) ${total}`;
};

console.log(calculateBounty(1_500_000_000, 500_000_000));

// 4. Jedi Training – Default Parameters

function trainJedi(name, strength = 50) {
  return `4) ${name} has ${strength} power`;
}

console.log(trainJedi("Luke", 100));
console.log(trainJedi("Rey"));

// 5. Gollum’s Precious – String Manipulation

function gollumSays(phrase) {
  return `5) ${phrase}... ${phrase}... ${phrase}...`;
}

console.log(gollumSays("My precious"));

// 6. Super Mario Power-Up – Function Expressions

const powerUp = function (num) {
  num *= 2;
  return num;
};
console.log(`6) ${powerUp(5)}`);

// 7. Naruto’s Shadow Clone Jutsu – Arrow Functions

const shadowClone = (count) => (count *= 5);

console.log(`7) ${shadowClone(10)}`);

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

// 9. Infinity Gauntlet – Function Scope

function snapFingers() {
  let stones = 6;

  function checkStones() {
    console.log(`9) Thanos has ${stones} stones. The universe trembles!`);
  }

  checkStones();
}

snapFingers();

// 10. Time-Turner – Function Hoisting

turnBackTime();

function turnBackTime() {
  console.log(`10) Going back in time!`);
}

// 11. Batman’s Secret Identity – Function Closures

function batman() {
  function realBatman() {
    console.log("11) I am Batman!");
  }
  return realBatman;
}
const batmanId = batman();
batmanId();

// 12. The Enchanted Mirror – Higher-Order Functions

function magicMirror(message, transformFunction) {
  return `12) The mirror says: ${transformFunction(message)}`;
}

console.log(magicMirror("Will i be rich?", (str) => str.toUpperCase()));
