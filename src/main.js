const input = document.querySelector("input")
const guess = document.querySelector(".guess")
const checkButton = document.querySelector("button")
const chences = document.querySelector(".chances")


input.focus();

let randomNum = Math.floor(Math.random() * 100)
console.log(randomNum)