
let profile_data=JSON.parse(localStorage.getItem("profile"));

appendData(profile_data);




function appendData(data){
    let container=document.getElementById("allPrfl");
container.innerHTML=null;

let h2=document.createElement("p");
h2.innerText="General";
let profile=document.createElement("span");
profile.innerText="Profile Picture"
let div4= document.createElement("div");
div4.setAttribute("id","picture");
let image=document.createElement("img");
image.src="https://www.gravatar.com/avatar/97b235a789d278227321da8ca2805cfd?s=48&d=https%3A%2F%2Fservices.tmetric.com%2Fstorage%2FContent%2FAvatars%2Fuser-v2.png"
let p=document.createElement("p");
p.innerText="User Profile picture";
div4.append(image,p);




let div1= document.createElement("div");

let name=document.createElement("span");
let input1=document.createElement("input");
input1.addEventListener("input",function(){
    changeDetails(input1.value)
});


name.innerText="Name";
input1.value=data.name;
div1.append(name,input1);
input1.addEventListener("input",function(){
    changeData(input1.value);
});


let div2= document.createElement("div");
let email=document.createElement("span");
let input2=document.createElement("input");


email.innerText="Email";
input2.value=data.email;
div2.append(email,input2);


let div3= document.createElement("div");
let language=document.createElement("span");
let input3=document.createElement("input");
language.innerText="Interface language";
input3.value="English";
div3.append(language,input3);

let para=document.createElement("p");
para.innerText="Calendars";

let div5=document.createElement("div");
div5.style.display="flex";
div5.style.gap="10px";
div5.style.padding="10px";
div5.style.marginBottom="30px";
div5.style.border="0.5px solid grey";
div5.style.borderRadius="8px";
let google=document.createElement("img");
google.src="https://app.tmetric.com/images/calendars/icon-google-calendar.svg";
let h4=document.createElement("h4");
h4.innerText="Google Calendar";
let div6=document.createElement("div");
div6.style.display="flex";
div6.style.gap="10px";
div6.style.padding="10px";
let outlook=document.createElement("img");
outlook.src="https://app.tmetric.com/images/calendars/icon-outlook.svg";
let h42=document.createElement("h4");
h42.innerText="Outlook Calendar"
div6.style.border="0.5px solid grey";
div6.style.borderRadius="8px";
div5.append(google,h4);
div6.append(outlook,h42);
container.append(h2,profile,div4,div1,div2,div3,para,div5,div6);

}


function changeData(data){
    console.log(data);

}

function changeDetails(data){
 document.getElementById("change").style.display="grid";

     
}

function logout(){
    profile_data={};
    localStorage.setItem("flag",JSON.stringify(false));
    localStorage,setItem("profile",JSON.stringify(profile_data));
    window.location.href="logout.html";
}