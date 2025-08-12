
let appendNumber =(num)=>{
    document.getElementById("inp1").value += num;
    console.log("clicked")
}

let result = ()=>{

    let value = document.getElementById("inp1").value  
    document.getElementById("inp1").value =  eval(value)
}

let clearScreen =()=>{
    document.getElementById("inp1").value = ""
}

let backspace =()=>{
    let value = document.getElementById("inp1").value 
    document.getElementById("inp1").value = value.slice(0,-1)

}