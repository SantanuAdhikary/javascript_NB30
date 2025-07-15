
// !  How to declare string 

let str1 = "first String"
let str2 = 'second string'
let str3 = `third string`

console.log(str1)
console.log(str2)
console.log(str3)

console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)


// !  How to know the length of the string 

console.log(str1.length)



// !   1. toUpperCase()

// this method is used to convert any string into uppercase and it will return one new string.


let myName = "santanu"

let upper = myName.toUpperCase()

console.log(myName.toUpperCase())

console.log(upper)

console.log(myName)


// ! 2. toLowerCase()

// this method is used to convert any string into lowercase and it will return one new string.

let address = "CHENNAI"

console.log(address.toLowerCase())
let lower = address.toLowerCase()
console.log(lower)

console.log(address)


// ! 3. indexOf()

// it is used to know the index of the given character from the string.
// it will take the first occurance of the given character.
// if the character is not present it will give -1 . 


console.log(address.indexOf("N"))    // 3
console.log(address.indexOf("n"))   // -1


// ! 4. lastIndexOf()

// this method will give the last occurance index number of the given character from the string.

console.log(address.lastIndexOf("N"))


// ! 5. charAt()

// it is used to know the character present in the given index.

console.log(address.charAt(3))


// ! 6. includes()

// this method is used to know whether the given string is present or not.
// if it is present it will return true otherwise it will return false.

let msg = "hello how are you"

console.log(msg.includes("hello"))

// !  7. trim()

// it is used to remove whitespaces from both the sides of the string andit will return new string.

let mobileName = "  samsung   "

console.log(mobileName)
console.log(mobileName.length)

let mobile2 = mobileName.trim()

console.log(mobile2)
console.log(mobile2.length)

console.log(mobileName)


// ! 8. split()

// this method is used to convert any string into array.

let wish = "good morning everyone"

let arr = wish.split(" ")

console.log(wish.split())     //  here only one element will be present
console.log(wish.split(""))   // character array

console.log(arr)

// ! 9.  replace()

// it is used to replace one string with another string.
// it will replace only the first occurance of the given string.

let information = "I am from bangalore"

let replacedStr = information.replace("a","@")

console.log(replacedStr)

// ! 10. replaceAll()

// it will replace all occurances of the given string.

let replace2 = information.replaceAll("a","@")
console.log(replace2)

// ! 11. concat()

// this method is used to combine two or more than two strings and it will return one new string. 

let str4 = "good afternoon"
let username = "virat"

let newStr = str4.concat(" ",username," how are you")

console.log(newStr)


// !  12. slice()

// it is used to extract one string from another string.
// it will take two parameters(startIndex, endIndex)
// it will not include the endIndex value.


let str5 = "hello how are you"

console.log(str5.slice(1,4))

console.log(str5.slice(6))

console.log(str5.slice(-3))

console.log(str5.slice(-3,-1))  // yo

console.log(str5.slice(-5,0))  


// !  13. substring()

// it is used to extract one string from another string.
// it will take two parameters(startIndex, endIndex)
// it will not include the endIndex value.

console.log(str5.substring(1,4))

console.log(str5.substring(6))

console.log(str5.substring(-3))

console.log(str5.substring(4,1))



// !   String Interpolation 


let num1 = 10 

let num2 = 20 

let add = num1 + num2

// the addition of 10 and 20 is 30 

console.log(` the addition of ${num1} and ${num2} is ${add}`)

console.log(` the subtraction of ${num1} and ${num2} is ${ 20 - 10}`)