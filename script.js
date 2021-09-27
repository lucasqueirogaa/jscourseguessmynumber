let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const documentMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// ------------------------------

// Logic of the game

// ------------------------------
//                                btn check
// ------------------------------
let checkBtn = function () {
  let guess = Number(document.querySelector(".guess").value);
  if (guess === 0) {
    documentMessage("Please, put a number between 1-20!");
  } else if (guess < 0) {
    documentMessage("Please, put a positive number!");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      documentMessage(guess < secretNumber ? "To low...👇" : "To high...👆");
      document.querySelector(".score").textContent = score -= 1;
      // Locic of the game!
    } else {
      documentMessage("💥You Lose!!!💥");
      document.querySelector(".score").textContent = score = 0;
      document.body.style.backgroundColor = "rgb(184, 32, 32)";
    }
  } else if (guess === secretNumber) {
    documentMessage(`Correct Number!🥳`);
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".number").textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
};
// ------------------------------

document.querySelector(".check").addEventListener("click", checkBtn);
// ------------------------------
//                                again btn
// ------------------------------
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  documentMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  //document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
// ------------------------------

// ------------------------------
//                                press enter function
// ------------------------------
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkBtn();
  }
});
// ------------------------------
