
 
const form = document.getElementById('create-task-form')
// const button = form.children[2]
// let newTask = form.querySelector("input[name='submit']")

form.onsubmit = function newTask(e){
  e.preventDefault();
  
  let tasks = document.querySelector('#tasks')
  let taskBox = document.getElementById('new-task-description')
  let task = taskBox.value
  let deleteButton = document.createElement("button")

  // button.onclick = perviousSibling.remove()
  let taskLi = document.createElement('li')
  taskLi.innerHTML = `
  ${task}
  <button data-description=${task}, <button onclick="deleteTask()">x</button>`
  tasks.append(taskLi)
  e.target.reset()

};

function deleteTask() {
 newTask(taskLi).remove()
}



// button.addEventListener("click", function(event) {
//   event.preventDefault();
//   tasks.innerHTML = `<li>${task.innerHTML}</li>`
// }, false);




