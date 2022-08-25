
let users=JSON.parse(localStorage.getItem("User"))||[];
console.log(users)


document.getElementById("Login").addEventListener("click",Login);


function Login(){
    event.preventDefault()

    let login_data={

        email:document.getElementById("email").value,
        password:document.getElementById("password").value,

    }

    if(login_data.email=="" || login_data.password==""){
        alert("Please fill all the details");
    }else if(isValidate(login_data.email,login_data.password)){
        localStorage.setItem("flag",JSON.stringify(true));
        window.location.href="profile.html";
    }else{
        alert("Please enter correct details");  
    }  
}


function isValidate(e,p){
    
    let x=false;
    users.forEach((ele)=> {
        if(ele.email==e && ele.password==p){
            localStorage.setItem("profile",JSON.stringify(ele));
            x=true; 
            return x;
        } 

    })
   
    return x;
}