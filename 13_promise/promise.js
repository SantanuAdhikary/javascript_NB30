



let p = new Promise((resolve , reject )=>{

    // resolve(" data is present.....")
    reject("sorry... data is not present...")

})

// console.log(p)


p.then((data)=>{
   console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally( console.log("promise is there"))

