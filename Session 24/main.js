console.log(`ჯერ ვაკეთებთ გიგას დავალებებს.`);
// 1. Batman’s Night Patro

function batmanPatrol(signalOn) {
  if (signalOn) {
    console.log(`Batman is on patrol!`);
  } else {
    console.log(`Gotham is quiet tonight`);
  }
}

batmanPatrol(true);
batmanPatrol(false);

// 2. Sorting Avengers (Truthy & Falsy Values)

function availableAvengers(avengers) {
  if (avengers) {
    return avengers.filter(Boolean);
  }
}
console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]));

// 3. Spider-Man’s Mask Check (Negation !)

function canRemoveMask(peopleAround) {
  if (peopleAround) {
    console.log(`Keep the mask on!`);
  } else {
    console.log(`Safe to remove mask!`);
  }
}

canRemoveMask(0);
canRemoveMask(3);

// 4. Naruto’s Chakra Levels (Ternary Operator)

function checkChakra(level) {
  return level > 80
    ? "Full power"
    : level >= 50
    ? "Still Fighting"
    : "Need Ramen Recharge";
}

console.log(checkChakra(90));
console.log(checkChakra(60));
console.log(checkChakra(30));

// 5. Jedi Academy: Light vs. Dark Side (Comparison & Logical Operators)

// function isJediMaster(angerLevel, wisdomLevel) {
//     if(angerLevel < 30 && wisdomLevel >70){
//         return true;
//     } else {
//         return false;
//     }
// }
function isJediMaster(angerLevel, wisdomLevel) {
  return angerLevel < 30 && wisdomLevel > 70;
}

console.log(isJediMaster(20, 80));
console.log(isJediMaster(50, 90));

// 6. One Piece Treasure Hunt (Boolean Coercion & Conditionals)

function isTreasureSpot(content) {
  return Boolean(content);
  // return !!content
}
console.log(isTreasureSpot("gold"));
console.log(isTreasureSpot(0));

// 7. Doctor Strange’s Multiverse Passcode (Coercion & Quirky Comparisons)

function strangePasscode(code1, code2) {
  //   return code1 == code2 && code1 !== code2;
  return code1 !== code2;
}
console.log(strangePasscode(null, undefined));
console.log(strangePasscode("0", 0));
console.log(strangePasscode(0, false));

// 8. Loki’s Illusions (Object Comparison & Identity)

let lokiA = { name: "Loki" };
let lokiB = { name: "Loki" };
let lokiC = lokiA;

function isSameLoki(loki1, loki2) {
  return loki1 === loki2;
}
console.log(isSameLoki(lokiA, lokiB));
console.log(isSameLoki(lokiA, lokiC));

//  9. Schrödinger’s Cat (Advanced Boolean Logic & Edge Cases)

function schrodingerCat(state1, state2) {
  return !!state1 && !!state2;
}
console.log(schrodingerCat("alive", "dead"));
console.log(schrodingerCat(10, undefined));
console.log(schrodingerCat(1, "yes"));
console.log(schrodingerCat("cat", 0));

// Lasha

console.log(`ახლა გავაკეთოთ ლაშას დავალებები`);

// 1. Coding Challenge #1

let JohnMass = 92;
let JohnHeight = 1.95;

let MarkMass = 78;
let MarkHeight = 1.69;

let john = bmi(JohnMass, JohnHeight);
let mark = bmi(MarkMass, MarkHeight);

let markHigherBMI = mark > john;

function bmi(mass, height) {
  let BMI = mass / height ** 2;
  return BMI;
}

if (markHigherBMI) {
  console.log(`Mark's BMI ${mark}  is higher than John's  ${john}`);
} else {
  console.log(`John's BMI ${john} is higher than Mark's ${mark}`);
}

// Coding Challenge #2
const minScore = 100;
let dolScore = 0;
let koaScore = 0;

winner(96, 88);

winner(108, 91);

winner(89, 110);

function winner(dolphinScore, koalaScore) {
  if (dolphinScore === koalaScore) {
    console.log("draw");
    return 0;
  }
  if (
    (dolphinScore > minScore &&
      koalaScore > minScore &&
      dolphinScore > koalaScore) ||
    (dolphinScore > minScore &&
      koalaScore < minScore &&
      dolphinScore > koalaScore)
  ) {
    console.log("Winner is Dolphin");
    dolScore++;
    return 1;
  }
  if (
    (dolphinScore > minScore &&
      koalaScore > minScore &&
      dolphinScore < koalaScore) ||
    (dolphinScore < minScore &&
      koalaScore > minScore &&
      dolphinScore < koalaScore)
  ) {
    console.log("Winner is Koala");
    koaScore++;
    return 2;
  }
  console.log("No team wins the trophy");
  return 0;
}

console.log({ dolScore, koaScore });
finalWin();

function finalWin() {
  if (dolScore === koaScore) {
    console.log(`draw: ${dolScore}-${koaScore}`);
    return;
  }
  if (dolScore > koaScore) {
    console.log(`Winner is Dolphin: ${dolScore}-${koaScore}`);
    return;
  }
  console.log(`Winner is Koa: ${dolScore}-${koaScore}`);
  return;
}

// Coding Challenge #4
const minBillValue = 50;

let tip;
let total;

function calculateTip(billValue) {
  if (minBillValue < billValue) {
    tip = (billValue * 15) / 100;
    total = billValue + tip;
    console.log(
      `The bill was ${billValue}, the tip was ${tip}, and the total value ${total}`
    );
    return;
  }
  tip = (billValue * 20) / 100;
  total = billValue + tip;
  console.log(
    `The bill was ${billValue}, the tip was ${tip}, and the total value ${total}`
  );
}

calculateTip(275);
calculateTip(40);
calculateTip(430);

// Coding Challenge #5 Dynamic Calculator

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "**":
      return a ** b;
    default:
      return "Invalid operator";
  }
}

console.log(calculate(6, 3, "*"));

// Coding Challenge #5 Rock, Paper, Scissors

function playGame(player1, player2) {
  if (player1 === player2) {
    return `It's a tie!`;
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return `Player 1 is winner`;
  } else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "scissors" && player1 === "paper") ||
    (player2 === "paper" && player1 === "rock")
  ) {
    return `Player 2 is winner!`;
  } else {
    return `Invalid move`;
  }
}

console.log(playGame("rock", "scissors"));
console.log(playGame("scissors", "scissors"));
console.log(playGame("scissors", "rock"));
console.log(playGame("fire", "scissors"));

// Coding Challenge #6 Triangle Type Detector

function triangleType(a, b, c) {
  if (a === b && b === c && b === c) {
    return "Equilateral";
  } else if (a === b || a === c || b === c) {
    return "Isosceles";
  } else if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a triangle";
  } else {
    return "Scalene";
  }
}

console.log(triangleType(3, 3, 3));
console.log(triangleType(3, 3, 5));
console.log(triangleType(3, 4, 5));
console.log(triangleType(1, 2, 3));

// Coding Challenge #7 Bank Transaction System

function processTransaction(balance, amount, transactionType) {
  if (transactionType === "withdraw" && amount <= balance) {
    return balance - amount;
  }

  if (transactionType === "withdraw" && amount > balance) {
    return "Insufficient funds";
  }

  if (transactionType === "deposit") {
    return balance + amount;
  }

  if (transactionType !== "withdraw" && transactionType !== "deposit") {
    return "Invalid transaction type";
  }
}

console.log(processTransaction(500, 200, "withdraw"));
console.log(processTransaction(500, 600, "withdraw"));
console.log(processTransaction(500, 100, "deposit"));
console.log(processTransaction(500, 50, "transfer"));

// Coding Challenge #7 Hotel Room Pricing System

function getRoomPrice(type, isWeekend, hasDiscount) {
  let price;

  if (type === "Standard") {
    price = isWeekend ? 120 : 100;
  } else if (type === "Deluxe") {
    price = isWeekend ? 180 : 150;
  } else if (type === "Suite") {
    price = isWeekend ? 250 : 200;
  }

  if (hasDiscount) {
    price *= 0.9;
  }

  return price;
}

console.log(getRoomPrice("Standard", false, false));
console.log(getRoomPrice("Deluxe", true, false));
console.log(getRoomPrice("Suite", false, true));

// STUDENTS

console.log(`ახლა მივხედოთ ჯგუფელების დავალებებს`);

// გიორგი ხილაძე deepClosure

function deepClosure() {
  let x = 10;

  function double() {
    x *= x;

    function triple() {
      x *= 3;

      function quadruple() {
        x *= 4;

        function quintuple() {
          x *= 5;

          function sextuple() {
            x *= 6;
            return x;
          }

          return sextuple();
        }

        return quintuple();
      }

      return quadruple();
    }

    return triple();
  }

  return double();
}

console.log(deepClosure());

//   The Flea and the Ant

function saveAnt(
  grass,
  milk,
  cat,
  mouse,
  pit,
  millet,
  chicken,
  crow,
  oak,
  acorn
) {
  let save =
    grass &&
    milk &&
    cat &&
    mouse &&
    pit &&
    millet &&
    chicken &&
    crow &&
    oak &&
    acorn;

  if (save) {
    console.log(`ღორი გვაძლევს ჯაგარს! რწყილი გადაარჩენს ჭიანჭველას`);
  } else {
    console.log(`სამწუხაროდ რაღაც დაგაკლდა`);
  }
}

saveAnt(true, true, true, true, true, true, true, true, true, true);

// ცოტნე

function canMultiplyMatrices(matrixA, matrixB) {}

// something from past

const balls = [
  "Yes - definitely",
  "It is decidedly so",
  "Without a doubt",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

function randomBall() {
  const randomNum = Math.floor(Math.random() * 8);
  return balls[randomNum];
}

console.log(randomBall());

// გიორგი ხილაძე - Ternary operators

function aqiQuality(aqi) {
  const index =
    aqi < 50
      ? "Good"
      : aqi < 100
      ? "Moderate"
      : aqi < 150
      ? "Unhealthy (Sensitive Groups)"
      : aqi < 200
      ? "Unhealthy"
      : aqi < 300
      ? "Very Unhealthy"
      : "Hazardous";
  return index;
}
console.log(aqiQuality(90));
