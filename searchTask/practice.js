

let ol = document.querySelector("ol")

let products = []


let display =(data)=>{

    ol.innerHTML = ""

     data.map((ele)=>{
        let li = document.createElement("li")
        li.innerText = ele.title

        ol.append(li)
    })
}


let fetchData = async ()=>{

    try{

        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
    
         products = data;

         console.log(products)
    
         display(data)
    }

    catch(err)
    {
        console.log(err)
    }


}

fetchData()





let search = document.querySelector("input")

search.addEventListener("input",()=>{

    let value = document.querySelector("input").value.toLowerCase()

    console.log(value)

  let filterProduct =   products.filter((ele)=>{

        return ele.title.toLowerCase().includes(value)
    })

    console.log(filterProduct)

    display(filterProduct)
})