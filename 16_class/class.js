
class Student{

     sAge;  
     sName;
     
     constructor(sAge, sNname)
     {
          this.sAge = sAge
          this.sName = sNname
     }

}


let s1 = new Student(10,"virat")
let s2 = new Student(15, "rohit")

console.log(s1.sAge)
console.log(s1.sName)