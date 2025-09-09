var users = []


var count = prompt("Enter number of users to add today:")
count = Number(count)

for (let i = 0; i < count; i++) {
  var userName = prompt("Enter username" )
  var userId = prompt("Enter ID for user ")
  var balance = prompt("Enter balance for user")

  users.push({
    user: userName,
    id: userId,
    balance: balance
  });
}

console.log(users)
alert("Users added, check the console.")
var searchId =prompt ("Enter the Id you want to Update")
for(var i = 0 ; i < users.length ; i++){
    if(users[i].id==searchId){
        var newBalance=prompt("Enter the new balance")
        users[i].balance=newBalance 
        alert("Balance ubdeted ,check console .")
        break

    }else{
            console.log("Not found !")
    }
}

console.log(users)
var deletedUserById =prompt("Enter the ID you want to delete")
for( var i = 0 ; i < users.length ; i++){
    if(users[i].id == deletedUserById){
        users.splice(i , 1)
        alert("User deleted , check console .")
        break
    }
}