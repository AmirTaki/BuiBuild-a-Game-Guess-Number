const input = document.querySelector("input")
const guess = document.querySelector(".guess")
const checkButton = document.querySelector("button")
const ramainChences = document.querySelector(".chances")


input.focus();

let randomNum = Math.floor(Math.random() * 100)
console.log(randomNum)
chance = 10;


checkButton.addEventListener("click", (e)=> {
    chance--;
    let inputValue = input.value
    if(inputValue == randomNum){
        [guess.innerText, input.disabled, checkButton.innerText, guess.style.color ] = ["Congratulations", true, "Replay", "#333"]
    } 
    else if(inputValue > randomNum && inputValue < 100){
        [guess.innerText, ramainChences.innerText] = ["Your guess is high", chance]
        guess.style.color  =  "#333"
    }
    else if (inputValue < randomNum && inputValue > 0){
        [guess.innerText, ramainChences.innerText] = ["Your guess in low", chance]
        guess.style.color  = "#333"
    }
    else {
        [guess.innerText, ramainChences.innerText] = ["Your  number is invalid", chance]
        guess.style.color  = "#De0611"   
    }
    if(chance == 0){
        [checkButton.innerText, input.disabled, inputValue, guess.innerText, guess.style.color] = ["Replay", true, "", "You lost the game", "#De0611"]

    }
    if(chance < 0){
        window.location.reload()
    }
})