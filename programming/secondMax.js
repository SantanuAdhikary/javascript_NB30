let arr = [ 3,10,4,1,7,8,5,10]

let firstMax = -Infinity
let secondMax = -Infinity

for(let i=0;i<arr.length ;i++)
{
    if(arr[i] > firstMax)
    {
        secondMax = firstMax
        firstMax = arr[i]
    }
    else if(arr[i] > secondMax && arr[i] != firstMax)
    {
        secondMax = arr[i]
    }
}

console.log(secondMax)