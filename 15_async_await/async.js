


let ol = document.querySelector("ol")


let getData = async ()=>{


    try{
        
         let res =  await fetch("https://fakestoreapi.com/products")
                     
          let data  =  await res.json()

          console.log(data)

          data.map((ele)=>{
            console.log(ele.title)

            let li = document.createElement("li")

            li.innerText = ele.title

            ol.append(li)
          })

    }

    catch(err)
    {
        console.log(err)
    }


}

getData()