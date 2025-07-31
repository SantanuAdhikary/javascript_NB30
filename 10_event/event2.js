


let display =()=>{
    alert("btn clicked...")
}



let btn2 = document.querySelector(".btn2")

console.log(btn2)


btn2.addEventListener("click",()=>{

    alert("btn2 is clicked")
})



let hello1 =()=>{
    console.log("I am hello1")
}
let hello2 =()=>{
    console.log("I am hello2")
}


let cards = document.getElementsByClassName("card")

console.log(cards[1])


cards[1].addEventListener("click",()=>{
    console.log("card 2 is clicked")
})

cards[1].addEventListener("click",()=>{
    console.log("2nd time clicked")
})



cards[2].addEventListener("click",(e)=>{

    console.log(e.type)
    console.log(e.target)

    console.log("card 3 is clicked")
})


// cards[1].addEventListener("click",()=>{

//     cards[1].innerHTML = cards[0].innerHTML
//     cards[0].innerHTML =""
// })
// cards[0].addEventListener("click",()=>{

//     cards[0].innerHTML = cards[1].innerHTML
//     cards[1].innerHTML =""
// })


cards[1].addEventListener("click",()=>{

  cards[1].innerHTML =    cards[0].innerHTML

   cards[0].innerHTML = ""
})


cards[0].addEventListener("click",()=>{

    cards[0].innerHTML = cards[1].innerHTML
    cards[1].innerHTML = ""
})

//!  changing backgroud color of section 

let section = document.querySelector("section")


section.addEventListener("mouseover",()=>{

    section.style.backgroundColor = "pink   "
})
section.addEventListener("mouseleave",()=>{

    section.style.backgroundColor = "aquamarine   "
})



// ! keyboard event 


let inp1 = document.getElementById("inp1")
console.log(inp1)


inp1.addEventListener("keypress",()=>{

    console.log("key has pressed")
})


inp1.addEventListener("keyup",(e)=>{

    console.log(e.target.value)


    console.log("key up event occured")


    let output = document.querySelector(".output")

    output.innerText = e.target.value 
})