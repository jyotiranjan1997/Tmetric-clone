
let users=JSON.parse(localStorage.getItem("User")) || [];

let sum=0;
document.getElementById("Signup").addEventListener("click",Signup);
document.getElementById("checkbox").addEventListener("click",function(){

   let val=document.getElementById("checkbox").value;
    if(val){
        sum+=1;
    }
    console.log(sum)
})
function Signup(){
    event.preventDefault();
    let personal_data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }

    if(personal_data.name=="" || personal_data.email=="" || personal_data.password=="" ){
        alert("Please fill all the Details");
    }else if(personal_data.email.includes("@",".")){
        if(personal_data.password.length>7){
            if(sum%2!=0){
                if( isValidate(personal_data.email)){
                    alert("User details already exist");
                    window.location.href="";
                }else{
                    alert("Succesfully Signup");
                    users.push(personal_data);
                    localStorage.setItem("User",JSON.stringify(users));
                    
                   window.location.href="";
                }
            }else{
                alert("Please check the terms & condition")
            }
            
        }else{
            document.getElementById("alert").style.display="grid";
            document.getElementById("password").style.border="0.2px solid red";
        }
        
    }else{
        document.getElementById("alert2").style.display="grid";
        document.getElementById("email").style.border="0.2px solid red";
       
        
    }
}

function isValidate(data){
    let x=false;
    users.forEach((ele) => {
        if(ele.email==data){
            x=true;
            return x;
        }
       
    })
    return x;
}

document.getElementById("email").addEventListener("input",function(){
    let value=document.getElementById("email").value
    
    if(value.includes("@",".")){
        document.getElementById("alert2").style.display="none";
        document.getElementById("email").style.border="0.2px solid grey"; 
    }else{
        
    }
});


document.getElementById("password").addEventListener("input",function(){
    let value=document.getElementById("password").value;
    console.log("kk")
    if(value.length>7){
        document.getElementById("alert").style.display="none";
        document.getElementById("password").style.border="0.2px solid grey"; 
    }else{
        
    }
})