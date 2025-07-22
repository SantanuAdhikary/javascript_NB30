
let arr = [1,1,0,1,0,0,1,0,1]

let i = 0 
let j = 0

while(j < arr.length)
{
    if(arr[j] ==1)
        j++;
    else{

        let t = arr[j]
        arr[j] = arr[i]
        arr[i] = t

        i++;
        j++;
    }
}

console.log(arr)


console.log(10 & 1)