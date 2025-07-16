
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

// it can take 3 parameters (startIndex, deleteCount, replacementValue)

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


// !   HigherOrder Array Methods 


// !  1. forEach()

// forEach() is higherOrder array method , it is used for traversing the array.
// it will take one callback function where it can take 3 parameters (element, index, array)

let numbers = [10,20,30,40,50]

numbers.forEach((ele, index, array)=>{

    console.log(ele,index, array)
})


// [110,120,130,140,150]


let arr8=[]

numbers.forEach((ele)=>{

    // console.log(ele + 100)

    arr8.push(ele+100)
})

console.log(arr8)



// ! 2. map()

// map() is higherorder array method , it is used to traverse the array and we can perform any operation with all the elements. 

// it can take 3 parameters. 

// it will return one new array.


let mappedArr = numbers.map((ele,index,arr)=>{
//   console.log(ele,index,arr)

  return ele + 100
})

console.log(mappedArr)


let users = ["virat","rohit","iyer"]


let USERS = users.map((ele)=>{
     return ele.toUpperCase()
})

console.log(USERS)



// !  3. filter()

// filter() is higherorder array method it is used to traverse and check the condition. 
// if the condition is maching then it will return that element.
// it can take 3 parameters.

let nums = [5,10,15,20]


let greater =  nums.filter((ele)=>{
     return ele > 10
 })

 console.log(greater)


//  !  add all the numbers of the array 

 let sum = 0 

 nums.map((ele)=>{
    sum = sum + ele
 })

 console.log(sum)


// ! 4. reduce()

// reduce() is higherOrder array method , it is used to reducing the array into single value.
// it can take 4 parameters (acc,ele,index,arr)

let sum2 = nums.reduce((acc, ele)=>{
     return acc + ele
 },0)

 console.log(sum2)


 let multiply = nums.reduce((acc,ele)=>{
      return acc * ele
 },1)

 console.log(multiply)


//  ! 5. sort()

// this method is used to arrange the array in ascending or descending order.

// it will take two parameters.

// firstPara- secondPara = > ascending order 
// secondPara - firstPara = > descending order

let arr9 = [5,1,4,8,2,40]

let asc = arr9.sort((x,y)=>{
   return x - y
})
console.log(asc)

let dsc = arr9.sort((x,y)=> y-x )
console.log(dsc)



//! find the elements which are greater than 30 then add 100 with them. then add those numbers.

let arr10 = [10,20,30,40,50]

// output => 290

// [40,50]
// [140,150]
// 290


let f = arr10.filter((ele)=>{
    return ele > 30
})
console.log(f)

let m = f.map((ele)=>{
    return ele + 100
})
console.log(m)

let r = m.reduce((acc,ele)=>{
    return acc + ele
})
console.log(r)

let result = arr10.filter((ele) => ele > 30).map((ele)=> ele + 100).reduce((acc,ele)=> acc+ele)

console.log(result)





