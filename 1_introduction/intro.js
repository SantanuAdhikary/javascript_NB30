
console.log(" I am external javascript");

//  how many ways we can declare variable ??

// !  1.  let 

let myName               // variable declaration

myName = "virat"        // variable initialization


 // variable declaration and initialization
let myAge = 35   

console.log(myName)
console.log(myAge)


// !  2. var 

var phNo = 9809787878;

var city

city = "chennai"

console.log(phNo)
console.log(city)


// !  in var keyword we can do re-declartion but in let keyword we can not do re-declaration.


// !  3. const 


const aadharNo = 123456789070


console.log(aadharNo)



// !    datatypes 

// ! 1. primitive 

//? i> number 

 let eid = 2112
 let salary = 10000.50

//  ! typeof 

// typeof operator is used to know the datatype of the variable.

console.log(eid)
console.log(typeof eid)

//? ii>  String

let emp1 = "rahul"
let emp2 = 'bumrah'
let emp3 = `gill`


console.log(typeof emp1)
console.log(typeof emp2)
console.log(typeof emp3)


// ? 3. boolean 

let isMarried = false 

console.log(typeof isMarried)

let hasChild = true

console.log(typeof hasChild)

// ?  4. undefined 

// any variable declared but not initialized , is called undefined.

// typeof undefined is undefined.

let empPhno

console.log(empPhno)
console.log(typeof empPhno)


// ?  5.  null 

// typeof null is object.

let empSal = null

console.log(empSal)
console.log(typeof null)

//?  6.  bigint 

let count = 2n
console.log(count)
console.log(typeof count)



// ! Non-Primitive Datatype

// ? 1. Array 


let arr = [10,"san",true,undefined, [30,40]]

console.log(arr) 

// ? 2. Function 


function display()
{
    console.log("I am display function..")

}

display()


// ?  3. object 

let student = {
    sname : "virat",
    age:10,
    location:"bangalore"
}

console.log(student)



// !  variable hoisting 


// if we are accessing any variable before its declarion, and the variable has declared by var keyword then this declaration part will be moving to the top and it will give the output as undefined. it is called variable hoisting.

// variable hoisting is possible for only var keyword not for let and const.


console.log(a)

var a = 30





if(true)
{
    let b = 20
    const c = 30 
    var d = 40
    console.log("inside if block")
    console.log(b)
    console.log(c)
    console.log(d)
}

console.log("outside if block")

// console.log(b)
// console.log(c)
console.log(d)