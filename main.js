const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const paragraph = document.querySelector("#paragraph")
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

let text = document.getElementById("inputNumber");


btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyClick)


function keyClick(event) {
    if(event.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}


function handleTryClick(event) {
    event.preventDefault()
    const inputNumber= document.querySelector("#inputNumber")
    
   
    if (Number(inputNumber.value) == randomNumber) {
       toogleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas` 
    }
    
    if (inputNumber.value.length > 0){
        xAttempts++}
        
        inputNumber.value = ""
        console.log(xAttempts)
    }



 function handleResetClick() {
     toogleScreen()
     xAttempts = 1
     randomNumber = Math.round(Math.random() * 10)
    }
    


function toogleScreen() {
        screen1.classList.toggle("hide")
        screen2.classList.toggle("hide")   
}

function handleInput() {
    if(text.value > 10) text.value = 10;
    if(text.value < 0) text.value = 0;
  }


