let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userScorePara = document.querySelector("#userscore");
let compScorePara = document.querySelector("#compscore");
let msg = document.querySelector("#msg");


let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

let playGame = (userChoice) => {
    console.log(`User Choice:${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`Computer Choice:${compChoice}`);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice ==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
