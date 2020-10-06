document.addEventListener("DOMContentLoaded", function(){
  // your code here
  const toDoList = {};

  toDoList.tasks = document.getElementById("new-task-description").value;

  const button = document.querySelector('form').lastElementChild
  
  button.addEventListener('click', function(){
    const newTasks = document.getElementById("tasks")
    const tasksLi = document.createElement('li')
    tasksLi.innerHTML = toDoList.tasks 
    newTasks.appendChild(tasksLi)
    console.log(tasksLi)
  });

});



// const newTasks = document.getElementById("tasks")

// function createTasks(taskInput) {
  
//   const tasksLi = document.createElement('li')
  
//   newTasks.appendChild(tasksLi)

// }





// 1. When we submit the input from form as a const
// 2. We want to have our const into the tasks id  in li form
// 3. We would have to select the div(id=list) and the ul(id=tasks)
// document.getElementById("tasks")

