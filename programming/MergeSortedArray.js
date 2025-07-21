let a = [ 1,3,5,7,9]
let b =[2,4,6 ]


let i = 0 
let j = 0

let c = []

while(i<a.length && j<b.length)
{
    if(a[i] < b[j])
    {
        c.push(a[i])
        i++
    }
    else{
        c.push(b[j])
        j++;
    }
}



while(i<a.length)
{
    c.push(a[i])
    i++
}


while(j< b.length)
{
    c.push(b[j])
    j++
}
console.log(c)


