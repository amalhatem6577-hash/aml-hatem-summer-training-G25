// var courses =["css" ,"php","python","java","html"]
// var p =prompt("Enter the name course")
// courses.forEach((ele)=>ele==p)
// console.log("found")
// else{
//     courses.unshift(p)
//     console.log(courses)
// }



// var info =[
//     {
//         name:"Aml",
//         job: "devoloper",
//         age: 20
//     },
//     {
//         name:"Amira",
//         job: "doctor",
//         age: 22
//     },
//     {
//         name:"Mahmoud",
//         job: "Engineer",
//         age: 25
//     }
// ]
//  var index = info.findIndex((element)=> element.age == 25)
//  console.log(index)

var users = [];


var count = prompt("Enter number of users to add today:");
count = Number(count);

for (let i = 0; i < count; i++) {
  var userName = prompt("Enter username" `${i + 1}:`);
  var userId = prompt("Enter ID for user "`${i + 1}:`);
  var balance = prompt("Enter balance for user" `${i + 1}:`);

  users.push({
    user: userName,
    id: userId,
    balance: balance
  });
}

console.log(users);
alert("Users added, check the console.");