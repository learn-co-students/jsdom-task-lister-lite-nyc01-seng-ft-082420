document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(e){
    let a = document.getElementById('new-task-description').value
    let ulselect = document.getElementById('tasks')
    let createli = document.createElement('li')
    let del = document.createElement('button')
    let edit = document.createElement('button')
    let prior = document.getElementById('select-priority').value
    del.innerHTML = "x";
    edit.innerHTML = "Edit";
    createli.innerHTML = a;
    createli.appendChild(del);
    createli.appendChild(edit);
    ulselect.appendChild(createli);
    switch (prior) {
      case 'high':
        createli.prior = 1
        createli.style.color = 'red'
        break;
      case 'medium':
        createli.prior = 2
        createli.style.color = 'yellow'
        break;
      case 'low':
        createli.prior = 3
        createli.style.color = 'green'
        break;
      default:
    }
    del.addEventListener('click', function(e){
      createli.remove();
    })
    edit.addEventListener('click', function(e){
      let edit = document.createElement('input')
      edit.type = 'text';
      e.target.parentNode.append(edit)
      let sub = document.createElement('button')
      sub.innerHTML = 'change'
      e.target.parentNode.append(sub)
      sub.addEventListener('click', i => {
        let a = i.target.parentNode
        a.childNodes[0].nodeValue = edit.value
        a.childNodes[3].remove();
        a.childNodes[3].remove();
        //a.textContent = edit.value
      })
    })
    form.reset();
    const arr = []
    let ul = document.getElementById('tasks')
    let lis = ul.querySelectorAll('li')
    lis.forEach((e) => {
      arr.push(e)
    })
    arr.sort((a,b) => a.prior - b.prior)
    arr.forEach( (e) => {
      ul.appendChild(e);
    })

    e.preventDefault();
  });
});
