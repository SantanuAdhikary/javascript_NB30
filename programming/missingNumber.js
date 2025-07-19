
let arr = [1,2,3,4,6]

let n = 6


let expectedSum = (n * (n+1))/2

// console.log(expectedSum)

let sum = 0 
for(let i = 0;i<arr.length ;i++)
{
     sum = sum + arr[i]
}

let missingNumber = expectedSum - sum 

console.log(missingNumber)


// ===============================================================

let xor1 = 0

for(let i=0;i<arr.length;i++)
{
   xor1 = xor1 ^ arr[i]
}

let xor2 = 0 

for(let i=1;i<=n;i++)
{
    xor2 = xor2 ^ i
}

console.log(xor1 ^ xor2)