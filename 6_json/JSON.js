


// JSON (JavaScript Object Notation) is a lightweight data-interchange format 
// that is easy for humans to read and write, and easy for machines to parse and generate.  
 
//!  Advantages of JSON: - 

//? Human-Readable:

//  JSON's structure is easy for developers to understand and  write. 

//? - Lightweight: 

// JSON is a minimal format that reduces the size of the data being transmitted. 

//? - Language-Independent:

//  JSON can be used with many programming languages, 
// including JavaScript, Python, Ruby, Java, etc. 



let ob = {
    sname : "rahul",
    age : 15,
    phNo : 9012348756
}

console.log(ob)



// !  1.  JSON.stringify()

// it is used to convert any javascript object into json.
// type of json will be string.


let jsonData = JSON.stringify(ob)

console.log(jsonData)
console.log(typeof jsonData)


// ! 2. JSON.parse()


// it is used to convert any json into javascript object.

let newOb = JSON.parse(jsonData)
console.log(newOb)