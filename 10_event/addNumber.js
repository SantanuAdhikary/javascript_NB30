

let form = document.querySelector("form")

// console.log(form)


form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let number1 = parseInt( document.getElementById("num1").value  )   
    let number2 = parseInt( document.getElementById("num2").value   )  


    console.log(number1 + number2)

    let output = document.querySelector(".output")

    output.innerHTML = ` <h1> the addition of ${number1} and ${number2} is ${number1 + number2} </h1> `


    console.log("added")
})



let select = document.querySelector("select")

// console.log(select)


select.addEventListener("change",(e)=>{

    let color = e.target.value 

    console.log(color)

    let outer = document.querySelector(".outer")

    outer.style.backgroundColor = color
})