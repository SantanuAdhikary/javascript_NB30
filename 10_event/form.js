

let stuForm = document.getElementById("stuForm") 

console.log(stuForm)


stuForm.addEventListener("submit",(e)=>{

    e.preventDefault()


    let userName = document.getElementById("userName").value 

    let password = document.getElementById("userPass").value

    console.log(userName,password)

 
    document.getElementById("userName").value = ""
    document.getElementById("userPass").value =""

    alert("submitted")

})