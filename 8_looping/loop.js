
let arr = ['html','css','js','react','node','express','mongodb']


// !  for in loop 

// it will give the index

for( let i  in arr)
{
   console.log(i, arr[i]) 
}

// !  for of loop 

// it will give all the elements

for( let ele of arr)
{
    console.log(ele)
}



let ob = {
    ob_name : "pen",
    price : 20,
    color:"red"
}


for (let key in ob)
{
    console.log(key, ob[key])
}


//! for of loop is not possible in object

// for(let i of ob)
// {
//     console.log(i)
// }


// !  how to traverse array of objects 

const IndianCricketTeam = [
  {
    name: "Rohit Sharma",
    role: "Batsman (Captain)",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm offbreak"
  },
  {
    name: "Virat Kohli",
    role: "Batsman",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium"
  },
  {
    name: "Shubman Gill",
    role: "Batsman",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm offbreak"
  },
  {
    name: "KL Rahul",
    role: "Wicketkeeper-Batsman",
    battingStyle: "Right-hand bat",
    bowlingStyle: "—"
  },
  {
    name: "Rishabh Pant",
    role: "Wicketkeeper-Batsman",
    battingStyle: "Left-hand bat",
    bowlingStyle: "—"
  },
  {
    name: "Hardik Pandya",
    role: "All-rounder (Vice Captain)",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast-medium"
  },
  {
    name: "Ravindra Jadeja",
    role: "All-rounder",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm orthodox"
  },
  {
    name: "Axar Patel",
    role: "All-rounder",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm orthodox"
  },
  {
    name: "Jasprit Bumrah",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast"
  },
  {
    name: "Mohammed Siraj",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast"
  },
  {
    name: "Kuldeep Yadav",
    role: "Bowler",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm chinaman"
  },
  {
    name: "Yuzvendra Chahal",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm legbreak"
  },
  {
    name: "Sanju Samson",
    role: "Wicketkeeper-Batsman",
    battingStyle: "Right-hand bat",
    bowlingStyle: "—"
  }
];


IndianCricketTeam.map((ele)=>{
    console.log("player name is : ", ele.name.toUpperCase())
    console.log("batting style is : ", ele.battingStyle)
    console.log("-----------------------------------")
})



let addNumbers = ()=>{

    let a = parseInt( prompt("enter first number"))
    let b = parseInt( prompt("enter second number"))

    alert(a + b)
}

// addNumbers()