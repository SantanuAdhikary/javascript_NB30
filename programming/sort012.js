
let arr = [ 2,1,0,2,1,0,0,2,1,1,0]

let i = 0 
let j = 0
let k = arr.length - 1;

while(j<=k)
{
    if(arr[j]==1)
    {
        j++;
    }
    else if(arr[j] == 0)
    {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        i++
        j++
    }
    else{
        let temp = arr[j]
        arr[j] = arr[k]
        arr[k] = temp
        k--
    }
}

console.log(arr)