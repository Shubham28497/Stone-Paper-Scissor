let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};

const drawGame = () => {
  console.log("Game was draw");
    msg.innerText = "Game was draw";

};
const showWinner = (userWin) => {
  if (userWin) {
    console.log("You win");
    msg.innerText = "You win";
  } else {
    console.log("You lose");
    msg.innerText="You Loose"
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
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
