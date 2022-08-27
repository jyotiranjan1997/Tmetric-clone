
let business_price=document.getElementById("count1"); 
let Professional_price=document.getElementById("count2");


function reload(){
     
    let count=document.getElementById("count").value;

     if(Number(count)>200){
        alert("Team size needs to be less than or equals to 200!");
        return ;
    }
        business_price.innerText=Number(count)*7;
        Professional_price.innerText=Number(count)*5;
        if(count==""){
            business_price.innerText="7";
            Professional_price.innerText="5";
        }
}
 
 