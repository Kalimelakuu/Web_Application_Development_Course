let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const userGuess = Number(guessField.value);
  console.log(userGuess);
  console.log(userGuess);
  if (guessCount === 1) {
    guesses.textContent = "Previous gueses";
  }
  guessCount.textContent += `${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congradulation! You got the Number";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!Game Over";

    lowOrHi.textContent = "";
    setGameOver();
  } else {
    guesses.textContent += " - " +  userGuess;
    guesses.style.backgroundColor = "light-grey";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last Guess it too Low";
    } else {
      lowOrHi.textContent = "Last Guess it too High";
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
}
