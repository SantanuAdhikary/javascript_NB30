

let inner = document.querySelector(".inner")
let middle = document.querySelector(".middle")
let outer = document.querySelector(".outer")

inner.addEventListener("click",(e)=>{

    e.stopPropagation()
    console.log("inner box is clicked")
})

middle.addEventListener("click",(e)=>{

    e.stopPropagation()

    console.log("middle box is clicked")
})

outer.addEventListener("click",(e)=>{

    e.stopPropagation()

    console.log("outer box is clicked")
})


document.body.addEventListener("click",()=>{
    console.log("body tag is clicked")
})