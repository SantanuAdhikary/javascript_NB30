

let outer = document.querySelector(".outer")

let changeBackground =(color)=>{

    outer.style.backgroundColor = color
    // alert(color)
}



let themeChange =()=>{
   
    outer.classList.toggle("dark")
}