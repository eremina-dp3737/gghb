const firstinput = document.getElementById("firstinput")
const secondinput = document.getElementById("secondinput")
const thirdinput = document.getElementById("thirdinput")
const button = document.getElementById("button")
const result = document.querySelector(".result")

button.addEventListener('click', () => {
    const first = firstinput.value 
    const second = secondinput.value
    const third = thirdinput.value
    
    if (second === "+") {
        result.innerHTML = Number(first) + Number(third)
    } else if (second === "-") {
        result.innerHTML = Number(first) - Number(third)
    } else if (second === "*") {
        result.innerHTML = Number(first) * Number(third)
    } else if (second === "/") {
        result.innerHTML = Number(first) / Number(third)
    } else {
        result.innerHTML = "Нет такого действия"
    }


})