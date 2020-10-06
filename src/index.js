document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(e){
    let a = document.getElementById('new-task-description').value
    let ulselect = document.getElementById('tasks')
    let createli = document.createElement('li')
    let del = document.createElement('button')
    let prior = document.getElementById('select-priority').value
    del.innerHTML = "x";
    createli.innerHTML = a;
    createli.appendChild(del);
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
