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
        [guess.innerText, input.disabled] = ["Congratulations", true]
        // [checkButton.textContent, guess.style.color] = ['Replay', '#333']
        checkButton.innerText = "Replay"
        guess.style.color = "#333"

     
    } 
    else if(inputValue > randomNum && inputValue < 100){
        [guess.innerText, ramainChences.innerText] = ["You guess is high", chance]
        guess.style.color  =  "#333"
    }
    else if (inputValue < randomNum && inputValue > 0){
        [guess.innerText, ramainChences.innerText] = ["You guess in low", chance]
        guess.style.color  = "#333"
    }
})