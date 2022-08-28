function showsidebar_open(){
    document.getElementById('sidebar_all_hide').style.display='block'
    document.getElementById('open').style.display='none'
    document.getElementById('close').style.display='block'
    document.getElementById('sidebar_image').style.display='block'
    document.getElementById('project_page').style.position='absolute'
    document.getElementById('project_page').style.left='220px'
    document.getElementById('sidebar').style.height='550px'
    document.getElementById('sidebar').style.border='1px solid  black'
    document.getElementById('sidebar').style.overflow='scroll'
}
function showsidebar_close(){
    document.getElementById('sidebar_all_hide').style.display='none'
    document.getElementById('close').style.display='none'
    document.getElementById('open').style.display='block'
    document.getElementById('sidebar_image').style.display='none'
    document.getElementById('project_page').style.position='absolute'
    document.getElementById('project_page').style.left='50px'
    document.getElementById('sidebar').style.height='auto'
    document.getElementById('sidebar').style.overflow='auto'
    document.getElementById('sidebar').style.border='none'

}
let form =JSON.parse(localStorage.getItem('form'))||[]

function submit_form(){
    
    
    let form1={
     name:document.getElementById("name").value,
     code:document.getElementById("code").value,
     
     date:document.getElementById("date").value
    }
    form.push(form1)
    
 localStorage.setItem('form',JSON.stringify(form))
 document.getElementById('form_bar').style.display='none'
 }

 function popup(){
    document.getElementById("form_bar").style.display='block'
 }
 function popout(){
    document.getElementById('form_bar').style.display='none'
 }


 let count;
 function display(){

    var form =JSON.parse(localStorage.getItem('form'))||[];
     count=document.getElementById('count').innerText=`${form.length} members `;
    let tbody=document.querySelector('tbody');
    tbody.innerHTML=null
    form.forEach(function(e,index){
        let tr=document.createElement('tr');
        let name=document.createElement('td');
        name.innerText=e.name;
        let code=document.createElement('td');
        code.innerText=e.code;
       
        
       
        let role=document.createElement('td');
        role.innerText=e.date;
        let Client=document.createElement('td');
        Client.innerText="Active"
        let del=document.createElement('td');
        del.innerText='Delete';
        del.addEventListener("click",function(){
           deleterow(index);
        })

        del.style.backgroundColor="red";
        tr.append(name,code,role,Client,del);
        tbody.append(tr);
    })
}

display();

console.log(form)
function deleterow(index){
    document.querySelector("tbody").deleteRow(index)
    let form =JSON.parse(localStorage.getItem('form'))||[]
    form.splice(index,1)
    localStorage.setItem('form',JSON.stringify(form));  
 display();

    count=document.getElementById('count').innerText=`${form.length} members `;
}


   

 