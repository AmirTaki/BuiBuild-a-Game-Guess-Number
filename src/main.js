const input = document.querySelector("input")
const guess = document.querySelector(".guess")
const checkButton = document.querySelector("button")
const ramainChences = document.querySelector(".chances")


input.focus();

let randomNum = Math.floor(Math.random() * 100)
chance = 10;


checkButton.addEventListener("click", (e)=> {
    chance--;
    let inputValue = input.value
    if(inputValue === randomNum){
        [guess.textContent, checkButton.disabled] = ["Congratulations", true]
    }
})