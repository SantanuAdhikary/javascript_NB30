

// ! how to target elements 


// target by the id 


let logo =  document.getElementById("logo")

console.log(logo)


//  target by the className


let boxes = document.getElementsByClassName("box")

console.log(boxes)

let secondBox = boxes[1]
console.log(secondBox)


//  target by the tagName 

let lists = document.getElementsByTagName("li")
console.log(lists)

let contact = lists[2]
console.log(contact)



let login = document.getElementsByClassName("btn")

console.log(login[0])



//  document.querySelector()



let logo2 = document.querySelector("#logo")

console.log(logo2)

let li = document.querySelector("li")

console.log(li)


let firstBox = document.querySelector(".box")
console.log(firstBox)

let b =document.getElementsByClassName("box")

console.log(b[0])


// document.querySelectorAll()

let boxess = document.querySelectorAll(".box")

console.log(boxess)

console.log(boxess[1])


// !   innerText , innerHTML


console.log(secondBox.innerText)

console.log(secondBox.innerHTML)


let thirdBox = boxes[2]
console.log(thirdBox)

thirdBox.innerHTML = " <h2>I am box3 from js </h2><p> hello how are you </p>"



// !  how to style 

let loginBtn = document.querySelector(".btn")


console.log(loginBtn )



loginBtn.style.backgroundColor ="red"
loginBtn.style.padding = "10px"
loginBtn.style.color = "white"



// !  how to add / remove the class 

let section = document.querySelector("section")

console.log(section)


section.classList.add("con2")

console.log(section.classList)

// section.classList.remove("con2")