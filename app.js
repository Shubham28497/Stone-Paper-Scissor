let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};

const playGame = (userChoice) => {
  console.log("user choice", userChoice);
  //* generate comp choice
  const compChoice=genCompChoice()
  console.log("comp choice",compChoice)
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
