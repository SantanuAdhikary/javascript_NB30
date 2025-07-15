
// !  Array 

// array is linear datastructure where we can store multiple values in continuous manner.

// in javascript we can store both homogeneous and heterogeneous data in array.


let arr = [9, "hello", true , undefined , null , ()=>{}, [3,4,5]]

console.log(arr)

// !  how to know the length of array 

console.log(arr.length)

// !  how to access element from the array 

console.log(arr[1])


// !   Array Methods 


// !  1. push()

// this method is used to add any element at end of the array and it will return the length of the modified array.

let students = ["rahul","gill","pant"]

 students.push("bumrah")

console.log(students)

// ! 2. pop() 

// pop() method is used to remove the last element from the array and it will return the removed element.

let players = ["gambhir","dhoni","sachin","yuvraj"]

players.pop()  


console.log(players)


// ! 3. unshift()

// this method is used to add any element at the starting of the array and it will return the length of the modified array.

let serials = [ "vani rani", "chnadralekha"]

serials.unshift("singapena")

console.log(serials)


// !  4. shift()

// shift() method is used to remove the first element from the array and it will return the removed element.

let movies = ['leo','goat','dj']

movies.shift()

console.log(movies)


// ! 5. includes()

// it is used to check given element is present or not in the array.
// if it is present retruns true otherwise it will return false.

console.log(movies.includes("dj"))
console.log(movies.includes("leo"))


// !  6. indexOf()

// it is used to know the index of the given element.

let webSeries = ['loki','dark','breaking bad','money heist']

console.log(webSeries.indexOf('dark'))

// ! 7. concat()

// concat() method is used to combine two or more than two arrays and it will return one new array. 

let arr2 = [10,20,30]

let arr3  =[40,50,60]

let combinedArr = arr2.concat(arr3 , ["hello","hi"])

console.log(combinedArr)

// ! 8. join()

// it is used to convert any array into string.

let charArr = ['h','e','l','l','o']

console.log(charArr.join(""))

// ! 9. reverse()

// it is used to reverse the array.
// it will modify the origial array.
// it will return one array that will be in reversed order.

let arr4 =[1,2,3,4,5,6,7]

console.log(arr4.reverse())

console.log(arr4)


// ! 10 . splice()

// by using this method we can remove, add and modify the array elements.

// it can take 3 parameters (startIndex, delteCount, replacementValue)

// this method will modify the orignal array. 


let arr5 = [10,20,30,40,50,60,70]

arr5.splice(1,2)
console.log(arr5)

let arr6 = [10,20,30,40,50,60,70]

arr6.splice(1,2,500)
console.log(arr6)


let arr7 = [10,20,30,40,50,60,70]

arr7.splice(2,0,25)

console.log(arr7)