// The Power of Variables and Operators

let gandalfPower = null;
let dumbledorePower = null;

gandalfPower = 12;
dumbledorePower = 20;

let stronger = gandalfPower > dumbledorePower;

function winner() {
  if (stronger) {
    console.log(
      `1) Gandalf the Grey's power is: ${gandalfPower}, Dumbledore's: ${dumbledorePower}. Winner is: Gandalf the Grey.`
    );
  } else {
    console.log(
      `1) Gandalf the Grey's power is: ${gandalfPower}, Dumbledore's: ${dumbledorePower}. Winner is: Dumbledore.`
    );
  }
}

winner();

// The Treasure Chest of Data Types

let coin = 20;
let map = "trust the intuition";
let amulet = true;

console.log(typeof coin);
console.log(typeof map);
console.log(typeof amulet);

map = 599;
console.log(typeof map);

// The Potion Shop’s Price Calculator

const minCoin = 50;
let discount = 20;

let healthPotion = 15;
let manaPotion = 10;

let healthQuantity = 3;
let manaQuantity = 2;

let total = healthPotion * healthQuantity + manaPotion * manaQuantity;

calculateBill(healthPotion, manaPotion, healthQuantity, manaQuantity);

function calculateBill(healthPotion, manaPotion, healthQuantity, manaQuantity) {
  if (total < minCoin) {
    total = healthPotion * healthQuantity + manaPotion * manaQuantity;
    console.log(`3) Your current bill is: ${total} USD`);
  } else {
    console.log(`3) Your current bill is: ${total}`);
    total -= (total * discount) / 100;
    console.log(`3) You got a DISCOUNT: 20%. 
now the Total is: ${total} USD`);
  }
}

// The Brave Knight’s Inventory

let power = 500;
let armor = "Hrash";
let shield = false;

ready(power, armor, shield);

function ready(power, armor, shield) {
  if (shield) {
    console.log(`4) Sir Debugalot is ready for quest.
Power: ${power},
Armor name: ${armor},
Shield: Yes`);
  } else {
    console.log(`4) Sir Debugalot isn't ready for quest.
Power: ${power},
Armor name: ${armor},
Shield: No`);
  }
}

// The Bakery's Daily Earnings

let breadPrice = 2;
let cakePrice = 5;

let breadQuantity = 17;
let cakeQuantity = 20;

let dailySales = breadPrice * breadQuantity + cakePrice * cakeQuantity;

console.log(`5) Bakery's earnings for the day is: ${dailySales} USD`);

// The Space Mission’s Fuel Check

const fuelCapacity = 1000;
const minFuel = (fuelCapacity * 80) / 100;

launchStatus(600);

function launchStatus(currentFuel) {
  let enoughFuel = currentFuel > minFuel;
  if (enoughFuel) {
    console.log(`6) The spaceship is ready for launch.
Current fuel is: ${currentFuel}L`);
  } else {
    console.log(`6) The spaceship is not ready for launch. It needs to be refueled.
Current fuel is: ${currentFuel}L`);
  }
}

// The Time Traveler’s Stopwatch (Updated)

let currentYear = 2025;
let jump = 50;

let newYear = currentYear + jump;

newDate();

function newDate() {
  console.log(`7) The new year is - ${newYear}`);
}

// The Wizard’s Spell Strength Test

let expelliarmus = 800;

let lumos = 700;

let wingardiumLeviosa = 800;

strongestSpell();
function strongestSpell() {
  if (expelliarmus > lumos && expelliarmus > wingardiumLeviosa) {
    console.log(`8) Strongest spell is Expelliarmus which has ${expelliarmus}`);
  } else if (lumos > expelliarmus && lumos > wingardiumLeviosa) {
    console.log(`8) Strongest spell is Lumos which has ${lumos}`);
  } else if (wingardiumLeviosa > expelliarmus && wingardiumLeviosa > lumos) {
    console.log(`8) Strongest spell is let Wingardium Leviosa; 
 which has ${wingardiumLeviosa}`);
  } else if (expelliarmus === lumos) {
    console.log(`8) None of them is strongest`);
  } else if (lumos === expelliarmus) {
    console.log(`8) None of them is strongest`);
  } else if (
    wingardiumLeviosa === expelliarmus ||
    wingardiumLeviosa === lumos
  ) {
    console.log(`8) None of them is strongest`);
  }
}

// The Haunted House Mystery

let kitchenHasGhost = false;
let livingRoomHasGhost = false;

let houseIsSafe = !kitchenHasGhost && !livingRoomHasGhost;

function houseIsClear() {
  if (houseIsSafe) {
    console.log(
      "9) The house is safe! No ghosts in the Kitchen or Living Room."
    );
  } else {
    console.log("9) Danger! The house is NOT safe. Ghosts detected!");
  }
}
houseIsClear();

// The Robot’s Battery Check

let battery = 20;
const minBattery = 30;

let enoughBattery = battery > minBattery;

batteryLevel(battery);
function batteryLevel(battery) {
  if (enoughBattery) {
    console.log(`10) Battery Power: ${battery}; 
Bolt is ready to complete tasks`);
  } else {
    console.log(`10) Low Battery;
Battery Power: ${battery}; 
Bolt isn't ready to complete tasks`);
  }
}

// The Dragon’s Health Meter

let dragonHealth = 100;
let knightAttackDamage = 25;

dragonHealth -= knightAttackDamage;

console.log(`11) Dragon's Health After Attack:${dragonHealth}`);

dragonHealth -= knightAttackDamage;

console.log(`11) Dragon's Health After Attack:${dragonHealth}`);

dragonHealth -= knightAttackDamage;

console.log(`11) Dragon's Health After Attack:${dragonHealth}`);

dragonHealth -= knightAttackDamage;

if (dragonHealth <= 0) {
  console.log(`11) Dragon's Health After Attack:${dragonHealth}; 
War is over; 
Dragon is Dead;`);
}

// The Speeding Race Car

const speedLimit = 50;

let carSpeed = 30;
carSpeed += 25;
let allowedLimit = carSpeed > speedLimit;
// let speedIncrease = carSpeed + 25;

function okaymsg() {
  if (allowedLimit) {
    console.log(`12) Current Speed: ${carSpeed}mph`);
    console.log(`12) Speed Warning: You are going too fast! `);
  } else {
    console.log(`12) Current Speed: ${carSpeed}mph`);
    console.log(`12) Speed is okay.`);
  }
}

okaymsg();

// The Superhero Strength Test

let heroStrength = 101;
let villainStrength = 90;

let stalemate = heroStrength === villainStrength;
let heroVictory = (heroStrength - villainStrength) > 10;
let villainVictory = (villainStrength - heroStrength ) > 10;

function winnerIs(heroStrength, villainStrength) {
  if (stalemate) {
    console.log(`13) It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.
Valiant: ${heroStrength}
Malakor: ${villainStrength}`);
  } else if (heroStrength > villainStrength) {
    if (heroVictory) {
      console.log(`13) Valiant triumphs decisively! Malakor is utterly outmatched!
Valiant: ${heroStrength}
Malakor: ${villainStrength}`);
    } else {
      console.log(`13) Valiant barely edges out! A close call victory against Malakor!
Valiant: ${heroStrength}
Malakor: ${villainStrength}`);
    }
  } else {
    if (villainVictory) {
      console.log(`13)Malakor's power is overwhelming! Valiant is soundly defeated!
Valiant: ${heroStrength}
Malakor: ${villainStrength}`);
    } else {
      console.log(`13) Malakor narrowly prevails! A hard-fought win over Valiant!
Valiant: ${heroStrength}
Malakor: ${villainStrength}`);
    }
  }
}

winnerIs(heroStrength, villainStrength);


// Exercise 14: The Tricky Treasure Hunt

let hasTreasureMap = true; 
let foundAncientKey = false; 
let solvedRiddleScroll = true; 
let hasCompass = true; 
let isFullMoon = false; 

let canFindTreasure = hasTreasureMap && (foundAncientKey || (solvedRiddleScroll && hasCompass));


if(canFindTreasure) {
  console.log("14) Success! Alex can find the legendary treasure!");
} else {
  console.log("14) Alas, Alex is missing crucial clues and cannot find the treasure yet.")
}


// Exercise 15: The Ice Cream Shop’s Daily Sales with Volume Discount

let cone = 4; 
let sundae = 8; 

let conesSoldToday = 10; 
let sundaesSoldToday = 20; 


let coneSales = cone * conesSoldToday;
let sundaeSales = sundae * sundaesSoldToday; 

let totalSales = coneSales + sundaeSales; 

let discountScoop = totalSales >= 1000; 

function totalEarning(){
  if(discountScoop){
    console.log(`15) Total earnings before discount are ${totalSales}USD`)
    console.log(`15) Volume Discount Applied: Yes`);
    totalSales *= 0.95;
    console.log(`15) After discount, total earning are ${totalSales}USD`);
  } else {
    console.log(`15) Volume Discount Applied: No`);
    console.log(`15) Daily earnings are ${totalSales}USD`);
  }
}

totalEarning();


// Exercise 16: Music Band Concert Profit Check 

let ticketPrice = 20;
let ticketsSold = 500; 
let concertCosts = 8000;

let totalearningConc = ticketPrice * ticketsSold;
let profit = totalearningConc > concertCosts; 

function profitCheck(){
  if(profit){
    console.log(`16) Concert Profit: ${totalearningConc}USD. Great success!`)
  } else {
    console.log(`16) Concert did not cover costs. Earnings: ${totalearningConc}USD, Costs: ${concertCosts}USD.`)
  }
}
profitCheck();


// ფასკუნჯი 

const distance = 20000; 
let speed = 500; 

let paskunjiSpeed = speed;
let dragonSpeed = speed; 

let paskuGirl = true; 
let dragonBoy = false;

let paskunjiTime; 
let dragonTime;

function yoda(){
  if(paskuGirl && dragonBoy){
    paskunjiSpeed *= 2;
    paskunjiTime = distance / paskunjiSpeed;
    dragonSpeed *= 2
    dragonTime = distance / dragonSpeed;
    console.log(`Paskunji ${paskunjiTime}; Dragon ${dragonTime};`);
  } else if(paskuGirl && !dragonBoy){
    paskunjiSpeed *= 2;
    paskunjiTime = distance / paskunjiSpeed;
    dragonTime = distance / dragonSpeed;
    console.log(`Paskunji ${paskunjiTime}; Dragon ${dragonTime};`);
  } else if(!paskuGirl && dragonBoy){
    paskunjiTime = distance / paskunjiSpeed;
    dragonSpeed *= 2
    dragonTime = distance / dragonSpeed;
    console.log(`Paskunji ${paskunjiTime}; Dragon ${dragonTime};`);
  } else {
    paskunjiTime = distance / paskunjiSpeed;
    dragonTime = distance / dragonSpeed;
    console.log(`Paskunji ${paskunjiTime}; Dragon ${dragonTime};`);
  }


  if(paskunjiTime === dragonTime) {
    console.log("upss");
  } else if(paskunjiTime < dragonTime){
    console.log("Paskunji");
  } else {
    console.log("dragon");
  }
}


yoda();