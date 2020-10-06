document.addEventListener("DOMContentLoaded", function() {
  // your code here

   const preform = document.getElementById('create-task-form')   
  const submitListener = preform.addEventListener('submit', function(e) {
      const value = document.getElementById("new-task-description").value
      const task = document.getElementById('list')
      const li = document.createElement('li')
      li.innerHTML = value
      task.appendChild(li)
      const button = document.createElement('BUTTON')
      const form = document.createElement('form')
      form.innerHTML =`<form action =# method="post">
      <label for="li"> Select Priority?</label>
      <select id="pri" name="pri">
        <option value="low"> Low Priority</option>
        <option value="medium"> Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <input type="submit" value ="Submit">
      </form>`
      const inputFields = document.createElement('form')
      inputFields.innerHTML = 
      li.appendChild(form)
      li.appendChild(button)
      form.addEventListener("submit", function(e){
        const formContent = document.getElementById('pri').value
        
        if (formContent === "low") {
          li.style.color = "green"
        }
        if (formContent === "medium") {
          li.style.color = "yellow"
        }
        if (formContent === "high") {
          li.style.color = "red"
        }
        e.preventDefault();
      });
      
      e.preventDefault();
      
      
      

      function addInputField() {
        const 
      }

      const buttonListener = button.addEventListener("click", function(e){
        
        
        this.parentNode.remove()
        
      });

      
      
    })
  
});




