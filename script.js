let outputArea = document.getElementById("outputArea")

let btnArea = (x)=>{
    if (x=='addUser') {
        document.getElementById("btnArea").hidden = true;
        document.getElementById("addUser").hidden = false;
    }
    else if(x=='deleteUser'){
        document.getElementById("btnArea").hidden = true;
        document.getElementById("deleteUser").hidden = false;
    }
    
}

let addUserSuccess = () => {
    
    
    var NewUserName = document.getElementById("userName").value;

   if (NewUserName=="") {
    alert('Enter the user name you want to add!')
   }else{
    document.getElementById("btnArea").hidden = false;
   document.getElementById("addUser").hidden = true;
   document.getElementById("userName").value="";
   alert(`SuccessFully Added this user: ${NewUserName}`)

   

   localStorage.setItem(NewUserName , JSON.stringify(NewUserName));
  
   
    }
}

// Under Code is for generating list and deleting a user
let i = 1;
    let userLists = [];
        for (const key in localStorage) {
            if(localStorage.getItem(key) != null){
                userLists += i + ":" + JSON.parse(localStorage.getItem(key)) + "\n ";
                i++
            }
        }


let generateUserList = () =>{
    
      
    outputArea.innerText = ''   
    if(userLists==null)(
        outputArea.innerHTML = "There is no user in database to display"
    )
    else{
        outputArea.innerText = userLists 
        
    } 
    
}

let deleteUserSuccess = ()=>{
    let deleteUser = document.getElementById('deleteUserName')
    if (!userLists.includes(deleteUser.value)) {
        let error = "There is no user in database you entered!" + "\n" + "Please Enter a valid username to delete it."
        outputArea.innerHTML = error
        deleteUser.value = ""
    }
    else{
        for (const key in localStorage) {
            if (key == deleteUser.value) {
                localStorage.removeItem(deleteUser.value)
                outputArea.innerHTML = `User ${deleteUser.value} has been deleted from database`
                document.getElementById("btnArea").hidden = false;
                document.getElementById("deleteUser").hidden = true;
            }
        }
    }
}




