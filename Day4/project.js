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
function submit_form(){
    let form =JSON.parse(localStorage.getItem('form'))||[]
    let form1={
     name:document.getElementById("name").value,
     code:document.getElementById("code").value,
     manager:document.getElementById("manager").value,
     Client:document.getElementById("Client").value,
     Notes:document.getElementById("Notes").value,
     team:document.getElementById("team").value,
    }
    form.push(form1)
    console.log('form :>> ', form);
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
    let form =JSON.parse(localStorage.getItem('form'))||[]
     count=document.getElementById('count').innerText=`${form.length} Projects Pending`
    let tbody=document.querySelector('tbody')
    tbody.innerHTML=null
    form.forEach(function(e,index){
        
        let tr=document.createElement('tr')
        let name=document.createElement('td')
        name.innerText=e.name
        let code=document.createElement('td')
        code.innerText=e.code
        let team=document.createElement('td')
        team.innerText=e.team
        let del=document.createElement('td')
        del.innerText='Complete'
        del.addEventListener("click",function(){
           deleterow()
        })
        del.style.backgroundColor="red"
        tr.append(del,name,code,team)
        tbody.append(tr)
    })
}
 display()
function deleterow(index){
    document.querySelector("tbody").deleteRow(index)
    let form =JSON.parse(localStorage.getItem('form'))||[]
    form.splice(index,1)
    localStorage.setItem('form',JSON.stringify(form));   
    count=document.getElementById('count').innerText=`${form.length} Projects Pending`
}


 