console.log("Hello")
let humanScore = 0
let compScore = 0
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

function getCompChoice()
    {
        let min = 7
        let max = 9
        let c = Math.floor(Math.random()*(max - min + 1) + min)
        switch (c)
            {
                case 7:
                    compChoice.textContent = rock;
                    return rock;
                case 8:
                    compChoice.textContent = paper;
                    return paper;
                case 9:
                    compChoice.textContent = scissors;;
                    return scissors;
                default:
                    return "error";
            }
    }

function playGame(humanChoice,compChoice) 
    {
        if (humanScore != 5 && compScore !=5)
            {

        
                function humanLose()
                        {
                            showResult.textContent = `You lose! ${compChoice} beat ${humanChoice}`
                            ++compScore
                        }
                if (humanChoice === compChoice)
                    {
                        showResult.textContent= "It's a tie!"
                    }
                else if (humanChoice === rock && compChoice === paper)
                    {
                        humanLose()
                    }
                else if (humanChoice === scissors && compChoice === rock)
                    {
                        humanLose()
                    }
                else if (humanChoice === paper && compChoice === scissors)
                    {
                        humanLose()
                    }
                else 
                    {
                        showResult.textContent = `You won! ${humanChoice} beat ${compChoice}`
                        ++humanScore
                    }

                if (humanScore == 5) 
                    {
                        showResult.textContent = 'Human Won!'
                    }
                else if (compScore == 5)
                    {
                        showResult.textContent = 'The Machine Won!'
                    }
            }
        else {}
    }

const gameBtns = document.querySelector('#game-buttons')
const playerChoice = document.querySelector('#show-player-choice')
const compChoice = document.querySelector('#show-comp-choice')
const showResult = document.querySelector('#show-game-result')
function choiceHandler (event) 
    {
        let choice = event.target;
        switch (choice.id)
            {
                case 'rock-button':
                    playerChoice.textContent = rock;  
                    playGame(rock,getCompChoice())      
                    break;
                case 'paper-button':
                    playerChoice.textContent = paper;
                    playGame(paper,getCompChoice())
                    break;
                case 'scissors-button':
                    playerChoice.textContent = scissors;
                    playGame(scissors,getCompChoice())
                    break;
            }
    }
gameBtns.addEventListener('click',choiceHandler)


/* test code
for (let i = 0; i < 10; i++) 
    {
        console.log(getCompChoice())
    }
console.log(getHumanChoice())
*/

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
/*
function playGame ()
    {
        function playRound(humanChoice,compChoice)
        {
            function humanLose()
                {
                    console.log(`You lose! ${capitalizeFirstLetter(compChoice)} beat ${capitalizeFirstLetter(humanChoice)}`)
                    ++compScore
                }
        if (humanChoice === compChoice)
            {
                console.log("Its a tie!")
            }
        else if (humanChoice === rock && compChoice === paper)
            {
                humanLose()
            }
        else if (humanChoice === scissors && compChoice === rock)
            {
                humanLose()
            }
        else if (humanChoice === paper && compChoice === scissors)
            {
                humanLose()
            }
        else 
            {
                console.log(`You won! ${capitalizeFirstLetter(humanChoice)} beat ${capitalizeFirstLetter(compChoice)}`)
                ++humanScore
            }

        }

        for (let i = 0; i < 5; ++i) 
            {
            console.log(`Round ${i+1}!`)
            const humanChoice = getHumanChoice()
            const compChoice = getCompChoice()
            playRound(humanChoice,compChoice)
            }
        if (humanScore === compScore)
            {
                console.log("TIE!")
            }
        else if (humanScore > compScore)
            {
                console.log("Congrat! You Won")
            }
        else 
            {
                console.log("The random algorithm have won!")
            }
    }
    
playGame()
*/