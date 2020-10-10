document.addEventListener("DOMContentLoaded", function(){
  // your code here

  const form = document.querySelector('#create-task-form')
  console.log(form)
  form.addEventListener('submit', function(e){
    e.preventDefault()

    const newTasks = document.getElementById("tasks")
    const tasksLi = document.createElement('li')
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'x'
    deleteBtn.classList.add("delete")
    const task = document.getElementById("new-task-description").value;
    tasksLi.innerHTML = task
    const priority = document.getElementById("priorityList").value;
    tasksLi.classList.add(priority)
    newTasks.append(tasksLi)
    tasksLi.append(deleteBtn)
    form.reset()
  });

  document.addEventListener('click', function(e){
    if (e.target.className === 'delete'){
      e.target.parentNode.remove()
    }
  })

})
