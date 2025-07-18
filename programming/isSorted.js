
let arr = [2,3,4,1,5,10]

let flag = true;

for(let i=1 ; i<arr.length;i++)
{
    if(arr[i-1] > arr[i])
    {
        flag = false       
        break;
    }
}

if(flag == true)
    console.log("sorted")
else
    console.log('not sorted')