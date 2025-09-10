// function changeImage(){
//      var img = document.querySelector("#img")
//     //  img.src="images/4webp"
//       if(img.src.includes("images/4.webp")){
//         img.src="images/5.jpg"
        
//       }else{
//         img.src="images/4.webp"
//       }
    
// }


 

    var userForm = document.getElementById("userForm")
    var users = []
   
  userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    var user = {
      name: e.target[0].value,
      email: e.target[1].value,
    }
    users.push(user);
    showUser();
    e.target[0].value = ""
    e.target[1].value = ""
  })


  var showUser = () => {
    var tBody = document.getElementById("tableBody")
    tBody.innerHTML = ""

    users.forEach((item, i) => {
      var tr = document.createElement("tr")

      var td = document.createElement("td")
      td.innerText = item.name;

      var td2 = document.createElement("td")
      td2.innerText = item.email;

      var td3 = document.createElement("td")
    var editBtn = document.createElement("button")
      editBtn.innerText = "Edit user"
      editBtn.classList.add("btn", "btn-success", "btn-sm")
      editBtn.addEventListener("click", () => {
        var choice = prompt("Do you want to edit 'name' or 'email'?", "name")
        if (choice === "name") {
          var newName = prompt("Enter new name:", users[i].name)
          if (newName) users[i].name = newName;
        } else if (choice === "email") {
          var newEmail = prompt("Enter new email:", users[i].email)
          if (newEmail) users[i].email = newEmail;
        } else {
          alert("Invalid choice! Please type 'name' or 'email'.")
        }
        showUser()
      })

      var deleteBtn = document.createElement("button")
      deleteBtn.innerText = "Remove user"
      deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-2")
      deleteBtn.addEventListener("click", () => {
        users.splice(i, 1)
        showUser()
      })

      td3.append(editBtn)
      td3.append(deleteBtn)
      tr.append(td)
      tr.append(td2)
      tr.append(td3)
      tBody.append(tr)
    })
}




