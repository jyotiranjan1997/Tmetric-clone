let form = document.querySelector("form")
  form.addEventListener("submit" ,formdeta)
   arr  = JSON.parse(localStorage.getItem("task-list")) || []
   

  function formdeta(event){
    event.preventDefault()
    let obj = {
        name : form.name.value,
        email : form.desc.value,
        std : form.start.value,
        role : form.priority.value
    }
    arr.push(obj)
    localStorage.setItem("task-list",JSON.stringify(arr) )
    location.reload()
     form.name.value = null
     form.desc.value = null
     form.start.value = null
     form.priority.value = null


   }

  let adddata = JSON.parse(localStorage.getItem("priority-list")) || []
  arr.forEach(function (element,index) {
 let row = document.createElement("tr")
 let col1 = document.createElement("td")
     col1.innerText= element.name
 let col2 = document.createElement("td")
     col2.innerText = element.email
 let col3 = document.createElement("td")
     col3.innerText = element.std
 
 let col5 = document.createElement("td")
     col5.innerText = element.role
     let col4 = document.createElement("td")
     col4.innerText = "Active"
 let col6 = document.createElement("td") 
      col6.innerText = "Delete"
      col6.style.color = "red"
     col6.addEventListener("click", function(dele,element){
        dele.target.parentNode.remove()
        arr.splice(element,1)
        localStorage.setItem("task-list",JSON.stringify(arr) )
     })
    
    
     
     row.append(col1,col2,col3,col5,col4, col6)
   document.querySelector("tbody").append(row)
});
// function add (element,index){
//  adddata.push(element)
//  localStorage.setItem("priority-list",JSON.stringify(adddata))

// }

//   let detail = JSON.parse(localStorage.getItem("task-list")) || []

  