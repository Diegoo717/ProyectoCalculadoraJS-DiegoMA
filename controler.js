const label = document.querySelector("label")
const n0 = document.querySelector("#n0")
const n1 = document.querySelector("#n1")
const n2 = document.querySelector("#n2")
const n3 = document.querySelector("#n3")
const n4 = document.querySelector("#n4")
const n5 = document.querySelector("#n5")
const n6 = document.querySelector("#n6")
const n7 = document.querySelector("#n7")
const n8 = document.querySelector("#n8")
const n9 = document.querySelector("#n9")
const botonSumar = document.querySelector("#button-suma")
const botonRestar = document.querySelector("#button-resta")
const botonMultiplicar = document.querySelector("#button-mult")
const botonDividir = document.querySelector("#button-div")
const botonIgual = document.querySelector("#button-igual")
const buttonDeleteAll = document.querySelector("#button-AC") 

let selectedNumber = 0
let selectedOperation = ""
let result = 0

// Numbers

n1.addEventListener("click", function precionar(){
    if(selectedNumber != 0){
        selectedNumber = 1
        label.textContent += " "+selectedNumber
        if(selectedOperation == "+"){
            result += selectedNumber
        }else if(selectedOperation == "-"){
            result -= selectedNumber
        }else if(selectedOperation == "*"){
            result *= selectedNumber
        }else if(selectedOperation == "/"){
            result /= selectedNumber
        }
    }else{
        selectedNumber = 1
        result = selectedNumber
        label.textContent = selectedNumber
    }
})
n2.addEventListener("click", function precionar(){
    if(selectedNumber != 0){
        selectedNumber = 2
        label.textContent += " "+selectedNumber
        if(selectedOperation == "+"){
            result += selectedNumber
        }else if(selectedOperation == "-"){
            result -= selectedNumber
        }else if(selectedOperation == "*"){
            result *= selectedNumber
        }else if(selectedOperation == "/"){
            result /= selectedNumber
        }
    }else{
        selectedNumber = 2
        result = selectedNumber
        label.textContent = selectedNumber
    }
})
n3.addEventListener("click", function precionar(){
    if(selectedNumber != 0){
        selectedNumber = 3
        label.textContent += " "+selectedNumber
        if(selectedOperation == "+"){
            result += selectedNumber
        }else if(selectedOperation == "-"){
            result -= selectedNumber
        }else if(selectedOperation == "*"){
            result *= selectedNumber
        }else if(selectedOperation == "/"){
            result /= selectedNumber
        }
    }else{
        selectedNumber = 3
        result = selectedNumber
        label.textContent = selectedNumber
    }
})
n4.addEventListener("click", function precionar(){
    if(selectedNumber != 0){
        selectedNumber = 4
        label.textContent += " "+selectedNumber
        if(selectedOperation == "+"){
            result += selectedNumber
        }else if(selectedOperation == "-"){
            result -= selectedNumber
        }else if(selectedOperation == "*"){
            result *= selectedNumber
        }else if(selectedOperation == "/"){
            result /= selectedNumber
        }
    }else{
        selectedNumber = 4
        result = selectedNumber
        label.textContent = selectedNumber
    }
})
n5.addEventListener("click", function precionar(){
    if(selectedNumber != 0){
        selectedNumber = 5
        label.textContent += " "+selectedNumber
        if(selectedOperation == "+"){
            result += selectedNumber
        }else if(selectedOperation == "-"){
            result -= selectedNumber
        }else if(selectedOperation == "*"){
            result *= selectedNumber
        }else if(selectedOperation == "/"){
            result /= selectedNumber
        }
    }else{
        selectedNumber = 5
        result = selectedNumber
        label.textContent = selectedNumber
    }
})
n6.addEventListener("click", function precionar(){
    if(selectedNumber != 0){
        selectedNumber = 6
        label.textContent += " "+selectedNumber
        if(selectedOperation == "+"){
            result += selectedNumber
        }else if(selectedOperation == "-"){
            result -= selectedNumber
        }else if(selectedOperation == "*"){
            result *= selectedNumber
        }else if(selectedOperation == "/"){
            result /= selectedNumber
        }
    }else{
        selectedNumber = 6
        result = selectedNumber
        label.textContent = selectedNumber
    }
})
n7.addEventListener("click", function precionar(){
    if(selectedNumber != 0){
        selectedNumber = 7
        label.textContent += " "+selectedNumber
        if(selectedOperation == "+"){
            result += selectedNumber
        }else if(selectedOperation == "-"){
            result -= selectedNumber
        }else if(selectedOperation == "*"){
            result *= selectedNumber
        }else if(selectedOperation == "/"){
            result /= selectedNumber
        }
    }else{
        selectedNumber = 7
        result = selectedNumber
        label.textContent = selectedNumber
    }
})
n8.addEventListener("click", function precionar(){
    if(selectedNumber != 0){
        selectedNumber = 8
        label.textContent += " "+selectedNumber
        if(selectedOperation == "+"){
            result += selectedNumber
        }else if(selectedOperation == "-"){
            result -= selectedNumber
        }else if(selectedOperation == "*"){
            result *= selectedNumber
        }else if(selectedOperation == "/"){
            result /= selectedNumber
        }
    }else{
        selectedNumber = 8
        result = selectedNumber
        label.textContent = selectedNumber
    }
})
n9.addEventListener("click", function precionar(){
    if(selectedNumber != 0){
        selectedNumber = 9
        label.textContent += " "+selectedNumber
        if(selectedOperation == "+"){
            result += selectedNumber
        }else if(selectedOperation == "-"){
            result -= selectedNumber
        }else if(selectedOperation == "*"){
            result *= selectedNumber
        }else if(selectedOperation == "/"){
            result /= selectedNumber
        }
    }else{
        selectedNumber = 9
        result = selectedNumber
        label.textContent = selectedNumber
    }
})

// Operations

botonSumar.addEventListener("click", function sumar(){
    label.textContent += " +"
    selectedOperation = "+"
})

botonRestar.addEventListener("click", function restar(){
    label.textContent += " -"
    selectedOperation = "-"
})

botonMultiplicar.addEventListener("click", function multiplicar(){
    label.textContent += " x"
    selectedOperation = "*"
})

botonDividir.addEventListener("click", function multiplicar(){
    label.textContent += " /"
    selectedOperation = "/"
})

botonIgual.addEventListener("click", function igual(){
    label.textContent = result
    result = 0
    selectedNumber = 0
    selectedOperation = ""
})

buttonDeleteAll.addEventListener("click", function(){
    label.textContent = 0
    result = 0
    selectedNumber = 0
    selectedOperation = ""
})
