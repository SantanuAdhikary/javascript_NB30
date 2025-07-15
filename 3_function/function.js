
console.log("function in javascript")


// !   How to create Function 



// !   1.  Named Function

function  display(){

    console.log("I am display function")
}

display()
display()
display()


// !   function with parameter 

function add(a,b)
{
   
    console.log(`the addition of ${a} and ${b} is ${a+b}`)
}

add(20,30)

add(300,20)


// !  function with return 


function multiply(a,b)
{
    return a * b ; 
}

let res = multiply(10,3)
console.log(res)

console.log(multiply(40,5))



function swap(num1 , num2)
{

    console.log("berfore swapping")
    console.log(`num1 value is : ${num1}`)
    console.log(`num2 value is : ${num2}`)

    let temp = num1
    num1 = num2
    num2 = temp

    console.log("after swapping")

    console.log(`num1 value is : ${num1}`)
    console.log(`num2 value is : ${num2}`)

}

swap(30,40)



// !  2.  Annonymous  Function 

// the function does not have any name is called annonymous function.


// ! 3. function with expression 


let hello = function()
{
    console.log("hello how are you")
}

hello()


let oddEven = function(a)
{

    if(a % 2 == 0)
    {

        console.log(`${a} is a even number`)
    }
    else{
        console.log(`${a} is odd number`)
    }

}

oddEven(9)
oddEven(20)



// ! 4.  Arrow Function 


let sub = (a,b)=>
{
   return a - b
}


let res2 = sub(50,10)

console.log(res2)



// ! write a function to find the power of any number 

let pow = 1;

let power = (b,e)=>{

   for(let i=1; i<=e; i++)
   {
     pow = pow * b
   }
}

power(2,3)

console.log(pow)



// !  5.  Nested Function 


let outer = ()=>{

    console.log("I am outer function ")

     let inner =()=>{
        console.log("I am inner function")
     }

     inner()
}


outer()



// !  what is Lexical Scopping ??

// in nested function , inner function can access all the properties of the outer function but the outer function can't access the properties of the inner funciton . it is called Lexical scopping.

let parent =()=>{

    let a = 10 

    let child =()=>{

        let b = 20 

        console.log(`the value of a is ${a}`)
        console.log(`the value of b is ${b}`)
    }

    // console.log(b)

    child()
}


parent()



// !  6.  Higher Order Function  , Callback Function.

// any function that takes another function as parameter is called Higher Order Function .

// the function is sent to the higher-order-function as parameter is called callback function.


let hi =()=>{
    console.log("I am hi function ...")
}

let hello2 =(a)=>{

  console.log("I am hello function")
  a()
    
}

hello2(hi)


hello2( ()=>{
  console.log("I am callback function")
} );


// ! 7.  IIFE  (immediate invoke function expression)



(function(a,b)
{
    console.log("IIFE")
    console.log(a+b)
})(10,20)



let calculate =(q, p)=> q * p


let amount = calculate(3,400)

console.log(amount)