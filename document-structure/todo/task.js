const input = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');
let div = document.getElementById('tasks__list');

function addTask() {

    let newTask = document.createElement('div');
    newTask.className = 'task';
    div.appendChild(newTask);

    let taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.innerText = input.value;
    newTask.appendChild(taskTitle);

    let erase = document.createElement('a');
    erase.className = 'task__remove';
    erase.href = '#';
    erase.innerHTML = '&times;';
    erase.addEventListener('click', () => {
        div.removeChild(newTask);
    });
    
    newTask.appendChild(erase);
};

 
          
btn.addEventListener('click', (e) => {
        if (input.value !== '') {
            e.preventDefault();
        addTask();
    }
});

window.addEventListener('keydown', (e) => {
        if (input.value !== '' && e.key === 'Enter' && document.activeElement !== btn) {
            e.preventDefault();
        addTask();
    }
});


