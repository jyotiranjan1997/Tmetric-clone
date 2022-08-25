let form = document.querySelector("form")
  form.addEventListener("submit" ,formdeta)
   arr2  = JSON.parse(localStorage.getItem("task2-list")) || []
   

  function formdeta(event){
    event.preventDefault()
    let obj = {
       teamname : form.name.value,
        leadname : form.desc.value,
        membername : form.name2.value
        
    }
    arr2.push(obj)
    localStorage.setItem("task2-list",JSON.stringify(arr2) )
    location.reload()
     form.name.value = null
     form.desc.value = null
     form.name2.value = null
     


   }

//   let adddata = JSON.parse(localStorage.getItem("priority-list")) || []
  arr2.forEach(function (element,index) {
 let row = document.createElement("tr")
 let col1 = document.createElement("td")
     col1.innerText= element.teamname
 let col2 = document.createElement("td")
     col2.innerText = element.leadname
 let col3 = document.createElement("td")
     col3.innerText = element.membername
 
 
     let col4 = document.createElement("td")
     col4.innerText = "Active"
 let col6 = document.createElement("td") 
      col6.innerText = "Delete"
      col6.style.color = "red"
     col6.addEventListener("click", function(dele,element){
        dele.target.parentNode.remove()
        arr2.splice(element,1)
        localStorage.setItem("task2-list",JSON.stringify(arr2) )
     })
    
    
     
     row.append(col1,col2,col3,col4, col6)
   document.querySelector("tbody").append(row)
});