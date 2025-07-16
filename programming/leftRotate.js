

// !  left rotate the array by 1 position

let arr = [10,20,30,40,50,60]


let copy = arr[0]

for(let i=1 ; i<arr.length ; i++)
{
    arr[i-1] = arr[i]
}

arr[arr.length-1] = copy

console.log(arr)