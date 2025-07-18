

let arr = [1,2,3,3,2,4,1]

// output =>  4

let ans = 0 
for(let i=0; i<arr.length ; i++)
{
    ans = ans ^ arr[i]

}

console.log(ans)