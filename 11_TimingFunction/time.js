


console.log("timing function in js ")


console.log("start")



let display =()=>{
    console.log("I am display function...")
}

// display()


setTimeout(display, 5000)


let x = setTimeout(()=>{
    console.log("Happy Birthday 🎂🎂🎂🎂🎂")
},4000)


clearTimeout(x)

// setInterval(()=>{
//     console.log("hi")
// },1000)



let sorry =()=>{
    console.log("I am sorry ... 🥲🥲🥲🥲🙏🙏🙏🙏🙏")
}


let interval = setInterval(sorry,1000)


clearInterval(interval)

console.log("end")