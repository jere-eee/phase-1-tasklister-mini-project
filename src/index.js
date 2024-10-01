document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    
    let li = document.createElement('li')
    let description = document.getElementById("new-task-description").value
    let color = document.getElementById("priority").value
    // console.log(description)
    li.textContent = description
    li.style.color = color;

    let del = document.createElement('button');
    del.textContent = "Delete";
    del.addEventListener('click', (e) => {
      li.remove();
      e.target.remove()
    })
    

    document.querySelector('#tasks').appendChild(li);
    document.querySelector('#tasks').appendChild(del);
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
