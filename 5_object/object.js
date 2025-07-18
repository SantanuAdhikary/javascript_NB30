


// !  object creation by using object literals 


let student = {

    sname : "suman",
    age : 10,
    isPlayer : false,
    skills : ['html','css','js'],
    address : {
        city:"chennai",
        pinCode : 567876
    },
    work : ()=>{
            console.log("sleep eat play")
    }
}


console.log(student)

student.work()


// ! how to access 

// objectName.key 

console.log(`student name is : ${student.sname}`)


// !  how to modify 


student.age = 15 

console.log(student)


// ! how to add 

student.phNo = 9876567689

console.log(student)



console.log(student.address.city)


// !  how to delete 


 delete student.isPlayer

 console.log(student)



//  !   Methods in Object 


// !    1. Object.keys()

// this method is used to return all the keys in the form of array.

let keys = Object.keys(student)

console.log(keys)


// !  2. Object.values()

// this method is used to return all the values in the form of array.

let values = Object.values(student)
console.log(values)


// !  3. Object.entries()


let key_value = Object.entries(student)
console.log(key_value)



// !  4. Object.freeze()

// this method is making the object frozen where we can't add or delete or modify the object.


let ob1 = {
    name:"pen",
    price:20,
    color:"red"
}

console.log("before freeze")

console.log(ob1)


Object.freeze(ob1)

console.log("after freeze")

ob1.price = 30              // modification is not possible
ob1.brand = "camlin"       // adding is not possible
delete ob1.color          // delete is not possible

console.log(ob1)


// ! 5. Object.isFrozen()

// it is used to check whether the given object is frozen or not. if it is frozen it will return true else it will return false.

console.log(Object.isFrozen(ob1))       // true
console.log(Object.isFrozen(student))  // false


// ! 6. Object.sealed()


// it is also similar to Object.freeze() method, we can't do delete or add but here we can modify.


let ob2 ={
    name:"book",
    price:300,    
}

console.log("before seal")
console.log(ob2)

console.log('after seal')

Object.seal(ob2)

delete ob2.price        // delete is not possible
ob2.chapters = 10      // adding is not possible
ob2.price = 500       // modification is possible

console.log(ob2)



// !  7. Object.isSealed()

// it is used to know whether the object is sealed or not.

console.log(Object.isSealed(ob2))


// ! 8. objectName.hasOwnProperty()

// it is used to know the key is present or not in the object.
// it will return boolean value.

console.log(ob2.hasOwnProperty('price'))
console.log(ob2.hasOwnProperty('chapters'))



// ! 9. Object.assign()

let ob3 = {
    sname:"virat",
    age : 10
}
console.log(ob3)

let ob4 ={
    location:"chennai",
    phNo:9890234567
}
console.log(ob4)

let combinedOb = Object.assign({},ob3, ob4)
console.log(combinedOb)

console.log(ob3)