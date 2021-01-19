let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r"){
        return "Rock";
    }
    else if(letter === "p"){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function win(user, computer){
    userScore++;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win 🔥`;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    document.getElementById(user).parentElement.classList.add("green-glow");
    setTimeout(() => document.getElementById(user).parentElement.classList.remove("green-glow"), 1000)
}

function lose(user, computer){
    compScore++;
    result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)}. You lose 😢`;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    document.getElementById(user).parentElement.classList.add("red-glow");
    setTimeout(() => document.getElementById(user).parentElement.classList.remove("red-glow"), 1000)
}

function draw(user, computer){
    result_p.innerHTML = `${convertToWord(user)} equals ${convertToWord(computer)}. Its a draw..`;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    document.getElementById(user).parentElement.classList.add("gray-glow");
    setTimeout(() => document.getElementById(user).parentElement.classList.remove("gray-glow"), 1000)
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        
    }


}


function main() {

    rock_div.addEventListener('click', function () {
        game("r");
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });

    scissor_div.addEventListener('click', function () {
        game("s");
    });
}

main();


