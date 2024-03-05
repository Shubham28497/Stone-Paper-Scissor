let userScore = 0;
let compScore = 0;

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was draw, Play Again !";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You lose");
    msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice", userChoice);
  //* generate comp choice
  const compChoice = genCompChoice();
  console.log("comp choice", compChoice);

  if (userChoice === compChoice) {
    //* draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      //*scissor paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      //* rock scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //* paper rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
