let loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()


    let loginName = document.getElementById("loginName").value
    let loginPass = document.getElementById("loginPass").value

    console.log(loginName, loginPass)


    let userName = localStorage.getItem("userName")
    let userPass = localStorage.getItem("userPass")

    console.log(userName,userPass)


    if(loginName === userName && loginPass === userPass)
    {
        alert("login done successfully")

        open("./home.html")
    }
    else{
        alert("wrong credentials..")
    }

})