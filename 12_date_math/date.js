


let now = new Date()

console.log(now)

console.log("hours is ", now.getHours())
console.log("minute is ",now.getMinutes())
console.log(now.getSeconds())

console.log(now.getDate())
console.log(now.getFullYear())


console.log(now.getDay())


let dayIndex = now.getDay()

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


console.log(days[ dayIndex  ])


console.log(now.getMonth())


let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


console.log(months[now.getMonth()])


console.log(now.toDateString())
console.log(now.toLocaleTimeString())
console.log(now.toLocaleDateString())



let showTime = ()=>{

    let now = new Date()

    let time = document.querySelector(".time")
    
    // console.log(time)
    
    let t = now.toLocaleTimeString()

    time.innerHTML = `<h1> ${t}</h1>`
}


showTime()

setInterval(showTime,1000)




// !   Math Object 


console.log(Math.sqrt(16))  
console.log(Math.pow(5,2))

console.log(Math.ceil(9.6))
console.log(Math.ceil(9.2))

console.log(Math.floor(9.3))
console.log(Math.floor(9.9))


console.log(Math.round(9.6))
console.log(Math.round(9.4))


console.log(Math.min(2,3,4))
console.log(Math.max(2,3,4))


console.log(Math.floor( Math.random() * 100))