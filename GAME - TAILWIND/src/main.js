let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const bgColor = "#222";
const winColor = "purple";

const resetBtn = document.getElementById("reset-btn");
const userInput = document.querySelector(".box");
const numberBox = document.querySelector(".number-box");
const checkBtn = document.getElementById("check-btn");
const scoreData = document.getElementById("score");
const highScoreData = document.getElementById("highScore");
const title = document.querySelector("h1");
const gameContainer = document.querySelector(".game-container");
const body = document.querySelector("body");

highScoreData.textContent = highScore;
checkBtn.classList.remove("disable");

function checkButton() {
  if (score === 0) {
    title.textContent = "You lost the game";
    checkBtn.classList.add("disable");
    userInput.setAttribute("disabled", "disabled");
    checkBtn.setAttribute("disabled", "disabled");
  }
  if (value < 0 || value > 20) {
    title.textContent = "Please select the correct Number!!!";
    title.style.color = "red";
  }
  if (userInput.value === "") {
    title.textContent = "Please select the Number";
    return;
  }

  const value = Number(userInput.value);

  if (value === secretNumber) {
    title.textContent = "You win!";
    numberBox.textContent = secretNumber;
    numberBox.style.fontSize = "6rem";
    if (score > highScore) {
      highScore = score;
      highScoreData.textContent = highScore;
    }
    body.style.backgroundColor = winColor;
    checkBtn.classList.add("disable");
    userInput.setAttribute("disabled", "disabled");
    checkBtn.setAttribute("disabled", "disabled");
  } else if (value < secretNumber) {
    title.textContent = "Your number is too low...";
    score--;
    scoreData.textContent = score;
  } else {
    title.textContent = "Your number is too high...";
    score--;
    scoreData.textContent = score;
  }

}

function resetButton() {
  checkBtn.classList.remove("disable");
  score = 20;
  scoreData.textContent = score;
  title.textContent = "Guess My Number!";
  numberBox.textContent = "?";
  userInput.value = "...";
  userInput.removeAttribute("disabled");
  checkBtn.removeAttribute("disabled");
  secretNumber = Math.floor(Math.random() * 20) + 1;
  body.style.backgroundColor = bgColor;
}

checkBtn.addEventListener("click", checkButton);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkButton();
  }
});

userInput.addEventListener("input", (event) => {
  const currentValue = event.target.value;

  if (currentValue.length > 2) {
    userInput.value = currentValue.slice(0, 2);
  } else {
    userInput.value = currentValue;
  }

  
});

resetBtn.addEventListener("click", resetButton);
