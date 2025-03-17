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

// გიგა ანანიძე 

//  swap;
let a = 3; 
let b = 7; 

let keepA = a;

a = b; 
b = keepA;

console.log (`A = ${a};
B = ${b}`);

// even or odd
let numb = 7; 
let evenOdd = numb % 2;

function evenOrOdd(){
  if(evenOdd == 1){
    console.log(`N = ${numb};
odd`)
  } else {
        console.log(`N = ${numb};
even`)
  }
}

evenOrOdd();

// in range

let n = 1;
let x = 3; 
let y = 7; 

let inRange = (n < y && n > x) || (n > y && n < x);

function checkRange(){
  if(inRange){
    console.log(`
N = ${n};
X = ${x};
Y = ${y};
True.`)
  } else {
    console.log(`
N = ${n};
X = ${x};
Y = ${y};
false.`)
  }
}

checkRange();

// ავთო ჩუბინიძე 

let currentHour = 22; 

let morning = currentHour >= 6 && currentHour <= 12;
let afternoon = currentHour >= 13 && currentHour <= 15;

function whatTime(){
  if(morning){
    console.log(`it's ${currentHour};
"Good Morning!"`)
  } else if(afternoon){
    console.log(`it's ${currentHour};
"Good Afternoon!"`)   
  } else {
    console.log(`it's ${currentHour};
"Good Night!"`)
  }
}

whatTime();

// თეიმურაზ კაჯაევი 

let fuelCostPerHour = 3; 
let earningsPerHour = 70; 
const additionalExpenses = 50; 

calcDailyEarning(8, 35);
function calcDailyEarning(hoursWorked, extraSpending){
  let dailyFuelCost = fuelCostPerHour * hoursWorked; 
  console.log(`Daily fuel cost is ${dailyFuelCost}USD;
fixed additional expennses are ${additionalExpenses}USD;
additional expensses are ${extraSpending}USD;
Daily total cost is ${dailyFuelCost + additionalExpenses + extraSpending}USD. `);

  let earningsDaily = earningsPerHour * hoursWorked; 
  let totalCost = dailyFuelCost + additionalExpenses + extraSpending;
  if(earningsDaily > totalCost){
    console.log(`Daily earning is ${earningsDaily}, so after costs driver left ${earningsDaily - totalCost}`);
  } else {
    console.log(`costs are higher than earnings, so driver left nothing`);
  }

}
// მელიკი
// 1 capitalize the first letter of a string

let str1 = "hello";
let capitalizedStr = str1.charAt(0).toUpperCase() + str1.slice(1);
console.log(capitalizedStr);
//  Reverse a string.
let str = "hello";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
// 

// ირაკლი ბუკულოვი

// positive numbers 

let numA = 7; 
let numB = 7;

let positiveA = numA > 0;
let positiveB = numB > 0; 

if(positiveA && positiveB){
  console.log(`both of the numbers are positive. a = ${numA}, b = ${numB}`);
} else if(positiveA || positiveB){
  console.log(`one of them is positive. a = ${numA}, b = ${numB}`);
}

// isNaN

let variable = 17; 

let isNumb = typeof variable; 
let isNumbCheck = isNumb === "number"

function isNAN(variable){
  if(isNumbCheck){
    console.log(`This is a number: ${variable}`);
  } else {
    console.log(`This is not a number: "${variable}"`);
  }
}

isNAN(variable);


// ნუკრი ჯიჯავაძე 

//  total room area 

let length = 10;
let width = 10;
let height = 2; 
let costPerMeter = 1300; 

let floor = length * width;
let ceiling = floor; 
let walls = 2 * (length * height) + 2 * (width * height); 

let room = floor + ceiling + walls; 

let totalCost = room * costPerMeter; 

console.log(`The total room Area is: ${room}m and total cost is ${totalCost}USD.`)


// ანი უგლავა 

let weightA = 57; 
let heightA = 174; 

let BMI = (weightA / (heightA*2)) * 100; 

console.log(`Your Weight is; ${weightA}kg, Height: ${heightA}cm, your BMI is: ${BMI}`);

function bmiRange(BMI){
  
  if(BMI < 18.5){
    console.log(`underweight`);
  }else if(BMI > 18.5 && BMI < 24.5) {
    console.log(`healthy range`);
  } else if(BMI > 25 && BMI < 29.9){
    console.log(`overweight`);
  } else if(BMI > 30 && BMI < 39.9){
    console.log(`obesity`);
  } else {
    console.log(`severe obesity`);
  }
}

bmiRange(BMI);


// შოთა აბაშიძე 

for(let i=0; i<=20; i++){
  if(i % 3 === 0){
    console.log("Fizz");
  } else if(i % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// ნიკოლოზ ღომიძე 
// The Transported man (Version 1.0)

const rightNum = 37; 

correctAnswer(37);
function correctAnswer(answer){

  if(answer === rightNum){
    console.log(`Congrats! Your answer ${answer} is correct.`);
  } else if(answer < rightNum){
    console.log(`Your answer ${answer} is lower the the correct number`);
  } else {
    console.log(`Your answer ${answer} is higher the the correct number`);
  }
}

// საბა ევგენიძე 

let nutHeartsCollected = true; 
let isSongDedicated = true; 

function love(){
  if(nutHeartsCollected && isSongDedicated){
    console.log(`წუნა და წრუწუნა დაქორწინდნენ, Wohoo. წუნამ თან 50 კაკალიც შეუგროვა და თან "ქალავ შენი სილამაზეც" უმღერა წრუწუნას`);
  } else if(nutHeartsCollected && !isSongDedicated){
    console.log(`არ დანებდე წუნა, ახლა სიმღერაც და ეგაა, წრუწუნა შენია`);
  } else if(!nutHeartsCollected && isSongDedicated){
    console.log(`კაკლის შეგროვებას რაღა უნდა, წუნა?!`);
  } else {
    console.log(`ეჰ წუნა, არ გყვარებია შენ წრუწუნა!`);
  }
}

love();