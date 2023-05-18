const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById( ' users-choice' )
const resultDisplay = document.getElementById( 'results')
const possibleChoices = document.querySelector('button')
let userChoice 
let results

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
userChoice = e.target.id
userChoiceDisplay.innerHTML=userChoice
generateComputerChoice()
getResults()
}))

function generateComputerChoice(){
    const randomNumber= Math.floor(Math.random() * possibleChoices.length) +1 
    console.log(randomNumber)
     

    if (randomNumber===1){
        computerChoice='rock'
    }
    if (randomNumber===2){
        computerChoice='paper'
    }
    if (randomNumber===3){
        computerChoice='scissor'
    }

    computerChoiceDisplay.innerHTML= computerchoice
}

function getResults(){
    if(computerChoice===userChoice){
        results= 'DRAW'
    }

    if(computerChoice=== 'rock' && userChoice==="scissor"){
        results= 'you lose!'
    }

    if(computerChoice==='rock' && userChoice==="paper"){
        results='you win!'
    }

    if(computerChoice==='paper' && userChoice==="scissor"){
        results='you win!'
    }

    if (computerChoice==='paper' && userChoice==="rock"){
        results='you lose!'
    }

    if (computerChoice==='scissor'&& userChoice==="paper"){
        results='you lost!'
    }

    if (cpmputerChoice==='scissor' && userChoice==="rock"){
        results='you win!'
    }
    resultDisplay.innerHTML= results
}


