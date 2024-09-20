console.log("Hello")
//first attempt, algorithm or game logic might look like shit
let humanScore = 0
let compScore = 0
const rock = "rock"
const paper = "paper"
const scissors = "scissors"

function getCompChoice()
    {
        //i hate how math.random work...
        let min = 7
        let max = 9
        let c = Math.floor(Math.random()*(max - min + 1) + min)
        switch (c)
            {
                case 7:
                    return rock;
                case 8:
                    return paper;
                case 9:
                    return scissors;
                default:
                    return "error";
            }
    }

function getHumanChoice() 
    {
        let choice = (prompt("Enter your choice: ")).toLowerCase()
        if (choice !== null)
            {
                switch (choice)
                {
                    case rock:
                    case paper:
                    case scissors:
                        return choice
                    default:
                        console.log("get human choice func is wrong")
                }
            }
        else {return "null"}
    }

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