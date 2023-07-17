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
    else if(x=='login'){
        document.getElementById('btnArea').hidden = true;
        document.getElementById("loginArea").hidden = false;
    }
    
}

let addUserSuccess = () => {
    
    var newUserData = []
    var NewUserName = document.getElementById("userName").value;
    var newUserAge = document.getElementById("userAge").value;
    var newUserStudy = document.getElementById("userStudy").value;
    var newUserPass = document.getElementById("userPass").value

   if (NewUserName=="") {
    alert('Enter the user name you want to add!')
   }else{
    document.getElementById("btnArea").hidden = false;
   document.getElementById("addUser").hidden = true;
   document.getElementById("userName").value="";
   document.getElementById("userAge").value="";
   document.getElementById("userStudy").value="";
   document.getElementById("userPass").value="";
   alert(`SuccessFully Added this user: ${NewUserName}`)
    newUserData.push(NewUserName)
    newUserData.push(newUserAge)
    newUserData.push(newUserStudy)
    newUserData.push(newUserPass)
   

   localStorage.setItem(NewUserName , JSON.stringify(newUserData));
  
   
    }
}

// Under Code is for generating list and deleting a user



let generateUserList = () =>{

    let userLists = [];
        for (let i = 0; i < localStorage.length; i++) {
            userLists += localStorage.key(i) + "\n"
          
        }
    outputArea.innerText = ''   
    if(userLists==null)(
        outputArea.innerHTML = "There is no user in database to display"
    )
    else{
        outputArea.innerText = userLists 
        
    } 
    
}

let deleteUserSuccess = ()=>{
    let i = 1;
    let userLists = [];
        for (const key in localStorage) {
            if(localStorage.getItem(key) != null){
                userLists += i + ":" + JSON.parse(localStorage.getItem(key)) + "\n ";
                i++
            }
        }
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


let loginUserBtn = () =>{
    let loginUser = document.getElementById("loginUser")
    let loginPass = document.getElementById("loginPass")
    
    let loginBtn = document.getElementById("logInBtn")
    if (loginBtn.value=="login") {
        if (loginUser.value=="shksheikh35" && loginPass.value=="Password") {
            document.getElementById('btnArea').hidden = false;
            document.getElementById('loginArea').hidden = true;
            loginBtn.value="logOut"
            loginBtn.innerText="LogOut"
            outputArea.innerHTML="Shksheikh35 you are succesfully login"
        }else(
            outputArea.innerHTML="Wrong Id and Password"
        )
    } else {
        loginBtn.value=="login"

    }
}



