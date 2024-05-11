var addtask = document.getElementById('addtask')
var taskinput = document.getElementById('taskinput')
var tasklist = document.getElementById('tasklist')
var deletetasks = document.getElementById('deletetasks')

addtask.addEventListener('click', ()=>{
if (taskinput.value.trim() !== '') {

     // creating new task li  via js 
    var newtask = document.createElement('li')
    newtask.textContent = taskinput.value
    tasklist.appendChild(newtask)
    // task action box creation with js 
    var taskactions = document.createElement('div')
    newtask.appendChild(taskactions)

// styling newtask via js 
newtask.style.display= "flex"
newtask.style.justifyContent = "space-between"
newtask.style.alignItems = "center"




    // creating deletesingletask button via js 
    var deletesingletask = document.createElement('button')
    taskactions.appendChild(deletesingletask)


//    styling of deletesingletask via js 
deletesingletask.textContent = 'X'
deletesingletask.style.borderRadius = "100%"
deletesingletask.style.border = "2px solid black"
deletesingletask.style.width = "40px"
deletesingletask.style.marginRight = "5px"

// deleteing task via js 
    deletesingletask.addEventListener('click', ()=>{
        tasklist.removeChild(newtask)
    })
    
    // creating taskdone button via js 
var taskdone = document.createElement('button')
taskdone.textContent= "&#10004;"
taskactions.appendChild(taskdone)

//    styling of deletesingletask via js 
taskdone.innerHTML= '&#10004;' 
taskdone.style.borderRadius = "100%"
taskdone.style.border = "2px solid black"
taskdone.style.width = "40px"

// marking as done via js 
taskdone.addEventListener('click', ()=>{
    newtask.style.textDecoration = "line-through"
    newtask.style.opacity ="0.7"
})



   
    taskinput.value = '' 
}
})

deletetasks.addEventListener('click', ()=>{
    tasklist.innerHTML = ""
    
})