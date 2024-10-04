document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    
    let li = document.createElement('li')
    let description = document.getElementById("new-task-description").value
    let color = document.getElementById("priority").value
    li.style.color = color;

    let del = document.createElement('button');
    del.textContent = "X";
    del.addEventListener('click', (e) => {
      li.remove();
      e.target.remove()
    })
    
    let edit = document.createElement('button');
    edit.textContent = "Edit";
    edit.addEventListener('click', (e) => {
      li.textContent = '';
      let newInput = document.createElement('input')
      newInput.type = 'text'
      newInput.value = description
      li.appendChild(newInput)

      let newDate = document.createElement('input')
      newDate.type = 'date';
      newDate.value = date
      li.appendChild(newDate)

      let save = document.createElement('button')
      save.textContent = 'Save'
      save.addEventListener('click', (e) => {
        li.textContent = `${newInput.value} Due:${newDate.value}`
        li.appendChild(edit);
        li.appendChild(del)
      })
      li.appendChild(save)
      li.appendChild(del);
    })
    

    let date = document.querySelector('#date').value
    li.textContent = ` ${description} Due:${date}`

    li.appendChild(edit)
    li.appendChild(del)
    document.querySelector('#tasks').appendChild(li);
    let lists = document.querySelectorAll('#tasks li');
    let tasksArray = Array.from(lists);

    tasksArray.sort((a, b) => {
      let order = {
        "red": 1,
        "yellow": 2,
        "green": 3
      }
      return order[a.style.color] - order[b.style.color];
    });

    document.querySelector("#tasks").innerHTML = '';

    tasksArray.forEach((task) => {
      document.querySelector("#tasks").appendChild(task)
    });
    }

)});
