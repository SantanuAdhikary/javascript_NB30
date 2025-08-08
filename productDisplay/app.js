
let main = document.querySelector("main")

let getData = async()=>{

    try{

        let res =  await fetch("https://fakestoreapi.com/products")
        let data =await res.json()
        // console.log(data)


       data.map((ele)=>{

           let div = document.createElement("div")
           div.classList.add("card")
           console.log(ele)

            div.innerHTML = ` 
                               <img  src= ${ele.image} >
                              <h3> Product Name : ${ele.title.slice(0,29)} . . . . </h3>
                              <h3> Price is : ${ele.price} $ </h3> 
                              <h3> Rating is : ${ele.rating.rate}</h3> `

           main.append(div)
       })

    }
    catch(err)
    {
        console.log(err)
    }
}

getData()